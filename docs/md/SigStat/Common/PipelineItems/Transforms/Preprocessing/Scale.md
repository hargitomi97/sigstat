# [Scale](./Scale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range.  <br>InputFeature: feature to be scaled.<br>OutputFeature: output feature for scaled InputFeature

## Constructors

| Name | Summary | 
| --- | --- | 
| <p style="line-height: 10%;">&nbsp;</p><sub>Scale (  )</sub><p style="line-height: 10%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="line-height: 10%;">&nbsp;</p><sub></sub><p style="line-height: 10%;">&nbsp;</p>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <p style="line-height: 10%;">&nbsp;</p><sub>InputFeature</sub><p style="line-height: 10%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="line-height: 10%;">&nbsp;</p><sub>Gets or sets the input feature.</sub><p style="line-height: 10%;">&nbsp;</p>| <br>
| <p style="line-height: 10%;">&nbsp;</p><sub>NewMaxValue</sub><p style="line-height: 10%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="line-height: 10%;">&nbsp;</p><sub><br>NewMaxValue: upper bound of the interval, in which the input feature will be scaled</sub><p style="line-height: 10%;">&nbsp;</p>| <br>
| <p style="line-height: 10%;">&nbsp;</p><sub>NewMinValue</sub><p style="line-height: 10%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="line-height: 10%;">&nbsp;</p><sub><br>NewMinValue: lower bound of the interval, in which the input feature will be scaled</sub><p style="line-height: 10%;">&nbsp;</p>| <br>
| <p style="line-height: 10%;">&nbsp;</p><sub>OutputFeature</sub><p style="line-height: 10%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="line-height: 10%;">&nbsp;</p><sub>Gets or sets the output feature.</sub><p style="line-height: 10%;">&nbsp;</p>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <p style="line-height: 10%;">&nbsp;</p><sub>[Transform](./Methods/Scale-100663855.md) ( [`Signature`](./../../../Signature.md) )</sub><p style="line-height: 10%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="line-height: 10%;">&nbsp;</p><sub></sub><p style="line-height: 10%;">&nbsp;</p>| <br>


