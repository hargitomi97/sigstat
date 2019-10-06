# [FillPenUpDurations](./FillPenUpDurations.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.

## Constructors

NameSummary

<div style="text-align: right"><sub></sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>InputFeatures</sub></ div ><div style="text-align: right"><sub>Gets or sets the features of an online signature that need to be altered</sub></ div ><br>
<div style="text-align: right"><sub>InterpolationType</sub></ div ><div style="text-align: right"><sub>An implementation of [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md)</sub></ div ><br>
<div style="text-align: right"><sub>OutputFeatures</sub></ div ><div style="text-align: right"><sub>Gets or sets the features of an online signature that were altered</sub></ div ><br>
<div style="text-align: right"><sub>TimeInputFeature</sub></ div ><div style="text-align: right"><sub>Gets or sets the feature representing the timestamps of an online signature</sub></ div ><br>
<div style="text-align: right"><sub>TimeOutputFeature</sub></ div ><div style="text-align: right"><sub>Gets or sets the feature representing the modified timestamps of an online signature</sub></ div ><br>


## Methods

NameSummary

<div style="text-align: right"><sub>[Transform](./Methods/FillPenUpDurations-100663739.md) ( [`Signature`](./../../../Signature.md) )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


