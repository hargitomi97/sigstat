# [ParallelTransformPipeline](./ParallelTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.

## Constructors

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| ParallelTransformPipeline (  ) |  | 


## Fields

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| Items | List of transforms to be run parallel. | 


## Properties

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| PipelineInputs | Gets the pipeline inputs. | 
| PipelineOutputs | Gets the pipeline outputs. | 


## Methods

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| [Add](./Methods/ParallelTransformPipeline--Add.md) ( [`ITransformation`](./../ITransformation.md) ) | Add new transform to the list. | 
| [GetEnumerator](./Methods/ParallelTransformPipeline--GetEnumerator.md) (  ) |  | 
| [Transform](./Methods/ParallelTransformPipeline--Transform.md) ( [`Signature`](./../Signature.md) ) | Executes transform [Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Pipeline/ParallelTransformPipeline.md) parallel.  Passes input features for each.  Output is a range of all the Item outputs. | 


