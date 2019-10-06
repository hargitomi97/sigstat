# [ResampleSamplesCountBased](./ResampleSamplesCountBased.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Resamples an online signature to a specific sample count using the specified [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>ResampleSamplesCountBased (  )</sub><div style="width: 290px"> | <sub></sub><div style="width: 290px"> | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>InputFeatures</sub><div style="width: 290px"> | <sub>Gets or sets the input features.</sub><div style="width: 290px"> | <br>
| <sub>InterpolationType</sub><div style="width: 290px"> | <sub>Gets or sets the type of the interpolation. <seealso cref="T:SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation" /></sub><div style="width: 290px"> | <br>
| <sub>NumOfSamples</sub><div style="width: 290px"> | <sub>Gets or sets the number of samples.</sub><div style="width: 290px"> | <br>
| <sub>OriginalTFeature</sub><div style="width: 290px"> | <sub>Gets or sets the input timestamp feature.</sub><div style="width: 290px"> | <br>
| <sub>OutputFeatures</sub><div style="width: 290px"> | <sub>Gets or sets the resampled  features.</sub><div style="width: 290px"> | <br>
| <sub>ResampledTFeature</sub><div style="width: 290px"> | <sub>Gets or sets the resampled timestamp feature.</sub><div style="width: 290px"> | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/ResampleSamplesCountBased-100663801.md) ( [`Signature`](./../../../Signature.md) )</sub><div style="width: 290px"> | <sub></sub><div style="width: 290px"> | <br>


