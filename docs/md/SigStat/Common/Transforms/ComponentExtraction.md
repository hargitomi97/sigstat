# [ComponentExtraction](./ComponentExtraction.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Extracts unsorted components by tracing through the binary Skeleton raster.  <br>Default Pipeline Input: (bool[,]) Skeleton, (List{Point}) EndPoints, (List{Point}) CrossingPoints<br>Default Pipeline Output: (List{List{PointF}}) Components

## Constructors

| Name | Summary | 
| --- | --- | 
| [ComponentExtraction](./../../../ctor/ComponentExtraction-100663564.md) ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) samplingResolution ) | Initializes a new instance of the `SigStat.Common.Transforms.ComponentExtraction` class with specified sampling resolution. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point)>> | CrossingPoints | crossing points | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point)>> | EndPoints | endpoints | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[PointF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.PointF)>>> | OutputComponents | Output components | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | Skeleton | binary representation of a signature image | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [Transform](./Methods/ComponentExtraction-100663565.md) ( [`Signature`](./../Signature.md) signature ) |  | 


