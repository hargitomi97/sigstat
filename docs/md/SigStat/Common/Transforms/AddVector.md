# [AddVector](./AddVector.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Adds a vector feature's elements to other features.  <br>Default Pipeline Output: Pipeline Input

## Constructors

| Name | Summary | 
| --- | --- | 
| AddVector ( [`FeatureDescriptor`](./../FeatureDescriptor-1.md)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> ) | Initializes a new instance of the [Transforms.AddVector](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddVector.md) class with a vector feature.  Don't forget to add as many Inputs as the vector's dimension. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>>> | Inputs | Inputs | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>>> | Outputs | Outputs | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Transform](./Methods/AddVector-100663609.md) ( [`Signature`](./../Signature.md) ) |  | 


