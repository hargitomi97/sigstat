# [LogDebug](./ILoggerObjectExtensions-LogDebug.md)

Formats and writes an debug log message.

| Return | Name | 
| --- | --- | 
| <sub>[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)</sub> | <sub>[LogDebug](./ILoggerObjectExtensions-LogDebug.md) ( [`ILoggerObject`](./../ILoggerObject.md) obj, [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) message, [`Object`](https://docs.microsoft.com/en-us/dotnet/api/System.Object)[] args )</sub> | 


#### Parameters
**`obj`**  [`ILoggerObject`](./../ILoggerObject.md)<br>The SigStat.Common.ILoggerObject containing the Logger to write to.<br><br>**`message`**  [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)<br>Format string of the log message in message template format. Example: "User {User} logged in from {Address}"<br><br>**`args`**  [`Object`](https://docs.microsoft.com/en-us/dotnet/api/System.Object)[]<br>An object array that contains zero or more objects to format.
#### Returns
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<br>
