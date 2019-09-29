# [TranslatePreproc](./TranslatePreproc.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformations can be used to translate the coordinates of an online signature

## Constructors

| Name | Summary | 
| --- | --- | 
| [TranslatePreproc](./../../../../../ctor/TranslatePreproc-100663823.md) (  ) | Initializes a new instance of the [SigStat.Common.PipelineItems.Transforms.Preprocessing.TranslatePreproc](./Signature.md) class. | 
| [TranslatePreproc](./../../../../../ctor/TranslatePreproc-100663824.md) ( [`OriginType`](./OriginType.md) goalOrigin ) | Initializes a new instance of the [SigStat.Common.PipelineItems.Transforms.Preprocessing.TranslatePreproc](./Signature.md) class. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [OriginType](./OriginType.md) | GoalOrigin | Goal origin of the translation | 
| [FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | InputFeature | Input [SigStat.Common.FeatureDescriptor](./Signature.md) (e.g. [SigStat.Common.Features.X](./Signature.md)) | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | NewOrigin | New origin after the translation | 
| [FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | OutputFeature | Output [SigStat.Common.FeatureDescriptor](./Signature.md) (e.g. [SigStat.Common.Features.X](./Signature.md)) | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [Transform](./Methods/TranslatePreproc-100663825.md) ( [`Signature`](./../../../Signature.md) signature ) |  | 


