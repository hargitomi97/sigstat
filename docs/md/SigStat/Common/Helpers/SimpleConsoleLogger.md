# [SimpleConsoleLogger](./SimpleConsoleLogger.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)

## Summary
A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.

## Constructors

| Name<a href="#"><img width=150></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>SimpleConsoleLogger (  )</sub>| <sub>Initializes a SimpleConsoleLogger instance with LogLevel set to LogLevel.Information</sub>| <br>
| <sub>SimpleConsoleLogger ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub>| <sub>Initializes an instance of SimpleConsoleLogger with a custom LogLevel</sub>| <br>


## Properties

| Name<a href="#"><img width=150></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>LogLevel</sub>| <sub>All events below this level will be filtered</sub>| <br>


## Methods

| Name<a href="#"><img width=150></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>[BeginScope](./Methods/SimpleConsoleLogger-100664150.md) ( [`TState`](./SimpleConsoleLogger.md) )</sub>| <sub></sub>| <br>
| <sub>[IsEnabled](./Methods/SimpleConsoleLogger-100664151.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub>| <sub></sub>| <br>
| <sub>[Log](./Methods/SimpleConsoleLogger-100664152.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel), [`EventId`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.EventId), [`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)> )</sub>| <sub></sub>| <br>


## Events

| Name<a href="#"><img width=150></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>Logged</sub>| <sub>Occurs when an error is logged</sub>| <br>


