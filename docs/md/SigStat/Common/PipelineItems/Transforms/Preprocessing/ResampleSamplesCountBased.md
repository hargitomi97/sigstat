# <sub>[ResampleSamplesCountBased](./ResampleSamplesCountBased.md)</sub>

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../../../ILoggerObject.md)</sub>, <sub>[IProgress](./../../../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../../../Pipeline/IPipelineIO.md)</sub>, <sub>[ITransformation](./../../../ITransformation.md)</sub>

## Summary
Resamples an online signature to a specific sample count using the specified [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm

## Constructors

| Name | Summary | 

ResampleSamplesCountBased (  )<sub></sub>


## Properties

| Type | Name | Summary | 

<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>>><sub>InputFeatures</sub><sub>Gets or sets the input features.</sub>
<sub>[Type](https://docs.microsoft.com/en-us/dotnet/api/System.Type)</sub><sub>InterpolationType</sub><sub>Gets or sets the type of the interpolation. <seealso cref="T:SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation" /></sub>
<sub>[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)</sub><sub>NumOfSamples</sub><sub>Gets or sets the number of samples.</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>OriginalTFeature</sub><sub>Gets or sets the input timestamp feature.</sub>
<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>>><sub>OutputFeatures</sub><sub>Gets or sets the resampled  features.</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>ResampledTFeature</sub><sub>Gets or sets the resampled timestamp feature.</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/ResampleSamplesCountBased-100663801.md) ( <sub>[`Signature`](./../../../Signature.md)</sub> )</sub><sub></sub>


