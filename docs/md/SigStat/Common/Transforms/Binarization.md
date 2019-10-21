# [Binarization](./Binarization.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Generates a binary raster version of the input image with the iterative threshold method.  <br>Pipeline Input type: Image{Rgba32} <br>Default Pipeline Output: (bool[,]) Binarized

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>Binarization (  )</sub> | <sub>Initializes a new instance of the [Binarization](../../../../../SigStat/Common/Transforms/Binarization.md) class with default settings: Iterative threshold and [Dark](../../../../../SigStat/Common/Transforms/Binarization/ForegroundType.md).</sub> | 
| <sub>Binarization ( [`ForegroundType`](./Binarization.md), [`Nullable`](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )</sub> | <sub></sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>InputImage</sub> | <sub>Gets or sets the featuredescriptor of the input image.</sub> | 
| <sub>OutputMask</sub> | <sub>Gets or sets the featuredescriptor of a the binarized image.</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[Transform](./Methods/Binarization--Transform.md) ( [`Signature`](./../Signature.md) )</sub> | <sub></sub> | 


