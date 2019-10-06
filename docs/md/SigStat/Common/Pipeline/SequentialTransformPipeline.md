# [SequentialTransformPipeline](./SequentialTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in a sequence.  <br>Default Pipeline Output: Output of the last Item in the sequence.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>SequentialTransformPipeline (  )</sub><div style="width: 290px">| <sub></sub><div style="width: 290px">| <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <sub>Items</sub><div style="width: 290px">| <sub>List of transforms to be run in sequence.</sub><div style="width: 290px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>PipelineInputs</sub><div style="width: 290px">| <sub>Gets the pipeline inputs.</sub><div style="width: 290px">| <br>
| <sub>PipelineOutputs</sub><div style="width: 290px">| <sub>Gets the pipeline outputs.</sub><div style="width: 290px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Add](./Methods/SequentialTransformPipeline-100663508.md) ( [`ITransformation`](./../ITransformation.md) )</sub><div style="width: 290px">| <sub>Add new transform to the list.</sub><div style="width: 290px">| <br>
| <sub>[GetEnumerator](./Methods/SequentialTransformPipeline-100663507.md) (  )</sub><div style="width: 290px">| <sub></sub><div style="width: 290px">| <br>
| <sub>[Transform](./Methods/SequentialTransformPipeline-100663509.md) ( [`Signature`](./../Signature.md) )</sub><div style="width: 290px">| <sub>Executes transform [Pipeline.SequentialTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) in sequence.  Passes input features for each.  Output is the output of the last Item in the sequence.</sub><div style="width: 290px">| <br>


