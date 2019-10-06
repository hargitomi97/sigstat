# [SimpleConsoleLogger](./SimpleConsoleLogger.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)

## Summary
A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>SimpleConsoleLogger (  )</sub><img width=200 unselectable="on"/>  | <sub>Initializes a SimpleConsoleLogger instance with LogLevel set to LogLevel.Information</sub><img width=200 unselectable="on"/>  | <br>
| <sub>SimpleConsoleLogger ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub><img width=200 unselectable="on"/>  | <sub>Initializes an instance of SimpleConsoleLogger with a custom LogLevel</sub><img width=200 unselectable="on"/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>LogLevel</sub><img width=200 unselectable="on"/>  | <sub>All events below this level will be filtered</sub><img width=200 unselectable="on"/>  | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[BeginScope](./Methods/SimpleConsoleLogger-100664039.md) ( [`TState`](./SimpleConsoleLogger.md) )</sub><img width=200 unselectable="on"/>  | <sub></sub><img width=200 unselectable="on"/>  | <br>
| <sub>[IsEnabled](./Methods/SimpleConsoleLogger-100664040.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub><img width=200 unselectable="on"/>  | <sub></sub><img width=200 unselectable="on"/>  | <br>
| <sub>[Log](./Methods/SimpleConsoleLogger-100664041.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel), [`EventId`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.EventId), [`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)> )</sub><img width=200 unselectable="on"/>  | <sub></sub><img width=200 unselectable="on"/>  | <br>


## Events

| Name | Summary | 
| --- | --- | 
| <sub>Logged</sub><img width=200 unselectable="on"/>  | <sub>Occurs when an error is logged</sub><img width=200 unselectable="on"/>  | <br>


