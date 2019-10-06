# [ParallelTransformPipeline](./ParallelTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.

## Constructors

NameSummary

<sub></sub><br><sub></sub><br>


## Fields

TypeNameSummary

<sub>Items</sub><br><sub>List of transforms to be run parallel.</sub><br><br>


## Properties

TypeNameSummary

<sub>PipelineInputs</sub><br><sub>Gets the pipeline inputs.</sub><br><br>
<sub>PipelineOutputs</sub><br><sub>Gets the pipeline outputs.</sub><br><br>


## Methods

NameSummary

<sub>[Add](./Methods/ParallelTransformPipeline-100663502.md) ( [`ITransformation`](./../ITransformation.md) )</sub><br><sub>Add new transform to the list.</sub><br>
<sub>[GetEnumerator](./Methods/ParallelTransformPipeline-100663501.md) (  )</sub><br><sub></sub><br>
<sub>[Transform](./Methods/ParallelTransformPipeline-100663503.md) ( [`Signature`](./../Signature.md) )</sub><br><sub>Executes transform [Pipeline.ParallelTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) parallel.  Passes input features for each.  Output is a range of all the Item outputs.</sub><br>


