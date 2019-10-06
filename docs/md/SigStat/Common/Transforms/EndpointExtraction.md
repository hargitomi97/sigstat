# <sub>[EndpointExtraction](./EndpointExtraction.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../ILoggerObject.md)</sub>, <sub>[IProgress](./../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../Pipeline/IPipelineIO.md)</sub>, <sub>[ITransformation](./../ITransformation.md)</sub>

## Summary
Extracts EndPoints and CrossingPoints from Skeleton.  <br>Default Pipeline Input: (bool[,]) Skeleton<br>Default Pipeline Output: (List{Point}) EndPoints, (List{Point}) CrossingPoints

## Constructors

| Name | Summary | 

EndpointExtraction (  )<sub></sub>


## Properties

| Type | Name | Summary | 

<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point)</sub>>><sub>OutputCrossingPoints</sub><sub>OutputCrossingPoints</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point)</sub>>><sub>OutputEndpoints</sub><sub>OutputEndpoints</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]</sub>><sub>Skeleton</sub><sub>Binary representation of an image</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/EndpointExtraction-100663588.md) ( <sub>[`Signature`](./../Signature.md)</sub> )</sub><sub></sub>


