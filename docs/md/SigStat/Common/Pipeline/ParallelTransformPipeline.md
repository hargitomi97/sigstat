# [ParallelTransformPipeline](./ParallelTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>ParallelTransformPipeline (  )</sub><img width=200/>| <sub></sub><img width=200/>| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <sub>Items</sub><img width=200/>| <sub>List of transforms to be run parallel.</sub><img width=200/>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>PipelineInputs</sub><img width=200/>| <sub>Gets the pipeline inputs.</sub><img width=200/>| <br>
| <sub>PipelineOutputs</sub><img width=200/>| <sub>Gets the pipeline outputs.</sub><img width=200/>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Add](./Methods/ParallelTransformPipeline-100663502.md) ( [`ITransformation`](./../ITransformation.md) )</sub><img width=200/>| <sub>Add new transform to the list.</sub><img width=200/>| <br>
| <sub>[GetEnumerator](./Methods/ParallelTransformPipeline-100663501.md) (  )</sub><img width=200/>| <sub></sub><img width=200/>| <br>
| <sub>[Transform](./Methods/ParallelTransformPipeline-100663503.md) ( [`Signature`](./../Signature.md) )</sub><img width=200/>| <sub>Executes transform [Pipeline.ParallelTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) parallel.  Passes input features for each.  Output is a range of all the Item outputs.</sub><img width=200/>| <br>


