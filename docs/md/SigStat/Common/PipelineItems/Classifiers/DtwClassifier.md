# [DtwClassifier](./DtwClassifier.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../ILoggerObject.md), [IProgress](./../../Helpers/IProgress.md), [IPipelineIO](./../../Pipeline/IPipelineIO.md), [IDistanceClassifier](./../../Pipeline/IDistanceClassifier.md), [IClassifier](./../../Pipeline/IClassifier.md)

## Summary
Classifies Signatures with the [Algorithms.Dtw](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/Dtw.md) algorithm.

## Constructors

NameSummary

<div style="text-align: right"><sub>Initializes a new instance of the [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with the default Manhattan distance method.</sub></ div ><div style="text-align: right"><sub>Initializes a new instance of the [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with the default Manhattan distance method.</sub></ div ><br>
<div style="text-align: right"><sub>Initializes a new instance of the [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with a specified distance method.</sub></ div ><div style="text-align: right"><sub>Initializes a new instance of the [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with a specified distance method.</sub></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>DistanceFunction</sub></ div ><div style="text-align: right"><sub>The function used to calculate the distance between two data points during DTW calculation</sub></ div ><br>
<div style="text-align: right"><sub>Features</sub></ div ><div style="text-align: right"><sub>Gets or sets the features to consider during distance calculation</sub></ div ><br>
<div style="text-align: right"><sub>MultiplicationFactor</sub></ div ><div style="text-align: right"><sub>Gets or sets the multiplication factor to be used during threshold calculation</sub></ div ><br>


## Methods

NameSummary

<div style="text-align: right"><sub>[Test](./Methods/DtwClassifier-100663857.md) ( [`ISignerModel`](./../../Pipeline/ISignerModel.md), [`Signature`](./../../Signature.md) )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>
<div style="text-align: right"><sub>[Train](./Methods/DtwClassifier-100663856.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


