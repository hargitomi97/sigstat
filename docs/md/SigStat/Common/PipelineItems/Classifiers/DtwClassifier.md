# [DtwClassifier](./DtwClassifier.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../ILoggerObject.md), [IProgress](./../../Helpers/IProgress.md), [IPipelineIO](./../../Pipeline/IPipelineIO.md), [IDistanceClassifier](./../../Pipeline/IDistanceClassifier.md), [IClassifier](./../../Pipeline/IClassifier.md)

## Summary
Classifies Signatures with the [Algorithms.Dtw](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/Dtw.md) algorithm.

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>DtwClassifier (  )</sub></div>| <div style="width:290px"><sub>Initializes a new instance of the [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with the default Manhattan distance method.</sub></div>| <br>
| <div style="width:290px"><sub>DtwClassifier ( [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )</sub></div>| <div style="width:290px"><sub>Initializes a new instance of the [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with a specified distance method.</sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>DistanceFunction</sub></div>| <div style="width:290px"><sub>The function used to calculate the distance between two data points during DTW calculation</sub></div>| <br>
| <div style="width:290px"><sub>Features</sub></div>| <div style="width:290px"><sub>Gets or sets the features to consider during distance calculation</sub></div>| <br>
| <div style="width:290px"><sub>MultiplicationFactor</sub></div>| <div style="width:290px"><sub>Gets or sets the multiplication factor to be used during threshold calculation</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>[Test](./Methods/DtwClassifier-100663857.md) ( [`ISignerModel`](./../../Pipeline/ISignerModel.md), [`Signature`](./../../Signature.md) )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>
| <div style="width:290px"><sub>[Train](./Methods/DtwClassifier-100663856.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>


