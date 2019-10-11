# [Svc2004Loader](./Svc2004Loader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
Loads SVC2004-format database from .zip

## Constructors

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Svc2004Loader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Initializes a new instance of the [Svc2004Loader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/Svc2004Loader.md) class with specified database.</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Svc2004Loader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean), [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Initializes a new instance of the [Svc2004Loader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/Svc2004Loader.md) class with specified database.</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>DatabasePath</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Gets or sets the database path.</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>SignerFilter</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Ignores any signers during the loading, that do not match the predicate</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>StandardFeatures</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Gets or sets a value indicating whether features are also loaded as [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>[EnumerateSigners](./Methods/Svc2004Loader-100663986.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub></sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>[LoadSignature](./Methods/Svc2004Loader-100663987.md) ( [`Signature`](./../Signature.md), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Loads one signature from specified file path.</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


## Static Methods

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>[LoadSignature](./Methods/Svc2004Loader-100663988.md) ( [`Signature`](./../Signature.md), [`Stream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.Stream), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Loads one signature from specified stream.</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


