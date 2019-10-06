# [ResampleSamplesCountBased](./ResampleSamplesCountBased.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Resamples an online signature to a specific sample count using the specified [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>ResampleSamplesCountBased (  )</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub></sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>InputFeatures</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Gets or sets the input features.</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>InterpolationType</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Gets or sets the type of the interpolation. <seealso cref="T:SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation" /></sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>NumOfSamples</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Gets or sets the number of samples.</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>OriginalTFeature</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Gets or sets the input timestamp feature.</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>OutputFeatures</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Gets or sets the resampled  features.</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>ResampledTFeature</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Gets or sets the resampled timestamp feature.</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/ResampleSamplesCountBased-100663801.md) ( [`Signature`](./../../../Signature.md) )</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub></sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


