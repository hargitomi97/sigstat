# [SimpleConsoleLogger](./SimpleConsoleLogger.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)

## Summary
A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.

## Constructors

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>SimpleConsoleLogger (  )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>Initializes a SimpleConsoleLogger instance with LogLevel set to LogLevel.Information</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>SimpleConsoleLogger ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>Initializes an instance of SimpleConsoleLogger with a custom LogLevel</sub><p>&nbsp;</p>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>LogLevel</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>All events below this level will be filtered</sub><p>&nbsp;</p>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>[BeginScope](./Methods/SimpleConsoleLogger-100664082.md) ( [`TState`](./SimpleConsoleLogger.md) )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>[IsEnabled](./Methods/SimpleConsoleLogger-100664083.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>[Log](./Methods/SimpleConsoleLogger-100664084.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel), [`EventId`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.EventId), [`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)> )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>


## Events

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>Logged</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>Occurs when an error is logged</sub><p>&nbsp;</p>| <br>


