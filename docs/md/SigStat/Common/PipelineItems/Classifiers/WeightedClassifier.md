# <sub>[WeightedClassifier](./WeightedClassifier.md)</sub>

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../../ILoggerObject.md)</sub>, <sub>[IProgress](./../../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../../Pipeline/IPipelineIO.md)</sub>, <sub>[IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)</sub>, <sub>[IClassifier](./../../Pipeline/IClassifier.md)</sub>

## Summary
Classifies Signatures by weighing other Classifier results.

## Constructors

| Name | Summary | 

WeightedClassifier (  )<sub></sub>


## Fields

| Type | Name | Summary | 

<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[ValueTuple](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple-2)</sub>\<<sub>[IClassifier](./../../Pipeline/IClassifier.md)</sub>, <sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>Items</sub><sub>List of classifiers and belonging weights.</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Add](./Methods/WeightedClassifier-100663869.md) ( <sub>[`ValueTuple`](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple-2)</sub>\<<sub>[`IClassifier`](./../../Pipeline/IClassifier.md)</sub>, <sub>[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>> )</sub><sub>Add a new classifier with given weight to the list of items.</sub>
<sub>[IEnumerator](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerator)</sub><sub>[GetEnumerator](./Methods/WeightedClassifier-100663868.md) (  )</sub><sub></sub>
<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub><sub>[Test](./Methods/WeightedClassifier-100663871.md) ( <sub>[`ISignerModel`](./../../Pipeline/ISignerModel.md)</sub>, <sub>[`Signature`](./../../Signature.md)</sub> )</sub><sub></sub>
<sub>[ISignerModel](./../../Pipeline/ISignerModel.md)</sub><sub>[Train](./Methods/WeightedClassifier-100663870.md) ( <sub>[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[`Signature`](./../../Signature.md)</sub>> )</sub><sub></sub>


