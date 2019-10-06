# [SequentialTransformPipeline](./SequentialTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in a sequence.  <br>Default Pipeline Output: Output of the last Item in the sequence.

## Constructors

NameSummary

SequentialTransformPipeline (  )<br><sub></sub><br>


## Fields

TypeNameSummary

<br><sub>Items</sub><br><sub>List of transforms to be run in sequence.</sub><br>


## Properties

TypeNameSummary

<br><sub>PipelineInputs</sub><br><sub>Gets the pipeline inputs.</sub><br>
<br><sub>PipelineOutputs</sub><br><sub>Gets the pipeline outputs.</sub><br>


## Methods

NameSummary

<br><sub>[Add](./Methods/SequentialTransformPipeline-100663508.md) ( [`ITransformation`](./../ITransformation.md) )</sub><br><sub>Add new transform to the list.</sub><br>
<br><sub>[GetEnumerator](./Methods/SequentialTransformPipeline-100663507.md) (  )</sub><br><sub></sub><br>
<br><sub>[Transform](./Methods/SequentialTransformPipeline-100663509.md) ( [`Signature`](./../Signature.md) )</sub><br><sub>Executes transform [Pipeline.SequentialTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) in sequence.  Passes input features for each.  Output is the output of the last Item in the sequence.</sub><br>


