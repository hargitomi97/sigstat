# [FillPenUpDurations](./FillPenUpDurations.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>FillPenUpDurations (  )</sub><div style="pointer-events:none; cursor:default; width=200;"></div>| <sub></sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>InputFeatures</sub><div style="pointer-events:none; cursor:default; width=200;"></div>| <sub>Gets or sets the features of an online signature that need to be altered</sub>| <br>
| <sub>InterpolationType</sub><div style="pointer-events:none; cursor:default; width=200;"></div>| <sub>An implementation of [IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md)</sub>| <br>
| <sub>OutputFeatures</sub><div style="pointer-events:none; cursor:default; width=200;"></div>| <sub>Gets or sets the features of an online signature that were altered</sub>| <br>
| <sub>TimeInputFeature</sub><div style="pointer-events:none; cursor:default; width=200;"></div>| <sub>Gets or sets the feature representing the timestamps of an online signature</sub>| <br>
| <sub>TimeOutputFeature</sub><div style="pointer-events:none; cursor:default; width=200;"></div>| <sub>Gets or sets the feature representing the modified timestamps of an online signature</sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/FillPenUpDurations-100663741.md) ( [`Signature`](./../../../Signature.md) )</sub><div style="pointer-events:none; cursor:default; width=200;"></div>| <sub></sub>| <br>


