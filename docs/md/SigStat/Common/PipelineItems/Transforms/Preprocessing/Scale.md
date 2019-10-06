# <sub>[Scale](./Scale.md)</sub>

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../../../ILoggerObject.md)</sub>, <sub>[IProgress](./../../../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../../../Pipeline/IPipelineIO.md)</sub>, <sub>[ITransformation](./../../../ITransformation.md)</sub>

## Summary
Maps values of a feature to a specific range.  <br>InputFeature: feature to be scaled.<br>OutputFeature: output feature for scaled InputFeature

## Constructors

| Name | Summary | 

Scale (  )<sub></sub>


## Properties

| Type | Name | Summary | 

<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>InputFeature</sub><sub>Gets or sets the input feature.</sub>
<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub><sub>NewMaxValue</sub><sub><br>NewMaxValue: upper bound of the interval, in which the input feature will be scaled</sub>
<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub><sub>NewMinValue</sub><sub><br>NewMinValue: lower bound of the interval, in which the input feature will be scaled</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>OutputFeature</sub><sub>Gets or sets the output feature.</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/Scale-100663813.md) ( <sub>[`Signature`](./../../../Signature.md)</sub> )</sub><sub></sub>


