# [SequentialTransformPipeline](./SequentialTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in a sequence.  <br>Default Pipeline Output: Output of the last Item in the sequence.

## Constructors

| Name | Summary | 
| --- | --- | 
| SequentialTransformPipeline (  )<div style="width: 400px">| <div style="width: 400px">| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| Items<div style="width: 400px">| List of transforms to be run in sequence.<div style="width: 400px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| PipelineInputs<div style="width: 400px">| Gets the pipeline inputs.<div style="width: 400px">| <br>
| PipelineOutputs<div style="width: 400px">| Gets the pipeline outputs.<div style="width: 400px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Add](./Methods/SequentialTransformPipeline-100663508.md) ( [`ITransformation`](./../ITransformation.md) )<div style="width: 400px">| Add new transform to the list.<div style="width: 400px">| <br>
| [GetEnumerator](./Methods/SequentialTransformPipeline-100663507.md) (  )<div style="width: 400px">| <div style="width: 400px">| <br>
| [Transform](./Methods/SequentialTransformPipeline-100663509.md) ( [`Signature`](./../Signature.md) )<div style="width: 400px">| Executes transform [Pipeline.SequentialTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) in sequence.  Passes input features for each.  Output is the output of the last Item in the sequence.<div style="width: 400px">| <br>


