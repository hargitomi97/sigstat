# [Binarization](./Binarization.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Generates a binary raster version of the input image with the iterative threshold method.  <br>Pipeline Input type: Image{Rgba32}<br>Default Pipeline Output: (bool[,]) Binarized

## Constructors

NameSummary

Binarization (  )<br><sub>Initializes a new instance of the [Transforms.Binarization](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/Binarization.md) class with default settings: Iterative threshold and [Transforms.Binarization.ForegroundType.Dark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md).</sub><br>
Binarization ( [`ForegroundType`](./Binarization.md), [`Nullable`](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )<br><sub></sub><br>


## Properties

TypeNameSummary

<br><sub>InputImage</sub><br><sub>Gets or sets the featuredescriptor of the input image.</sub><br>
<br><sub>OutputMask</sub><br><sub>Gets or sets the featuredescriptor of a the binarized image.</sub><br>


## Methods

NameSummary

<br><sub>[Transform](./Methods/Binarization-100663642.md) ( [`Signature`](./../Signature.md) )</sub><br><sub></sub><br>


