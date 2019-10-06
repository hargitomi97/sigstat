# <sub>[NormalizeRotation](./NormalizeRotation.md)</sub>

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../../../ILoggerObject.md)</sub>, <sub>[IProgress](./../../../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../../../Pipeline/IPipelineIO.md)</sub>, <sub>[ITransformation](./../../../ITransformation.md)</sub>

## Summary
Performs rotation normalization on the online signature

## Constructors

| Name | Summary | 

NormalizeRotation (  )<sub></sub>


## Properties

| Type | Name | Summary | 

<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>InputT</sub><sub>Gets or sets the input feature representing the timestamps of an online signature</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>InputX</sub><sub>Gets or sets the input feature representing the X coordinates of an online signature</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>InputY</sub><sub>Gets or sets the input feature representing the Y coordinates of an online signature</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>OutputX</sub><sub>Gets or sets the output feature representing the X coordinates of an online signature</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>OutputY</sub><sub>Gets or sets the input feature representing the Y coordinates of an online signature</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/NormalizeRotation-100663777.md) ( <sub>[`Signature`](./../../../Signature.md)</sub> )</sub><sub></sub>


