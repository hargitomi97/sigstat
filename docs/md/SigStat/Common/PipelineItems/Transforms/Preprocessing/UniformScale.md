# [UniformScale](./UniformScale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

## Constructors

NameSummary

<div style="text-align: right"><sub></sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>BaseDimension</sub></ div ><div style="text-align: right"><sub>Gets or sets the base dimension.</sub></ div ><br>
<div style="text-align: right"><sub>BaseDimensionOutput</sub></ div ><div style="text-align: right"><sub>Gets or sets the output base dimension output.</sub></ div ><br>
<div style="text-align: right"><sub>NewMaxBaseValue</sub></ div ><div style="text-align: right"><sub>Upper bound of the interval, in which the base dimension will be scaled</sub></ div ><br>
<div style="text-align: right"><sub>NewMinBaseValue</sub></ div ><div style="text-align: right"><sub>Lower bound of the interval, in which the base dimension will be scaled</sub></ div ><br>
<div style="text-align: right"><sub>NewMinProportionalValue</sub></ div ><div style="text-align: right"><sub>Lower bound of the interval, in which the proportional dimension will be scaled</sub></ div ><br>
<div style="text-align: right"><sub>ProportionalDimension</sub></ div ><div style="text-align: right"><sub>Gets or sets the ProportionalDimension.</sub></ div ><br>
<div style="text-align: right"><sub>ProportionalDimensionOutput</sub></ div ><div style="text-align: right"><sub>Gets or sets the output proportional dimension output.</sub></ div ><br>


## Methods

NameSummary

<div style="text-align: right"><sub>[Transform](./Methods/UniformScale-100663843.md) ( [`Signature`](./../../../Signature.md) )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


