# [SimpleConsoleLogger](./SimpleConsoleLogger.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)

## Summary
A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>SimpleConsoleLogger (  )</sub></div>| <sub>Initializes a SimpleConsoleLogger instance with LogLevel set to LogLevel.Information</sub></div>| <br>
| <div style ="width:390px"><sub>SimpleConsoleLogger ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub></div>| <sub>Initializes an instance of SimpleConsoleLogger with a custom LogLevel</sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>LogLevel</sub></div>| <sub>All events below this level will be filtered</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>[BeginScope](./Methods/SimpleConsoleLogger-100664039.md) ( [`TState`](./SimpleConsoleLogger.md) )</sub></div>| <sub></sub></div>| <br>
| <div style ="width:390px"><sub>[IsEnabled](./Methods/SimpleConsoleLogger-100664040.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub></div>| <sub></sub></div>| <br>
| <div style ="width:390px"><sub>[Log](./Methods/SimpleConsoleLogger-100664041.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel), [`EventId`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.EventId), [`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)> )</sub></div>| <sub></sub></div>| <br>


## Events

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>Logged</sub></div>| <sub>Occurs when an error is logged</sub></div>| <br>


