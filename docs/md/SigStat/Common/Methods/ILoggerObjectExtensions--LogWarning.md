# [LogWarning](./ILoggerObjectExtensions--LogWarning.md)

Formats and writes an warning log message.

| <span>Return&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Name | 
| :--- | :--- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [LogWarning](./ILoggerObjectExtensions--LogWarning.md) ([`ILoggerObject`](./../ILoggerObject.md) obj, [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception) exception, [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) message, [`Object`](https://docs.microsoft.com/en-us/dotnet/api/System.Object)[] args) | 


#### Parameters
**`obj`**  [`ILoggerObject`](./../ILoggerObject.md)<br>The SigStat.Common.ILoggerObject containing the Logger to write to.<br><br>**`exception`**  [`Exception`](https://docs.microsoft.com/en-us/dotnet/api/System.Exception)<br>The exception to log.<br><br>**`message`**  [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)<br>Format string of the log message in message template format. Example: "User {User} logged in from {Address}"<br><br>**`args`**  [`Object`](https://docs.microsoft.com/en-us/dotnet/api/System.Object)[]<br>An object array that contains zero or more objects to format.
#### Returns
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<br>
