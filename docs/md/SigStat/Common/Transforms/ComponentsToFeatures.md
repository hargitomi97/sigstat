# [ComponentsToFeatures](./ComponentsToFeatures.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Extracts standard [SigStat.Common.Features](./Features.md) from sorted Components.  <br>Default Pipeline Input: (List{List{PointF}}) Components<br>Default Pipeline Output: X, Y, Button [SigStat.Common.Features](./Features.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| [ComponentsToFeatures](./../../../ctor/ComponentsToFeatures-100663581.md) (  ) |  | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)>> | Button | Button | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[PointF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.PointF)>>> | InputComponents | Components | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | X | X | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | Y | Y | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [Transform](./Methods/ComponentsToFeatures-100663580.md) ( [`Signature`](./../Signature.md) signature ) |  | 


