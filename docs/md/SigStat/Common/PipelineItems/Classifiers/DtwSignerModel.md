# [DtwSignerModel](./DtwSignerModel.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ISignerModel](./../../Pipeline/ISignerModel.md)

## Summary
Represents a trained model for [DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>DtwSignerModel (  )</sub><div style="pointer-events: none; cursor: default;"><img "width=200"/></div>| <sub></sub>| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <sub>DistanceMatrix</sub><div style="pointer-events: none; cursor: default;"><img "width=200"/></div>| <sub>DTW distance matrix of the genuine signatures</sub>| <br>
| <sub>Threshold</sub><div style="pointer-events: none; cursor: default;"><img "width=200"/></div>| <sub>A threshold, that will be used for classification. Signatures with  an average DTW distance from the genuines above this threshold will  be classified as forgeries</sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>GenuineSignatures</sub><div style="pointer-events: none; cursor: default;"><img "width=200"/></div>| <sub>A list a of genuine signatures used for training</sub>| <br>


