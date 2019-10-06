# [DtwSignerModel](./DtwSignerModel.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ISignerModel](./../../Pipeline/ISignerModel.md)

## Summary
Represents a trained model for [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>DtwSignerModel (  )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>DistanceMatrix</sub></div>| <div style="width:290px"><sub>DTW distance matrix of the genuine signatures</sub></div>| <br>
| <div style="width:290px"><sub>Threshold</sub></div>| <div style="width:290px"><sub>A threshold, that will be used for classification. Signatures with  an average DTW distance from the genuines above this threshold will  be classified as forgeries</sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>GenuineSignatures</sub></div>| <div style="width:290px"><sub>A list a of genuine signatures used for training</sub></div>| <br>


