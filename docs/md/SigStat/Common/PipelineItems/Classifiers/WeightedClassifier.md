# [WeightedClassifier](./WeightedClassifier.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../ILoggerObject.md), [IProgress](./../../Helpers/IProgress.md), [IPipelineIO](./../../Pipeline/IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [IClassifier](./../../Pipeline/IClassifier.md)

## Summary
Classifies Signatures by weighing other Classifier results.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>WeightedClassifier (  )</sub><img width=200/>| <sub></sub><img width=200/>| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <sub>Items</sub><img width=200/>| <sub>List of classifiers and belonging weights.</sub><img width=200/>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Add](./Methods/WeightedClassifier-100663869.md) ( [`ValueTuple`](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple-2)\<[`IClassifier`](./../../Pipeline/IClassifier.md), [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )</sub><img width=200/>| <sub>Add a new classifier with given weight to the list of items.</sub><img width=200/>| <br>
| <sub>[GetEnumerator](./Methods/WeightedClassifier-100663868.md) (  )</sub><img width=200/>| <sub></sub><img width=200/>| <br>
| <sub>[Test](./Methods/WeightedClassifier-100663871.md) ( [`ISignerModel`](./../../Pipeline/ISignerModel.md), [`Signature`](./../../Signature.md) )</sub><img width=200/>| <sub></sub><img width=200/>| <br>
| <sub>[Train](./Methods/WeightedClassifier-100663870.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> )</sub><img width=200/>| <sub></sub><img width=200/>| <br>


