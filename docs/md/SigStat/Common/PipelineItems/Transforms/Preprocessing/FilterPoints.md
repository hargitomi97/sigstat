# [FilterPoints](./FilterPoints.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Removes samples based on a criteria from online signature time series

## Constructors

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>FilterPoints (  )</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>InputFeatures</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) list of all features to resample</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>KeyFeatureInput</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>[FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>KeyFeatureOutput</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Resampled output for [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) that controls the removal of samples (e.g. [Pressure](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>OutputFeatures</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Resampled output for all input features</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>Percentile</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>The lowes percentile of the [KeyFeatureInput](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/FilterPoints.md) will be removed during filtering</sub><p>&nbsp;</p>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>[Transform](./Methods/FilterPoints-100663755.md) ( [`Signature`](./../../../Signature.md) )</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>


