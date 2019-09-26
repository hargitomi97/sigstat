# [SimpleConsoleLogger](./SimpleConsoleLogger.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILogger](./SimpleConsoleLogger.md)

## Summary
A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.

## Constructors

| Name | Summary | 
| --- | --- | 
| [SimpleConsoleLogger](./../../../ctor/SimpleConsoleLogger-100664037.md) (  ) | Initializes a SimpleConsoleLogger instance with LogLevel set to LogLevel.Information | 
| [SimpleConsoleLogger](./../../../ctor/SimpleConsoleLogger-100664038.md) ( [`LogLevel`](./SimpleConsoleLogger.md) logLevel ) | Initializes an instance of SimpleConsoleLogger with a custom LogLevel | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [LogLevel](./SimpleConsoleLogger.md) | LogLevel | All events below this level will be filtered | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable) | [BeginScope](./Methods/SimpleConsoleLogger-100664039.md) ( [`TState`](./SimpleConsoleLogger.md) state ) |  | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | [IsEnabled](./Methods/SimpleConsoleLogger-100664040.md) ( [`LogLevel`](./SimpleConsoleLogger.md) logLevel ) |  | 
| void | [Log](./Methods/SimpleConsoleLogger-100664041.md) ( [`LogLevel`](./SimpleConsoleLogger.md) logLevel, [`EventId`](./SimpleConsoleLogger.md) eventId, [`TState`](./SimpleConsoleLogger.md) state, [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception) exception, [`Func`](./SimpleConsoleLogger.md)\<[`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)> formatter ) |  | 


## Events

| Type | Name | Summary | 
| --- | --- | --- | 
| [ErrorEventHandler](./SimpleConsoleLogger.md) | Logged | Occurs when an error is logged | 


