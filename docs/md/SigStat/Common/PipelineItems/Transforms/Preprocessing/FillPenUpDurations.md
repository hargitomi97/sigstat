# <sub>[FillPenUpDurations](./FillPenUpDurations.md)</sub>

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../../../ILoggerObject.md)</sub>, <sub>[IProgress](./../../../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../../../Pipeline/IPipelineIO.md)</sub>, <sub>[ITransformation](./../../../ITransformation.md)</sub>

## Summary
This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.

## Constructors

| Name | Summary | 

FillPenUpDurations (  )<sub></sub>


## Properties

| Type | Name | Summary | 

<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>>><sub>InputFeatures</sub><sub>Gets or sets the features of an online signature that need to be altered</sub>
<sub>[Type](https://docs.microsoft.com/en-us/dotnet/api/System.Type)</sub><sub>InterpolationType</sub><sub>An implementation of [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md)</sub>
<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>>><sub>OutputFeatures</sub><sub>Gets or sets the features of an online signature that were altered</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>TimeInputFeature</sub><sub>Gets or sets the feature representing the timestamps of an online signature</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>TimeOutputFeature</sub><sub>Gets or sets the feature representing the modified timestamps of an online signature</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/FillPenUpDurations-100663739.md) ( <sub>[`Signature`](./../../../Signature.md)</sub> )</sub><sub></sub>


