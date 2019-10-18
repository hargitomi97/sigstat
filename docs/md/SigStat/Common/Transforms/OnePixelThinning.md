# [OnePixelThinning](./OnePixelThinning.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Iteratively thins the input binary raster with the [OnePixelThinningStep](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/OnePixelThinningStep.md) algorithm.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) OnePixelThinningResult

## Constructors

| Name<a href="#"><img width=220></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>OnePixelThinning (  )</sub>| <sub></sub>| <br>


## Properties

| Name<a href="#"><img width=220></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>Input</sub>| <sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of the signature</sub>| <br>
| <sub>Output</sub>| <sub>Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of the signature</sub>| <br>


## Methods

| Name<a href="#"><img width=220></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>[Transform](./Methods/OnePixelThinning-100663684.md) ( [`Signature`](./../Signature.md) )</sub>| <sub></sub>| <br>


