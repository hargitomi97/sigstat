# [ImageLoader](./ImageLoader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
<sub>DataSetLoader for Image type databases.  Similar format to Svc2004Loader, but finds png images.</sub>

## Constructors

| Name | Summary | 
| --- | --- | 
| ImageLoader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) ) | <sub>Initializes a new instance of the [Loaders.ImageLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/ImageLoader.md) class with specified database.</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[Signer](./../Signer.md)> | [EnumerateSigners](./Methods/ImageLoader-100663883.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> ) |  | 


## Static Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Signature](./../Signature.md) | [LoadSignature](./Methods/ImageLoader-100663884.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) ) | <sub></sub> | 


