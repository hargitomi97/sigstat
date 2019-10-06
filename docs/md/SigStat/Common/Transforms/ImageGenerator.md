# <sub>[ImageGenerator](./ImageGenerator.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../ILoggerObject.md)</sub>, <sub>[IProgress](./../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../Pipeline/IPipelineIO.md)</sub>, <sub>[ITransformation](./../ITransformation.md)</sub>

## Summary
Generates an image feature out of a binary raster.  Optionally, saves the image to a png file.  Useful for debugging pipeline steps.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) Input, (Image{Rgba32}) InputImage

## Constructors

| Name | Summary | 

ImageGenerator (  )<sub>Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with default settings: skip file writing, Blue ink on white paper.</sub>
ImageGenerator ( <sub>[`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)</sub> )<sub>Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with default settings.</sub>
ImageGenerator ( <sub>[`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)</sub>, <sub>[`Rgba32`](./ImageGenerator.md)</sub>, <sub>[`Rgba32`](./ImageGenerator.md)</sub> )<sub>Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with specified settings.</sub>


## Properties

| Type | Name | Summary | 

<sub>[Rgba32](./ImageGenerator.md)</sub><sub>BackgroundColor</sub><sub>Gets or sets the color of the backgroung used to render the signature</sub>
<sub>[Rgba32](./ImageGenerator.md)</sub><sub>ForegroundColor</sub><sub>Gets or sets the color of the foreground used to render the signature</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]</sub>><sub>Input</sub><sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of a signature</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[Image](./ImageGenerator.md)</sub>\<<sub>[Rgba32](./ImageGenerator.md)</sub>>><sub>OutputImage</sub><sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of a signature</sub>
<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)</sub><sub>WriteToFile</sub><sub>Gets or sets a value indicating whether the results should be saved to a file or not.</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/ImageGenerator-100663677.md) ( <sub>[`Signature`](./../Signature.md)</sub> )</sub><sub></sub>


