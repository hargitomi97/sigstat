# [UniformScale](./UniformScale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

## Constructors

| Name | Summary | 

UniformScale (  )<sub></sub>


## Properties

| Type | Name | Summary | 

<sub>BaseDimension</sub><sub>Gets or sets the base dimension.</sub>
<sub>BaseDimensionOutput</sub><sub>Gets or sets the output base dimension output.</sub>
<sub>NewMaxBaseValue</sub><sub>Upper bound of the interval, in which the base dimension will be scaled</sub>
<sub>NewMinBaseValue</sub><sub>Lower bound of the interval, in which the base dimension will be scaled</sub>
<sub>NewMinProportionalValue</sub><sub>Lower bound of the interval, in which the proportional dimension will be scaled</sub>
<sub>ProportionalDimension</sub><sub>Gets or sets the ProportionalDimension.</sub>
<sub>ProportionalDimensionOutput</sub><sub>Gets or sets the output proportional dimension output.</sub>


## Methods

|  | Name | Summary | 

<sub>[Transform](./Methods/UniformScale-100663843.md) ( [`Signature`](./../../../Signature.md) )</sub><sub></sub>


