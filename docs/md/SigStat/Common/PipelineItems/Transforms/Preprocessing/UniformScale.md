# [UniformScale](./UniformScale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

## Constructors

| Name | Summary | 
| --- | --- | 
| UniformScale (  )<div style="width: 200px">| <div style="width: 200px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| BaseDimension<div style="width: 200px">| Gets or sets the base dimension.<div style="width: 200px">| <br>
| BaseDimensionOutput<div style="width: 200px">| Gets or sets the output base dimension output.<div style="width: 200px">| <br>
| NewMaxBaseValue<div style="width: 200px">| Upper bound of the interval, in which the base dimension will be scaled<div style="width: 200px">| <br>
| NewMinBaseValue<div style="width: 200px">| Lower bound of the interval, in which the base dimension will be scaled<div style="width: 200px">| <br>
| NewMinProportionalValue<div style="width: 200px">| Lower bound of the interval, in which the proportional dimension will be scaled<div style="width: 200px">| <br>
| ProportionalDimension<div style="width: 200px">| Gets or sets the ProportionalDimension.<div style="width: 200px">| <br>
| ProportionalDimensionOutput<div style="width: 200px">| Gets or sets the output proportional dimension output.<div style="width: 200px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Transform](./Methods/UniformScale-100663843.md) ( [`Signature`](./../../../Signature.md) )<div style="width: 200px">| <div style="width: 200px">| <br>


