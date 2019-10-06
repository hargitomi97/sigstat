# [FillPenUpDurations](./FillPenUpDurations.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub></sub><img width=200/>  | <sub></sub><img width=200/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>InputFeatures</sub><img width=200/>  | <sub>Gets or sets the features of an online signature that need to be altered</sub><img width=200/>  | <br>
| <sub>InterpolationType</sub><img width=200/>  | <sub>An implementation of [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md)</sub><img width=200/>  | <br>
| <sub>OutputFeatures</sub><img width=200/>  | <sub>Gets or sets the features of an online signature that were altered</sub><img width=200/>  | <br>
| <sub>TimeInputFeature</sub><img width=200/>  | <sub>Gets or sets the feature representing the timestamps of an online signature</sub><img width=200/>  | <br>
| <sub>TimeOutputFeature</sub><img width=200/>  | <sub>Gets or sets the feature representing the modified timestamps of an online signature</sub><img width=200/>  | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/FillPenUpDurations-100663739.md) ( [`Signature`](./../../../Signature.md) )</sub><img width=200/>  | <sub></sub><img width=200/>  | <br>


