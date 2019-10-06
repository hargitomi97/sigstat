# [EndpointExtraction](./EndpointExtraction.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Extracts EndPoints and CrossingPoints from Skeleton.  <br>Default Pipeline Input: (bool[,]) Skeleton<br>Default Pipeline Output: (List{Point}) EndPoints, (List{Point}) CrossingPoints

## Constructors

| Name | Summary | 

EndpointExtraction (  )<sub></sub>


## Properties

| Type | Name | Summary | 

<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point)>></sub><sub>OutputCrossingPoints</sub><sub>OutputCrossingPoints</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point)>></sub><sub>OutputEndpoints</sub><sub>OutputEndpoints</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]></sub><sub>Skeleton</sub><sub>Binary representation of an image</sub>


## Methods

| Return | Name | Summary | 

<sub>[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)</sub><sub>[Transform](./Methods/EndpointExtraction-100663588.md) ( [`Signature`](./../Signature.md) )</sub><sub></sub>


