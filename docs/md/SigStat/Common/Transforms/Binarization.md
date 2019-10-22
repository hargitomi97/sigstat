# [Binarization](./Binarization.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Generates a binary raster version of the input image with the iterative threshold method.  <br>Pipeline Input type: Image{Rgba32} <br>Default Pipeline Output: (bool[,]) Binarized

## Constructors

| Name<span><div><a href="#"><img width=225></a></div></span> | Summary<div><a href="#"><img width=525></a></div> | 
| --- | --- | 
| Binarization (  ) | Initializes a new instance of the [Binarization](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/Binarization.md) class with default settings: Iterative threshold and [Dark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/Binarization/ForegroundType.md). | 
| Binarization ( [`ForegroundType`](./Binarization.md), [`Nullable`](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> ) |  | 


## Properties

| Name<span><div><a href="#"><img width=225></a></div></span> | Summary<div><a href="#"><img width=525></a></div> | 
| --- | --- | 
| InputImage | Gets or sets the featuredescriptor of the input image. | 
| OutputMask | Gets or sets the featuredescriptor of a the binarized image. | 


## Methods

| Name<span><div><a href="#"><img width=225></a></div></span> | Summary<div><a href="#"><img width=525></a></div> | 
| --- | --- | 
| [Transform](./Methods/Binarization--Transform.md) ( [`Signature`](./../Signature.md) ) |  | 


