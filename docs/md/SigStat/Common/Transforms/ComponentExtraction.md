# <sub>[ComponentExtraction](./ComponentExtraction.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../ILoggerObject.md)</sub>, <sub>[IProgress](./../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../Pipeline/IPipelineIO.md)</sub>, <sub>[ITransformation](./../ITransformation.md)</sub>

## Summary
Extracts unsorted components by tracing through the binary Skeleton raster.  <br>Default Pipeline Input: (bool[,]) Skeleton, (List{Point}) EndPoints, (List{Point}) CrossingPoints<br>Default Pipeline Output: (List{List{PointF}}) Components

## Constructors

| Name | Summary | 

ComponentExtraction ( <sub>[`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)</sub> )<sub>Initializes a new instance of the [Transforms.ComponentExtraction](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ComponentExtraction.md) class with specified sampling resolution.</sub>


## Properties

| Type | Name | Summary | 

<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point)</sub>>><sub>CrossingPoints</sub><sub>crossing points</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point)</sub>>><sub>EndPoints</sub><sub>endpoints</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[PointF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.PointF)</sub>>>><sub>OutputComponents</sub><sub>Output components</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]</sub>><sub>Skeleton</sub><sub>binary representation of a signature image</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/ComponentExtraction-100663565.md) ( <sub>[`Signature`](./../Signature.md)</sub> )</sub><sub></sub>


