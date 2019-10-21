# [Resize](./Resize.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Resizes the image to a specified width and height

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>Resize (  )</sub> | <sub></sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>Height</sub> | <sub>The new height. Leave it as null, if you do not want to explicitly specify a given height</sub> | 
| <sub>InputImage</sub> | <sub>Input [FeatureDescriptor](../../docs/mdSigStat/Common/FeatureDescriptor.md) describing the image of the signature</sub> | 
| <sub>OutputImage</sub> | <sub>Output [FeatureDescriptor](../../docs/mdSigStat/Common/FeatureDescriptor.md) describing the resized image of the signature</sub> | 
| <sub>ResizeFunction</sub> | <sub>Set a resize function if you want to dynamically calculate the new width and height of the image</sub> | 
| <sub>Width</sub> | <sub>The new width. Leave it as null, if you do not want to explicitly specify a given width</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[Transform](./Methods/Resize--Transform.md) ( [`Signature`](./../Signature.md) )</sub> | <sub></sub> | 


