# [UniformScale](./UniformScale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>UniformScale (  )</sub><div style="width: 200px">| <sub></sub><div style="width: 200px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>BaseDimension</sub><div style="width: 200px">| <sub>Gets or sets the base dimension.</sub><div style="width: 200px">| <br>
| <sub>BaseDimensionOutput</sub><div style="width: 200px">| <sub>Gets or sets the output base dimension output.</sub><div style="width: 200px">| <br>
| <sub>NewMaxBaseValue</sub><div style="width: 200px">| <sub>Upper bound of the interval, in which the base dimension will be scaled</sub><div style="width: 200px">| <br>
| <sub>NewMinBaseValue</sub><div style="width: 200px">| <sub>Lower bound of the interval, in which the base dimension will be scaled</sub><div style="width: 200px">| <br>
| <sub>NewMinProportionalValue</sub><div style="width: 200px">| <sub>Lower bound of the interval, in which the proportional dimension will be scaled</sub><div style="width: 200px">| <br>
| <sub>ProportionalDimension</sub><div style="width: 200px">| <sub>Gets or sets the ProportionalDimension.</sub><div style="width: 200px">| <br>
| <sub>ProportionalDimensionOutput</sub><div style="width: 200px">| <sub>Gets or sets the output proportional dimension output.</sub><div style="width: 200px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/UniformScale-100663843.md) ( [`Signature`](./../../../Signature.md) )</sub><div style="width: 200px">| <sub></sub><div style="width: 200px">| <br>


