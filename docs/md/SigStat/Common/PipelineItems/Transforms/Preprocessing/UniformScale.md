# [UniformScale](./UniformScale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

## Constructors

NameSummary

<sub></sub><br><sub></sub><br>


## Properties

TypeNameSummary

<sub>BaseDimension</sub><br><sub>Gets or sets the base dimension.</sub><br><br>
<sub>BaseDimensionOutput</sub><br><sub>Gets or sets the output base dimension output.</sub><br><br>
<sub>NewMaxBaseValue</sub><br><sub>Upper bound of the interval, in which the base dimension will be scaled</sub><br><br>
<sub>NewMinBaseValue</sub><br><sub>Lower bound of the interval, in which the base dimension will be scaled</sub><br><br>
<sub>NewMinProportionalValue</sub><br><sub>Lower bound of the interval, in which the proportional dimension will be scaled</sub><br><br>
<sub>ProportionalDimension</sub><br><sub>Gets or sets the ProportionalDimension.</sub><br><br>
<sub>ProportionalDimensionOutput</sub><br><sub>Gets or sets the output proportional dimension output.</sub><br><br>


## Methods

NameSummary

<sub>[Transform](./Methods/UniformScale-100663843.md) ( [`Signature`](./../../../Signature.md) )</sub><br><sub></sub><br>


