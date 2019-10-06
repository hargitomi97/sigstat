# [ResampleSamplesCountBased](./ResampleSamplesCountBased.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Resamples an online signature to a specific sample count using the specified [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>ResampleSamplesCountBased (  )</sub></div>| <sub></sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>InputFeatures</sub></div>| <sub>Gets or sets the input features.</sub></div>| <br>
| <div style ="width:390px"><sub>InterpolationType</sub></div>| <sub>Gets or sets the type of the interpolation. <seealso cref="T:SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation" /></sub></div>| <br>
| <div style ="width:390px"><sub>NumOfSamples</sub></div>| <sub>Gets or sets the number of samples.</sub></div>| <br>
| <div style ="width:390px"><sub>OriginalTFeature</sub></div>| <sub>Gets or sets the input timestamp feature.</sub></div>| <br>
| <div style ="width:390px"><sub>OutputFeatures</sub></div>| <sub>Gets or sets the resampled  features.</sub></div>| <br>
| <div style ="width:390px"><sub>ResampledTFeature</sub></div>| <sub>Gets or sets the resampled timestamp feature.</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>[Transform](./Methods/ResampleSamplesCountBased-100663801.md) ( [`Signature`](./../../../Signature.md) )</sub></div>| <sub></sub></div>| <br>


