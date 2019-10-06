# [ParallelTransformPipeline](./ParallelTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.

## Constructors

NameSummary

<div style="text-align: right"><sub></sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


## Fields

TypeNameSummary

<div style="text-align: right"><sub>Items</sub></ div ><div style="text-align: right"><sub>List of transforms to be run parallel.</sub></ div ><div style="text-align: right"></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>PipelineInputs</sub></ div ><div style="text-align: right"><sub>Gets the pipeline inputs.</sub></ div ><br>
<div style="text-align: right"><sub>PipelineOutputs</sub></ div ><div style="text-align: right"><sub>Gets the pipeline outputs.</sub></ div ><br>


## Methods

NameSummary

<div style="text-align: right"><sub>[Add](./Methods/ParallelTransformPipeline-100663502.md) ( [`ITransformation`](./../ITransformation.md) )</sub></ div ><div style="text-align: right"><sub>Add new transform to the list.</sub></ div ><br>
<div style="text-align: right"><sub>[GetEnumerator](./Methods/ParallelTransformPipeline-100663501.md) (  )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>
<div style="text-align: right"><sub>[Transform](./Methods/ParallelTransformPipeline-100663503.md) ( [`Signature`](./../Signature.md) )</sub></ div ><div style="text-align: right"><sub>Executes transform [Pipeline.ParallelTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) parallel.  Passes input features for each.  Output is a range of all the Item outputs.</sub></ div ><br>


