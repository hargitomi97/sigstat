# [ResampleSamplesCountBased](./ResampleSamplesCountBased.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Resamples an online signature to a specific sample count using the specified [IInterpolation](../../docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>ResampleSamplesCountBased (  )</sub> | <sub></sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>InputFeatures</sub> | <sub>Gets or sets the input features.</sub> | 
| <sub>InterpolationType</sub> | <sub>Gets or sets the type of the interpolation. <seealso cref="T:SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation" /></sub> | 
| <sub>NumOfSamples</sub> | <sub>Gets or sets the number of samples.</sub> | 
| <sub>OriginalTFeature</sub> | <sub>Gets or sets the input timestamp feature.</sub> | 
| <sub>OutputFeatures</sub> | <sub>Gets or sets the resampled  features.</sub> | 
| <sub>ResampledTFeature</sub> | <sub>Gets or sets the resampled timestamp feature.</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[Transform](./Methods/ResampleSamplesCountBased--Transform.md) ( [`Signature`](./../../../Signature.md) )</sub> | <sub></sub> | 


