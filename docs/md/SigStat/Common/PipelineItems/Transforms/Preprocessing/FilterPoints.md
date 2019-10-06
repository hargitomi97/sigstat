# [FilterPoints](./FilterPoints.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Removes samples based on a criteria from online signature time series

## Constructors

| Name | Summary | 
| --- | --- | 
| FilterPoints (  )<div style="width: 400px">| <div style="width: 400px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| InputFeatures<div style="width: 400px">| [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) list of all features to resample<div style="width: 400px">| <br>
| KeyFeatureInput<div style="width: 400px">| [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Features.Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))<div style="width: 400px">| <br>
| KeyFeatureOutput<div style="width: 400px">| Resampled output for [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Features.Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))<div style="width: 400px">| <br>
| OutputFeatures<div style="width: 400px">| Resampled output for all input features<div style="width: 400px">| <br>
| Percentile<div style="width: 400px">| The lowes percentile of the [PipelineItems.Transforms.Preprocessing.FilterPoints.KeyFeatureInput](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/FilterPoints.md) will be removed during filtering<div style="width: 400px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Transform](./Methods/FilterPoints-100663753.md) ( [`Signature`](./../../../Signature.md) )<div style="width: 400px">| <div style="width: 400px">| <br>


