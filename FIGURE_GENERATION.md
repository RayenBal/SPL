# Figure & Table Generation Instructions (SISALv3 Project)

This document lists reproducible commands and scripts for producing the main figures and tables proposed in the manuscript `SISALv3_Q1_Manuscript.md`.

---

## Environment

- Recommend creating a virtual environment and installing required packages:

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

A minimal `requirements.txt` should include:
```
pandas
numpy
matplotlib
seaborn
scikit-learn
xgboost
joblib
tensorflow
ruptures
shap
pytest
```

---

## Data prep

1. Rebuild cleaned dataset (from SISALv3 CSVs) if not present:

```bash
python src/preprocess.py --raw_dir data/sisalv3_csv --out data/rebuilt_cleaned_data.csv
```

2. Quick verification script:

```python
import pandas as pd
df = pd.read_csv('data/rebuilt_cleaned_data.csv')
print(df.shape)
print(df.isna().sum())
```

---

## Figure 1: Data coverage map & age histogram

- Script: `src/figures/figure_1_data_coverage.py`
- Inputs: `data/rebuilt_cleaned_data.csv`
- Output: `figures/figure_1_data_coverage.png`

Key steps in script:
- Map sample site locations (latitude/longitude) colored by proxy availability
- Histogram of Age_ka_BP

---

## Figure 2: Model performance boxplots

- Script: `src/figures/figure_2_model_performance.py`
- Requires running training with cross-validation and saving fold results in `artifacts/cv_results_{model}_{target}.csv`.

Example command to run cross-validation and save per-fold R²:

```bash
python src/train.py --model xgboost --data data/rebuilt_cleaned_data.csv --target d18O_measurement --cv 5 --save_cv artifacts/cv_results_xgb_d18O.csv
```

Then the figure script reads this CSV and produces boxplots of R² across folds and targets.

---

## Figure 3: Time series + anomalies (example GS-20)

- Script: `src/figures/figure_3_gs20_timeseries.py`
- Input: `artifacts/d18O_anomalies.csv` (must contain prediction and anomaly columns)
- Steps: filter age window 72–74 ka BP, order by age descending, plot δ18O, overlay anomalies and changepoints (ruptures)

Sample code for changepoint overlay:

```python
import ruptures as rpt
signal = df_window['d18O_measurement'].values
algo = rpt.Pelt(model='l2').fit(signal)
breaks = algo.predict(pen=10)
# convert break indices to ages and plot vertical lines
```

---

## Figure 4: SHAP summary

- Script: `src/figures/figure_shap_xgb.py`
- Precompute SHAP values with the saved model:

```python
import joblib, shap
model = joblib.load('models/XGB_d18O.pkl')
X = pd.read_csv('data/features_d18O.csv')
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X)
shap.summary_plot(shap_values, X, show=False)
plt.savefig('figures/figure_shap_xgb.png', dpi=300)
```

---

## Table 1: Event-level summary & permutation p-values

Script: `src/tables/event_summary.py`
- Inputs: `artifacts/d18O_anomalies.csv` and `events.yaml` (dictionary of event windows)
- Outputs: `tables/event_summary.csv`

Permutation test pseudocode:

```python
# count_obs = number of anomalies in window
# Null: randomly permute anomaly labels but preserve local clustering using block-sampling
# Repeat N=5000 times to build distribution of counts
p_value = (sum(sim_counts >= count_obs) + 1) / (N + 1)
```

---

## Table 2: Model hyperparameters & metadata

- Collect hyperparameters and preprocessing metadata into `artifacts/metadata.json` at model export time (the XGBoost notebook already writes a `metadata.json`). Verify and consolidate fields: numeric_columns, categorical_columns, dropped_high_corr.

---

## Quick-run workflow to produce all figures/tables

1. Run preprocessing
2. Train models (save CV splits and fold predictions)
3. Run inference to get anomaly CSVs
4. Run event-analysis and permutation tests
5. Run figure scripts

I can implement these scripts and run them for you — tell me whether data are available locally or I should use Google Drive paths referenced in the notebooks.