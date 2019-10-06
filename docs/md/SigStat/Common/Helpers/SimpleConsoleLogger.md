# [SimpleConsoleLogger](./SimpleConsoleLogger.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)

## Summary
A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.

## Constructors

| Name | Summary | 
| --- | --- | 
| SimpleConsoleLogger (  )<div style="width: 400px">| Initializes a SimpleConsoleLogger instance with LogLevel set to LogLevel.Information<div style="width: 400px">| <br>
| SimpleConsoleLogger ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )<div style="width: 400px">| Initializes an instance of SimpleConsoleLogger with a custom LogLevel<div style="width: 400px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| LogLevel<div style="width: 400px">| All events below this level will be filtered<div style="width: 400px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [BeginScope](./Methods/SimpleConsoleLogger-100664039.md) ( [`TState`](./SimpleConsoleLogger.md) )<div style="width: 400px">| <div style="width: 400px">| <br>
| [IsEnabled](./Methods/SimpleConsoleLogger-100664040.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )<div style="width: 400px">| <div style="width: 400px">| <br>
| [Log](./Methods/SimpleConsoleLogger-100664041.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel), [`EventId`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.EventId), [`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)> )<div style="width: 400px">| <div style="width: 400px">| <br>


## Events

| Name | Summary | 
| --- | --- | 
| Logged<div style="width: 400px">| Occurs when an error is logged<div style="width: 400px">| <br>


