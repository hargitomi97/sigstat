# [InsertTable](./ExcelHelper--InsertTable.md)

Insert a table filled with data from an IEnumerable

| Return<div><a href="#"><img width=225></a></div> | Name<div><a href="#"><img width=525></a></div> | 
| --- | --- | 
| [ExcelRange](./ExcelHelper--InsertTable.md) | [InsertTable](./ExcelHelper--InsertTable.md) ( [`ExcelWorksheet`](./ExcelHelper--InsertTable.md) ws, [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) row, [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) col, [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Ienumerable)\<[`T`](./ExcelHelper--InsertTable.md)> data, [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) title, [`ExcelColor`](./../Excel/ExcelColor.md) color, [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) showHeader, [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) Name ) | 


#### Parameters
**`ws`**  [`ExcelWorksheet`](./ExcelHelper--InsertTable.md)<br>Worksheet in wich the table is created<br><br>**`row`**  [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)<br>Starting row of the table<br><br>**`col`**  [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)<br>Starting column of the table<br><br>
#### Returns
[ExcelRange](./ExcelHelper--InsertTable.md)<br>
Range of the inserted data