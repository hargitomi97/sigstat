# [DtwClassifier](./DtwClassifier.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../ILoggerObject.md), [IProgress](./../../Helpers/IProgress.md), [IPipelineIO](./../../Pipeline/IPipelineIO.md), [IDistanceClassifier](./../../Pipeline/IDistanceClassifier.md), [IClassifier](./../../Pipeline/IClassifier.md)

## Summary
Classifies Signatures with the [SigStat.Common.Algorithms.Dtw]() algorithm.

## Constructors

| Name | Summary | 
| --- | --- | 
| [DtwClassifier](./../../../../ctor/DtwClassifier-100663854.md) (  ) | Initializes a new instance of the [SigStat.Common.PipelineItems.Classifiers.DtwClassifier]() class with the default Manhattan distance method. | 
| [DtwClassifier](./../../../../ctor/DtwClassifier-100663855.md) ( [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> distanceMethod ) | Initializes a new instance of the [SigStat.Common.PipelineItems.Classifiers.DtwClassifier]() class with a specified distance method. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> | DistanceFunction | The function used to calculate the distance between two data points during DTW calculation | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[FeatureDescriptor](./../../FeatureDescriptor.md)> | Features | Gets or sets the features to consider during distance calculation | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | MultiplicationFactor | Gets or sets the multiplication factor to be used during threshold calculation | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | [Test](./Methods/DtwClassifier-100663857.md) ( [`ISignerModel`](./../../Pipeline/ISignerModel.md) model, [`Signature`](./../../Signature.md) signature ) |  | 
| [ISignerModel](./../../Pipeline/ISignerModel.md) | [Train](./Methods/DtwClassifier-100663856.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> signatures ) |  | 


