# [InsertLineChart](./ExcelHelper--InsertLineChart.md)

Draws a line chart for the given data

| Return<div><a href="#"><img width=225></a></div> | Name<div><a href="#"><img width=525></a></div> | 
| --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [InsertLineChart](./ExcelHelper--InsertLineChart.md) ([`ExcelWorksheet`](./ExcelHelper--InsertLineChart.md) ws, [`ExcelRange`](./ExcelHelper--InsertLineChart.md) range, [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) row, [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) col, [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) name, [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) xLabel, [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) yLabel, [`ExcelRange`](./ExcelHelper--InsertLineChart.md) SerieLabels, [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) width, [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) height, [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) title) | 


#### Parameters
**`ws`**  [`ExcelWorksheet`](./ExcelHelper--InsertLineChart.md)<br>Worksheet in wich the graph is inserted<br><br>**`range`**  [`ExcelRange`](./ExcelHelper--InsertLineChart.md)<br>Range containing the data (first row for x axis other rows for series)<br><br>**`row`**  [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)<br>The graph inserted starts at this row<br><br>**`col`**  [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)<br>The graph inserted starts at this column<br><br>**`name`**  [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)<br>Id and default title of the graph<br><br>**`xLabel`**  [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)<br>Label for x axis of the graph<br><br>**`yLabel`**  [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)<br>Label for y axis of the graph<br><br>**`SerieLabels`**  [`ExcelRange`](./ExcelHelper--InsertLineChart.md)<br>Label of the series<br><br>**`width`**  [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)<br>Graph's width in px<br><br>**`height`**  [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)<br>Graph's height in px<br><br>**`title`**  [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)<br>Title of the graph if the defauolt name has to be overwritten
#### Returns
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<br>
