# [DtwSignerModel](./DtwSignerModel.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ISignerModel](./../../Pipeline/ISignerModel.md)

## Summary
Represents a trained model for [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>DtwSignerModel (  )</sub><img width=200 unselectable="on"/>  | <sub></sub><img width=200 unselectable="on"/>  | <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <sub>DistanceMatrix</sub><img width=200 unselectable="on"/>  | <sub>DTW distance matrix of the genuine signatures</sub><img width=200 unselectable="on"/>  | <br>
| <sub>Threshold</sub><img width=200 unselectable="on"/>  | <sub>A threshold, that will be used for classification. Signatures with  an average DTW distance from the genuines above this threshold will  be classified as forgeries</sub><img width=200 unselectable="on"/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>GenuineSignatures</sub><img width=200 unselectable="on"/>  | <sub>A list a of genuine signatures used for training</sub><img width=200 unselectable="on"/>  | <br>


