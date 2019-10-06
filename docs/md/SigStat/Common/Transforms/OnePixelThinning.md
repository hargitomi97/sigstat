# [OnePixelThinning](./OnePixelThinning.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Iteratively thins the input binary raster with the [Algorithms.OnePixelThinningStep](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/OnePixelThinningStep.md) algorithm.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) OnePixelThinningResult

## Constructors

| Name | Summary | 
| --- | --- | 
| OnePixelThinning (  )<div style="width: 200px">| <div style="width: 200px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| Input<div style="width: 200px">| Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of the signature<div style="width: 200px">| <br>
| Output<div style="width: 200px">| Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of the signature<div style="width: 200px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Transform](./Methods/OnePixelThinning-100663682.md) ( [`Signature`](./../Signature.md) )<div style="width: 200px">| <div style="width: 200px">| <br>


