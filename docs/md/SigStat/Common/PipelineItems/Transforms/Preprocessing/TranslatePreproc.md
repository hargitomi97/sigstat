# [TranslatePreproc](./TranslatePreproc.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformations can be used to translate the coordinates of an online signature

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>TranslatePreproc (  )</sub><img width=200 unselectable="on"/>  | <sub>Initializes a new instance of the [PipelineItems.Transforms.Preprocessing.TranslatePreproc](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md) class.</sub><img width=200 unselectable="on"/>  | <br>
| <sub>TranslatePreproc ( [`OriginType`](./OriginType.md) )</sub><img width=200 unselectable="on"/>  | <sub>Initializes a new instance of the [PipelineItems.Transforms.Preprocessing.TranslatePreproc](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md) class.</sub><img width=200 unselectable="on"/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>GoalOrigin</sub><img width=200 unselectable="on"/>  | <sub>Goal origin of the translation</sub><img width=200 unselectable="on"/>  | <br>
| <sub>InputFeature</sub><img width=200 unselectable="on"/>  | <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) (e.g. [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub><img width=200 unselectable="on"/>  | <br>
| <sub>NewOrigin</sub><img width=200 unselectable="on"/>  | <sub>New origin after the translation</sub><img width=200 unselectable="on"/>  | <br>
| <sub>OutputFeature</sub><img width=200 unselectable="on"/>  | <sub>Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) (e.g. [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))</sub><img width=200 unselectable="on"/>  | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/TranslatePreproc-100663825.md) ( [`Signature`](./../../../Signature.md) )</sub><img width=200 unselectable="on"/>  | <sub></sub><img width=200 unselectable="on"/>  | <br>


