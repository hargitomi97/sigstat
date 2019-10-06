# [Translate](./Translate.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Sequential pipeline to translate X and Y [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) by specified vector (constant or feature).  The following Transforms are called: [Transforms.AddConst](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddConst.md) twice, or [Transforms.AddVector](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddVector.md).  <br>Default Pipeline Input: [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Features.Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Features.Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)

## Constructors

NameSummary

<div style="text-align: right"><sub></sub></ div ><div style="text-align: right"><sub></sub></ div ><br>
<div style="text-align: right"><sub></sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>InputX</sub></ div ><div style="text-align: right"><sub>The feature representing the horizontal coordinates of an online signature</sub></ div ><br>
<div style="text-align: right"><sub>InputY</sub></ div ><div style="text-align: right"><sub>The feature representing the vertical coordinates of an online signature</sub></ div ><br>
<div style="text-align: right"><sub>OutputX</sub></ div ><div style="text-align: right"><sub>Target feature for storing the transformed horizontal coordinates</sub></ div ><br>
<div style="text-align: right"><sub>OutputY</sub></ div ><div style="text-align: right"><sub>Target feature for storing the transformed vertical coordinates</sub></ div ><br>


