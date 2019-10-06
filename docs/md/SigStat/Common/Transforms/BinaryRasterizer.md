# [BinaryRasterizer](./BinaryRasterizer.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Converts standard features to a binary raster.  <br>Default Pipeline Input: Standard [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: (bool[,]) Binarized

## Constructors

NameSummary

<sub>Initializes a new instance of the [Transforms.BinaryRasterizer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/BinaryRasterizer.md) class with specified raster size and pen width.</sub><sub>Initializes a new instance of the [Transforms.BinaryRasterizer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/BinaryRasterizer.md) class with specified raster size and pen width.</sub><br>


## Properties

NameSummary

<sub>InputButton</sub><sub>Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the stroke endings of an online signature</sub><br>
<sub>InputX</sub><sub>Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the X coordinates of an online signature</sub><br>
<sub>InputY</sub><sub>Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the Y coordinates of an online signature</sub><br>
<sub>Output</sub><sub>Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the output of the transformation</sub><br>


## Methods

NameSummary

<sub>[Transform](./Methods/BinaryRasterizer-100663654.md) ( [`Signature`](./../Signature.md) )</sub><sub></sub><br>


