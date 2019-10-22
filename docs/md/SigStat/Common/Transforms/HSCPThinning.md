# [HSCPThinning](./HSCPThinning.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Iteratively thins the input binary raster with the [HSCPThinningStep](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/HSCPThinningStep.md) algorithm.  <br>Pipeline Input type: bool[,] <br>Default Pipeline Output: (bool[,]) HSCPThinningResult

## Constructors

| Name<span><div><a href="#"><img width=225></a></div></span> | Summary<div><a href="#"><img width=525></a></div> | 
| --- | --- | 
| HSCPThinning (  ) |  | 


## Properties

| Name<span><div><a href="#"><img width=225></a></div></span> | Summary<div><a href="#"><img width=525></a></div> | 
| --- | --- | 
| Input | Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of the signature | 
| Output | Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of the signature | 


## Methods

| Name<span><div><a href="#"><img width=225></a></div></span> | Summary<div><a href="#"><img width=525></a></div> | 
| --- | --- | 
| [Transform](./Methods/HSCPThinning--Transform.md) ( [`Signature`](./../Signature.md) ) |  | 


