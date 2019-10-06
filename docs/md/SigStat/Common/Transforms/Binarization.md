# <sub>[Binarization](./Binarization.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../ILoggerObject.md)</sub>, <sub>[IProgress](./../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../Pipeline/IPipelineIO.md)</sub>, <sub>[ITransformation](./../ITransformation.md)</sub>

## Summary
Generates a binary raster version of the input image with the iterative threshold method.  <br>Pipeline Input type: Image{Rgba32}<br>Default Pipeline Output: (bool[,]) Binarized

## Constructors

| Name | Summary | 

Binarization (  )<sub>Initializes a new instance of the [Transforms.Binarization](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/Binarization.md) class with default settings: Iterative threshold and [Transforms.Binarization.ForegroundType.Dark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md).</sub>
Binarization ( <sub>[`ForegroundType`](./Binarization.md)</sub>, <sub>[`Nullable`](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)</sub>\<<sub>[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>> )<sub></sub>


## Properties

| Type | Name | Summary | 

<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[Image](./Binarization.md)</sub>\<<sub>[Rgba32](./Binarization.md)</sub>>><sub>InputImage</sub><sub>Gets or sets the featuredescriptor of the input image.</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]</sub>><sub>OutputMask</sub><sub>Gets or sets the featuredescriptor of a the binarized image.</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/Binarization-100663642.md) ( <sub>[`Signature`](./../Signature.md)</sub> )</sub><sub></sub>


