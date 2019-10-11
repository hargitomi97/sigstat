# [UniformScale](./UniformScale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

## Constructors

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>UniformScale (  )</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>BaseDimension</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Gets or sets the base dimension.</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>BaseDimensionOutput</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Gets or sets the output base dimension output.</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>NewMaxBaseValue</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Upper bound of the interval, in which the base dimension will be scaled</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>NewMinBaseValue</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Lower bound of the interval, in which the base dimension will be scaled</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>NewMinProportionalValue</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Lower bound of the interval, in which the proportional dimension will be scaled</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>ProportionalDimension</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Gets or sets the ProportionalDimension.</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>ProportionalDimensionOutput</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub>Gets or sets the output proportional dimension output.</sub><p>&nbsp;</p>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>[Transform](./Methods/UniformScale-100663886.md) ( [`Signature`](./../../../Signature.md) )</sub><p>&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>


