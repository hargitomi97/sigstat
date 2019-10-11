# [SimpleConsoleLogger](./SimpleConsoleLogger.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)

## Summary
A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>SimpleConsoleLogger (  )</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub>Initializes a SimpleConsoleLogger instance with LogLevel set to LogLevel.Information</sub>| <br>
| <sub>SimpleConsoleLogger ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub>Initializes an instance of SimpleConsoleLogger with a custom LogLevel</sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>LogLevel</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub>All events below this level will be filtered</sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[BeginScope](./Methods/SimpleConsoleLogger-100664082.md) ( [`TState`](./SimpleConsoleLogger.md) )</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub></sub>| <br>
| <sub>[IsEnabled](./Methods/SimpleConsoleLogger-100664083.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub></sub>| <br>
| <sub>[Log](./Methods/SimpleConsoleLogger-100664084.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel), [`EventId`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.EventId), [`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)> )</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub></sub>| <br>


## Events

| Name | Summary | 
| --- | --- | 
| <sub>Logged</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub>Occurs when an error is logged</sub>| <br>


