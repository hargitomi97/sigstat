# [FilterPoints](./FilterPoints.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Removes samples based on a criteria from online signature time series

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>FilterPoints (  )</sub><div style="width: 290px">| <sub></sub><div style="width: 290px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>InputFeatures</sub><div style="width: 290px">| <sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) list of all features to resample</sub><div style="width: 290px">| <br>
| <sub>KeyFeatureInput</sub><div style="width: 290px">| <sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Features.Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub><div style="width: 290px">| <br>
| <sub>KeyFeatureOutput</sub><div style="width: 290px">| <sub>Resampled output for [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Features.Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub><div style="width: 290px">| <br>
| <sub>OutputFeatures</sub><div style="width: 290px">| <sub>Resampled output for all input features</sub><div style="width: 290px">| <br>
| <sub>Percentile</sub><div style="width: 290px">| <sub>The lowes percentile of the [PipelineItems.Transforms.Preprocessing.FilterPoints.KeyFeatureInput](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/FilterPoints.md) will be removed during filtering</sub><div style="width: 290px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/FilterPoints-100663753.md) ( [`Signature`](./../../../Signature.md) )</sub><div style="width: 290px">| <sub></sub><div style="width: 290px">| <br>


