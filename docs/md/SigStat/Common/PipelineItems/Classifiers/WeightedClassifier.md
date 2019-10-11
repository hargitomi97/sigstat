# [WeightedClassifier](./WeightedClassifier.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../ILoggerObject.md), [IProgress](./../../Helpers/IProgress.md), [IPipelineIO](./../../Pipeline/IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [IClassifier](./../../Pipeline/IClassifier.md)

## Summary
Classifies Signatures by weighing other Classifier results.

## Constructors

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>WeightedClassifier (  )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>Items</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>List of classifiers and belonging weights.</sub><p>&nbsp;</p>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>[Add](./Methods/WeightedClassifier-100663912.md) ( [`ValueTuple`](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple-2)\<[`IClassifier`](./../../Pipeline/IClassifier.md), [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>Add a new classifier with given weight to the list of items.</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>[GetEnumerator](./Methods/WeightedClassifier-100663911.md) (  )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>[Test](./Methods/WeightedClassifier-100663914.md) ( [`ISignerModel`](./../../Pipeline/ISignerModel.md), [`Signature`](./../../Signature.md) )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>[Train](./Methods/WeightedClassifier-100663913.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>


