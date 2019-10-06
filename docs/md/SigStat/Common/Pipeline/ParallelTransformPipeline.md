# [ParallelTransformPipeline](./ParallelTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.

## Constructors

| Name | Summary | 
| --- | --- | 
| ParallelTransformPipeline (  )<div style="width: 300px">| <div style="width: 300px">| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| Items<div style="width: 300px">| List of transforms to be run parallel.<div style="width: 300px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| PipelineInputs<div style="width: 300px">| Gets the pipeline inputs.<div style="width: 300px">| <br>
| PipelineOutputs<div style="width: 300px">| Gets the pipeline outputs.<div style="width: 300px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Add](./Methods/ParallelTransformPipeline-100663502.md) ( [`ITransformation`](./../ITransformation.md) )<div style="width: 300px">| Add new transform to the list.<div style="width: 300px">| <br>
| [GetEnumerator](./Methods/ParallelTransformPipeline-100663501.md) (  )<div style="width: 300px">| <div style="width: 300px">| <br>
| [Transform](./Methods/ParallelTransformPipeline-100663503.md) ( [`Signature`](./../Signature.md) )<div style="width: 300px">| Executes transform [Pipeline.ParallelTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) parallel.  Passes input features for each.  Output is a range of all the Item outputs.<div style="width: 300px">| <br>


