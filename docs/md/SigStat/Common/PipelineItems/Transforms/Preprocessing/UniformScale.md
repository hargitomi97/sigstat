# [UniformScale](./UniformScale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>UniformScale (  )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>BaseDimension</sub></div>| <div style="width:290px"><sub>Gets or sets the base dimension.</sub></div>| <br>
| <div style="width:290px"><sub>BaseDimensionOutput</sub></div>| <div style="width:290px"><sub>Gets or sets the output base dimension output.</sub></div>| <br>
| <div style="width:290px"><sub>NewMaxBaseValue</sub></div>| <div style="width:290px"><sub>Upper bound of the interval, in which the base dimension will be scaled</sub></div>| <br>
| <div style="width:290px"><sub>NewMinBaseValue</sub></div>| <div style="width:290px"><sub>Lower bound of the interval, in which the base dimension will be scaled</sub></div>| <br>
| <div style="width:290px"><sub>NewMinProportionalValue</sub></div>| <div style="width:290px"><sub>Lower bound of the interval, in which the proportional dimension will be scaled</sub></div>| <br>
| <div style="width:290px"><sub>ProportionalDimension</sub></div>| <div style="width:290px"><sub>Gets or sets the ProportionalDimension.</sub></div>| <br>
| <div style="width:290px"><sub>ProportionalDimensionOutput</sub></div>| <div style="width:290px"><sub>Gets or sets the output proportional dimension output.</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>[Transform](./Methods/UniformScale-100663843.md) ( [`Signature`](./../../../Signature.md) )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>


