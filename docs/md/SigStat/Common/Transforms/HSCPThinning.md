# [HSCPThinning](./HSCPThinning.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Iteratively thins the input binary raster with the [SigStat.Common.Algorithms.HSCPThinningStep](../Algorithms/HSCPThinningStep.md) algorithm.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) HSCPThinningResult

## Constructors

| Name | Summary | 
| --- | --- | 
| [HSCPThinning](./../../../ctor/HSCPThinning-100663663.md) (  ) |  | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | Input | Input [SigStat.Common.FeatureDescriptor](./FeatureDescriptor.md) for the binary image of the signature | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | Output | Output [SigStat.Common.FeatureDescriptor](./FeatureDescriptor.md) for the binary image of the signature | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [Transform](./Methods/HSCPThinning-100663662.md) ( [`Signature`](./../Signature.md) signature ) |  | 


