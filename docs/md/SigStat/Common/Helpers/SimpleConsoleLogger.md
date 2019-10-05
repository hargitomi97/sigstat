# [SimpleConsoleLogger](./SimpleConsoleLogger.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)

## Summary
<sub>A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.</sub>

## Constructors

| Name | Summary | 
| --- | --- | 
| SimpleConsoleLogger (  ) | <sub>Initializes a SimpleConsoleLogger instance with LogLevel set to LogLevel.Information</sub> | 
| SimpleConsoleLogger ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) ) | <sub>Initializes an instance of SimpleConsoleLogger with a custom LogLevel</sub> | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [LogLevel](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) | LogLevel | <sub>All events below this level will be filtered</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable) | [BeginScope](./Methods/SimpleConsoleLogger-100664039.md) ( [`TState`](./SimpleConsoleLogger.md) ) |  | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | [IsEnabled](./Methods/SimpleConsoleLogger-100664040.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) ) |  | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Log](./Methods/SimpleConsoleLogger-100664041.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel), [`EventId`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.EventId), [`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)> ) |  | 


## Events

| Type | Name | Summary | 
| --- | --- | --- | 
| [ErrorEventHandler](./SimpleConsoleLogger.md) | Logged | <sub>Occurs when an error is logged</sub> | 


