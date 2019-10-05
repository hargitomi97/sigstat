# [SigComp11DutchLoader](./SigComp11DutchLoader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
<sub>[Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp11Dutch dataset</sub>

## Constructors

| Name | Summary | 
| --- | --- | 
| SigComp11DutchLoader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) ) | <sub>Initializes a new instance of the [Loaders.SigComp11DutchLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/SigComp11DutchLoader.md) class.</sub> | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | DatabasePath | <sub>Gets or sets the database path.</sub> | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | StandardFeatures | <sub>Gets or sets a value indicating whether features are also loaded as [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[Signer](./../Signer.md)> | [EnumerateSigners](./Methods/SigComp11DutchLoader-100663907.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> ) |  | 


## Static Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [LoadSignature](./Methods/SigComp11DutchLoader-100663908.md) ( [`Signature`](./../Signature.md), [`MemoryStream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.MemoryStream), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) ) | <sub>Loads one signature from specified stream.</sub> | 


