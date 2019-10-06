# <sub>[BinaryRasterizer](./BinaryRasterizer.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../ILoggerObject.md)</sub>, <sub>[IProgress](./../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../Pipeline/IPipelineIO.md)</sub>, <sub>[ITransformation](./../ITransformation.md)</sub>

## Summary
Converts standard features to a binary raster.  <br>Default Pipeline Input: Standard [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: (bool[,]) Binarized

## Constructors

| Name | Summary | 

BinaryRasterizer ( <sub>[`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)</sub>, <sub>[`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)</sub>, <sub>[`Single`](https://docs.microsoft.com/en-us/dotnet/api/System.Single)</sub> )<sub>Initializes a new instance of the [Transforms.BinaryRasterizer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/BinaryRasterizer.md) class with specified raster size and pen width.</sub>


## Properties

| Type | Name | Summary | 

<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)</sub>>><sub>InputButton</sub><sub>Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the stroke endings of an online signature</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>InputX</sub><sub>Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the X coordinates of an online signature</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>InputY</sub><sub>Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the Y coordinates of an online signature</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]</sub>><sub>Output</sub><sub>Gets or sets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) representing the output of the transformation</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/BinaryRasterizer-100663654.md) ( <sub>[`Signature`](./../Signature.md)</sub> )</sub><sub></sub>


