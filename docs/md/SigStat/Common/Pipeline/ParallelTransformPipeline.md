# [ParallelTransformPipeline](./ParallelTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>ParallelTransformPipeline (  )</sub> | <sub></sub> | 


## Fields

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>Items</sub> | <sub>List of transforms to be run parallel.</sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>PipelineInputs</sub> | <sub>Gets the pipeline inputs.</sub> | 
| <sub>PipelineOutputs</sub> | <sub>Gets the pipeline outputs.</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[Add](./Methods/ParallelTransformPipeline--Add.md) ( [`ITransformation`](./../ITransformation.md) )</sub> | <sub>Add new transform to the list.</sub> | 
| <sub>[GetEnumerator](./Methods/ParallelTransformPipeline--GetEnumerator.md) (  )</sub> | <sub></sub> | 
| <sub>[Transform](./Methods/ParallelTransformPipeline--Transform.md) ( [`Signature`](./../Signature.md) )</sub> | <sub>Executes transform [Items](../../docs/mdSigStat/Common/Pipeline/ParallelTransformPipeline.md) parallel.  Passes input features for each.  Output is a range of all the Item outputs.</sub> | 


