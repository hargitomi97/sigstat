# [FillPenUpDurations](./FillPenUpDurations.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.

## Constructors

NameSummary

<sub></sub><br><sub></sub><br>


## Properties

TypeNameSummary

<sub>InputFeatures</sub><br><sub>Gets or sets the features of an online signature that need to be altered</sub><br><br>
<sub>InterpolationType</sub><br><sub>An implementation of [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md)</sub><br><br>
<sub>OutputFeatures</sub><br><sub>Gets or sets the features of an online signature that were altered</sub><br><br>
<sub>TimeInputFeature</sub><br><sub>Gets or sets the feature representing the timestamps of an online signature</sub><br><br>
<sub>TimeOutputFeature</sub><br><sub>Gets or sets the feature representing the modified timestamps of an online signature</sub><br><br>


## Methods

NameSummary

<sub>[Transform](./Methods/FillPenUpDurations-100663739.md) ( [`Signature`](./../../../Signature.md) )</sub><br><sub></sub><br>


