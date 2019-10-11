# [Svc2004Loader](./Svc2004Loader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
Loads SVC2004-format database from .zip

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>Svc2004Loader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Initializes a new instance of the [Svc2004Loader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/Svc2004Loader.md) class with specified database.</sub>| <br>
| <sub>Svc2004Loader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean), [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Initializes a new instance of the [Svc2004Loader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/Svc2004Loader.md) class with specified database.</sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>DatabasePath</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Gets or sets the database path.</sub>| <br>
| <sub>SignerFilter</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Ignores any signers during the loading, that do not match the predicate</sub>| <br>
| <sub>StandardFeatures</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Gets or sets a value indicating whether features are also loaded as [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[EnumerateSigners](./Methods/Svc2004Loader-100663986.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub></sub>| <br>
| <sub>[LoadSignature](./Methods/Svc2004Loader-100663987.md) ( [`Signature`](./../Signature.md), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Loads one signature from specified file path.</sub>| <br>


## Static Methods

| Name | Summary | 
| --- | --- | 
| <sub>[LoadSignature](./Methods/Svc2004Loader-100663988.md) ( [`Signature`](./../Signature.md), [`Stream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.Stream), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><div style="pointer-events:none; cursor:default; width=200"><img style="max-height:100%; max-width:100%/></div>| <sub>Loads one signature from specified stream.</sub>| <br>


