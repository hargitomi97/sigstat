# [Binarization](./Binarization.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Generates a binary raster version of the input image with the iterative threshold method.  <br>Pipeline Input type: Image{Rgba32}<br>Default Pipeline Output: (bool[,]) Binarized

## Constructors

| Name | Summary | 
| --- | --- | 
| [Binarization](./../../../ctor/Binarization-100663636.md) (  ) | Initializes a new instance of the [SigStat.Common.Transforms.Binarization](./../Transforms/Binarization.md) class with default settings: Iterative threshold and [SigStat.Common.Transforms.Binarization.ForegroundType.Dark](). | 
| [Binarization](./../../../ctor/Binarization-100663637.md) ( [`ForegroundType`](./Binarization.md) foregroundType, [`Nullable`](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> binThreshold ) |  | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Image](./Binarization.md)\<[Rgba32](./Binarization.md)>> | InputImage | Gets or sets the featuredescriptor of the input image. | 
| [FeatureDescriptor](./../FeatureDescriptor-1.md)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]> | OutputMask | Gets or sets the featuredescriptor of a the binarized image. | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [Transform](./Methods/Binarization-100663642.md) ( [`Signature`](./../Signature.md) signature ) |  | 


