# [AddConst](./AddConst.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Adds a constant value to a feature. Works with collection features too.  <br>Default Pipeline Output: Pipeline Input

## Constructors

| Name | Summary | 
| --- | --- | 
| [AddConst](./../../../ctor/AddConst-100663602.md) ( [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double) value ) | Initializes a new instance of the [SigStat.Common.Transforms.AddConst](./../Transforms/AddConst.md) class with specified settings. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | Input | Input values for trasformation | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | Output | Output feature to store results | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [Transform](./Methods/AddConst-100663603.md) ( [`Signature`](./../Signature.md) signature ) |  | 


