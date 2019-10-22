# [SimpleConsoleLogger](./SimpleConsoleLogger.md)

Namespace: [SigStat](../../) > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)

## Summary
A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>SimpleConsoleLogger (  )</sub> | <sub>Initializes a SimpleConsoleLogger instance with LogLevel set to LogLevel.Information</sub> | 
| <sub>SimpleConsoleLogger ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub> | <sub>Initializes an instance of SimpleConsoleLogger with a custom LogLevel</sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>LogLevel</sub> | <sub>All events below this level will be filtered</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[BeginScope](./Methods/SimpleConsoleLogger--BeginScope.md) ( [`TState`](./SimpleConsoleLogger.md) )</sub> | <sub></sub> | 
| <sub>[IsEnabled](./Methods/SimpleConsoleLogger--IsEnabled.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub> | <sub></sub> | 
| <sub>[Log](./Methods/SimpleConsoleLogger--Log.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel), [`EventId`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.EventId), [`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)> )</sub> | <sub></sub> | 


## Events

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>Logged</sub> | <sub>Occurs when an error is logged</sub> | 


