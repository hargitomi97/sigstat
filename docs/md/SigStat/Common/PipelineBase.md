# [PipelineBase](./PipelineBase.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./ILoggerObject.md), [IProgress](./Helpers/IProgress.md), [IPipelineIO](./Pipeline/IPipelineIO.md)

## Summary
<sub>TODO: Ideiglenes osztaly, C# 8.0 ban ezt atalakitani default implementacios interface be.  ILoggerObject, IProgress, IPipelineIO default implementacioja.</sub>

## Constructors

| Name | Summary | 
| --- | --- | 
| PipelineBase (  ) | <sub>Initializes a new instance of the [PipelineBase](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineBase.md) class.</sub> | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) | Logger | <sub></sub> | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[PipelineInput](./Pipeline/PipelineInput.md)> | PipelineInputs | <sub>A collection of inputs for the pipeline elements</sub> | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[PipelineOutput](./Pipeline/PipelineOutput.md)> | PipelineOutputs | <sub>A collection of outputs for the pipeline elements</sub> | 
| [Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) | Progress | <sub></sub> | 


## Events

| Type | Name | Summary | 
| --- | --- | --- | 
| [EventHandler](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1)\<[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)> | ProgressChanged | <sub>The event is raised whenever the value of [PipelineBase.Progress](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineBase.md) changes</sub> | 


