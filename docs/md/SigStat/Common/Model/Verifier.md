# [Verifier](./Verifier.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Model](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md)

## Summary
Uses pipelines to transform, train on, and classify [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md) objects.

## Constructors

NameSummary

Verifier ( [`ILogger`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) )<sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class</sub>
Verifier (  )<sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class.</sub>
Verifier ( [`Verifier`](./Verifier.md) )<sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class based on another Verifier instance</sub>


## Properties

TypeNameSummary

<sub>AllFeatures</sub><sub>This property is used by the Serializer to access a list of all FeatureDescriptors</sub>
<sub>Classifier</sub><sub>Gets or sets the classifier pipeline. Hands over the Logger object.</sub>
<sub>Logger</sub><sub>Gets or sets the class responsible for logging</sub>
<sub>Pipeline</sub><sub>Gets or sets the transform pipeline. Hands over the Logger object.</sub>
<sub>SignerModel</sub><sub>Gets or sets the signer model.</sub>


## Methods

NameSummary

<sub>[Test](./Methods/Verifier-100664117.md) ( [`Signature`](./../Signature.md) )</sub><sub>Verifies the genuinity of `signature`.</sub>
<sub>[Train](./Methods/Verifier-100664116.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../Signature.md)> )</sub><sub>Trains the verifier with a list of signatures. Uses the [Model.Verifier.Pipeline](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to extract features,  and [Model.Verifier.Classifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to find an optimized limit.</sub>


