# [ResampleSamplesCountBased](./ResampleSamplesCountBased.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Resamples an online signature to a specific sample count using the specified [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm

## Constructors

NameSummary

<sub></sub><br><sub></sub><br>


## Properties

TypeNameSummary

<sub>InputFeatures</sub><br><sub>Gets or sets the input features.</sub><br><br>
<sub>InterpolationType</sub><br><sub>Gets or sets the type of the interpolation. <seealso cref="T:SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation" /></sub><br><br>
<sub>NumOfSamples</sub><br><sub>Gets or sets the number of samples.</sub><br><br>
<sub>OriginalTFeature</sub><br><sub>Gets or sets the input timestamp feature.</sub><br><br>
<sub>OutputFeatures</sub><br><sub>Gets or sets the resampled  features.</sub><br><br>
<sub>ResampledTFeature</sub><br><sub>Gets or sets the resampled timestamp feature.</sub><br><br>


## Methods

NameSummary

<sub>[Transform](./Methods/ResampleSamplesCountBased-100663801.md) ( [`Signature`](./../../../Signature.md) )</sub><br><sub></sub><br>


