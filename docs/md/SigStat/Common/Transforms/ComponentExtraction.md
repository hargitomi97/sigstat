# [ComponentExtraction](./ComponentExtraction.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Extracts unsorted components by tracing through the binary Skeleton raster.  <br>Default Pipeline Input: (bool[,]) Skeleton, (List{Point}) EndPoints, (List{Point}) CrossingPoints<br>Default Pipeline Output: (List{List{PointF}}) Components

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>ComponentExtraction ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Initializes a new instance of the [Transforms.ComponentExtraction](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ComponentExtraction.md) class with specified sampling resolution.</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>CrossingPoints</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>crossing points</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>EndPoints</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>endpoints</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>OutputComponents</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>Output components</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>
| <sub>Skeleton</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub>binary representation of a signature image</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/ComponentExtraction-100663565.md) ( [`Signature`](./../Signature.md) )</sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <sub></sub><div style="margin: -28px 0px 0px 0px;"><img width=200/>  | <br>


