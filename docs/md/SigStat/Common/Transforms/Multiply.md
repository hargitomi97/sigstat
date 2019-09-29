# [Multiply](./Multiply.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Multiplies the values of a feature with a given constant.  <br>Pipeline Input type: List{double}<br>Default Pipeline Output: (List{double}) Input

## Constructors

| Name | Summary | 
| --- | --- | 
| [Multiply](./../../../ctor/Multiply-100663628.md) ( [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double) byConst ) | Initializes a new instance of the [SigStat.Common.Transforms.Multiply](./Signature.md) class with specified settings. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | InputList | Input | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | Output | Output | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [Transform](./Methods/Multiply-100663629.md) ( [`Signature`](./../Signature.md) signature ) |  | 


