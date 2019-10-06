# <sub>[Verifier](./Verifier.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Model](./README.md)

Assembly: SigStat.Common.dll

Implements <sub>[ILoggerObject](./../ILoggerObject.md)</sub>

## Summary
Uses pipelines to transform, train on, and classify [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md) objects.

## Constructors

| Name | Summary | 

Verifier ( <sub>[`ILogger`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)</sub> )<sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class</sub>
Verifier (  )<sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class.</sub>
Verifier ( <sub>[`Verifier`](./Verifier.md)</sub> )<sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class based on another Verifier instance</sub>


## Properties

| Type | Name | Summary | 

<sub>[Dictionary](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2)</sub>\<<sub>[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub>, <sub>[FeatureDescriptor](./../FeatureDescriptor.md)</sub>><sub>AllFeatures</sub><sub>This property is used by the Serializer to access a list of all FeatureDescriptors</sub>
<sub>[IClassifier](./../Pipeline/IClassifier.md)</sub><sub>Classifier</sub><sub>Gets or sets the classifier pipeline. Hands over the Logger object.</sub>
<sub>[ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger)</sub><sub>Logger</sub><sub>Gets or sets the class responsible for logging</sub>
<sub>[SequentialTransformPipeline](./../Pipeline/SequentialTransformPipeline.md)</sub><sub>Pipeline</sub><sub>Gets or sets the transform pipeline. Hands over the Logger object.</sub>
<sub>[ISignerModel](./../Pipeline/ISignerModel.md)</sub><sub>SignerModel</sub><sub>Gets or sets the signer model.</sub>


## Methods

| Return | Name | Summary | 

<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub><sub>[Test](./Methods/Verifier-100664117.md) ( <sub>[`Signature`](./../Signature.md)</sub> )</sub><sub>Verifies the genuinity of `signature`.</sub>
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Train](./Methods/Verifier-100664116.md) ( <sub>[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)</sub>\<<sub>[`Signature`](./../Signature.md)</sub>> )</sub><sub>Trains the verifier with a list of signatures. Uses the [Model.Verifier.Pipeline](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to extract features,  and [Model.Verifier.Classifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to find an optimized limit.</sub>


