# [MCYTLoader](./MCYTLoader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
[Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the MCYT dataset

## Constructors

| Name | Summary | 
| --- | --- | 
| MCYTLoader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) ) | Initializes a new instance of the [Loaders.MCYTLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/MCYTLoader.md) class. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | DatabasePath | Gets or sets the database path. | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | StandardFeatures | Gets or sets a value indicating whether features are also loaded as [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[Signer](./../Signer.md)> | [EnumerateSigners](./Methods/MCYTLoader-100663892.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> ) |  | 


## Static Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [LoadSignature](./Methods/MCYTLoader-100663893.md) ( [`Signature`](./../Signature.md), [`MemoryStream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.MemoryStream), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) ) | Loads one signature from specified stream. | 


