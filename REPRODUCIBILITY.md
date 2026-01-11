# Reproducibility & Submission Checklist (SISALv3 Anomaly Detection)

## Reproducibility artifacts (must include)

- Cleaned dataset or code to rebuild from SISALv3 CSVs (provide script and raw file paths). 
- `requirements.txt` and/or `environment.yml` with explicit versions (Python 3.10+ recommended).
- Scripts to run preprocessing, training, inference, and plotting (CLI-friendly): `src/preprocess.py`, `src/train.py`, `src/infer.py`, `src/evaluate.py`, `src/figures/*`.
- Saved model files and scalers in `models/` and a `metadata.json` describing columns, preprocessing, and hyperparameters.
- `artifacts/` directory with metrics, CV results, anomaly CSVs, and plots.
- A small verification dataset and a CI action (or GitHub workflow) that runs a short smoke test (train on a tiny subset and produce one figure) to verify environments.

## Archiving & data availability

- Archive the cleaned dataset and model artifacts in Zenodo or similar repository and cite DOI in the manuscript.
- If raw SISALv3 data are restricted, provide exact instructions and scripts to download and reprocess.

## Minimum documentation for reviewers

- README describing how to run the analysis (one command per figure/table) and the expected outputs
- A `methods.md` that describes preprocessing choices, feature engineering, model hyperparameters, and evaluation strategy (CV folds, seeds)

## Recommended submission checklist for a Q1 journal

- [ ] Manuscript includes reproducibility statement and DOI to dataset and code
- [ ] All main figures are present and in high resolution (300+ dpi) and acceptable formats (PNG, PDF)
- [ ] Supplementary material includes sensitivity analyses, bootstraps, and full hyperparameter search logs
- [ ] Statistical tests and p-values are reported with effect sizes and confidence intervals
- [ ] Interpreter-friendly descriptors: include metadata and model cards describing potential misuse and limitations

## Suggested target journals (examples relevant to paleoclimate & methods)

- Nature Geoscience (Methods or Research Article — high bar)  
- Geophysical Research Letters (short format on significant event detection)  
- Earth and Planetary Science Letters (detailed methods + paleoclimate reconstructions)  
- Climate of the Past (open-access, paleo-focused)  
- Journal of Advances in Modeling Earth Systems (method-oriented)

## Final note

Once you confirm that the data are available locally or in Drive, I can run the full pipeline and populate all numeric tables and figures for a submission-ready manuscript.
