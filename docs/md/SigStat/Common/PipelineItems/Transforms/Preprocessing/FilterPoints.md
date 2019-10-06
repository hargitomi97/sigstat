# [FilterPoints](./FilterPoints.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Removes samples based on a criteria from online signature time series

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>FilterPoints (  )</sub></div>| <sub></sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>InputFeatures</sub></div>| <sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) list of all features to resample</sub></div>| <br>
| <div style="width:490px"><sub>KeyFeatureInput</sub></div>| <sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Features.Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub></div>| <br>
| <div style="width:490px"><sub>KeyFeatureOutput</sub></div>| <sub>Resampled output for [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Features.Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub></div>| <br>
| <div style="width:490px"><sub>OutputFeatures</sub></div>| <sub>Resampled output for all input features</sub></div>| <br>
| <div style="width:490px"><sub>Percentile</sub></div>| <sub>The lowes percentile of the [PipelineItems.Transforms.Preprocessing.FilterPoints.KeyFeatureInput](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/FilterPoints.md) will be removed during filtering</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>[Transform](./Methods/FilterPoints-100663753.md) ( [`Signature`](./../../../Signature.md) )</sub></div>| <sub></sub></div>| <br>


