# [Signature](./Signature.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[FeatureDescriptor](./FeatureDescriptor.md), [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)>>, [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)

## Summary
Represents a signature as a collection of features, containing the data that flows in the pipeline.

## Constructors

| Name | Summary | 

Signature (  )<sub>Initializes a signature instance</sub>
Signature ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Origin`](./Origin.md), [`Signer`](./Signer.md) )<sub>Initializes a signature instance with the given properties</sub>


## Properties

| Type | Name | Summary | 

<sub>ID</sub><sub>An identifier for the Signature. Keep it unique to be useful for logs.</sub>
<sub>Item [ [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) ]</sub><sub>Gets or sets the specified feature.</sub>
<sub>Item [ [`FeatureDescriptor`](./FeatureDescriptor.md) ]</sub><sub>Gets or sets the specified feature.</sub>
<sub>Origin</sub><sub>Represents our knowledge on the origin of the signature. [Origin.Unknown](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Origin.md) may be used in practice before it is verified.</sub>
<sub>Signer</sub><sub>A reference to the [Signer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md) who this signature belongs to. (The origin is not constrained to be genuine.)</sub>


## Methods

|  | Name | Summary | 

<sub>[GetAggregateFeature](./Methods/Signature-100663442.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`FeatureDescriptor`](./FeatureDescriptor.md)> )</sub><sub>Aggregate multiple features into one. Example: X, Y features -&gt; P.xy feature.  Use this for example at DTW algorithm input.</sub>
<sub>[GetEnumerator](./Methods/Signature-100663446.md) (  )</sub><sub>Returns an enumerator that iterates through the features.</sub>
<sub>[GetFeature](./Methods/Signature-100663436.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><sub>Gets the specified feature.</sub>
<sub>[GetFeature](./Methods/Signature-100663437.md) ( [`FeatureDescriptor`](./FeatureDescriptor-1.md)\<[`T`](./Signature.md)> )</sub><sub>Gets the specified feature. This is the preferred way.</sub>
<sub>[GetFeature](./Methods/Signature-100663438.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md) )</sub><sub>Gets the specified feature. This is the preferred way.</sub>
<sub>[GetFeatureDescriptors](./Methods/Signature-100663439.md) (  )</sub><sub>Gets a collection of [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md)s that are used in this signature.</sub>
<sub>[HasFeature](./Methods/Signature-100663443.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md) )</sub><sub>Returns true if the signature contains the specified feature</sub>
<sub>[HasFeature](./Methods/Signature-100663444.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><sub>Returns true if the signature contains the specified feature</sub>
<sub>[SetFeature](./Methods/Signature-100663440.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md), [`T`](./Signature.md) )</sub><sub>Sets the specified feature.</sub>
<sub>[SetFeature](./Methods/Signature-100663441.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`T`](./Signature.md) )</sub><sub>Sets the specified feature.</sub>
<sub>[ToString](./Methods/Signature-100663445.md) (  )</sub><sub>Returns a string representation of the signature</sub>


