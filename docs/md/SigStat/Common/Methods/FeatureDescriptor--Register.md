# [Register](./FeatureDescriptor--Register.md)

Registers a new [FeatureDescriptor](../../docs/mdSigStat/Common/FeatureDescriptor.md) with a given key.  If the FeatureDescriptor is allready registered, this function will  return a reference to the originally registered FeatureDescriptor.  to the a

| Return | Name | 
| --- | --- | 
| <sub>[FeatureDescriptor](./../FeatureDescriptor.md)</sub> | <sub>[Register](./FeatureDescriptor--Register.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) featureKey, [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) type )</sub> | 


#### Parameters
**`featureKey`**  [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)<br>The key to search for<br><br>**`type`**  [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type)<br>The type of the current property
#### Returns
[FeatureDescriptor](./../FeatureDescriptor.md)<br>
A reference to the registered `SigStat.Common.FeatureDescriptor` instance