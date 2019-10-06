# [Verifier](./Verifier.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Model](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md)

## Summary
Uses pipelines to transform, train on, and classify [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md) objects.

## Constructors

NameSummary

<sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class</sub><br><sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class</sub><br>
<sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class.</sub><br><sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class.</sub><br>
<sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class based on another Verifier instance</sub><br><sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class based on another Verifier instance</sub><br>


## Properties

TypeNameSummary

<sub>AllFeatures</sub><br><sub>This property is used by the Serializer to access a list of all FeatureDescriptors</sub><br><br>
<sub>Classifier</sub><br><sub>Gets or sets the classifier pipeline. Hands over the Logger object.</sub><br><br>
<sub>Logger</sub><br><sub>Gets or sets the class responsible for logging</sub><br><br>
<sub>Pipeline</sub><br><sub>Gets or sets the transform pipeline. Hands over the Logger object.</sub><br><br>
<sub>SignerModel</sub><br><sub>Gets or sets the signer model.</sub><br><br>


## Methods

NameSummary

<sub>[Test](./Methods/Verifier-100664117.md) ( [`Signature`](./../Signature.md) )</sub><br><sub>Verifies the genuinity of `signature`.</sub><br>
<sub>[Train](./Methods/Verifier-100664116.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../Signature.md)> )</sub><br><sub>Trains the verifier with a list of signatures. Uses the [Model.Verifier.Pipeline](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to extract features,  and [Model.Verifier.Classifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to find an optimized limit.</sub><br>


