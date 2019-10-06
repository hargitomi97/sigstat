# <sub>[HSCPThinning](./HSCPThinning.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../ILoggerObject.md)</sub>, <sub>[IProgress](./../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../Pipeline/IPipelineIO.md)</sub>, <sub>[ITransformation](./../ITransformation.md)</sub>

## Summary
Iteratively thins the input binary raster with the [Algorithms.HSCPThinningStep](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/HSCPThinningStep.md) algorithm.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) HSCPThinningResult

## Constructors

| Name | Summary | 

HSCPThinning (  )<sub></sub>


## Properties

| Type | Name | Summary | 

<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]</sub>><sub>Input</sub><sub>Input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of the signature</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[]</sub>><sub>Output</sub><sub>Output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) for the binary image of the signature</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/HSCPThinning-100663662.md) ( <sub>[`Signature`](./../Signature.md)</sub> )</sub><sub></sub>


