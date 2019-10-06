# [ComponentExtraction](./ComponentExtraction.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Extracts unsorted components by tracing through the binary Skeleton raster.  <br>Default Pipeline Input: (bool[,]) Skeleton, (List{Point}) EndPoints, (List{Point}) CrossingPoints<br>Default Pipeline Output: (List{List{PointF}}) Components

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>ComponentExtraction ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )</sub></div>| <div style="width:290px"><sub>Initializes a new instance of the [Transforms.ComponentExtraction](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ComponentExtraction.md) class with specified sampling resolution.</sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>CrossingPoints</sub></div>| <div style="width:290px"><sub>crossing points</sub></div>| <br>
| <div style="width:290px"><sub>EndPoints</sub></div>| <div style="width:290px"><sub>endpoints</sub></div>| <br>
| <div style="width:290px"><sub>OutputComponents</sub></div>| <div style="width:290px"><sub>Output components</sub></div>| <br>
| <div style="width:290px"><sub>Skeleton</sub></div>| <div style="width:290px"><sub>binary representation of a signature image</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:290px"><sub>[Transform](./Methods/ComponentExtraction-100663565.md) ( [`Signature`](./../Signature.md) )</sub></div>| <div style="width:290px"><sub></sub></div>| <br>


