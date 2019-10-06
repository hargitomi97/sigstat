# <sub>[PipelineBase](./PipelineBase.md)</sub>

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./ILoggerObject.md)</sub>, <sub>[IProgress](./Helpers/IProgress.md)</sub>, <sub>[IPipelineIO](./Pipeline/IPipelineIO.md)</sub>

## Summary
TODO: Ideiglenes osztaly, C# 8.0 ban ezt atalakitani default implementacios interface be.  ILoggerObject, IProgress, IPipelineIO default implementacioja.

## Constructors

| Name | Summary | 

PipelineBase (  )<sub>Initializes a new instance of the [PipelineBase](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineBase.md) class.</sub>


## Properties

| Type | Name | Summary | 

<sub>[ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)</sub><sub>Logger</sub><sub></sub>
<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[PipelineInput](./Pipeline/PipelineInput.md)</sub>><sub>PipelineInputs</sub><sub>A collection of inputs for the pipeline elements</sub>
<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[PipelineOutput](./Pipeline/PipelineOutput.md)</sub>><sub>PipelineOutputs</sub><sub>A collection of outputs for the pipeline elements</sub>
<sub>[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)</sub><sub>Progress</sub><sub></sub>


## Events

| Type | Name | Summary | 

<sub>[EventHandler](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1)</sub>\<<sub>[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)</sub>><sub>ProgressChanged</sub><sub>The event is raised whenever the value of [PipelineBase.Progress](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineBase.md) changes</sub>


