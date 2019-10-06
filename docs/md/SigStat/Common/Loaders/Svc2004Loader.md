# [Svc2004Loader](./Svc2004Loader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
Loads SVC2004-format database from .zip

## Constructors

| Name | Summary | 
| --- | --- | 
| Svc2004Loader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )<div style="width: 200px">| Initializes a new instance of the [Loaders.Svc2004Loader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/Svc2004Loader.md) class with specified database.<div style="width: 200px">| <br>
| Svc2004Loader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean), [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )<div style="width: 200px">| Initializes a new instance of the [Loaders.Svc2004Loader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/Svc2004Loader.md) class with specified database.<div style="width: 200px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| DatabasePath<div style="width: 200px">| Gets or sets the database path.<div style="width: 200px">| <br>
| SignerFilter<div style="width: 200px">| Ignores any signers during the loading, that do not match the predicate<div style="width: 200px">| <br>
| StandardFeatures<div style="width: 200px">| Gets or sets a value indicating whether features are also loaded as [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<div style="width: 200px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [EnumerateSigners](./Methods/Svc2004Loader-100663943.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )<div style="width: 200px">| <div style="width: 200px">| <br>
| [LoadSignature](./Methods/Svc2004Loader-100663944.md) ( [`Signature`](./../Signature.md), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )<div style="width: 200px">| Loads one signature from specified file path.<div style="width: 200px">| <br>


## Static Methods

| Name | Summary | 
| --- | --- | 
| [LoadSignature](./Methods/Svc2004Loader-100663945.md) ( [`Signature`](./../Signature.md), [`Stream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.Stream), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )<div style="width: 200px">| Loads one signature from specified stream.<div style="width: 200px">| <br>


