# [Svc2004Loader](./Svc2004Loader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
Loads SVC2004-format database from .zip

## Constructors

| Name | Summary | 

Svc2004Loader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )<sub>Initializes a new instance of the [Loaders.Svc2004Loader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/Svc2004Loader.md) class with specified database.</sub>
Svc2004Loader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean), [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )<sub>Initializes a new instance of the [Loaders.Svc2004Loader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/Svc2004Loader.md) class with specified database.</sub>


## Properties

| Type | Name | Summary | 

[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)<sub>DatabasePath</sub><sub>Gets or sets the database path.</sub>
[Predicate](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[Signer](./../Signer.md)><sub>SignerFilter</sub><sub>Ignores any signers during the loading, that do not match the predicate</sub>
[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)<sub>StandardFeatures</sub><sub>Gets or sets a value indicating whether features are also loaded as [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub>


## Methods

| Return | Name | Summary | 

[IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[Signer](./../Signer.md)><sub>[EnumerateSigners](./Methods/Svc2004Loader-100663943.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )</sub><sub></sub>
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[LoadSignature](./Methods/Svc2004Loader-100663944.md) ( [`Signature`](./../Signature.md), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><sub>Loads one signature from specified file path.</sub>


## Static Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[LoadSignature](./Methods/Svc2004Loader-100663945.md) ( [`Signature`](./../Signature.md), [`Stream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.Stream), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><sub>Loads one signature from specified stream.</sub>


