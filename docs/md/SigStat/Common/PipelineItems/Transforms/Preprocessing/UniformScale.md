# [UniformScale](./UniformScale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>UniformScale (  )</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub></sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>BaseDimension</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Gets or sets the base dimension.</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>BaseDimensionOutput</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Gets or sets the output base dimension output.</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>NewMaxBaseValue</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Upper bound of the interval, in which the base dimension will be scaled</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>NewMinBaseValue</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Lower bound of the interval, in which the base dimension will be scaled</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>NewMinProportionalValue</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Lower bound of the interval, in which the proportional dimension will be scaled</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>ProportionalDimension</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Gets or sets the ProportionalDimension.</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>ProportionalDimensionOutput</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Gets or sets the output proportional dimension output.</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/UniformScale-100663843.md) ( [`Signature`](./../../../Signature.md) )</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub></sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


