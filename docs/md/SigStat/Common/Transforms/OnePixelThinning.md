# [OnePixelThinning](./OnePixelThinning.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Iteratively thins the input binary raster with the [SigStat.Common.Algorithms.OnePixelThinningStep](../Algorithms/OnePixelThinningStep.md) algorithm.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) OnePixelThinningResult

## Constructors

| Name | Summary | 
| --- | --- | 
| [OnePixelThinning](./../../../ctor/OnePixelThinning-100663683.md) (  ) |  | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | Input | Input [SigStat.Common.FeatureDescriptor](./FeatureDescriptor.md) for the binary image of the signature | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | Output | Output [SigStat.Common.FeatureDescriptor](./FeatureDescriptor.md) for the binary image of the signature | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [Transform](./Methods/OnePixelThinning-100663682.md) ( [`Signature`](./../Signature.md) signature ) |  | 


