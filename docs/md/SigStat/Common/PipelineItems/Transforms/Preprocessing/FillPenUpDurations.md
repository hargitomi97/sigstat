# [FillPenUpDurations](./FillPenUpDurations.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>FillPenUpDurations (  )</sub> | <sub></sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>InputFeatures</sub> | <sub>Gets or sets the features of an online signature that need to be altered</sub> | 
| <sub>InterpolationType</sub> | <sub>An implementation of [IInterpolation](../../../../../SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md)</sub> | 
| <sub>OutputFeatures</sub> | <sub>Gets or sets the features of an online signature that were altered</sub> | 
| <sub>TimeInputFeature</sub> | <sub>Gets or sets the feature representing the timestamps of an online signature</sub> | 
| <sub>TimeOutputFeature</sub> | <sub>Gets or sets the feature representing the modified timestamps of an online signature</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[Transform](./Methods/FillPenUpDurations--Transform.md) ( [`Signature`](./../../../Signature.md) )</sub> | <sub></sub> | 


