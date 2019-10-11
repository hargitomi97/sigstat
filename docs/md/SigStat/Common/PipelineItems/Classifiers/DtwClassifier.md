# [DtwClassifier](./DtwClassifier.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../ILoggerObject.md), [IProgress](./../../Helpers/IProgress.md), [IPipelineIO](./../../Pipeline/IPipelineIO.md), [IDistanceClassifier](./../../Pipeline/IDistanceClassifier.md), [IClassifier](./../../Pipeline/IClassifier.md)

## Summary
Classifies Signatures with the [Dtw](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/Dtw.md) algorithm.

## Constructors

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>DtwClassifier (  )</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Initializes a new instance of the [DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with the default Manhattan distance method.</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>DtwClassifier ( [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Initializes a new instance of the [DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with a specified distance method.</sub><p>&nbsp;</p>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>DistanceFunction</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>The function used to calculate the distance between two data points during DTW calculation</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>Features</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Gets or sets the features to consider during distance calculation</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>MultiplicationFactor</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Gets or sets the multiplication factor to be used during threshold calculation</sub><p>&nbsp;</p>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>[Test](./Methods/DtwClassifier-100663900.md) ( [`ISignerModel`](./../../Pipeline/ISignerModel.md), [`Signature`](./../../Signature.md) )</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>[Train](./Methods/DtwClassifier-100663899.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> )</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>


