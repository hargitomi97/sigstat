# [Svc2004Loader](./Svc2004Loader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
Loads SVC2004-format database from .zip

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>Svc2004Loader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub> | <sub>Initializes a new instance of the [Svc2004Loader](../../docs/mdSigStat/Common/Loaders/Svc2004Loader.md) class with specified database.</sub> | 
| <sub>Svc2004Loader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean), [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )</sub> | <sub>Initializes a new instance of the [Svc2004Loader](../../docs/mdSigStat/Common/Loaders/Svc2004Loader.md) class with specified database.</sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>DatabasePath</sub> | <sub>Gets or sets the database path.</sub> | 
| <sub>SignerFilter</sub> | <sub>Ignores any signers during the loading, that do not match the predicate</sub> | 
| <sub>StandardFeatures</sub> | <sub>Gets or sets a value indicating whether features are also loaded as [Features](../../docs/mdSigStat/Common/Features.md)</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[EnumerateSigners](./Methods/Svc2004Loader--EnumerateSigners.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )</sub> | <sub></sub> | 
| <sub>[LoadSignature](./Methods/Svc2004Loader--LoadSignature.md) ( [`Signature`](./../Signature.md), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub> | <sub>Loads one signature from specified file path.</sub> | 


## Static Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[LoadSignature](./Methods/Svc2004Loader--LoadSignature.md) ( [`Signature`](./../Signature.md), [`Stream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.Stream), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub> | <sub>Loads one signature from specified stream.</sub> | 


