# [ImageGenerator](./ImageGenerator.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Generates an image feature out of a binary raster.  Optionally, saves the image to a png file.  Useful for debugging pipeline steps.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) Input, (Image{Rgba32}) InputImage

## Constructors

| Name | Summary | 
| --- | --- | 
| ImageGenerator (  )<div style="width: 200px">| Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with default settings: skip file writing, Blue ink on white paper.<div style="width: 200px">| <br>
| ImageGenerator ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )<div style="width: 200px">| Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with default settings.<div style="width: 200px">| <br>
| ImageGenerator ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean), [`Rgba32`](./ImageGenerator.md), [`Rgba32`](./ImageGenerator.md) )<div style="width: 200px">| Initializes a new instance of the [Transforms.ImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ImageGenerator.md) class with specified settings.<div style="width: 200px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| BackgroundColor<div style="width: 200px">| Gets or sets the color of the backgroung used to render the signature<div style="width: 200px">| <br>
| ForegroundColor<div style="width: 200px">| Gets or sets the color of the foreground used to render the signature<div style="width: 200px">| <br>
| Input<div style="width: 200px">| Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of a signature<div style="width: 200px">| <br>
| OutputImage<div style="width: 200px">| Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of a signature<div style="width: 200px">| <br>
| WriteToFile<div style="width: 200px">| Gets or sets a value indicating whether the results should be saved to a file or not.<div style="width: 200px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Transform](./Methods/ImageGenerator-100663677.md) ( [`Signature`](./../Signature.md) )<div style="width: 200px">| <div style="width: 200px">| <br>


