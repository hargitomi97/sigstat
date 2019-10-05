# [Scale](./Scale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Maps values of a feature to a specific range.  <br>InputFeature: feature to be scaled.<br>OutputFeature: output feature for scaled InputFeature

## Constructors

| Name | Summary | 
| --- | --- | 
| Scale (  ) | <sub></sub> | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | <sub>InputFeature</sub> | <sub>Gets or sets the input feature.</sub> | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | <sub>NewMaxValue</sub> | <sub><br>NewMaxValue: upper bound of the interval, in which the input feature will be scaled</sub> | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | <sub>NewMinValue</sub> | <sub><br>NewMinValue: lower bound of the interval, in which the input feature will be scaled</sub> | 
| [FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | <sub>OutputFeature</sub> | <sub>Gets or sets the output feature.</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | <sub>[Transform](./Methods/Scale-100663813.md) ( [`Signature`](./../../../Signature.md) )</sub> | <sub></sub> | 


