# [UniformScale](./UniformScale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>UniformScale (  )</sub></div>| <sub></sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>BaseDimension</sub></div>| <sub>Gets or sets the base dimension.</sub></div>| <br>
| <div style="width:490px"><sub>BaseDimensionOutput</sub></div>| <sub>Gets or sets the output base dimension output.</sub></div>| <br>
| <div style="width:490px"><sub>NewMaxBaseValue</sub></div>| <sub>Upper bound of the interval, in which the base dimension will be scaled</sub></div>| <br>
| <div style="width:490px"><sub>NewMinBaseValue</sub></div>| <sub>Lower bound of the interval, in which the base dimension will be scaled</sub></div>| <br>
| <div style="width:490px"><sub>NewMinProportionalValue</sub></div>| <sub>Lower bound of the interval, in which the proportional dimension will be scaled</sub></div>| <br>
| <div style="width:490px"><sub>ProportionalDimension</sub></div>| <sub>Gets or sets the ProportionalDimension.</sub></div>| <br>
| <div style="width:490px"><sub>ProportionalDimensionOutput</sub></div>| <sub>Gets or sets the output proportional dimension output.</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>[Transform](./Methods/UniformScale-100663843.md) ( [`Signature`](./../../../Signature.md) )</sub></div>| <sub></sub></div>| <br>


