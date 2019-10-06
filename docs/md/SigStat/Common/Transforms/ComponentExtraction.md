# [ComponentExtraction](./ComponentExtraction.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Extracts unsorted components by tracing through the binary Skeleton raster.  <br>Default Pipeline Input: (bool[,]) Skeleton, (List{Point}) EndPoints, (List{Point}) CrossingPoints<br>Default Pipeline Output: (List{List{PointF}}) Components

## Constructors

| Name | Summary | 
| --- | --- | 
| ComponentExtraction ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )<div style="width: 400px">| Initializes a new instance of the [Transforms.ComponentExtraction](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ComponentExtraction.md) class with specified sampling resolution.<div style="width: 400px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| CrossingPoints<div style="width: 400px">| crossing points<div style="width: 400px">| <br>
| EndPoints<div style="width: 400px">| endpoints<div style="width: 400px">| <br>
| OutputComponents<div style="width: 400px">| Output components<div style="width: 400px">| <br>
| Skeleton<div style="width: 400px">| binary representation of a signature image<div style="width: 400px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Transform](./Methods/ComponentExtraction-100663565.md) ( [`Signature`](./../Signature.md) )<div style="width: 400px">| <div style="width: 400px">| <br>


