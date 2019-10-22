# [TranslatePreproc](./TranslatePreproc.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
This transformations can be used to translate the coordinates of an online signature

## Constructors

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| TranslatePreproc (  ) | Initializes a new instance of the [TranslatePreproc](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md) class. | 
| TranslatePreproc ( [`OriginType`](./OriginType.md) ) | Initializes a new instance of the [TranslatePreproc](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md) class. | 


## Properties

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| GoalOrigin | Goal origin of the translation | 
| InputFeature | Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) (e.g. [X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)) | 
| NewOrigin | New origin after the translation | 
| OutputFeature | Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) (e.g. [X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)) | 


## Methods

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| [Transform](./Methods/TranslatePreproc--Transform.md) ( [`Signature`](./../../../Signature.md) ) |  | 


