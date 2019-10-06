# [UniformScale](./UniformScale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>UniformScale (  )</sub><img width=200 unselectable="on"/>  | <sub></sub><img width=200 unselectable="on"/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>BaseDimension</sub><img width=200 unselectable="on"/>  | <sub>Gets or sets the base dimension.</sub><img width=200 unselectable="on"/>  | <br>
| <sub>BaseDimensionOutput</sub><img width=200 unselectable="on"/>  | <sub>Gets or sets the output base dimension output.</sub><img width=200 unselectable="on"/>  | <br>
| <sub>NewMaxBaseValue</sub><img width=200 unselectable="on"/>  | <sub>Upper bound of the interval, in which the base dimension will be scaled</sub><img width=200 unselectable="on"/>  | <br>
| <sub>NewMinBaseValue</sub><img width=200 unselectable="on"/>  | <sub>Lower bound of the interval, in which the base dimension will be scaled</sub><img width=200 unselectable="on"/>  | <br>
| <sub>NewMinProportionalValue</sub><img width=200 unselectable="on"/>  | <sub>Lower bound of the interval, in which the proportional dimension will be scaled</sub><img width=200 unselectable="on"/>  | <br>
| <sub>ProportionalDimension</sub><img width=200 unselectable="on"/>  | <sub>Gets or sets the ProportionalDimension.</sub><img width=200 unselectable="on"/>  | <br>
| <sub>ProportionalDimensionOutput</sub><img width=200 unselectable="on"/>  | <sub>Gets or sets the output proportional dimension output.</sub><img width=200 unselectable="on"/>  | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/UniformScale-100663843.md) ( [`Signature`](./../../../Signature.md) )</sub><img width=200 unselectable="on"/>  | <sub></sub><img width=200 unselectable="on"/>  | <br>


