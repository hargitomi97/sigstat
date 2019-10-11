# [ImageGenerator](./ImageGenerator.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Generates an image feature out of a binary raster.  Optionally, saves the image to a png file.  Useful for debugging pipeline steps.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) Input, (Image{Rgba32}) InputImage

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>ImageGenerator (  )</sub><p>&nbsp;</p>| <sub>Initializes a new instance of the [ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with default settings: skip file writing, Blue ink on white paper.</sub>| <br>
| <sub>ImageGenerator ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><p>&nbsp;</p>| <sub>Initializes a new instance of the [ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with default settings.</sub>| <br>
| <sub>ImageGenerator ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean), [`Rgba32`](./ImageGenerator.md), [`Rgba32`](./ImageGenerator.md) )</sub><p>&nbsp;</p>| <sub>Initializes a new instance of the [ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with specified settings.</sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>BackgroundColor</sub><p>&nbsp;</p>| <sub>Gets or sets the color of the backgroung used to render the signature</sub>| <br>
| <sub>ForegroundColor</sub><p>&nbsp;</p>| <sub>Gets or sets the color of the foreground used to render the signature</sub>| <br>
| <sub>Input</sub><p>&nbsp;</p>| <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of a signature</sub>| <br>
| <sub>OutputImage</sub><p>&nbsp;</p>| <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of a signature</sub>| <br>
| <sub>WriteToFile</sub><p>&nbsp;</p>| <sub>Gets or sets a value indicating whether the results should be saved to a file or not.</sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/ImageGenerator-100663679.md) ( [`Signature`](./../Signature.md) )</sub><p>&nbsp;</p>| <sub></sub>| <br>


