# [OptimalDtwClassifier](./OptimalDtwClassifier.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../ILoggerObject.md), [IProgress](./../../Helpers/IProgress.md), [IPipelineIO](./../../Pipeline/IPipelineIO.md), [IDistanceClassifier](./../../Pipeline/IDistanceClassifier.md), [IClassifier](./../../Pipeline/IClassifier.md)

## Summary
This [IDistanceClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Pipeline/IDistanceClassifier.md) implementation will consider both test and  training samples and claculate the threshold to separate the original and forged  signatures to approximate EER. Note that this classifier is not applicable for  real world scenarios. It was developed to test the theoratical boundaries of  threshold based classification

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>OptimalDtwClassifier ( [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Initializes a new instance of the [OptimalDtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/OptimalDtwClassifier.md) class.</sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>DistanceFunction</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>The function used to calculate the distance between two data points during DTW calculation</sub>| <br>
| <sub>Features</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md)s to consider during classification</sub>| <br>
| <sub>Sampler</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>[Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/OptimalDtwClassifier.md) used for selecting training and test sets during a benchmark</sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Test](./Methods/OptimalDtwClassifier-100663910.md) ( [`ISignerModel`](./../../Pipeline/ISignerModel.md), [`Signature`](./../../Signature.md) )</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub></sub>| <br>
| <sub>[Train](./Methods/OptimalDtwClassifier-100663908.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> )</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub></sub>| <br>


