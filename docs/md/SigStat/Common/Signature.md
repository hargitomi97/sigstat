# [Signature](./Signature.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[FeatureDescriptor](./FeatureDescriptor.md), [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)>>, [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)

## Summary
Represents a signature as a collection of features, containing the data that flows in the pipeline.

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>Signature (  )</sub></div>| <sub>Initializes a signature instance</sub></div>| <br>
| <div style ="width:390px"><sub>Signature ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Origin`](./Origin.md), [`Signer`](./Signer.md) )</sub></div>| <sub>Initializes a signature instance with the given properties</sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>ID</sub></div>| <sub>An identifier for the Signature. Keep it unique to be useful for logs.</sub></div>| <br>
| <div style ="width:390px"><sub>Item [ [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) ]</sub></div>| <sub>Gets or sets the specified feature.</sub></div>| <br>
| <div style ="width:390px"><sub>Item [ [`FeatureDescriptor`](./FeatureDescriptor.md) ]</sub></div>| <sub>Gets or sets the specified feature.</sub></div>| <br>
| <div style ="width:390px"><sub>Origin</sub></div>| <sub>Represents our knowledge on the origin of the signature. [Origin.Unknown](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Origin.md) may be used in practice before it is verified.</sub></div>| <br>
| <div style ="width:390px"><sub>Signer</sub></div>| <sub>A reference to the [Signer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md) who this signature belongs to. (The origin is not constrained to be genuine.)</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style ="width:390px"><sub>[GetAggregateFeature](./Methods/Signature-100663442.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`FeatureDescriptor`](./FeatureDescriptor.md)> )</sub></div>| <sub>Aggregate multiple features into one. Example: X, Y features -&gt; P.xy feature.  Use this for example at DTW algorithm input.</sub></div>| <br>
| <div style ="width:390px"><sub>[GetEnumerator](./Methods/Signature-100663446.md) (  )</sub></div>| <sub>Returns an enumerator that iterates through the features.</sub></div>| <br>
| <div style ="width:390px"><sub>[GetFeature](./Methods/Signature-100663436.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub></div>| <sub>Gets the specified feature.</sub></div>| <br>
| <div style ="width:390px"><sub>[GetFeature](./Methods/Signature-100663437.md) ( [`FeatureDescriptor`](./FeatureDescriptor-1.md)\<[`T`](./Signature.md)> )</sub></div>| <sub>Gets the specified feature. This is the preferred way.</sub></div>| <br>
| <div style ="width:390px"><sub>[GetFeature](./Methods/Signature-100663438.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md) )</sub></div>| <sub>Gets the specified feature. This is the preferred way.</sub></div>| <br>
| <div style ="width:390px"><sub>[GetFeatureDescriptors](./Methods/Signature-100663439.md) (  )</sub></div>| <sub>Gets a collection of [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md)s that are used in this signature.</sub></div>| <br>
| <div style ="width:390px"><sub>[HasFeature](./Methods/Signature-100663443.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md) )</sub></div>| <sub>Returns true if the signature contains the specified feature</sub></div>| <br>
| <div style ="width:390px"><sub>[HasFeature](./Methods/Signature-100663444.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub></div>| <sub>Returns true if the signature contains the specified feature</sub></div>| <br>
| <div style ="width:390px"><sub>[SetFeature](./Methods/Signature-100663440.md) ( [`FeatureDescriptor`](./FeatureDescriptor.md), [`T`](./Signature.md) )</sub></div>| <sub>Sets the specified feature.</sub></div>| <br>
| <div style ="width:390px"><sub>[SetFeature](./Methods/Signature-100663441.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`T`](./Signature.md) )</sub></div>| <sub>Sets the specified feature.</sub></div>| <br>
| <div style ="width:390px"><sub>[ToString](./Methods/Signature-100663445.md) (  )</sub></div>| <sub>Returns a string representation of the signature</sub></div>| <br>


