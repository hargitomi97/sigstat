# [OnePixelThinning](./OnePixelThinning.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Iteratively thins the input binary raster with the [OnePixelThinningStep](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.Algorithms.OnePixelThinningStep.md) algorithm.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) OnePixelThinningResult

## Constructors

| Name | Summary | 
| --- | --- | 
| OnePixelThinning (  ) |  | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | Input | Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.FeatureDescriptor.md) for the binary image of the signature | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | Output | Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.FeatureDescriptor.md) for the binary image of the signature | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | Transform ( [`Signature`](./../Signature.md) signature ) |  | 


