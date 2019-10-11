# [Translate](./Translate.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Sequential pipeline to translate X and Y [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) by specified vector (constant or feature).  The following Transforms are called: [AddConst](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddConst.md) twice, or [AddVector](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddVector.md).  <br>Default Pipeline Input: [X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: [X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Translate ( [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double), [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double) )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub></sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Translate ( [`FeatureDescriptor`](./../FeatureDescriptor-1.md)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub></sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>InputX</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>The feature representing the horizontal coordinates of an online signature</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>InputY</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>The feature representing the vertical coordinates of an online signature</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>OutputX</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Target feature for storing the transformed horizontal coordinates</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>OutputY</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Target feature for storing the transformed vertical coordinates</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


