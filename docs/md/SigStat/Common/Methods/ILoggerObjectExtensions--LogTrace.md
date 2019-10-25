# [LogTrace](./ILoggerObjectExtensions--LogTrace.md)

Formats and writes a trace log message.

| Return | Name | 
| --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [LogTrace](./ILoggerObjectExtensions--LogTrace.md) ( [`ILoggerObject`](./../ILoggerObject.md) obj, [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) message, [`Object`](https://docs.microsoft.com/en-us/dotnet/api/System.Object)[] args ) | 


#### Parameters
**`obj`**  [`ILoggerObject`](./../ILoggerObject.md)<br>The SigStat.Common.ILoggerObject containing the Logger to write to.<br><br>**`message`**  [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)<br>Format string of the log message in message template format. Example: "User {User} logged in from {Address}"<br><br>**`args`**  [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)<br>An object array that contains zero or more objects to format.
#### Returns
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<br>
