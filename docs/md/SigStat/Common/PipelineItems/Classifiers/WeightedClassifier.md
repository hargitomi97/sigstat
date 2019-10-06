# [WeightedClassifier](./WeightedClassifier.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../ILoggerObject.md), [IProgress](./../../Helpers/IProgress.md), [IPipelineIO](./../../Pipeline/IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [IClassifier](./../../Pipeline/IClassifier.md)

## Summary
Classifies Signatures by weighing other Classifier results.

## Constructors

| Name | Summary | 
| --- | --- | 
| WeightedClassifier (  )<div style="width: 400px">| <div style="width: 400px">| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| Items<div style="width: 400px">| List of classifiers and belonging weights.<div style="width: 400px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Add](./Methods/WeightedClassifier-100663869.md) ( [`ValueTuple`](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple-2)\<[`IClassifier`](./../../Pipeline/IClassifier.md), [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )<div style="width: 400px">| Add a new classifier with given weight to the list of items.<div style="width: 400px">| <br>
| [GetEnumerator](./Methods/WeightedClassifier-100663868.md) (  )<div style="width: 400px">| <div style="width: 400px">| <br>
| [Test](./Methods/WeightedClassifier-100663871.md) ( [`ISignerModel`](./../../Pipeline/ISignerModel.md), [`Signature`](./../../Signature.md) )<div style="width: 400px">| <div style="width: 400px">| <br>
| [Train](./Methods/WeightedClassifier-100663870.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> )<div style="width: 400px">| <div style="width: 400px">| <br>


