# [Verifier](./Verifier.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Model](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md)

## Summary
Uses pipelines to transform, train on, and classify [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md) objects.

## Constructors

NameSummary

<div style="text-align: right"><sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class</sub></ div ><div style="text-align: right"><sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class</sub></ div ><br>
<div style="text-align: right"><sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class.</sub></ div ><div style="text-align: right"><sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class.</sub></ div ><br>
<div style="text-align: right"><sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class based on another Verifier instance</sub></ div ><div style="text-align: right"><sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class based on another Verifier instance</sub></ div ><br>


## Properties

NameSummary

<div style="text-align: right"><sub>AllFeatures</sub></ div ><div style="text-align: right"><sub>This property is used by the Serializer to access a list of all FeatureDescriptors</sub></ div ><br>
<div style="text-align: right"><sub>Classifier</sub></ div ><div style="text-align: right"><sub>Gets or sets the classifier pipeline. Hands over the Logger object.</sub></ div ><br>
<div style="text-align: right"><sub>Logger</sub></ div ><div style="text-align: right"><sub>Gets or sets the class responsible for logging</sub></ div ><br>
<div style="text-align: right"><sub>Pipeline</sub></ div ><div style="text-align: right"><sub>Gets or sets the transform pipeline. Hands over the Logger object.</sub></ div ><br>
<div style="text-align: right"><sub>SignerModel</sub></ div ><div style="text-align: right"><sub>Gets or sets the signer model.</sub></ div ><br>


## Methods

NameSummary

<div style="text-align: right"><sub>[Test](./Methods/Verifier-100664117.md) ( [`Signature`](./../Signature.md) )</sub></ div ><div style="text-align: right"><sub>Verifies the genuinity of `signature`.</sub></ div ><br>
<div style="text-align: right"><sub>[Train](./Methods/Verifier-100664116.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../Signature.md)> )</sub></ div ><div style="text-align: right"><sub>Trains the verifier with a list of signatures. Uses the [Model.Verifier.Pipeline](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to extract features,  and [Model.Verifier.Classifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to find an optimized limit.</sub></ div ><br>


