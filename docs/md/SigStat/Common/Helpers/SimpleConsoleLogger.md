# [SimpleConsoleLogger](./SimpleConsoleLogger.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)

## Summary
A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.

## Constructors

NameSummary

<div style="text-align: right"><sub>Initializes a SimpleConsoleLogger instance with LogLevel set to LogLevel.Information</sub></ div ><div style="text-align: right"><sub>Initializes a SimpleConsoleLogger instance with LogLevel set to LogLevel.Information</sub></ div ><br>
<div style="text-align: right"><sub>Initializes an instance of SimpleConsoleLogger with a custom LogLevel</sub></ div ><div style="text-align: right"><sub>Initializes an instance of SimpleConsoleLogger with a custom LogLevel</sub></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>LogLevel</sub></ div ><div style="text-align: right"><sub>All events below this level will be filtered</sub></ div ><br>


## Methods

NameSummary

<div style="text-align: right"><sub>[BeginScope](./Methods/SimpleConsoleLogger-100664039.md) ( [`TState`](./SimpleConsoleLogger.md) )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>
<div style="text-align: right"><sub>[IsEnabled](./Methods/SimpleConsoleLogger-100664040.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel) )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>
<div style="text-align: right"><sub>[Log](./Methods/SimpleConsoleLogger-100664041.md) ( [`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel), [`EventId`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.EventId), [`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`TState`](./SimpleConsoleLogger.md), [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)> )</sub></ div ><div style="text-align: right"><sub></sub></ div ><br>


## Events

TypeNameSummary

<div style="text-align: right"><sub>Logged</sub></ div ><div style="text-align: right"><sub>Occurs when an error is logged</sub></ div ><div style="text-align: right"></ div ><br>


