# [SequentialTransformPipeline](./SequentialTransformPipeline.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Pipeline](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Runs pipeline items in a sequence.  <br>Default Pipeline Output: Output of the last Item in the sequence.

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>SequentialTransformPipeline (  )</sub> | <sub></sub> | 


## Fields

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>Items</sub> | <sub>List of transforms to be run in sequence.</sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>PipelineInputs</sub> | <sub>Gets the pipeline inputs.</sub> | 
| <sub>PipelineOutputs</sub> | <sub>Gets the pipeline outputs.</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[Add](./Methods/SequentialTransformPipeline--Add.md) ( [`ITransformation`](./../ITransformation.md) )</sub> | <sub>Add new transform to the list.</sub> | 
| <sub>[GetEnumerator](./Methods/SequentialTransformPipeline--GetEnumerator.md) (  )</sub> | <sub></sub> | 
| <sub>[Transform](./Methods/SequentialTransformPipeline--Transform.md) ( [`Signature`](./../Signature.md) )</sub> | <sub>Executes transform [Items](../../../docs/md/SigStat/Common/Pipeline/SequentialTransformPipeline.md) in sequence.  Passes input features for each.  Output is the output of the last Item in the sequence.</sub> | 


