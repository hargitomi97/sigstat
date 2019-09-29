# [MCYTLoader](./MCYTLoader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
[SigStat.Common.Loaders.DataSetLoader]() for the MCYT dataset

## Constructors

| Name | Summary | 
| --- | --- | 
| [MCYTLoader](./../../../ctor/MCYTLoader-100663887.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) databasePath, [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) standardFeatures ) | Initializes a new instance of the [SigStat.Common.Loaders.MCYTLoader]() class. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | DatabasePath | Gets or sets the database path. | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | StandardFeatures | Gets or sets a value indicating whether features are also loaded as [SigStat.Common.Features](./Features.md) | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[Signer](./../Signer.md)> | [EnumerateSigners](./Methods/MCYTLoader-100663892.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> signerFilter ) |  | 


## Static Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [LoadSignature](./Methods/MCYTLoader-100663893.md) ( [`Signature`](./../Signature.md) signature, [`MemoryStream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.MemoryStream) stream, [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) standardFeatures ) | Loads one signature from specified stream. | 


