# [Signature](./Signature.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[FeatureDescriptor](./FeatureDescriptor.md), [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)>>, [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)

## Summary
<sub>Represents a signature as a collection of features, containing the data that flows in the pipeline.</sub>

## Constructors

| Name | Summary | 
| --- | --- | 
| Signature (  ) | <sub>Initializes a signature instance</sub> | 
| Signature ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Origin`](./Origin.md), [`Signer`](./Signer.md) ) | <sub>Initializes a signature instance with the given properties</sub> | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | ID | <sub>An identifier for the Signature. Keep it unique to be useful for logs.</sub> | 
| [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object) | Item [ [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) ] | <sub>Gets or sets the specified feature.</sub> | 
| [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object) | Item [ [`FeatureDescriptor`](./FeatureDescriptor.md) ] | <sub>Gets or sets the specified feature.</sub> | 
| [Origin](./Origin.md) | Origin | <sub>Represents our knowledge on the origin of the signature. [Origin.Unknown](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Origin.md) may be used in practice before it is verified.</sub> | 
| [Signer](./Signer.md) | Signer | <sub>A reference to the [Signer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md) who this signature belongs to. (The origin is not constrained to be genuine.)</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[]> | [GetAggregateFeature](./Methods/Signature-100663442.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`FeatureDescriptor`](./FeatureDescriptor.md)> ) | <sub>Aggregate multiple features into one. Example: X, Y features -&gt; P.xy feature.  Use this for example at DTW algorithm input.</sub> | 
| [IEnumerator](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerator-1)\<[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[FeatureDescriptor](./FeatureDescriptor.md), [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)>> | [GetEnumerator](./Methods/Signature-100663446.md) (  ) | <sub>Returns an enumerator that iterates through the features.</sub> | 
| [T](./Signature.md) | [GetFeature](./Methods/Signature-100663436.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) ) | <sub>Gets the specified feature.</sub> | 
| [T](./Signature.md) | [GetFeature](./Methods/Signature-100663437.md) ( [`FeatureDescriptor`](./FeatureDescriptor-1.md)\<[`T`](./Signature.md)> ) | <sub>Gets the specified feature. This is the preferred way.</sub> | 
| [T](./Signature.md) | [GetFeature](./Methods/Signature-100663438.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md) ) | <sub>Gets the specified feature. This is the preferred way.</sub> | 
| [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[FeatureDescriptor](./FeatureDescriptor.md)> | [GetFeatureDescriptors](./Methods/Signature-100663439.md) (  ) | <sub>Gets a collection of [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md)s that are used in this signature.</sub> | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | [HasFeature](./Methods/Signature-100663443.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md) ) | <sub>Returns true if the signature contains the specified feature</sub> | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | [HasFeature](./Methods/Signature-100663444.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) ) | <sub>Returns true if the signature contains the specified feature</sub> | 
| [Signature](./Signature.md) | [SetFeature](./Methods/Signature-100663440.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md), [`T`](./Signature.md) ) | <sub>Sets the specified feature.</sub> | 
| [Signature](./Signature.md) | [SetFeature](./Methods/Signature-100663441.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`T`](./Signature.md) ) | <sub>Sets the specified feature.</sub> | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | [ToString](./Methods/Signature-100663445.md) (  ) | <sub>Returns a string representation of the signature</sub> | 


