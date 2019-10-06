# [DtwSignerModel](./DtwSignerModel.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ISignerModel](./../../Pipeline/ISignerModel.md)

## Summary
Represents a trained model for [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)

## Constructors

NameSummary

<div style="text-align: right"><sub></sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


## Fields

TypeNameSummary

<div style="text-align: right"><sub>DistanceMatrix</sub></ div ><div style="text-align: right"><sub>DTW distance matrix of the genuine signatures</sub></ div ><div style="text-align: right"></ div ><br>
<div style="text-align: right"><sub>Threshold</sub></ div ><div style="text-align: right"><sub>A threshold, that will be used for classification. Signatures with  an average DTW distance from the genuines above this threshold will  be classified as forgeries</sub></ div ><div style="text-align: right"></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>GenuineSignatures</sub></ div ><div style="text-align: right"><sub>A list a of genuine signatures used for training</sub></ div ><br>


