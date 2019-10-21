# [ComponentExtraction](./ComponentExtraction.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Extracts unsorted components by tracing through the binary Skeleton raster.  <br>Default Pipeline Input: (bool[,]) Skeleton, (List{Point}) EndPoints, (List{Point}) CrossingPoints <br>Default Pipeline Output: (List{List{PointF}}) Components

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>ComponentExtraction ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )</sub> | <sub>Initializes a new instance of the [ComponentExtraction](../../../../../SigStat/Common/Transforms/ComponentExtraction.md) class with specified sampling resolution.</sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>CrossingPoints</sub> | <sub>crossing points</sub> | 
| <sub>EndPoints</sub> | <sub>endpoints</sub> | 
| <sub>OutputComponents</sub> | <sub>Output components</sub> | 
| <sub>Skeleton</sub> | <sub>binary representation of a signature image</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[Transform](./Methods/ComponentExtraction--Transform.md) ( [`Signature`](./../Signature.md) )</sub> | <sub></sub> | 


