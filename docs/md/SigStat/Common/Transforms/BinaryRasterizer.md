# [BinaryRasterizer](./BinaryRasterizer.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Converts standard features to a binary raster.  <br>Default Pipeline Input: Standard [Features](./SigStat/Common/Features.md) <br>Default Pipeline Output: (bool[,]) Binarized

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>BinaryRasterizer ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32), [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32), [`Single`](https://docs.microsoft.com/en-us/dotnet/api/System.Single) )</sub> | <sub>Initializes a new instance of the [BinaryRasterizer](./SigStat/Common/Transforms/BinaryRasterizer.md) class with specified raster size and pen width.</sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>InputButton</sub> | <sub>Gets or sets the [FeatureDescriptor](./SigStat/Common/FeatureDescriptor.md) representing the stroke endings of an online signature</sub> | 
| <sub>InputX</sub> | <sub>Gets or sets the [FeatureDescriptor](./SigStat/Common/FeatureDescriptor.md) representing the X coordinates of an online signature</sub> | 
| <sub>InputY</sub> | <sub>Gets or sets the [FeatureDescriptor](./SigStat/Common/FeatureDescriptor.md) representing the Y coordinates of an online signature</sub> | 
| <sub>Output</sub> | <sub>Gets or sets the [FeatureDescriptor](./SigStat/Common/FeatureDescriptor.md) representing the output of the transformation</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[Transform](./Methods/BinaryRasterizer--Transform.md) ( [`Signature`](./../Signature.md) )</sub> | <sub></sub> | 


