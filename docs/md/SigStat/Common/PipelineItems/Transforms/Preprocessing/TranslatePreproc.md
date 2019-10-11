# [TranslatePreproc](./TranslatePreproc.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformations can be used to translate the coordinates of an online signature

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>TranslatePreproc (  )</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Initializes a new instance of the [TranslatePreproc](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md) class.</sub>| <br>
| <sub>TranslatePreproc ( [`OriginType`](./OriginType.md) )</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Initializes a new instance of the [TranslatePreproc](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md) class.</sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>GoalOrigin</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Goal origin of the translation</sub>| <br>
| <sub>InputFeature</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) (e.g. [X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub>| <br>
| <sub>NewOrigin</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>New origin after the translation</sub>| <br>
| <sub>OutputFeature</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) (e.g. [X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/TranslatePreproc-100663868.md) ( [`Signature`](./../../../Signature.md) )</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub></sub>| <br>


