# [Translate](./Translate.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Sequential pipeline to translate X and Y [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) by specified vector (constant or feature).  The following Transforms are called: [Transforms.AddConst](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddConst.md) twice, or [Transforms.AddVector](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddVector.md).  <br>Default Pipeline Input: [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Features.Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Features.Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>Translate ( [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double), [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double) )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>
| <div style="width:290px"><sub>Translate ( [`FeatureDescriptor`](./../FeatureDescriptor-1.md)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>InputX</sub></div>| <div style="width:290px"><sub>The feature representing the horizontal coordinates of an online signature</sub></div>| <br>
| <div style="width:290px"><sub>InputY</sub></div>| <div style="width:290px"><sub>The feature representing the vertical coordinates of an online signature</sub></div>| <br>
| <div style="width:290px"><sub>OutputX</sub></div>| <div style="width:290px"><sub>Target feature for storing the transformed horizontal coordinates</sub></div>| <br>
| <div style="width:290px"><sub>OutputY</sub></div>| <div style="width:290px"><sub>Target feature for storing the transformed vertical coordinates</sub></div>| <br>


