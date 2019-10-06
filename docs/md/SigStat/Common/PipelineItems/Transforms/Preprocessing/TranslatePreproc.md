# [TranslatePreproc](./TranslatePreproc.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformations can be used to translate the coordinates of an online signature

## Constructors

| Name | Summary | 
| --- | --- | 
| TranslatePreproc (  )<div style="width: 200px">| Initializes a new instance of the [PipelineItems.Transforms.Preprocessing.TranslatePreproc](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md) class.<div style="width: 200px">| <br>
| TranslatePreproc ( [`OriginType`](./OriginType.md) )<div style="width: 200px">| Initializes a new instance of the [PipelineItems.Transforms.Preprocessing.TranslatePreproc](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md) class.<div style="width: 200px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| GoalOrigin<div style="width: 200px">| Goal origin of the translation<div style="width: 200px">| <br>
| InputFeature<div style="width: 200px">| Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) (e.g. [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))<div style="width: 200px">| <br>
| NewOrigin<div style="width: 200px">| New origin after the translation<div style="width: 200px">| <br>
| OutputFeature<div style="width: 200px">| Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) (e.g. [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md))<div style="width: 200px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Transform](./Methods/TranslatePreproc-100663825.md) ( [`Signature`](./../../../Signature.md) )<div style="width: 200px">| <div style="width: 200px">| <br>


