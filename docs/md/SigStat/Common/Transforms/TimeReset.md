# [TimeReset](./TimeReset.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Sequential pipeline to reset time values to begin at 0.  The following Transforms are called: Extrema, Multiply, AddVector.  <br>Default Pipeline Input: [<sub>Features.T</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: [<sub>Features.T</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)

## Constructors

| Name | Summary | 

TimeReset (  )<sub>Initializes a new instance of the [<sub>Transforms.TimeReset</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/TimeReset.md) class.</sub>


