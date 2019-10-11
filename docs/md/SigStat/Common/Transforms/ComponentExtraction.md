# [ComponentExtraction](./ComponentExtraction.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Extracts unsorted components by tracing through the binary Skeleton raster.  <br>Default Pipeline Input: (bool[,]) Skeleton, (List{Point}) EndPoints, (List{Point}) CrossingPoints<br>Default Pipeline Output: (List{List{PointF}}) Components

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>ComponentExtraction ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )</sub><div style="pointer-events: none; cursor: default;"><img "width=200"/></div>| <sub>Initializes a new instance of the [ComponentExtraction](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ComponentExtraction.md) class with specified sampling resolution.</sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>CrossingPoints</sub><div style="pointer-events: none; cursor: default;"><img "width=200"/></div>| <sub>crossing points</sub>| <br>
| <sub>EndPoints</sub><div style="pointer-events: none; cursor: default;"><img "width=200"/></div>| <sub>endpoints</sub>| <br>
| <sub>OutputComponents</sub><div style="pointer-events: none; cursor: default;"><img "width=200"/></div>| <sub>Output components</sub>| <br>
| <sub>Skeleton</sub><div style="pointer-events: none; cursor: default;"><img "width=200"/></div>| <sub>binary representation of a signature image</sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/ComponentExtraction-100663567.md) ( [`Signature`](./../Signature.md) )</sub><div style="pointer-events: none; cursor: default;"><img "width=200"/></div>| <sub></sub>| <br>


