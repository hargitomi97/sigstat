# [Binarization](./Binarization.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Generates a binary raster version of the input image with the iterative threshold method.  <br>Pipeline Input type: Image{Rgba32}<br>Default Pipeline Output: (bool[,]) Binarized

## Constructors

| Name | Summary | 
| --- | --- | 
| Binarization (  )<div style="width: 300px">| Initializes a new instance of the [Transforms.Binarization](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/Binarization.md) class with default settings: Iterative threshold and [Transforms.Binarization.ForegroundType.Dark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md).<div style="width: 300px">| <br>
| Binarization ( [`ForegroundType`](./Binarization.md), [`Nullable`](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )<div style="width: 300px">| <div style="width: 300px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| InputImage<div style="width: 300px">| Gets or sets the featuredescriptor of the input image.<div style="width: 300px">| <br>
| OutputMask<div style="width: 300px">| Gets or sets the featuredescriptor of a the binarized image.<div style="width: 300px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Transform](./Methods/Binarization-100663642.md) ( [`Signature`](./../Signature.md) )<div style="width: 300px">| <div style="width: 300px">| <br>


