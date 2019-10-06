# [Signature](./Signature.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[FeatureDescriptor](./FeatureDescriptor.md), [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)>>, [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)

## Summary
Represents a signature as a collection of features, containing the data that flows in the pipeline.

## Constructors

| Name | Summary | 
| --- | --- | 
| Signature (  )<div style="width: 200px">| Initializes a signature instance<div style="width: 200px">| <br>
| Signature ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Origin`](./Origin.md), [`Signer`](./Signer.md) )<div style="width: 200px">| Initializes a signature instance with the given properties<div style="width: 200px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| ID<div style="width: 200px">| An identifier for the Signature. Keep it unique to be useful for logs.<div style="width: 200px">| <br>
| Item [ [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) ]<div style="width: 200px">| Gets or sets the specified feature.<div style="width: 200px">| <br>
| Item [ [`FeatureDescriptor`](./FeatureDescriptor.md) ]<div style="width: 200px">| Gets or sets the specified feature.<div style="width: 200px">| <br>
| Origin<div style="width: 200px">| Represents our knowledge on the origin of the signature. [Origin.Unknown](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Origin.md) may be used in practice before it is verified.<div style="width: 200px">| <br>
| Signer<div style="width: 200px">| A reference to the [Signer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md) who this signature belongs to. (The origin is not constrained to be genuine.)<div style="width: 200px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [GetAggregateFeature](./Methods/Signature-100663442.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`FeatureDescriptor`](./FeatureDescriptor.md)> )<div style="width: 200px">| Aggregate multiple features into one. Example: X, Y features -&gt; P.xy feature.  Use this for example at DTW algorithm input.<div style="width: 200px">| <br>
| [GetEnumerator](./Methods/Signature-100663446.md) (  )<div style="width: 200px">| Returns an enumerator that iterates through the features.<div style="width: 200px">| <br>
| [GetFeature](./Methods/Signature-100663436.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )<div style="width: 200px">| Gets the specified feature.<div style="width: 200px">| <br>
| [GetFeature](./Methods/Signature-100663437.md) ( [`FeatureDescriptor`](./FeatureDescriptor-1.md)\<[`T`](./Signature.md)> )<div style="width: 200px">| Gets the specified feature. This is the preferred way.<div style="width: 200px">| <br>
| [GetFeature](./Methods/Signature-100663438.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md) )<div style="width: 200px">| Gets the specified feature. This is the preferred way.<div style="width: 200px">| <br>
| [GetFeatureDescriptors](./Methods/Signature-100663439.md) (  )<div style="width: 200px">| Gets a collection of [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md)s that are used in this signature.<div style="width: 200px">| <br>
| [HasFeature](./Methods/Signature-100663443.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md) )<div style="width: 200px">| Returns true if the signature contains the specified feature<div style="width: 200px">| <br>
| [HasFeature](./Methods/Signature-100663444.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )<div style="width: 200px">| Returns true if the signature contains the specified feature<div style="width: 200px">| <br>
| [SetFeature](./Methods/Signature-100663440.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md), [`T`](./Signature.md) )<div style="width: 200px">| Sets the specified feature.<div style="width: 200px">| <br>
| [SetFeature](./Methods/Signature-100663441.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`T`](./Signature.md) )<div style="width: 200px">| Sets the specified feature.<div style="width: 200px">| <br>
| [ToString](./Methods/Signature-100663445.md) (  )<div style="width: 200px">| Returns a string representation of the signature<div style="width: 200px">| <br>


