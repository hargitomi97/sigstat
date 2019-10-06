# [ImageGenerator](./ImageGenerator.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Generates an image feature out of a binary raster.  Optionally, saves the image to a png file.  Useful for debugging pipeline steps.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) Input, (Image{Rgba32}) InputImage

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>ImageGenerator (  )</sub><img width=200/>  | <sub>Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with default settings: skip file writing, Blue ink on white paper.</sub><img width=200/>  | <br>
| <sub>ImageGenerator ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><img width=200/>  | <sub>Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with default settings.</sub><img width=200/>  | <br>
| <sub>ImageGenerator ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean), [`Rgba32`](./ImageGenerator.md), [`Rgba32`](./ImageGenerator.md) )</sub><img width=200/>  | <sub>Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with specified settings.</sub><img width=200/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>BackgroundColor</sub><img width=200/>  | <sub>Gets or sets the color of the backgroung used to render the signature</sub><img width=200/>  | <br>
| <sub>ForegroundColor</sub><img width=200/>  | <sub>Gets or sets the color of the foreground used to render the signature</sub><img width=200/>  | <br>
| <sub>Input</sub><img width=200/>  | <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of a signature</sub><img width=200/>  | <br>
| <sub>OutputImage</sub><img width=200/>  | <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of a signature</sub><img width=200/>  | <br>
| <sub>WriteToFile</sub><img width=200/>  | <sub>Gets or sets a value indicating whether the results should be saved to a file or not.</sub><img width=200/>  | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/ImageGenerator-100663677.md) ( [`Signature`](./../Signature.md) )</sub><img width=200/>  | <sub></sub><img width=200/>  | <br>


