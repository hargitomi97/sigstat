# [TranslatePreproc](./TranslatePreproc.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformations can be used to translate the coordinates of an online signature

## Constructors

| Name | Summary | 

TranslatePreproc (  )<sub>Initializes a new instance of the [<sub>PipelineItems.Transforms.Preprocessing.TranslatePreproc</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md) class.</sub>
TranslatePreproc ( [`OriginType`](./OriginType.md) )<sub>Initializes a new instance of the [<sub>PipelineItems.Transforms.Preprocessing.TranslatePreproc</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md) class.</sub>


## Properties

| Type | Name | Summary | 

[OriginType](./OriginType.md)<sub>GoalOrigin</sub><sub>Goal origin of the translation</sub>
[FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>><sub>InputFeature</sub><sub>Input [<sub>FeatureDescriptor</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) (e.g. [<sub>Features.X</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub>
[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)<sub>NewOrigin</sub><sub>New origin after the translation</sub>
[FeatureDescriptor](./../../../FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>><sub>OutputFeature</sub><sub>Output [<sub>FeatureDescriptor</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) (e.g. [<sub>Features.X</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/TranslatePreproc-100663825.md) ( [`Signature`](./../../../Signature.md) )</sub><sub></sub>


