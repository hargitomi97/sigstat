# [DtwSignerModel](./DtwSignerModel.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ISignerModel](./../../Pipeline/ISignerModel.md)

## Summary
Represents a trained model for [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>DtwSignerModel (  )</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub></sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <sub>DistanceMatrix</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>DTW distance matrix of the genuine signatures</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>Threshold</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>A threshold, that will be used for classification. Signatures with  an average DTW distance from the genuines above this threshold will  be classified as forgeries</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>GenuineSignatures</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>A list a of genuine signatures used for training</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


