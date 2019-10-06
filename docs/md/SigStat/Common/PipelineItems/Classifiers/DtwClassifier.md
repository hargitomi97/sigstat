# [DtwClassifier](./DtwClassifier.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../ILoggerObject.md), [IProgress](./../../Helpers/IProgress.md), [IPipelineIO](./../../Pipeline/IPipelineIO.md), [IDistanceClassifier](./../../Pipeline/IDistanceClassifier.md), [IClassifier](./../../Pipeline/IClassifier.md)

## Summary
Classifies Signatures with the [Algorithms.Dtw](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/Dtw.md) algorithm.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>DtwClassifier (  )</sub><div style="width: 290px">| <sub>Initializes a new instance of the [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with the default Manhattan distance method.</sub><div style="width: 290px">| <br>
| <sub>DtwClassifier ( [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )</sub><div style="width: 290px">| <sub>Initializes a new instance of the [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with a specified distance method.</sub><div style="width: 290px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>DistanceFunction</sub><div style="width: 290px">| <sub>The function used to calculate the distance between two data points during DTW calculation</sub><div style="width: 290px">| <br>
| <sub>Features</sub><div style="width: 290px">| <sub>Gets or sets the features to consider during distance calculation</sub><div style="width: 290px">| <br>
| <sub>MultiplicationFactor</sub><div style="width: 290px">| <sub>Gets or sets the multiplication factor to be used during threshold calculation</sub><div style="width: 290px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Test](./Methods/DtwClassifier-100663857.md) ( [`ISignerModel`](./../../Pipeline/ISignerModel.md), [`Signature`](./../../Signature.md) )</sub><div style="width: 290px">| <sub></sub><div style="width: 290px">| <br>
| <sub>[Train](./Methods/DtwClassifier-100663856.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> )</sub><div style="width: 290px">| <sub></sub><div style="width: 290px">| <br>


