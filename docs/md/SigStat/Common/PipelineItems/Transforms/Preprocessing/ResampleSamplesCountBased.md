# [ResampleSamplesCountBased](./ResampleSamplesCountBased.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Resamples an online signature to a specific sample count using the specified [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm

## Constructors

| Name | Summary | 
| --- | --- | 
| ResampleSamplesCountBased (  )<div style="width: 200px">| <div style="width: 200px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| InputFeatures<div style="width: 200px">| Gets or sets the input features.<div style="width: 200px">| <br>
| InterpolationType<div style="width: 200px">| Gets or sets the type of the interpolation. <seealso cref="T:SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation" /><div style="width: 200px">| <br>
| NumOfSamples<div style="width: 200px">| Gets or sets the number of samples.<div style="width: 200px">| <br>
| OriginalTFeature<div style="width: 200px">| Gets or sets the input timestamp feature.<div style="width: 200px">| <br>
| OutputFeatures<div style="width: 200px">| Gets or sets the resampled  features.<div style="width: 200px">| <br>
| ResampledTFeature<div style="width: 200px">| Gets or sets the resampled timestamp feature.<div style="width: 200px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Transform](./Methods/ResampleSamplesCountBased-100663801.md) ( [`Signature`](./../../../Signature.md) )<div style="width: 200px">| <div style="width: 200px">| <br>


