# [DtwSignerModel](./DtwSignerModel.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ISignerModel](./../../Pipeline/ISignerModel.md)

## Summary
Represents a trained model for [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| DtwSignerModel (  ) |  | 


## Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| [DistanceMatrix](./../../DistanceMatrix-3.md)\<[String](https://docs.microsoft.com/en-us/dotnet/api/System.String), [String](https://docs.microsoft.com/en-us/dotnet/api/System.String), [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> | DistanceMatrix | <sub>DTW distance matrix of the genuine signatures</sub> | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | Threshold | <sub>A threshold, that will be used for classification. Signatures with  an average DTW distance from the genuines above this threshold will  be classified as forgeries</sub> | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[String](https://docs.microsoft.com/en-us/dotnet/api/System.String), [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[]>> | GenuineSignatures | <sub>A list a of genuine signatures used for training</sub> | 


