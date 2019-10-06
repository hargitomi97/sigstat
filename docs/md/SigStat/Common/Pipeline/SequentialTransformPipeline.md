# [SequentialTransformPipeline](./SequentialTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in a sequence.  <br>Default Pipeline Output: Output of the last Item in the sequence.

## Constructors

| Name | Summary | 
| --- | --- | 
|<img width=200/> <sub></sub> | <sub></sub> | <br>


## Fields

| Type | Name | Summary | 
| --- | --- | --- | 
|<img width=200/> <sub>Items</sub> | <sub>List of transforms to be run in sequence.</sub> |  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
|<img width=200/> <sub>PipelineInputs</sub> | <sub>Gets the pipeline inputs.</sub> | <br>
|<img width=200/> <sub>PipelineOutputs</sub> | <sub>Gets the pipeline outputs.</sub> | <br>


## Methods

| Name | Summary | 
| --- | --- | 
|<img width=200/> <sub>[Add](./Methods/SequentialTransformPipeline-100663508.md) ( [`ITransformation`](./../ITransformation.md) )</sub> | <sub>Add new transform to the list.</sub> | <br>
|<img width=200/> <sub>[GetEnumerator](./Methods/SequentialTransformPipeline-100663507.md) (  )</sub> | <sub></sub> | <br>
|<img width=200/> <sub>[Transform](./Methods/SequentialTransformPipeline-100663509.md) ( [`Signature`](./../Signature.md) )</sub> | <sub>Executes transform [Pipeline.SequentialTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) in sequence.  Passes input features for each.  Output is the output of the last Item in the sequence.</sub> | <br>


