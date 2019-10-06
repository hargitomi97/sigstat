# <sub>[DtwSignerModel](./DtwSignerModel.md)</sub>

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ISignerModel](./../../Pipeline/ISignerModel.md)</sub>

## Summary
Represents a trained model for [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)

## Constructors

| Name | Summary | 

DtwSignerModel (  )<sub></sub>


## Fields

| Type | Name | Summary | 

<sub>[DistanceMatrix](./../../DistanceMatrix-3.md)</sub>\<<sub>[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub>, <sub>[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub>, <sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>><sub>DistanceMatrix</sub><sub>DTW distance matrix of the genuine signatures</sub>
<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub><sub>Threshold</sub><sub>A threshold, that will be used for classification. Signatures with  an average DTW distance from the genuines above this threshold will  be classified as forgeries</sub>


## Properties

| Type | Name | Summary | 

<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)</sub>\<<sub>[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub>, <sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[]</sub>>><sub>GenuineSignatures</sub><sub>A list a of genuine signatures used for training</sub>


