# [ParallelTransformPipeline](./ParallelTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.

## Constructors

| Name<a href="#"><img width=160></a> | Summary<a href="#"><img width=400></a> | 
| --- | --- | 
| <sub>ParallelTransformPipeline (  )</sub>| <sub></sub>| <br>


## Fields

| Name<a href="#"><img width=160></a> | Summary<a href="#"><img width=400></a> | 
| --- | --- | 
| <sub>Items</sub>| <sub>List of transforms to be run parallel.</sub>| <br>


## Properties

| Name<a href="#"><img width=160></a> | Summary<a href="#"><img width=400></a> | 
| --- | --- | 
| <sub>PipelineInputs</sub>| <sub>Gets the pipeline inputs.</sub>| <br>
| <sub>PipelineOutputs</sub>| <sub>Gets the pipeline outputs.</sub>| <br>


## Methods

| Name<a href="#"><img width=160></a> | Summary<a href="#"><img width=400></a> | 
| --- | --- | 
| <sub>[Add](./Methods/ParallelTransformPipeline-100663504.md) ( [`ITransformation`](./../ITransformation.md) )</sub>| <sub>Add new transform to the list.</sub>| <br>
| <sub>[GetEnumerator](./Methods/ParallelTransformPipeline-100663503.md) (  )</sub>| <sub></sub>| <br>
| <sub>[Transform](./Methods/ParallelTransformPipeline-100663505.md) ( [`Signature`](./../Signature.md) )</sub>| <sub>Executes transform [Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) parallel.  Passes input features for each.  Output is a range of all the Item outputs.</sub>| <br>


