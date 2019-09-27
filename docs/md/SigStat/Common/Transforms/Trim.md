# [Trim](./Trim.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Trims unnecessary empty space from a binary raster.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) Trimmed

## Constructors

| Name | Summary | 
| --- | --- | 
| [Trim](./../../../ctor/Trim-100663721.md) ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) framewidth ) |  | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | Input | Input `SigStat.Common.FeatureDescriptor` describing the image of the signature | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | Output | Output `SigStat.Common.FeatureDescriptor` describing the trimed image of the signature | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [Transform](./Methods/Trim-100663722.md) ( [`Signature`](./../Signature.md) signature ) |  | 


