# [Map](./Map.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Maps values of a feature to a specified range.  <para>Pipeline Input type: List{double}</para><para>Default Pipeline Output: (List{double}) MapResult</para>

## Constructors

| Name | Summary | 
| --- | --- | 
| [Map](./../../../ctor/Map-100663622.md) ( [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double) minVal, [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double) maxVal ) | Initializes a new instance of the `SigStat.Common.Transforms.Map` class with specified settings. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | Input | Input | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | Output | Output | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [Transform](./Methods/Map-100663623.md) ( [`Signature`](./../Signature.md) signature ) |  | 


