# [BinaryRasterizer](./BinaryRasterizer.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Converts standard features to a binary raster.  <br>Default Pipeline Input: Standard [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: (bool[,]) Binarized

## Constructors

| Name | Summary | 
| --- | --- | 
| BinaryRasterizer ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32), [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32), [`Single`](https://docs.microsoft.com/en-us/dotnet/api/System.Single) )<div style="width: 300px">| Initializes a new instance of the [Transforms.BinaryRasterizer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/BinaryRasterizer.md) class with specified raster size and pen width.<div style="width: 300px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| InputButton<div style="width: 300px">| Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the stroke endings of an online signature<div style="width: 300px">| <br>
| InputX<div style="width: 300px">| Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the X coordinates of an online signature<div style="width: 300px">| <br>
| InputY<div style="width: 300px">| Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the Y coordinates of an online signature<div style="width: 300px">| <br>
| Output<div style="width: 300px">| Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the output of the transformation<div style="width: 300px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Transform](./Methods/BinaryRasterizer-100663654.md) ( [`Signature`](./../Signature.md) )<div style="width: 300px">| <div style="width: 300px">| <br>


