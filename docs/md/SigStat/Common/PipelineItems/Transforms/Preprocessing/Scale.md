# [Scale](./Scale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
<sub>Maps values of a feature to a specific range.  <br>InputFeature: feature to be scaled.<br>OutputFeature: output feature for scaled InputFeature</sub>

## Constructors

| Name | Summary | 
| --- | --- | 
| Scale (  ) |  | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | InputFeature | <sub>Gets or sets the input feature.</sub> | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | NewMaxValue | <sub><br>NewMaxValue: upper bound of the interval, in which the input feature will be scaled</sub> | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | NewMinValue | <sub><br>NewMinValue: lower bound of the interval, in which the input feature will be scaled</sub> | 
| [FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | OutputFeature | <sub>Gets or sets the output feature.</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Transform](./Methods/Scale-100663813.md) ( [`Signature`](./../../../Signature.md) ) |  | 


