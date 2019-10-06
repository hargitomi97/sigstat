# [BinaryRasterizer](./BinaryRasterizer.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Converts standard features to a binary raster.  <br>Default Pipeline Input: Standard [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: (bool[,]) Binarized

## Constructors

NameSummary

<div style="text-align: right"><sub>Initializes a new instance of the [Transforms.BinaryRasterizer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/BinaryRasterizer.md) class with specified raster size and pen width.</sub></ div ><div style="text-align: right"><sub>Initializes a new instance of the [Transforms.BinaryRasterizer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/BinaryRasterizer.md) class with specified raster size and pen width.</sub></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>InputButton</sub></ div ><div style="text-align: right"><sub>Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the stroke endings of an online signature</sub></ div ><br>
<div style="text-align: right"><sub>InputX</sub></ div ><div style="text-align: right"><sub>Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the X coordinates of an online signature</sub></ div ><br>
<div style="text-align: right"><sub>InputY</sub></ div ><div style="text-align: right"><sub>Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the Y coordinates of an online signature</sub></ div ><br>
<div style="text-align: right"><sub>Output</sub></ div ><div style="text-align: right"><sub>Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the output of the transformation</sub></ div ><br>


## Methods

NameSummary

<div style="text-align: right"><sub>[Transform](./Methods/BinaryRasterizer-100663654.md) ( [`Signature`](./../Signature.md) )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


