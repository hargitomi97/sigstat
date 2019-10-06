# [FillPenUpDurations](./FillPenUpDurations.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>FillPenUpDurations (  )</sub><div style="width: 290px"> | <sub></sub><div style="width: 290px"> | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>InputFeatures</sub><div style="width: 290px"> | <sub>Gets or sets the features of an online signature that need to be altered</sub><div style="width: 290px"> | <br>
| <sub>InterpolationType</sub><div style="width: 290px"> | <sub>An implementation of [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md)</sub><div style="width: 290px"> | <br>
| <sub>OutputFeatures</sub><div style="width: 290px"> | <sub>Gets or sets the features of an online signature that were altered</sub><div style="width: 290px"> | <br>
| <sub>TimeInputFeature</sub><div style="width: 290px"> | <sub>Gets or sets the feature representing the timestamps of an online signature</sub><div style="width: 290px"> | <br>
| <sub>TimeOutputFeature</sub><div style="width: 290px"> | <sub>Gets or sets the feature representing the modified timestamps of an online signature</sub><div style="width: 290px"> | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/FillPenUpDurations-100663739.md) ( [`Signature`](./../../../Signature.md) )</sub><div style="width: 290px"> | <sub></sub><div style="width: 290px"> | <br>


