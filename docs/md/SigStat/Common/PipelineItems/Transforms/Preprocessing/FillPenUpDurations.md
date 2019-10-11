# [FillPenUpDurations](./FillPenUpDurations.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.

## Constructors

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>FillPenUpDurations (  )</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>InputFeatures</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Gets or sets the features of an online signature that need to be altered</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>InterpolationType</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>An implementation of [IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md)</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>OutputFeatures</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Gets or sets the features of an online signature that were altered</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>TimeInputFeature</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Gets or sets the feature representing the timestamps of an online signature</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>TimeOutputFeature</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Gets or sets the feature representing the modified timestamps of an online signature</sub><p>&nbsp;</p>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>[Transform](./Methods/FillPenUpDurations-100663741.md) ( [`Signature`](./../../../Signature.md) )</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>


