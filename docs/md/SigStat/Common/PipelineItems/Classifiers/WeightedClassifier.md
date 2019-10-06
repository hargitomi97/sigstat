# [WeightedClassifier](./WeightedClassifier.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../ILoggerObject.md), [IProgress](./../../Helpers/IProgress.md), [IPipelineIO](./../../Pipeline/IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [IClassifier](./../../Pipeline/IClassifier.md)

## Summary
Classifies Signatures by weighing other Classifier results.

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>WeightedClassifier (  )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>Items</sub></div>| <div style="width:290px"><sub>List of classifiers and belonging weights.</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>[Add](./Methods/WeightedClassifier-100663869.md) ( [`ValueTuple`](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple-2)\<[`IClassifier`](./../../Pipeline/IClassifier.md), [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )</sub></div>| <div style="width:290px"><sub>Add a new classifier with given weight to the list of items.</sub></div>| <br>
| <div style="width:290px"><sub>[GetEnumerator](./Methods/WeightedClassifier-100663868.md) (  )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>
| <div style="width:290px"><sub>[Test](./Methods/WeightedClassifier-100663871.md) ( [`ISignerModel`](./../../Pipeline/ISignerModel.md), [`Signature`](./../../Signature.md) )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>
| <div style="width:290px"><sub>[Train](./Methods/WeightedClassifier-100663870.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>


