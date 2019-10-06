# [OptimalDtwClassifier](./OptimalDtwClassifier.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [PipelineItems]() > [Classifiers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../ILoggerObject.md), [IProgress](./../../Helpers/IProgress.md), [IPipelineIO](./../../Pipeline/IPipelineIO.md), [IDistanceClassifier](./../../Pipeline/IDistanceClassifier.md), [IClassifier](./../../Pipeline/IClassifier.md)

## Summary
This [Pipeline.IDistanceClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Pipeline/IDistanceClassifier.md) implementation will consider both test and  training samples and claculate the threshold to separate the original and forged  signatures to approximate EER. Note that this classifier is not applicable for  real world scenarios. It was developed to test the theoratical boundaries of  threshold based classification

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>OptimalDtwClassifier ( [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )</sub></div>| <div style="width:290px"><sub>Initializes a new instance of the [PipelineItems.Classifiers.OptimalDtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/OptimalDtwClassifier.md) class.</sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>DistanceFunction</sub></div>| <div style="width:290px"><sub>The function used to calculate the distance between two data points during DTW calculation</sub></div>| <br>
| <div style="width:290px"><sub>Features</sub></div>| <div style="width:290px"><sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md)s to consider during classification</sub></div>| <br>
| <div style="width:290px"><sub>Sampler</sub></div>| <div style="width:290px"><sub>[PipelineItems.Classifiers.OptimalDtwClassifier.Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/OptimalDtwClassifier.md) used for selecting training and test sets during a benchmark</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>[Test](./Methods/OptimalDtwClassifier-100663867.md) ( [`ISignerModel`](./../../Pipeline/ISignerModel.md), [`Signature`](./../../Signature.md) )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>
| <div style="width:290px"><sub>[Train](./Methods/OptimalDtwClassifier-100663865.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>


