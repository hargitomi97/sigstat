# [Resize](./Resize.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Resizes the image to a specified width and height

## Constructors

| Name | Summary | 
| --- | --- | 
| <img width=200/> <sub>Resize (  )</sub>| <sub></sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <img width=200/> <sub>Height</sub>| <sub>The new height. Leave it as null, if you do not want to explicitly specify a given height</sub>| <br>
| <img width=200/> <sub>InputImage</sub>| <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the image of the signature</sub>| <br>
| <img width=200/> <sub>OutputImage</sub>| <sub>Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the resized image of the signature</sub>| <br>
| <img width=200/> <sub>ResizeFunction</sub>| <sub>Set a resize function if you want to dynamically calculate the new width and height of the image</sub>| <br>
| <img width=200/> <sub>Width</sub>| <sub>The new width. Leave it as null, if you do not want to explicitly specify a given width</sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <img width=200/> <sub>[Transform](./Methods/Resize-100663714.md) ( [`Signature`](./../Signature.md) )</sub>| <sub></sub>| <br>


