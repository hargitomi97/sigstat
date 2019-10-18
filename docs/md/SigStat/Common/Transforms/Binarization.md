# [Binarization](./Binarization.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Generates a binary raster version of the input image with the iterative threshold method.  <br>Pipeline Input type: Image{Rgba32}<br>Default Pipeline Output: (bool[,]) Binarized

## Constructors

| Name<a href="#"><img width=300></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>Binarization (  )</sub>| <sub>Initializes a new instance of the [Binarization](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/Binarization.md) class with default settings: Iterative threshold and [Dark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md).</sub>| <br>
| <sub>Binarization ( [`ForegroundType`](./Binarization.md), [`Nullable`](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )</sub>| <sub></sub>| <br>


## Properties

| Name<a href="#"><img width=300></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>InputImage</sub>| <sub>Gets or sets the featuredescriptor of the input image.</sub>| <br>
| <sub>OutputMask</sub>| <sub>Gets or sets the featuredescriptor of a the binarized image.</sub>| <br>


## Methods

| Name<a href="#"><img width=300></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>[Transform](./Methods/Binarization-100663644.md) ( [`Signature`](./../Signature.md) )</sub>| <sub></sub>| <br>


