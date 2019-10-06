# [Resize](./Resize.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Resizes the image to a specified width and height

## Constructors

| Name | Summary | 

Resize (  )<sub></sub>


## Properties

| Type | Name | Summary | 

<sub>[Nullable](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)\<[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)></sub><sub>Height</sub><sub>The new height. Leave it as null, if you do not want to explicitly specify a given height</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Image](./Resize.md)\<[Rgba32](./Resize.md)>></sub><sub>InputImage</sub><sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the image of the signature</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Image](./Resize.md)\<[Rgba32](./Resize.md)>></sub><sub>OutputImage</sub><sub>Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the resized image of the signature</sub>
<sub>[Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[Image](./Resize.md)\<[Rgba32](./Resize.md)>, [Size](./Resize.md)></sub><sub>ResizeFunction</sub><sub>Set a resize function if you want to dynamically calculate the new width and height of the image</sub>
<sub>[Nullable](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)\<[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)></sub><sub>Width</sub><sub>The new width. Leave it as null, if you do not want to explicitly specify a given width</sub>


## Methods

| Return | Name | Summary | 

<sub>[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)</sub><sub>[Transform](./Methods/Resize-100663714.md) ( [`Signature`](./../Signature.md) )</sub><sub></sub>


