# [FilterPoints](./FilterPoints.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Removes samples based on a criteria from online signature time series

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>FilterPoints (  )</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub></sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>InputFeatures</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) list of all features to resample</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>KeyFeatureInput</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Features.Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>KeyFeatureOutput</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Resampled output for [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Features.Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>OutputFeatures</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Resampled output for all input features</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>Percentile</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>The lowes percentile of the [PipelineItems.Transforms.Preprocessing.FilterPoints.KeyFeatureInput](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/FilterPoints.md) will be removed during filtering</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/FilterPoints-100663753.md) ( [`Signature`](./../../../Signature.md) )</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub></sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


