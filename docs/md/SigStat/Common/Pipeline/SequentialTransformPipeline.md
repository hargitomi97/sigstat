# [SequentialTransformPipeline](./SequentialTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in a sequence.  <br>Default Pipeline Output: Output of the last Item in the sequence.

## Constructors

| Name | Summary | 
| --- | --- | 
| [SequentialTransformPipeline](./../../../ctor/SequentialTransformPipeline-100663510.md) (  ) |  | 


## Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[ITransformation](./../ITransformation.md)> | Items | List of transforms to be run in sequence. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[PipelineInput](./PipelineInput.md)> | PipelineInputs | Gets the pipeline inputs. | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[PipelineOutput](./PipelineOutput.md)> | PipelineOutputs | Gets the pipeline outputs. | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [Add](./Methods/SequentialTransformPipeline-100663508.md) ( [`ITransformation`](./../ITransformation.md) newItem ) | Add new transform to the list. | 
| [IEnumerator](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerator) | [GetEnumerator](./Methods/SequentialTransformPipeline-100663507.md) (  ) |  | 
| void | [Transform](./Methods/SequentialTransformPipeline-100663509.md) ( [`Signature`](./../Signature.md) signature ) | Executes transform [SigStat.Common.Pipeline.SequentialTransformPipeline.Items](./Signature.md) in sequence.  Passes input features for each.  Output is the output of the last Item in the sequence. | 


