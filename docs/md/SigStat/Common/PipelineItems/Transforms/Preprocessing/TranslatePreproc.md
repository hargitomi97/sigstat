# <sub>[TranslatePreproc](./TranslatePreproc.md)</sub>

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../../../ILoggerObject.md)</sub>, <sub>[IProgress](./../../../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../../../Pipeline/IPipelineIO.md)</sub>, <sub>[ITransformation](./../../../ITransformation.md)</sub>

## Summary
This transformations can be used to translate the coordinates of an online signature

## Constructors

| Name | Summary | 

TranslatePreproc (  )<sub>Initializes a new instance of the [PipelineItems.Transforms.Preprocessing.TranslatePreproc](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md) class.</sub>
TranslatePreproc ( <sub>[`OriginType`](./OriginType.md)</sub> )<sub>Initializes a new instance of the [PipelineItems.Transforms.Preprocessing.TranslatePreproc](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md) class.</sub>


## Properties

| Type | Name | Summary | 

<sub>[OriginType](./OriginType.md)</sub><sub>GoalOrigin</sub><sub>Goal origin of the translation</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>InputFeature</sub><sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) (e.g. [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub>
<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub><sub>NewOrigin</sub><sub>New origin after the translation</sub>
<sub>[FeatureDescriptor](./../../../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>OutputFeature</sub><sub>Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) (e.g. [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/TranslatePreproc-100663825.md) ( <sub>[`Signature`](./../../../Signature.md)</sub> )</sub><sub></sub>


