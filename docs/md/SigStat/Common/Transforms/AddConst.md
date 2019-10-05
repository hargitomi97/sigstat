# [AddConst](./AddConst.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
<sub>Adds a constant value to a feature. Works with collection features too.  <br>Default Pipeline Output: Pipeline Input</sub>

## Constructors

| Name | Summary | 
| --- | --- | 
| AddConst ( [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double) ) | <sub>Initializes a new instance of the [Transforms.AddConst](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddConst.md) class with specified settings.</sub> | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | Input | <sub>Input values for trasformation</sub> | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | Output | <sub>Output feature to store results</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Transform](./Methods/AddConst-100663603.md) ( [`Signature`](./../Signature.md) ) |  | 


