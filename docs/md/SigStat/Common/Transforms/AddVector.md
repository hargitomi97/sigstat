# [AddVector](./AddVector.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
<sub>Adds a vector feature's elements to other features.  <br>Default Pipeline Output: Pipeline Input</sub>

## Constructors

| Name | Summary | 
| --- | --- | 
| AddVector ( [`FeatureDescriptor`](./../FeatureDescriptor-1.md)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> ) | <sub>Initializes a new instance of the [Transforms.AddVector](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddVector.md) class with a vector feature.  Don't forget to add as many Inputs as the vector's dimension.</sub> | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>>> | Inputs | <sub>Inputs</sub> | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>>> | Outputs | <sub>Outputs</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Transform](./Methods/AddVector-100663609.md) ( [`Signature`](./../Signature.md) ) |  | 


