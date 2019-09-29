# [SigComp11ChineseLoader](./SigComp11ChineseLoader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
[SigStat.Common.Loaders.DataSetLoader](./Signature.md) for the SigComp11Chinese dataset

## Constructors

| Name | Summary | 
| --- | --- | 
| [SigComp11ChineseLoader](./../../../ctor/SigComp11ChineseLoader-100663894.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) databasePath, [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) standardFeatures ) | Initializes a new instance of the [SigStat.Common.Loaders.SigComp11ChineseLoader](./Signature.md) class. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | DatabasePath | Gets or sets the database path. | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | StandardFeatures | Gets or sets a value indicating whether features are also loaded as [SigStat.Common.Features](./Signature.md) | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[Signer](./../Signer.md)> | [EnumerateSigners](./Methods/SigComp11ChineseLoader-100663899.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> signerFilter ) |  | 


## Static Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | [LoadSignature](./Methods/SigComp11ChineseLoader-100663900.md) ( [`Signature`](./../Signature.md) signature, [`MemoryStream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.MemoryStream) stream, [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) standardFeatures ) | Loads one signature from specified stream. | 


