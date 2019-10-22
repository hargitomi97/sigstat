# [ResampleSamplesCountBased](./ResampleSamplesCountBased.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Resamples an online signature to a specific sample count using the specified [IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm

## Constructors

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| ResampleSamplesCountBased (  ) |  | 


## Properties

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| InputFeatures | Gets or sets the input features. | 
| InterpolationType | Gets or sets the type of the interpolation. <seealso cref="T:SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation" /> | 
| NumOfSamples | Gets or sets the number of samples. | 
| OriginalTFeature | Gets or sets the input timestamp feature. | 
| OutputFeatures | Gets or sets the resampled  features. | 
| ResampledTFeature | Gets or sets the resampled timestamp feature. | 


## Methods

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| [Transform](./Methods/ResampleSamplesCountBased--Transform.md) ( [`Signature`](./../../../Signature.md) ) |  | 


