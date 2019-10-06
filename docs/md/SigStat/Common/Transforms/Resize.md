# [Resize](./Resize.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Resizes the image to a specified width and height

## Constructors

| Name | Summary | 
| --- | --- | 
| Resize (  )<div style="width: 200px">| <div style="width: 200px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| Height<div style="width: 200px">| The new height. Leave it as null, if you do not want to explicitly specify a given height<div style="width: 200px">| <br>
| InputImage<div style="width: 200px">| Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the image of the signature<div style="width: 200px">| <br>
| OutputImage<div style="width: 200px">| Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the resized image of the signature<div style="width: 200px">| <br>
| ResizeFunction<div style="width: 200px">| Set a resize function if you want to dynamically calculate the new width and height of the image<div style="width: 200px">| <br>
| Width<div style="width: 200px">| The new width. Leave it as null, if you do not want to explicitly specify a given width<div style="width: 200px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Transform](./Methods/Resize-100663714.md) ( [`Signature`](./../Signature.md) )<div style="width: 200px">| <div style="width: 200px">| <br>


