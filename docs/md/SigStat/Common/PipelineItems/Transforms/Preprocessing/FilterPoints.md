# [FilterPoints](./FilterPoints.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Removes samples based on a criteria from online signature time series

## Constructors

| Name<div><a href="#"><img width=160></a></div> | Summary<div><a href="#"><img width=400></a></div> | 
| --- | --- | 
| <sub>FilterPoints (  )</sub>| <sub></sub>| <br>


## Properties

| Name<div><a href="#"><img width=160></a></div> | Summary<div><a href="#"><img width=400></a></div> | 
| --- | --- | 
| <sub>InputFeatures</sub>| <sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) list of all features to resample</sub>| <br>
| <sub>KeyFeatureInput</sub>| <sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub>| <br>
| <sub>KeyFeatureOutput</sub>| <sub>Resampled output for [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub>| <br>
| <sub>OutputFeatures</sub>| <sub>Resampled output for all input features</sub>| <br>
| <sub>Percentile</sub>| <sub>The lowes percentile of the [KeyFeatureInput](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/FilterPoints.md) will be removed during filtering</sub>| <br>


## Methods

| Name<div><a href="#"><img width=160></a></div> | Summary<div><a href="#"><img width=400></a></div> | 
| --- | --- | 
| <sub>[Transform](./Methods/FilterPoints-100663755.md) ( [`Signature`](./../../../Signature.md) )</sub>| <sub></sub>| <br>


