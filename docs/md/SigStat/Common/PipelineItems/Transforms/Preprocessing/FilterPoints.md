# [FilterPoints](./FilterPoints.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Removes samples based on a criteria from online signature time series

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>FilterPoints (  )</sub> | <sub></sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>InputFeatures</sub> | <sub>[FeatureDescriptor](../../../docs/md/SigStat/Common/FeatureDescriptor.md) list of all features to resample</sub> | 
| <sub>KeyFeatureInput</sub> | <sub>[FeatureDescriptor](../../../docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Pressure](../../../docs/md/SigStat/Common/Features.md))</sub> | 
| <sub>KeyFeatureOutput</sub> | <sub>Resampled output for [FeatureDescriptor](../../../docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Pressure](../../../docs/md/SigStat/Common/Features.md))</sub> | 
| <sub>OutputFeatures</sub> | <sub>Resampled output for all input features</sub> | 
| <sub>Percentile</sub> | <sub>The lowes percentile of the [KeyFeatureInput](../../../docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/FilterPoints.md) will be removed during filtering</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[Transform](./Methods/FilterPoints--Transform.md) ( [`Signature`](./../../../Signature.md) )</sub> | <sub></sub> | 


