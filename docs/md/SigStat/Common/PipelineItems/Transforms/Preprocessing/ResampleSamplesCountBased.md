# [ResampleSamplesCountBased](./ResampleSamplesCountBased.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Resamples an online signature to a specific sample count using the specified [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm

## Constructors

NameSummary

<div style="text-align: right"><sub></sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>InputFeatures</sub></ div ><div style="text-align: right"><sub>Gets or sets the input features.</sub></ div ><br>
<div style="text-align: right"><sub>InterpolationType</sub></ div ><div style="text-align: right"><sub>Gets or sets the type of the interpolation. <seealso cref="T:SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation" /></sub></ div ><br>
<div style="text-align: right"><sub>NumOfSamples</sub></ div ><div style="text-align: right"><sub>Gets or sets the number of samples.</sub></ div ><br>
<div style="text-align: right"><sub>OriginalTFeature</sub></ div ><div style="text-align: right"><sub>Gets or sets the input timestamp feature.</sub></ div ><br>
<div style="text-align: right"><sub>OutputFeatures</sub></ div ><div style="text-align: right"><sub>Gets or sets the resampled  features.</sub></ div ><br>
<div style="text-align: right"><sub>ResampledTFeature</sub></ div ><div style="text-align: right"><sub>Gets or sets the resampled timestamp feature.</sub></ div ><br>


## Methods

NameSummary

<div style="text-align: right"><sub>[Transform](./Methods/ResampleSamplesCountBased-100663801.md) ( [`Signature`](./../../../Signature.md) )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


