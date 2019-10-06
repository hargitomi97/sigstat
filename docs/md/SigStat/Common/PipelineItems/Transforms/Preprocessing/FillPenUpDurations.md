# [FillPenUpDurations](./FillPenUpDurations.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.

## Constructors

| Name | Summary | 
| --- | --- | 
| FillPenUpDurations (  )<div style="width: 400px">| <div style="width: 400px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| InputFeatures<div style="width: 400px">| Gets or sets the features of an online signature that need to be altered<div style="width: 400px">| <br>
| InterpolationType<div style="width: 400px">| An implementation of [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md)<div style="width: 400px">| <br>
| OutputFeatures<div style="width: 400px">| Gets or sets the features of an online signature that were altered<div style="width: 400px">| <br>
| TimeInputFeature<div style="width: 400px">| Gets or sets the feature representing the timestamps of an online signature<div style="width: 400px">| <br>
| TimeOutputFeature<div style="width: 400px">| Gets or sets the feature representing the modified timestamps of an online signature<div style="width: 400px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Transform](./Methods/FillPenUpDurations-100663739.md) ( [`Signature`](./../../../Signature.md) )<div style="width: 400px">| <div style="width: 400px">| <br>


