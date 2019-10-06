# <sub>[ParallelTransformPipeline](./ParallelTransformPipeline.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../ILoggerObject.md)</sub>, <sub>[IProgress](./../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./IPipelineIO.md)</sub>, <sub>[IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)</sub>, <sub>[ITransformation](./../ITransformation.md)</sub>

## Summary
Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.

## Constructors

| Name | Summary | 

ParallelTransformPipeline (  )<sub></sub>


## Fields

| Type | Name | Summary | 

<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[ITransformation](./../ITransformation.md)</sub>><sub>Items</sub><sub>List of transforms to be run parallel.</sub>


## Properties

| Type | Name | Summary | 

<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[PipelineInput](./PipelineInput.md)</sub>><sub>PipelineInputs</sub><sub>Gets the pipeline inputs.</sub>
<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[PipelineOutput](./PipelineOutput.md)</sub>><sub>PipelineOutputs</sub><sub>Gets the pipeline outputs.</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Add](./Methods/ParallelTransformPipeline-100663502.md) ( <sub>[`ITransformation`](./../ITransformation.md)</sub> )</sub><sub>Add new transform to the list.</sub>
<sub>[IEnumerator](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerator)</sub><sub>[GetEnumerator](./Methods/ParallelTransformPipeline-100663501.md) (  )</sub><sub></sub>
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/ParallelTransformPipeline-100663503.md) ( <sub>[`Signature`](./../Signature.md)</sub> )</sub><sub>Executes transform [Pipeline.ParallelTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) parallel.  Passes input features for each.  Output is a range of all the Item outputs.</sub>


