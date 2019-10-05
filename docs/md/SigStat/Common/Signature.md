# [Signature](./Signature.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[FeatureDescriptor](./FeatureDescriptor.md), [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)>>, [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)

## Summary
Represents a signature as a collection of features, containing the data that flows in the pipeline.

## Constructors

| Name | Summary | 
| --- | --- | 
| Signature (  ) | Initializes a signature instance | 
| Signature ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) signatureID, [`Origin`](./Origin.md) origin, [`Signer`](./Signer.md) signer ) | Initializes a signature instance with the given properties | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | ID | An identifier for the Signature. Keep it unique to be useful for logs. | 
| [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object) | Item [ [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) featureKey ] | Gets or sets the specified feature. | 
| [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object) | Item [ [`FeatureDescriptor`](./FeatureDescriptor.md) featureDescriptor ] | Gets or sets the specified feature. | 
| [Origin](./Origin.md) | Origin | Represents our knowledge on the origin of the signature. [Origin.Unknown](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Origin.md) may be used in practice before it is verified. | 
| [Signer](./Signer.md) | Signer | A reference to the [Signer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md) who this signature belongs to. (The origin is not constrained to be genuine.) | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[]> | [GetAggregateFeature](./Methods/Signature-100663442.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`FeatureDescriptor`](./FeatureDescriptor.md)> fs ) | Aggregate multiple features into one. Example: X, Y features -&gt; P.xy feature.  Use this for example at DTW algorithm input. | 
| [IEnumerator](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerator-1)\<[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[FeatureDescriptor](./FeatureDescriptor.md), [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)>> | [GetEnumerator](./Methods/Signature-100663446.md) (  ) | Returns an enumerator that iterates through the features. | 
| [T](./Signature.md) | [GetFeature](./Methods/Signature-100663436.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) featureKey ) | Gets the specified feature. | 
| [T](./Signature.md) | [GetFeature](./Methods/Signature-100663437.md) ( [`FeatureDescriptor`](./FeatureDescriptor-1.md)\<[`T`](./Signature.md)> featureDescriptor ) | Gets the specified feature. This is the preferred way. | 
| [T](./Signature.md) | [GetFeature](./Methods/Signature-100663438.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md) featureDescriptor ) | Gets the specified feature. This is the preferred way. | 
| [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[FeatureDescriptor](./FeatureDescriptor.md)> | [GetFeatureDescriptors](./Methods/Signature-100663439.md) (  ) | Gets a collection of [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md)s that are used in this signature. | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | [HasFeature](./Methods/Signature-100663443.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md) featureDescriptor ) | Returns true if the signature contains the specified feature | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | [HasFeature](./Methods/Signature-100663444.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) featureKey ) | Returns true if the signature contains the specified feature | 
| [Signature](./Signature.md) | [SetFeature](./Methods/Signature-100663440.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md) featureDescriptor, [`T`](./Signature.md) feature ) | Sets the specified feature. | 
| [Signature](./Signature.md) | [SetFeature](./Methods/Signature-100663441.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) featureKey, [`T`](./Signature.md) feature ) | Sets the specified feature. | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | [ToString](./Methods/Signature-100663445.md) (  ) | Returns a string representation of the signature | 


