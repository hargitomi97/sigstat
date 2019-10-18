# [LogWarning](./ILoggerObjectExtensions-100663350.md)

Formats and writes an warning log message.

| Return | Name | 
| --- | --- | 
| <sub>[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)</sub>| <sub>[LogWarning](./ILoggerObjectExtensions-100663350.md) ( [`ILoggerObject`](./../ILoggerObject.md) obj, [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) message, [`Object`](https://docs.microsoft.com/en-us/dotnet/api/System.Object)[] args )</sub>| <br>


#### Parameters
**`obj`**  [`ILoggerObject`](./../ILoggerObject.md)<br>The SigStat.Common.ILoggerObject containing the Logger to write to.<br><br>**`message`**  [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)<br>Format string of the log message in message template format. Example: "User {User} logged in from {Address}"<br><br>**`args`**  [`Object`](https://docs.microsoft.com/en-us/dotnet/api/System.Object)[]<br>An object array that contains zero or more objects to format.
#### Returns
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)