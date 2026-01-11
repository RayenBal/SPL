# Detecting Past Climate Anomalies from Speleothem Geochemistry (SISALv3): Anomaly-Detection Pipeline and Model Evaluation

**Authors:** [Your Name], et al.

**Short title:** Speleothem anomaly detection (SISALv3)

---

## Abstract ✅

We present an end-to-end anomaly-detection platform that identifies abrupt past climate events from speleothem geochemical proxies using the SISALv3 database. Our pipeline combines robust preprocessing, supervised predictive modeling (XGBoost, Random Forest), sequence modeling (BiLSTM), changepoint detection (Ruptures), and ensemble consensus to detect point-level anomalies and validate them at the event level against canonical abrupt climate transitions (GS-20, GI-12, HS-1, Younger Dryas). We detail preprocessing, model training, hyperparameter tuning, cross-validation, permutation tests, and event-level evaluation. We also provide a reproducible codebase and a recommended set of additional analyses to strengthen statistical claims for Q1 publication.

---

## 1. Introduction 🔬

- Motivation: Speleothems record past isotopic and elemental variations (δ18O, δ13C, Mg/Ca, Sr/Ca) that reflect climate variability. Detecting abrupt climate anomalies in these archives informs debates about past rapid climate transitions and their mechanisms.
- Contribution: (1) A practical anomaly-detection pipeline that fuses supervised learning residuals with changepoint detection and model consensus; (2) a comprehensive reproducibility recipe and artifact export (models, scalers, metrics); (3) recommended validation and hypothesis tests for robust event-level inference.

---

## 2. Data & Preprocessing 🧾

**Datasets used:** SISALv3-derived CSVs (e.g., `cleaned_data.csv`, `rebuilt_cleaned_data.csv`, `EASM_speleothem_cleaned.csv`, aligned composites). The notebooks load data from Google Drive (paths like `/content/drive/MyDrive/SISALv3_Speleothem/data/`).

**Key proxies:**
- δ18O (primary focus) — used for both anomaly detection and event validation
- δ13C, Mg/Ca, Sr/Ca — auxiliary predictors in multivariate models

**Preprocessing pipeline (consolidated recommendations):**
- Drop ID columns and non-informative text fields.
- Median imputation for numeric columns, factorize/label-encode categorical (`mineralogy`, `monitoring`).
- Remove features with pairwise absolute correlation > 0.90.
- Scale numeric features with StandardScaler (persist scaler to artifact store).
- Optionally apply log1p transform to highly skewed numeric features (abs(skew) > 1).
- Create time features: Age in ka BP, Age_diff, rolling means, rate-of-change features (Δδ18O/Δt) and long-window means.

**Files and artifacts produced:**
- `models/` — saved model pickles (XGB, RF, scalers)
- `xgboost_artifacts.zip` — includes `metadata.json`, `test_metrics.json`, `cv_metrics.json`, scaler, and model pickles

---

## 3. Modeling Approaches & Training 🔧

**Algorithms used:**
- XGBoost (tree-based regression) — primary supervised predictor for proxies
- Random Forest — used for gap-filling and alternate predictions
- BiLSTM (Bidirectional LSTM) — sequence model for δ18O prediction
- Changepoint detection (`ruptures.Pelt`) — identifies abrupt shifts in local sequences

**Training details (taken from notebooks):**
- Train/Test split: 80/20 with fixed seed (42) and shuffling.
- XGBoost hyperparameter tuning via RandomizedSearchCV with sensible parameter ranges (n_estimators, max_depth, learning_rate, subsample, colsample_bytree, gamma).
- Cross-validation: K-Fold (5-fold or 10-fold variants used); CV scoring: R².
- Permutation tests: label shuffling on test set to check the gap between true R² and shuffled R².

**Model persistence:** joblib / pickle for XGBoost and scaler; models are re-loadable for inference.

---

## 4. Anomaly Detection Pipeline (Point + Event-level) 🚨

**Point-level detection:**
- Compute residuals: r_i = |y_true_i − y_pred_i| for each sample.
- Threshold anomalies by residual percentile (e.g., 95th percentile = anomaly if r_i > threshold).
- Tune thresholds (90, 92.5, 95, 97.5, 99) and report how anomaly counts vary.

**Sequence modeling anomalies (BiLSTM):**
- Build rolling sequences of selected features, predict next δ18O value, rescale to original units, compute residual, and threshold similarly.

**Changepoint detection:**
- Use `ruptures.Pelt(model='l2')` on time-ordered δ18O signals (subset by event window) to detect breakpoints; overlay with flagged point anomalies.

**Consensus (reducing false positives):**
- Define `Consensus = XGB_anomaly ∧ BiLSTM_anomaly`.
- Optionally relax thresholds (e.g., XGB 95% + BiLSTM 90%) to improve sensitivity while maintaining specificity.

**Event-level validation:**
- Aggregate anomalies within known event windows (GS-20: 74–72 ka BP; GI-12: 45–43; HS-1: 18–15; YD: 12.9–11.7).
- Report counts, proportions (% anomalous points per event), and consensus counts.

---

## 5. Evaluation & Statistical Tests ✅

**Point-level metrics to report per model and proxy:**
- R², MAE, RMSE on held-out test sets
- Cross-validation mean ± std (R²)
- Permutation test: difference between real R² and shuffled R² (report p-value or effect size)

**Event-level metrics (recommended):**
- For each event window, compute:
  - Anomaly count per model and consensus
  - Anomaly rate = anomalies / valid_samples_in_window
  - Precision/Recall if a labeled set of true-event labels exists (requires ground truth mapping)
- Statistical tests to assess significance vs null:
  - Permutation of anomalies across time (preserve temporal clustering) to get p-values for counts observed in each event
  - McNemar test or Fisher's exact test for paired model-agreement comparisons (eventwise)

**Uncertainty & robustness checks:**
- Bootstrap residual thresholds and report 95% CI for anomaly counts.
- Sensitivity analysis across threshold percentiles (90–99) with plots of anomaly counts.
- Temporal (blocked) cross-validation to respect autocorrelation when estimating generalization.

---

## 6. Results (Draft structure — fill with numbers after re-run) 📊

**Section 6.1 Model Performance (table)**
- Table: Model | Target Proxy | CV R² (mean ± std) | Test R² | MAE | RMSE | Permutation ΔR²

**Section 6.2 Anomaly Detection (table & plots)**
- Table: Event | Age Range | Samples | XGB anomalies | BiLSTM anomalies | Consensus anomalies | %Consensus
- Plot A: Time-series δ18O with colored anomaly markers (XGB=lime, BiLSTM=cyan, Consensus=gold) and changepoints overlaid
- Plot B: Residual histograms + vertical lines for thresholds

**Section 6.3 Case Studies**
- GS-20: show per-cave plots (lines per cave) and detected anomalies; discuss pre-event residual trend analysis (rise in smoothed residuals before GS-20)
- HS-1 / YD: analogous multi-cave figures and consensus discussion

**Section 6.4 Feature Importance & Interpretability**
- Present permutation importances and recommend SHAP for per-sample explanations.
- Figure: top-10 features for each target and per-proxy SHAP summary plot (if computed).

---

## 7. Recommended Additional Analyses for Q1 Publication (must-haves) ✅

1. Recompute all model training runs with a reproducible script (not ad-hoc notebook cells); save artifacts and metadata.
2. Compute event-level contingency tables and run permutation tests to quantify p-values for anomaly concentration within event windows.
3. Implement blocked/time-series cross-validation for sequence models — standard KFold may overestimate performance due to time correlation.
4. Compute SHAP values for XGBoost models and present SHAP summary and example per-event explanations.
5. Produce bootstrapped 95% confidence intervals for anomaly counts and model metrics.
6. Ablation studies: (a) single-proxy models vs multi-proxy models, (b) XGBoost alone vs BiLSTM alone vs consensus, (c) features included/excluded.
7. Sensitivity analysis across thresholds (90–99%) and show ROC-like curves for anomaly detection when ground truth exists.
8. Provide a short technical validation on simulated anomalies inserted into the data to measure detection sensitivity/specificity.
9. Add a formal discussion of limitations (sampling biases in SISALv3, temporal resolution, age model uncertainties).

---

## 8. Reproducibility & Artifacts 🔁

**Minimum artifacts to include on publication repository / Zenodo:**
- Cleaned datasets used for analyses (or code to regenerate them from raw SISALv3 dumps).
- Exact scripts that run preprocessing, training (with seeds), and inference for figures/tables (preferably with command-line interface).
- Saved model files, scalers, `metadata.json` with column lists and hyperparameters.
- `requirements.txt` or environment YAML file (specify Python, XGBoost, scikit-learn, TensorFlow/PyTorch, ruptures, pandas, etc.).

**Suggested file structure for repo:**

```
├── data/
├── notebooks/ (analysis notebooks)
├── src/
│   ├── preprocess.py
│   ├── train.py
│   ├── infer.py
│   └── evaluate.py
├── models/
├── artifacts/ (metrics, plots, exported zips)
├── SISALv3_Q1_Manuscript.md
└── README.md
```

---

## 9. Suggested Figures & Tables (with captions) 🖼️

- Figure 1: Data coverage map & age histogram (show where proxy samples are concentrated across time and space).
- Figure 2: Model performance boxplots (CV R² distributions) across proxies.
- Figure 3: Time series example showing δ18O, predicted values (XGB & BiLSTM), anomalies, and changepoints for GS-20.
- Figure 4: SHAP summary for XGBoost δ18O predictor (top features across dataset).
- Table 1: Per-event anomaly counts & proportions (XGB, BiLSTM, Consensus) with bootstrap CIs and permutation p-values.
- Table 2: Model hyperparameters, training/validation splits, and CV details.

---

## 10. Submission Checklist for a Q1 Journal 🧾

- [ ] Reproducible scripts + environment + small example dataset included
- [ ] Figures are high-resolution (vector where possible) and properly labelled
- [ ] Statistical tests for event-level results provided (permutation/bootstrapping)
- [ ] Sensitivity analyses across thresholds present
- [ ] Interpretability (SHAP) results included
- [ ] Code and models archived (Zenodo/GitHub release) with DOI

---

## 11. Quick actionable tasks I can run next ▶️

- Fill in concrete numeric results & tables by re-running the notebooks with the following commands (example):

```bash
# Reproduce XGBoost training and test metrics
python src/train.py --model xgboost --data data/rebuilt_cleaned_data.csv --target d18O_measurement --out models/xgb_d18O.pkl
python src/evaluate.py --model models/xgb_d18O.pkl --data data/rebuilt_cleaned_data.csv --metrics artifacts/xgb_metrics.json

# Generate anomaly flags and event-level summary
python src/infer.py --model models/xgb_d18O.pkl --data data/rebuilt_cleaned_data.csv --out artifacts/d18O_anomalies.csv
python src/analyze_events.py --anomalies artifacts/d18O_anomalies.csv --events events.yaml --out artifacts/event_summary.csv
```

- I can run these steps if you want me to execute them in this environment (note: notebooks reference Google Drive paths; confirm data availability locally or on Drive).

---

## 12. Limitations & Caveats ⚠️

- Age-model uncertainties in SISALv3 may blur alignment with canonical events; consider integrating age uncertainty propagation.
- Spatial & temporal sampling biases may affect representativeness of event-level counts.
- Some notebooks reference Google Drive; ensure artifacts and datasets are exported or accessible to reviewers.

---

## 13. Next steps from me (if you approve) ✅

1. Re-run the notebook pipeline to produce numeric tables & high-quality figures and populate the Results section (I can do this if you give access or copy datasets locally).  
2. Compute suggested statistical tests (bootstrap CI, permutation p-values) and add a formal Methods subsection about hypothesis testing.  
3. Add SHAP explanations and build a figure set demonstrating interpretability & per-sample anomaly drivers.

---

## Appendix: Quick list of code snippets to compute event-level statistics (example)

```python
# Load anomaly CSV (must contain Age_ka_BP and anomaly flags)
import pandas as pd
import numpy as np
from scipy.stats import percentileofscore

anoms = pd.read_csv('artifacts/d18O_anomalies.csv')

events = {'GS-20': (74, 72), 'GI-12': (45, 43)}
rows = []
for name,(start,end) in events.items():
    subset = anoms[(anoms['Age_ka_BP'] <= start) & (anoms['Age_ka_BP'] >= end)]
    total = len(subset)
    xgb = subset['XGB_anomaly'].sum()
    bilstm = subset['BiLSTM_anomaly'].sum()
    consensus = subset['Consensus_2Models'].sum()
    rows.append({'Event':name,'Total':total,'XGB':xgb,'BiLSTM':bilstm,'Consensus':consensus})

pd.DataFrame(rows)
```

---

If you'd like, I can (pick one or more):
- Re-run notebooks here and populate the Results with real numbers and high-quality figures (requires Drive/data access) ✅
- Produce a polished LaTeX manuscript from this Markdown suitable for a Q1 journal (convert and format) ✅
- Extract and embed exact model metrics and anomaly counts from the saved artifacts already in Drive (if you point me to them) ✅

---

**Note:** I scanned the workspace: four notebooks have substantive analysis (XGBoost, Random Forest gap-fill, two copies of d18O analysis) and two notebooks appear empty or incomplete (`Copy of SISALv3_Speleothem_Transformer.ipynb_`, `SISALv3_Speleothem_LSTM_Bidirectional.ipynb_`). If any additional notebooks or artifacts exist elsewhere, tell me where to find them and I'll incorporate their results directly.

---

*Document generated by GitHub Copilot (Raptor mini (Preview)).*