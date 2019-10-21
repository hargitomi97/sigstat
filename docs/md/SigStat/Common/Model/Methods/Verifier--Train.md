# [Train](./Verifier--Train.md)

Trains the verifier with a list of signatures. Uses the [Pipeline](../../docs/mdSigStat/Common/Model/Verifier.md) to extract features,  and [Classifier](../../docs/mdSigStat/Common/Model/Verifier.md) to find an optimized limit.

| Return | Name | 
| --- | --- | 
| <sub>[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)</sub> | <sub>[Train](./Verifier--Train.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)> signatures )</sub> | 


#### Parameters
**`signatures`**  [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../../Signature.md)><br>The list of signatures to train on.
#### Returns
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<br>
