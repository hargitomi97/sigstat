# [DtwSignerModel](./DtwSignerModel.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ISignerModel](./../../Pipeline/ISignerModel.md)

## Summary
Represents a trained model for [DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>DtwSignerModel (  )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub></sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>DistanceMatrix</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>DTW distance matrix of the genuine signatures</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Threshold</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>A threshold, that will be used for classification. Signatures with  an average DTW distance from the genuines above this threshold will  be classified as forgeries</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>GenuineSignatures</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>A list a of genuine signatures used for training</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


