# [UniformScale](./UniformScale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

## Constructors

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>UniformScale (  )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub></sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>BaseDimension</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Gets or sets the base dimension.</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>BaseDimensionOutput</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Gets or sets the output base dimension output.</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>NewMaxBaseValue</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Upper bound of the interval, in which the base dimension will be scaled</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>NewMinBaseValue</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Lower bound of the interval, in which the base dimension will be scaled</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>NewMinProportionalValue</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Lower bound of the interval, in which the proportional dimension will be scaled</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>ProportionalDimension</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Gets or sets the ProportionalDimension.</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>ProportionalDimensionOutput</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Gets or sets the output proportional dimension output.</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>[Transform](./Methods/UniformScale-100663886.md) ( [`Signature`](./../../../Signature.md) )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub></sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


