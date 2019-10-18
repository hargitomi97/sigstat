# [SigComp19OnlineLoader](./SigComp19OnlineLoader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements [IDataSetLoader](./IDataSetLoader.md), [ILoggerObject](./../ILoggerObject.md)

## Summary
[DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp19 dataset

## Constructors

| Name<a href="#"><img width=220></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>SigComp19OnlineLoader ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub>| <sub>Initializes a new instance of the [SigComp19OnlineLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/SigComp19OnlineLoader.md) class.</sub>| <br>


## Properties

| Name<a href="#"><img width=220></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>DatabasePath</sub>| <sub>Gets or sets the database path.</sub>| <br>
| <sub>StandardFeatures</sub>| <sub>Gets or sets a value indicating whether features are also loaded as [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub>| <br>


## Methods

| Name<a href="#"><img width=220></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>[EnumerateSigners](./Methods/SigComp19OnlineLoader-100664042.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> )</sub>| <sub></sub>| <br>


## Static Methods

| Name<a href="#"><img width=220></a> | Summary<a href="#"><img width=475></a> | 
| --- | --- | 
| <sub>[LoadSignature](./Methods/SigComp19OnlineLoader-100664043.md) ( [`Signature`](./../Signature.md), [`MemoryStream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.MemoryStream), [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub>| <sub>Loads one signature from specified stream.</sub>| <br>


