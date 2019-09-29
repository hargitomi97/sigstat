# [ImageLoader](./ImageLoader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
DataSetLoader for Image type databases.  Similar format to Svc2004Loader, but finds png images.

## Constructors

| Name | Summary | 
| --- | --- | 
| [ImageLoader](./../../../ctor/ImageLoader-100663882.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) databasePath ) | Initializes a new instance of the [SigStat.Common.Loaders.ImageLoader](./ImageLoader.md) class with specified database. | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[Signer](./../Signer.md)> | [EnumerateSigners](./Methods/ImageLoader-100663883.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> signerFilter ) |  | 


## Static Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Signature](./../Signature.md) | [LoadSignature](./Methods/ImageLoader-100663884.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) file ) |  | 


