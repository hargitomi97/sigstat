# [ParallelTransformPipeline](./ParallelTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.

## Constructors

| Name | Summary | 

ParallelTransformPipeline (  )<sub></sub>


## Fields

| Type | Name | Summary | 

<sub>Items</sub><sub>List of transforms to be run parallel.</sub>


## Properties

| Type | Name | Summary | 

<sub>PipelineInputs</sub><sub>Gets the pipeline inputs.</sub>
<sub>PipelineOutputs</sub><sub>Gets the pipeline outputs.</sub>


## Methods

| Return | Name | Summary | 

<sub>[Add](./Methods/ParallelTransformPipeline-100663502.md) ( [`ITransformation`](./../ITransformation.md) )</sub><sub>Add new transform to the list.</sub>
<sub>[GetEnumerator](./Methods/ParallelTransformPipeline-100663501.md) (  )</sub><sub></sub>
<sub>[Transform](./Methods/ParallelTransformPipeline-100663503.md) ( [`Signature`](./../Signature.md) )</sub><sub>Executes transform [Pipeline.ParallelTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) parallel.  Passes input features for each.  Output is a range of all the Item outputs.</sub>


