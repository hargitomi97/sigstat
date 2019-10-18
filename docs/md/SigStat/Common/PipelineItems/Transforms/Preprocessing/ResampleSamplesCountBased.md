# [ResampleSamplesCountBased](./ResampleSamplesCountBased.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Resamples an online signature to a specific sample count using the specified [IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm

## Constructors

| Name<a href="#"><img width=475></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>ResampleSamplesCountBased (  )</sub>| <sub></sub>| <br>


## Properties

| Name<a href="#"><img width=475></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>InputFeatures</sub>| <sub>Gets or sets the input features.</sub>| <br>
| <sub>InterpolationType</sub>| <sub>Gets or sets the type of the interpolation. <seealso cref="T:SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation" /></sub>| <br>
| <sub>NumOfSamples</sub>| <sub>Gets or sets the number of samples.</sub>| <br>
| <sub>OriginalTFeature</sub>| <sub>Gets or sets the input timestamp feature.</sub>| <br>
| <sub>OutputFeatures</sub>| <sub>Gets or sets the resampled  features.</sub>| <br>
| <sub>ResampledTFeature</sub>| <sub>Gets or sets the resampled timestamp feature.</sub>| <br>


## Methods

| Name<a href="#"><img width=475></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>[Transform](./Methods/ResampleSamplesCountBased-100663829.md) ( [`Signature`](./../../../Signature.md) )</sub>| <sub></sub>| <br>


