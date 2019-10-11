# [Resize](./Resize.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Resizes the image to a specified width and height

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>Resize (  )</sub><img width=200 style="cursor:not-allowed;pointer-events:none;"/>| <sub></sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>Height</sub><img width=200 style="cursor:not-allowed;pointer-events:none;"/>| <sub>The new height. Leave it as null, if you do not want to explicitly specify a given height</sub>| <br>
| <sub>InputImage</sub><img width=200 style="cursor:not-allowed;pointer-events:none;"/>| <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the image of the signature</sub>| <br>
| <sub>OutputImage</sub><img width=200 style="cursor:not-allowed;pointer-events:none;"/>| <sub>Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the resized image of the signature</sub>| <br>
| <sub>ResizeFunction</sub><img width=200 style="cursor:not-allowed;pointer-events:none;"/>| <sub>Set a resize function if you want to dynamically calculate the new width and height of the image</sub>| <br>
| <sub>Width</sub><img width=200 style="cursor:not-allowed;pointer-events:none;"/>| <sub>The new width. Leave it as null, if you do not want to explicitly specify a given width</sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/Resize-100663716.md) ( [`Signature`](./../Signature.md) )</sub><img width=200 style="cursor:not-allowed;pointer-events:none;"/>| <sub></sub>| <br>


