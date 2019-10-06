# [DtwSignerModel](./DtwSignerModel.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ISignerModel](./../../Pipeline/ISignerModel.md)

## Summary
Represents a trained model for [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)

## Constructors

NameSummary

<sub></sub><br><sub></sub><br>


## Fields

TypeNameSummary

<sub>DistanceMatrix</sub><br><sub>DTW distance matrix of the genuine signatures</sub><br><br>
<sub>Threshold</sub><br><sub>A threshold, that will be used for classification. Signatures with  an average DTW distance from the genuines above this threshold will  be classified as forgeries</sub><br><br>


## Properties

TypeNameSummary

<sub>GenuineSignatures</sub><br><sub>A list a of genuine signatures used for training</sub><br><br>


