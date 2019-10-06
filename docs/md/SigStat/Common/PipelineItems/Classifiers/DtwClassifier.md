# [DtwClassifier](./DtwClassifier.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../ILoggerObject.md), [IProgress](./../../Helpers/IProgress.md), [IPipelineIO](./../../Pipeline/IPipelineIO.md), [IDistanceClassifier](./../../Pipeline/IDistanceClassifier.md), [IClassifier](./../../Pipeline/IClassifier.md)

## Summary
Classifies Signatures with the [Algorithms.Dtw](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/Dtw.md) algorithm.

## Constructors

| Name | Summary | 
| --- | --- | 
|<img width=200/> <sub>Initializes a new instance of the [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with the default Manhattan distance method.</sub> | <sub>Initializes a new instance of the [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with the default Manhattan distance method.</sub> | <br>
|<img width=200/> <sub>Initializes a new instance of the [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with a specified distance method.</sub> | <sub>Initializes a new instance of the [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md) class with a specified distance method.</sub> | <br>


## Properties

| Name | Summary | 
| --- | --- | 
|<img width=200/> <sub>DistanceFunction</sub> | <sub>The function used to calculate the distance between two data points during DTW calculation</sub> | <br>
|<img width=200/> <sub>Features</sub> | <sub>Gets or sets the features to consider during distance calculation</sub> | <br>
|<img width=200/> <sub>MultiplicationFactor</sub> | <sub>Gets or sets the multiplication factor to be used during threshold calculation</sub> | <br>


## Methods

| Name | Summary | 
| --- | --- | 
|<img width=200/> <sub>[Test](./Methods/DtwClassifier-100663857.md) ( [`ISignerModel`](./../../Pipeline/ISignerModel.md), [`Signature`](./../../Signature.md) )</sub> | <sub></sub> | <br>
|<img width=200/> <sub>[Train](./Methods/DtwClassifier-100663856.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> )</sub> | <sub></sub> | <br>


