# [Resize](./Resize.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Resizes the image to a specified width and height

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>Resize (  )</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub></sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>Height</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>The new height. Leave it as null, if you do not want to explicitly specify a given height</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>InputImage</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the image of the signature</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>OutputImage</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the resized image of the signature</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>ResizeFunction</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Set a resize function if you want to dynamically calculate the new width and height of the image</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>Width</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>The new width. Leave it as null, if you do not want to explicitly specify a given width</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/Resize-100663714.md) ( [`Signature`](./../Signature.md) )</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub></sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


