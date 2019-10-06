# [DtwSignerModel](./DtwSignerModel.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ISignerModel](./../../Pipeline/ISignerModel.md)

## Summary
Represents a trained model for [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| DtwSignerModel (  )<div style="width: 300px">| <div style="width: 300px">| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| DistanceMatrix<div style="width: 300px">| DTW distance matrix of the genuine signatures<div style="width: 300px">| <br>
| Threshold<div style="width: 300px">| A threshold, that will be used for classification. Signatures with  an average DTW distance from the genuines above this threshold will  be classified as forgeries<div style="width: 300px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| GenuineSignatures<div style="width: 300px">| A list a of genuine signatures used for training<div style="width: 300px">| <br>


