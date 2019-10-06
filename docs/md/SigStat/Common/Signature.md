# <sub>[Signature](./Signature.md)</sub>

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)</sub>\<<sub>[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)</sub>\<<sub>[FeatureDescriptor](./FeatureDescriptor.md)</sub>, <sub>[Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)</sub>>>, <sub>[IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)</sub>

## Summary
Represents a signature as a collection of features, containing the data that flows in the pipeline.

## Constructors

| Name | Summary | 

Signature (  )<sub>Initializes a signature instance</sub>
Signature ( <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub>, <sub>[`Origin`](./Origin.md)</sub>, <sub>[`Signer`](./Signer.md)</sub> )<sub>Initializes a signature instance with the given properties</sub>


## Properties

| Type | Name | Summary | 

<sub>[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub><sub>ID</sub><sub>An identifier for the Signature. Keep it unique to be useful for logs.</sub>
<sub>[Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)</sub><sub>Item [ <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub> ]</sub><sub>Gets or sets the specified feature.</sub>
<sub>[Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)</sub><sub>Item [ <sub>[`FeatureDescriptor`](./FeatureDescriptor.md)</sub> ]</sub><sub>Gets or sets the specified feature.</sub>
<sub>[Origin](./Origin.md)</sub><sub>Origin</sub><sub>Represents our knowledge on the origin of the signature. [Origin.Unknown](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Origin.md) may be used in practice before it is verified.</sub>
<sub>[Signer](./Signer.md)</sub><sub>Signer</sub><sub>A reference to the [Signer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md) who this signature belongs to. (The origin is not constrained to be genuine.)</sub>


## Methods

| Return | Name | Summary | 

<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[]</sub>><sub>[GetAggregateFeature](./Methods/Signature-100663442.md) ( <sub>[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[`FeatureDescriptor`](./FeatureDescriptor.md)</sub>> )</sub><sub>Aggregate multiple features into one. Example: X, Y features -&gt; P.xy feature.  Use this for example at DTW algorithm input.</sub>
<sub>[IEnumerator](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerator-1)</sub>\<<sub>[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)</sub>\<<sub>[FeatureDescriptor](./FeatureDescriptor.md)</sub>, <sub>[Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)</sub>>><sub>[GetEnumerator](./Methods/Signature-100663446.md) (  )</sub><sub>Returns an enumerator that iterates through the features.</sub>
<sub>[T](./Signature.md)</sub><sub>[GetFeature](./Methods/Signature-100663436.md) ( <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub> )</sub><sub>Gets the specified feature.</sub>
<sub>[T](./Signature.md)</sub><sub>[GetFeature](./Methods/Signature-100663437.md) ( <sub>[`FeatureDescriptor`](./FeatureDescriptor-1.md)</sub>\<<sub>[`T`](./Signature.md)</sub>> )</sub><sub>Gets the specified feature. This is the preferred way.</sub>
<sub>[T](./Signature.md)</sub><sub>[GetFeature](./Methods/Signature-100663438.md) ( <sub>[`FeatureDescriptor`](./FeatureDescriptor.md)</sub> )</sub><sub>Gets the specified feature. This is the preferred way.</sub>
<sub>[IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)</sub>\<<sub>[FeatureDescriptor](./FeatureDescriptor.md)</sub>><sub>[GetFeatureDescriptors](./Methods/Signature-100663439.md) (  )</sub><sub>Gets a collection of [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md)s that are used in this signature.</sub>
<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)</sub><sub>[HasFeature](./Methods/Signature-100663443.md) ( <sub>[`FeatureDescriptor`](./FeatureDescriptor.md)</sub> )</sub><sub>Returns true if the signature contains the specified feature</sub>
<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)</sub><sub>[HasFeature](./Methods/Signature-100663444.md) ( <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub> )</sub><sub>Returns true if the signature contains the specified feature</sub>
<sub>[Signature](./Signature.md)</sub><sub>[SetFeature](./Methods/Signature-100663440.md) ( <sub>[`FeatureDescriptor`](./FeatureDescriptor.md)</sub>, <sub>[`T`](./Signature.md)</sub> )</sub><sub>Sets the specified feature.</sub>
<sub>[Signature](./Signature.md)</sub><sub>[SetFeature](./Methods/Signature-100663441.md) ( <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub>, <sub>[`T`](./Signature.md)</sub> )</sub><sub>Sets the specified feature.</sub>
<sub>[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub><sub>[ToString](./Methods/Signature-100663445.md) (  )</sub><sub>Returns a string representation of the signature</sub>


