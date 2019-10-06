# [SigComp15GermanLoader](./SigComp15GermanLoader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
[Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp15German dataset

## Constructors

| Name | Summary | 

SigComp15GermanLoader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )<sub>Initializes a new instance of the [Loaders.SigComp15GermanLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/SigComp15GermanLoader.md) class.</sub>


## Properties

| Type | Name | Summary | 

[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)<sub>DatabasePath</sub><sub>Gets or sets the database path.</sub>
[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)<sub>StandardFeatures</sub><sub>Gets or sets a value indicating whether features are also loaded as [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub>


## Methods

| Return | Name | Summary | 

[IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[Signer](./../Signer.md)><sub>[EnumerateSigners](./Methods/SigComp15GermanLoader-100663923.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )</sub><sub></sub>


## Static Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[LoadSignature](./Methods/SigComp15GermanLoader-100663924.md) ( [`Signature`](./../Signature.md), [`MemoryStream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.MemoryStream), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><sub>Loads one signature from specified stream.</sub>


