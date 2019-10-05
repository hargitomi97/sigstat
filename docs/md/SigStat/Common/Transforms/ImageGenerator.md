# [ImageGenerator](./ImageGenerator.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
<sub>Generates an image feature out of a binary raster.  Optionally, saves the image to a png file.  Useful for debugging pipeline steps.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) Input, (Image{Rgba32}) InputImage</sub>

## Constructors

| Name | Summary | 
| --- | --- | 
| ImageGenerator (  ) | <sub>Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with default settings: skip file writing, Blue ink on white paper.</sub> | 
| ImageGenerator ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) ) | <sub>Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with default settings.</sub> | 
| ImageGenerator ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean), [`Rgba32`](./ImageGenerator.md), [`Rgba32`](./ImageGenerator.md) ) | <sub>Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with specified settings.</sub> | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [Rgba32](./ImageGenerator.md) | BackgroundColor | <sub>Gets or sets the color of the backgroung used to render the signature</sub> | 
| [Rgba32](./ImageGenerator.md) | ForegroundColor | <sub>Gets or sets the color of the foreground used to render the signature</sub> | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | Input | <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of a signature</sub> | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Image](./ImageGenerator.md)\<[Rgba32](./ImageGenerator.md)>> | OutputImage | <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of a signature</sub> | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | WriteToFile | <sub>Gets or sets a value indicating whether the results should be saved to a file or not.</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Transform](./Methods/ImageGenerator-100663677.md) ( [`Signature`](./../Signature.md) ) |  | 


