# <sub>[SimpleConsoleLogger](./SimpleConsoleLogger.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)</sub>

## Summary
A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.

## Constructors

| Name | Summary | 

SimpleConsoleLogger (  )<sub>Initializes a SimpleConsoleLogger instance with LogLevel set to LogLevel.Information</sub>
SimpleConsoleLogger ( <sub>[`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel)</sub> )<sub>Initializes an instance of SimpleConsoleLogger with a custom LogLevel</sub>


## Properties

| Type | Name | Summary | 

<sub>[LogLevel](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel)</sub><sub>LogLevel</sub><sub>All events below this level will be filtered</sub>


## Methods

| Return | Name | Summary | 

<sub>[IDisposable](https://docs.microsoft.com/en-us/dotnet/api/System.IDisposable)</sub><sub>[BeginScope](./Methods/SimpleConsoleLogger-100664039.md) ( <sub>[`TState`](./SimpleConsoleLogger.md)</sub> )</sub><sub></sub>
<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)</sub><sub>[IsEnabled](./Methods/SimpleConsoleLogger-100664040.md) ( <sub>[`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel)</sub> )</sub><sub></sub>
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Log](./Methods/SimpleConsoleLogger-100664041.md) ( <sub>[`LogLevel`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.LogLevel)</sub>, <sub>[`EventId`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.EventId)</sub>, <sub>[`TState`](./SimpleConsoleLogger.md)</sub>, <sub>[`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception)</sub>, [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<<sub>[`TState`](./SimpleConsoleLogger.md)</sub>, <sub>[`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception)</sub>, <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub>> )</sub><sub></sub>


## Events

| Type | Name | Summary | 

<sub>[ErrorEventHandler](./SimpleConsoleLogger.md)</sub><sub>Logged</sub><sub>Occurs when an error is logged</sub>


