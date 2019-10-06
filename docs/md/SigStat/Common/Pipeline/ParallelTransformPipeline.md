# [ParallelTransformPipeline](./ParallelTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>ParallelTransformPipeline (  )</sub><div style="width: 290px">| <sub></sub><div style="width: 290px">| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <sub>Items</sub><div style="width: 290px">| <sub>List of transforms to be run parallel.</sub><div style="width: 290px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>PipelineInputs</sub><div style="width: 290px">| <sub>Gets the pipeline inputs.</sub><div style="width: 290px">| <br>
| <sub>PipelineOutputs</sub><div style="width: 290px">| <sub>Gets the pipeline outputs.</sub><div style="width: 290px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Add](./Methods/ParallelTransformPipeline-100663502.md) ( [`ITransformation`](./../ITransformation.md) )</sub><div style="width: 290px">| <sub>Add new transform to the list.</sub><div style="width: 290px">| <br>
| <sub>[GetEnumerator](./Methods/ParallelTransformPipeline-100663501.md) (  )</sub><div style="width: 290px">| <sub></sub><div style="width: 290px">| <br>
| <sub>[Transform](./Methods/ParallelTransformPipeline-100663503.md) ( [`Signature`](./../Signature.md) )</sub><div style="width: 290px">| <sub>Executes transform [Pipeline.ParallelTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) parallel.  Passes input features for each.  Output is a range of all the Item outputs.</sub><div style="width: 290px">| <br>


