# [RelativeScale](./RelativeScale.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
<sub>Maps values of a feature to a specific range.  <br>InputFeature: feature to be scaled.<br>OutputFeature: output feature for scaled InputFeature</sub>

## Constructors

| Name | Summary | 
| --- | --- | 
| RelativeScale (  ) |  | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | InputFeature | <sub>Gets or sets the input feature.</sub> | 
| [FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | OutputFeature | <sub>Gets or sets the output feature.</sub> | 
| [FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | ReferenceFeature | <sub>Gets or sets the reference feature.</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Transform](./Methods/RelativeScale-100663787.md) ( [`Signature`](./../../../Signature.md) ) |  | 


