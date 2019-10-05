# [SequentialTransformPipeline](./SequentialTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
<sub>Runs pipeline items in a sequence.  <br>Default Pipeline Output: Output of the last Item in the sequence.</sub>

## Constructors

| Name | Summary | 
| --- | --- | 
| SequentialTransformPipeline (  ) |  | 


## Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[ITransformation](./../ITransformation.md)> | Items | <sub>List of transforms to be run in sequence.</sub> | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[PipelineInput](./PipelineInput.md)> | PipelineInputs | <sub>Gets the pipeline inputs.</sub> | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[PipelineOutput](./PipelineOutput.md)> | PipelineOutputs | <sub>Gets the pipeline outputs.</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Add](./Methods/SequentialTransformPipeline-100663508.md) ( [`ITransformation`](./../ITransformation.md) ) | <sub>Add new transform to the list.</sub> | 
| [IEnumerator](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerator) | [GetEnumerator](./Methods/SequentialTransformPipeline-100663507.md) (  ) | <sub></sub> | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Transform](./Methods/SequentialTransformPipeline-100663509.md) ( [`Signature`](./../Signature.md) ) | <sub>Executes transform [Pipeline.SequentialTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) in sequence.  Passes input features for each.  Output is the output of the last Item in the sequence.</sub> | 


