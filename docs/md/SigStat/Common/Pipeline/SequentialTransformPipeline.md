# [SequentialTransformPipeline](./SequentialTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in a sequence.  <br>Default Pipeline Output: Output of the last Item in the sequence.

## Constructors

NameSummary

<div style="text-align: right"><sub></sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


## Fields

TypeNameSummary

<div style="text-align: right"><sub>Items</sub></ div ><div style="text-align: right"><sub>List of transforms to be run in sequence.</sub></ div ><div style="text-align: right"></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>PipelineInputs</sub></ div ><div style="text-align: right"><sub>Gets the pipeline inputs.</sub></ div ><br>
<div style="text-align: right"><sub>PipelineOutputs</sub></ div ><div style="text-align: right"><sub>Gets the pipeline outputs.</sub></ div ><br>


## Methods

NameSummary

<div style="text-align: right"><sub>[Add](./Methods/SequentialTransformPipeline-100663508.md) ( [`ITransformation`](./../ITransformation.md) )</sub></ div ><div style="text-align: right"><sub>Add new transform to the list.</sub></ div ><br>
<div style="text-align: right"><sub>[GetEnumerator](./Methods/SequentialTransformPipeline-100663507.md) (  )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>
<div style="text-align: right"><sub>[Transform](./Methods/SequentialTransformPipeline-100663509.md) ( [`Signature`](./../Signature.md) )</sub></ div ><div style="text-align: right"><sub>Executes transform [Pipeline.SequentialTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) in sequence.  Passes input features for each.  Output is the output of the last Item in the sequence.</sub></ div ><br>


