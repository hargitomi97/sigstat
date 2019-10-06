# <sub>[SequentialTransformPipeline](./SequentialTransformPipeline.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../ILoggerObject.md)</sub>, <sub>[IProgress](./../Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./IPipelineIO.md)</sub>, <sub>[IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)</sub>, <sub>[ITransformation](./../ITransformation.md)</sub>

## Summary
Runs pipeline items in a sequence.  <br>Default Pipeline Output: Output of the last Item in the sequence.

## Constructors

| Name | Summary | 

SequentialTransformPipeline (  )<sub></sub>


## Fields

| Type | Name | Summary | 

<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[ITransformation](./../ITransformation.md)</sub>><sub>Items</sub><sub>List of transforms to be run in sequence.</sub>


## Properties

| Type | Name | Summary | 

<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[PipelineInput](./PipelineInput.md)</sub>><sub>PipelineInputs</sub><sub>Gets the pipeline inputs.</sub>
<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[PipelineOutput](./PipelineOutput.md)</sub>><sub>PipelineOutputs</sub><sub>Gets the pipeline outputs.</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Add](./Methods/SequentialTransformPipeline-100663508.md) ( <sub>[`ITransformation`](./../ITransformation.md)</sub> )</sub><sub>Add new transform to the list.</sub>
<sub>[IEnumerator](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerator)</sub><sub>[GetEnumerator](./Methods/SequentialTransformPipeline-100663507.md) (  )</sub><sub></sub>
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Transform](./Methods/SequentialTransformPipeline-100663509.md) ( <sub>[`Signature`](./../Signature.md)</sub> )</sub><sub>Executes transform [Pipeline.SequentialTransformPipeline.Items](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) in sequence.  Passes input features for each.  Output is the output of the last Item in the sequence.</sub>


