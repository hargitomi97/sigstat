# [FilterPoints](./FilterPoints.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Removes samples based on a criteria from online signature time series

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>FilterPoints (  )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>InputFeatures</sub></div>| <div style="width:290px"><sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) list of all features to resample</sub></div>| <br>
| <div style="width:290px"><sub>KeyFeatureInput</sub></div>| <div style="width:290px"><sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Features.Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub></div>| <br>
| <div style="width:290px"><sub>KeyFeatureOutput</sub></div>| <div style="width:290px"><sub>Resampled output for [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Features.Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub></div>| <br>
| <div style="width:290px"><sub>OutputFeatures</sub></div>| <div style="width:290px"><sub>Resampled output for all input features</sub></div>| <br>
| <div style="width:290px"><sub>Percentile</sub></div>| <div style="width:290px"><sub>The lowes percentile of the [PipelineItems.Transforms.Preprocessing.FilterPoints.KeyFeatureInput](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/FilterPoints.md) will be removed during filtering</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>[Transform](./Methods/FilterPoints-100663753.md) ( [`Signature`](./../../../Signature.md) )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>


