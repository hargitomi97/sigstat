# [FilterPoints](./FilterPoints.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Removes samples based on a criteria from online signature time series

## Constructors

NameSummary

<div style="text-align: right"><sub></sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>InputFeatures</sub></ div ><div style="text-align: right"><sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) list of all features to resample</sub></ div ><br>
<div style="text-align: right"><sub>KeyFeatureInput</sub></ div ><div style="text-align: right"><sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Features.Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub></ div ><br>
<div style="text-align: right"><sub>KeyFeatureOutput</sub></ div ><div style="text-align: right"><sub>Resampled output for [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Features.Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub></ div ><br>
<div style="text-align: right"><sub>OutputFeatures</sub></ div ><div style="text-align: right"><sub>Resampled output for all input features</sub></ div ><br>
<div style="text-align: right"><sub>Percentile</sub></ div ><div style="text-align: right"><sub>The lowes percentile of the [PipelineItems.Transforms.Preprocessing.FilterPoints.KeyFeatureInput](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/FilterPoints.md) will be removed during filtering</sub></ div ><br>


## Methods

NameSummary

<div style="text-align: right"><sub>[Transform](./Methods/FilterPoints-100663753.md) ( [`Signature`](./../../../Signature.md) )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


