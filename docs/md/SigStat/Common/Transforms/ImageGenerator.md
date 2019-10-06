# [ImageGenerator](./ImageGenerator.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Generates an image feature out of a binary raster.  Optionally, saves the image to a png file.  Useful for debugging pipeline steps.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) Input, (Image{Rgba32}) InputImage

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>ImageGenerator (  )</sub></div>| <sub>Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with default settings: skip file writing, Blue ink on white paper.</sub></div>| <br>
| <div style="width:490px"><sub>ImageGenerator ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub></div>| <sub>Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with default settings.</sub></div>| <br>
| <div style="width:490px"><sub>ImageGenerator ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean), [`Rgba32`](./ImageGenerator.md), [`Rgba32`](./ImageGenerator.md) )</sub></div>| <sub>Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with specified settings.</sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>BackgroundColor</sub></div>| <sub>Gets or sets the color of the backgroung used to render the signature</sub></div>| <br>
| <div style="width:490px"><sub>ForegroundColor</sub></div>| <sub>Gets or sets the color of the foreground used to render the signature</sub></div>| <br>
| <div style="width:490px"><sub>Input</sub></div>| <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of a signature</sub></div>| <br>
| <div style="width:490px"><sub>OutputImage</sub></div>| <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of a signature</sub></div>| <br>
| <div style="width:490px"><sub>WriteToFile</sub></div>| <sub>Gets or sets a value indicating whether the results should be saved to a file or not.</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>[Transform](./Methods/ImageGenerator-100663677.md) ( [`Signature`](./../Signature.md) )</sub></div>| <sub></sub></div>| <br>


