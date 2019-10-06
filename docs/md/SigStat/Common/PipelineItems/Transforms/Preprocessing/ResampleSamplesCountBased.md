# [ResampleSamplesCountBased](./ResampleSamplesCountBased.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Resamples an online signature to a specific sample count using the specified [<sub>PipelineItems.Transforms.Preprocessing.IInterpolation</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm

## Constructors

| Name | Summary | 

ResampleSamplesCountBased (  )<sub></sub>


## Properties

| Type | Name | Summary | 

[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>>><sub>InputFeatures</sub><sub>Gets or sets the input features.</sub>
[Type](https://docs.microsoft.com/en-us/dotnet/api/System.Type)<sub>InterpolationType</sub><sub>Gets or sets the type of the interpolation. <seealso cref="T:SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation" /></sub>
[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)<sub>NumOfSamples</sub><sub>Gets or sets the number of samples.</sub>
[FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>><sub>OriginalTFeature</sub><sub>Gets or sets the input timestamp feature.</sub>
[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>>><sub>OutputFeatures</sub><sub>Gets or sets the resampled  features.</sub>
[FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>><sub>ResampledTFeature</sub><sub>Gets or sets the resampled timestamp feature.</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/ResampleSamplesCountBased-100663801.md) ( [`Signature`](./../../../Signature.md) )</sub><sub></sub>


