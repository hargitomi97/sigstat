# [EnumerateSigners](./SigComp11DutchLoader--EnumerateSigners.md)



| Return | Name | 
| --- | --- | 
| [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[Signer](./../../Signer.md)> | [EnumerateSigners](./SigComp11DutchLoader--EnumerateSigners.md) ( [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../../Signer.md)> signerFilter ) | 


#### Parameters
**`signerFilter`**  [`Predicate`](https://docs.microsoft.com/en-us/dotnet/api/System.Predicate-1)\<[`Signer`](./../../Signer.md)><br>Filter to specify which Signers to load. Example: (p=&gt;p=="01")
#### Returns
[IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[Signer](./../../Signer.md)><br>
