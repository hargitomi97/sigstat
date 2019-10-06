# [MCYTLoader](./MCYTLoader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
[Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the MCYT dataset

## Constructors

| Name | Summary | 
| --- | --- | 
| MCYTLoader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )<div style="width: 200px">| Initializes a new instance of the [Loaders.MCYTLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/MCYTLoader.md) class.<div style="width: 200px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| DatabasePath<div style="width: 200px">| Gets or sets the database path.<div style="width: 200px">| <br>
| StandardFeatures<div style="width: 200px">| Gets or sets a value indicating whether features are also loaded as [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<div style="width: 200px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [EnumerateSigners](./Methods/MCYTLoader-100663892.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )<div style="width: 200px">| <div style="width: 200px">| <br>


## Static Methods

| Name | Summary | 
| --- | --- | 
| [LoadSignature](./Methods/MCYTLoader-100663893.md) ( [`Signature`](./../Signature.md), [`MemoryStream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.MemoryStream), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )<div style="width: 200px">| Loads one signature from specified stream.<div style="width: 200px">| <br>


