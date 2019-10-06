# <sub>[TimeReset](./TimeReset.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../ILoggerObject.md)</sub>, <sub>[IProgress](./../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./../Pipeline/IPipelineIO.md)</sub>, <sub>[IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)</sub>, <sub>[ITransformation](./../ITransformation.md)</sub>

## Summary
Sequential pipeline to reset time values to begin at 0.  The following Transforms are called: Extrema, Multiply, AddVector.  <br>Default Pipeline Input: [Features.T](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: [Features.T](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)

## Constructors

| Name | Summary | 

TimeReset (  )<sub>Initializes a new instance of the [Transforms.TimeReset](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/TimeReset.md) class.</sub>


