# [ComponentExtraction](./ComponentExtraction.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Extracts unsorted components by tracing through the binary Skeleton raster.  <br>Default Pipeline Input: (bool[,]) Skeleton, (List{Point}) EndPoints, (List{Point}) CrossingPoints<br>Default Pipeline Output: (List{List{PointF}}) Components

## Constructors

NameSummary

<div style="text-align: right"><sub>Initializes a new instance of the [Transforms.ComponentExtraction](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ComponentExtraction.md) class with specified sampling resolution.</sub></ div ><div style="text-align: right"><sub>Initializes a new instance of the [Transforms.ComponentExtraction](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ComponentExtraction.md) class with specified sampling resolution.</sub></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>CrossingPoints</sub></ div ><div style="text-align: right"><sub>crossing points</sub></ div ><br>
<div style="text-align: right"><sub>EndPoints</sub></ div ><div style="text-align: right"><sub>endpoints</sub></ div ><br>
<div style="text-align: right"><sub>OutputComponents</sub></ div ><div style="text-align: right"><sub>Output components</sub></ div ><br>
<div style="text-align: right"><sub>Skeleton</sub></ div ><div style="text-align: right"><sub>binary representation of a signature image</sub></ div ><br>


## Methods

NameSummary

<div style="text-align: right"><sub>[Transform](./Methods/ComponentExtraction-100663565.md) ( [`Signature`](./../Signature.md) )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


