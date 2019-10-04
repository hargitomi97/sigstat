# [TranslatePreproc](./TranslatePreproc.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformations can be used to translate the coordinates of an online signature

## Constructors

| Name | Summary | 
| --- | --- | 
| TranslatePreproc (  ) | Initializes a new instance of the [TranslatePreproc](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.PipelineItems.Transforms.Preprocessing.TranslatePreproc.md) class. | 
| TranslatePreproc ( [`OriginType`](./OriginType.md) goalOrigin ) | Initializes a new instance of the [TranslatePreproc](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.PipelineItems.Transforms.Preprocessing.TranslatePreproc.md) class. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [OriginType](./OriginType.md) | GoalOrigin | Goal origin of the translation | 
| [FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | InputFeature | Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.FeatureDescriptor.md) (e.g. [X](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.Features.X.md)) | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | NewOrigin | New origin after the translation | 
| [FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | OutputFeature | Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.FeatureDescriptor.md) (e.g. [X](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.Features.X.md)) | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | Transform ( [`Signature`](./../../../Signature.md) signature ) |  | 


