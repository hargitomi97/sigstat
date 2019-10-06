# <sub>[SigComp13JapaneseLoader](./SigComp13JapaneseLoader.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[IDataSetLoader](./IDataSetLoader.md)</sub>, <sub>[ILoggerObject](./../ILoggerObject.md)</sub>

## Summary
[Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp13Japanese dataset

## Constructors

| Name | Summary | 

SigComp13JapaneseLoader ( <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub>, <sub>[`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)</sub> )<sub>Initializes a new instance of the [Loaders.SigComp13JapaneseLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/SigComp13JapaneseLoader.md) class.</sub>


## Properties

| Type | Name | Summary | 

<sub>[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub><sub>DatabasePath</sub><sub>Gets or sets the database path.</sub>
<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)</sub><sub>StandardFeatures</sub><sub>Gets or sets a value indicating whether features are also loaded as [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub>


## Methods

| Return | Name | Summary | 

<sub>[IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)</sub>\<<sub>[Signer](./../Signer.md)</sub>><sub>[EnumerateSigners](./Methods/SigComp13JapaneseLoader-100663915.md) ( <sub>[`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)</sub>\<<sub>[`Signer`](./../Signer.md)</sub>> )</sub><sub></sub>


## Static Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[LoadSignature](./Methods/SigComp13JapaneseLoader-100663916.md) ( <sub>[`Signature`](./../Signature.md)</sub>, <sub>[`MemoryStream`](https://docs.microsoft.com/en-us/dotnet/api/System.IO.MemoryStream)</sub>, <sub>[`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)</sub> )</sub><sub>Loads one signature from specified stream.</sub>


