# [IDataSetLoader](./IDataSetLoader.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Loaders](./README.md)

Assembly: SigStat.Common.dll

## Summary
<sub>Exposes a function to enable loading collections of [Signer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md)s.  Base abstract class: [Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md).</sub>

## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[Signer](./../Signer.md)> | [EnumerateSigners](./Methods/IDataSetLoader-100663880.md) (  ) | <sub>Enumerates all signers of the database</sub> | 
| [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[Signer](./../Signer.md)> | [EnumerateSigners](./Methods/IDataSetLoader-100663881.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../Signer.md)> ) | <sub>Enumerates all [Signer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md)s that match the `signerFilter`.</sub> | 


