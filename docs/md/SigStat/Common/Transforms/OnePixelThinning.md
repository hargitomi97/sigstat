# [OnePixelThinning](./OnePixelThinning.md)

Namespace: [SigStat]() > [Common]() > [Transforms]()

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Iteratively thins the input binary raster with the `SigStat.Common.Algorithms.OnePixelThinningStep` algorithm.  <para>Pipeline Input type: bool[,]</para><para>Default Pipeline Output: (bool[,]) OnePixelThinningResult </para>

## Constructors

| Name | Summary | 
| --- | --- | 
| OnePixelThinning (  ) |  | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | Input |  | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | Output |  | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | Transform ( [`Signature`](./../Signature.md) ) |  | 

