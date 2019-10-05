# [Resize](./Resize.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Resizes the image to a specified width and height

## Constructors

| Name | Summary | 
| --- | --- | 
| Resize (  ) |  | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [Nullable](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)\<[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)> | Height | <sub>The new height. Leave it as null, if you do not want to explicitly specify a given height</sub> | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Image](./Resize.md)\<[Rgba32](./Resize.md)>> | InputImage | <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the image of the signature</sub> | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Image](./Resize.md)\<[Rgba32](./Resize.md)>> | OutputImage | <sub>Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) describing the resized image of the signature</sub> | 
| [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[Image](./Resize.md)\<[Rgba32](./Resize.md)>, [Size](./Resize.md)> | ResizeFunction | <sub>Set a resize function if you want to dynamically calculate the new width and height of the image</sub> | 
| [Nullable](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)\<[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)> | Width | <sub>The new width. Leave it as null, if you do not want to explicitly specify a given width</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Transform](./Methods/Resize-100663714.md) ( [`Signature`](./../Signature.md) ) | <sub></sub> | 


