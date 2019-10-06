# [ParallelTransformPipeline](./ParallelTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>ParallelTransformPipeline (  )</sub></div>| <sub></sub></div>| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>Items</sub></div>| <sub>List of transforms to be run parallel.</sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>PipelineInputs</sub></div>| <sub>Gets the pipeline inputs.</sub></div>| <br>
| <div style="width:490px"><sub>PipelineOutputs</sub></div>| <sub>Gets the pipeline outputs.</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>[Add](./Methods/ParallelTransformPipeline-100663502.md) ( [`ITransformation`](./../ITransformation.md) )</sub></div>| <sub>Add new transform to the list.</sub></div>| <br>
| <div style="width:490px"><sub>[GetEnumerator](./Methods/ParallelTransformPipeline-100663501.md) (  )</sub></div>| <sub></sub></div>| <br>
| <div style="width:490px"><sub>[Transform](./Methods/ParallelTransformPipeline-100663503.md) ( [`Signature`](./../Signature.md) )</sub></div>| <sub>Executes transform [Pipeline.ParallelTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) parallel.  Passes input features for each.  Output is a range of all the Item outputs.</sub></div>| <br>


