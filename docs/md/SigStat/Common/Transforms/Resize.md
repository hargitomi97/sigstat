# [Resize](./Resize.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Resizes the image to a specified width and height

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>Resize (  )</sub></div>| <sub></sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>Height</sub></div>| <sub>The new height. Leave it as null, if you do not want to explicitly specify a given height</sub></div>| <br>
| <div style ="width:390px"><sub>InputImage</sub></div>| <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the image of the signature</sub></div>| <br>
| <div style ="width:390px"><sub>OutputImage</sub></div>| <sub>Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the resized image of the signature</sub></div>| <br>
| <div style ="width:390px"><sub>ResizeFunction</sub></div>| <sub>Set a resize function if you want to dynamically calculate the new width and height of the image</sub></div>| <br>
| <div style ="width:390px"><sub>Width</sub></div>| <sub>The new width. Leave it as null, if you do not want to explicitly specify a given width</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>[Transform](./Methods/Resize-100663714.md) ( [`Signature`](./../Signature.md) )</sub></div>| <sub></sub></div>| <br>


