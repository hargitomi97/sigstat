# [SequentialTransformPipeline](./SequentialTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in a sequence.  <br>Default Pipeline Output: Output of the last Item in the sequence.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>SequentialTransformPipeline (  )</sub><img width=200 unselectable="on"/>  | <sub></sub><img width=200 unselectable="on"/>  | <br>


## Fields

| Name | Summary | 
| --- | --- | 
| <sub>Items</sub><img width=200 unselectable="on"/>  | <sub>List of transforms to be run in sequence.</sub><img width=200 unselectable="on"/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>PipelineInputs</sub><img width=200 unselectable="on"/>  | <sub>Gets the pipeline inputs.</sub><img width=200 unselectable="on"/>  | <br>
| <sub>PipelineOutputs</sub><img width=200 unselectable="on"/>  | <sub>Gets the pipeline outputs.</sub><img width=200 unselectable="on"/>  | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Add](./Methods/SequentialTransformPipeline-100663508.md) ( [`ITransformation`](./../ITransformation.md) )</sub><img width=200 unselectable="on"/>  | <sub>Add new transform to the list.</sub><img width=200 unselectable="on"/>  | <br>
| <sub>[GetEnumerator](./Methods/SequentialTransformPipeline-100663507.md) (  )</sub><img width=200 unselectable="on"/>  | <sub></sub><img width=200 unselectable="on"/>  | <br>
| <sub>[Transform](./Methods/SequentialTransformPipeline-100663509.md) ( [`Signature`](./../Signature.md) )</sub><img width=200 unselectable="on"/>  | <sub>Executes transform [Pipeline.SequentialTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) in sequence.  Passes input features for each.  Output is the output of the last Item in the sequence.</sub><img width=200 unselectable="on"/>  | <br>


