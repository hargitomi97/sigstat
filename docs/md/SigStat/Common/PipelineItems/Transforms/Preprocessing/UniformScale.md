# <sub>[UniformScale](./UniformScale.md)</sub>

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../../../ILoggerObject.md)</sub>, <sub>[IProgress](./../../../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../../../Pipeline/IPipelineIO.md)</sub>, <sub>[ITransformation](./../../../ITransformation.md)</sub>

## Summary
Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

## Constructors

| Name | Summary | 

UniformScale (  )<sub></sub>


## Properties

| Type | Name | Summary | 

<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>BaseDimension</sub><sub>Gets or sets the base dimension.</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>BaseDimensionOutput</sub><sub>Gets or sets the output base dimension output.</sub>
<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub><sub>NewMaxBaseValue</sub><sub>Upper bound of the interval, in which the base dimension will be scaled</sub>
<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub><sub>NewMinBaseValue</sub><sub>Lower bound of the interval, in which the base dimension will be scaled</sub>
<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub><sub>NewMinProportionalValue</sub><sub>Lower bound of the interval, in which the proportional dimension will be scaled</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>ProportionalDimension</sub><sub>Gets or sets the ProportionalDimension.</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>ProportionalDimensionOutput</sub><sub>Gets or sets the output proportional dimension output.</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/UniformScale-100663843.md) ( <sub>[`Signature`](./../../../Signature.md)</sub> )</sub><sub></sub>


