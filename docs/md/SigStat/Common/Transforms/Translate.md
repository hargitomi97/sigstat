# <sub>[Translate](./Translate.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../ILoggerObject.md)</sub>, <sub>[IProgress](./../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../Pipeline/IPipelineIO.md)</sub>, <sub>[IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)</sub>, <sub>[ITransformation](./../ITransformation.md)</sub>

## Summary
Sequential pipeline to translate X and Y [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) by specified vector (constant or feature).  The following Transforms are called: [Transforms.AddConst](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddConst.md) twice, or [Transforms.AddVector](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddVector.md).  <br>Default Pipeline Input: [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Features.Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Features.Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)

## Constructors

| Name | Summary | 

Translate ( <sub>[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>, <sub>[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub> )<sub></sub>
Translate ( <sub>[`FeatureDescriptor`](./../FeatureDescriptor-1.md)</sub>\<<sub>[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>> )<sub></sub>


## Properties

| Type | Name | Summary | 

<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>InputX</sub><sub>The feature representing the horizontal coordinates of an online signature</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>InputY</sub><sub>The feature representing the vertical coordinates of an online signature</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>OutputX</sub><sub>Target feature for storing the transformed horizontal coordinates</sub>
<sub>[FeatureDescriptor](./../FeatureDescriptor-1.md)</sub>\<<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub>>><sub>OutputY</sub><sub>Target feature for storing the transformed vertical coordinates</sub>


