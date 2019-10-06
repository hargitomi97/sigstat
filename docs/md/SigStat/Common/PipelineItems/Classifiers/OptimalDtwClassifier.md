# <sub>[OptimalDtwClassifier](./OptimalDtwClassifier.md)</sub>

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../../ILoggerObject.md)</sub>, <sub>[IProgress](./../../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../../Pipeline/IPipelineIO.md)</sub>, <sub>[IDistanceClassifier](./../../Pipeline/IDistanceClassifier.md)</sub>, <sub>[IClassifier](./../../Pipeline/IClassifier.md)</sub>

## Summary
This [Pipeline.IDistanceClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Pipeline/IDistanceClassifier.md) implementation will consider both test and  training samples and claculate the threshold to separate the original and forged  signatures to approximate EER. Note that this classifier is not applicable for  real world scenarios. It was developed to test the theoratical boundaries of  threshold based classification

## Constructors

| Name | Summary | 

OptimalDtwClassifier ( [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<<sub>[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[]</sub>, <sub>[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[]</sub>, <sub>[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>> )<sub>Initializes a new instance of the [PipelineItems.Classifiers.OptimalDtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/OptimalDtwClassifier.md) class.</sub>


## Properties

| Type | Name | Summary | 

[Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[]</sub>, <sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[]</sub>, <sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>><sub>DistanceFunction</sub><sub>The function used to calculate the distance between two data points during DTW calculation</sub>
<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[FeatureDescriptor](./../../FeatureDescriptor.md)</sub>><sub>Features</sub><sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md)s to consider during classification</sub>
<sub>[Sampler](./../../Sampler.md)</sub><sub>Sampler</sub><sub>[PipelineItems.Classifiers.OptimalDtwClassifier.Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/OptimalDtwClassifier.md) used for selecting training and test sets during a benchmark</sub>


## Methods

| Return | Name | Summary | 

<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub><sub>[Test](./Methods/OptimalDtwClassifier-100663867.md) ( <sub>[`ISignerModel`](./../../Pipeline/ISignerModel.md)</sub>, <sub>[`Signature`](./../../Signature.md)</sub> )</sub><sub></sub>
<sub>[ISignerModel](./../../Pipeline/ISignerModel.md)</sub><sub>[Train](./Methods/OptimalDtwClassifier-100663865.md) ( <sub>[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[`Signature`](./../../Signature.md)</sub>> )</sub><sub></sub>


