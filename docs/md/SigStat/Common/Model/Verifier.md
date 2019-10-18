# [Verifier](./Verifier.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Model](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md)

## Summary
Uses pipelines to transform, train on, and classify [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md) objects.

## Constructors

| Name<a href="#"><img width=160></a> | Summary<a href="#"><img width=400></a> | 
| --- | --- | 
| <sub>Verifier ( [`ILogger`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) )</sub>| <sub>Initializes a new instance of the [Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class</sub>| <br>
| <sub>Verifier (  )</sub>| <sub>Initializes a new instance of the [Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class.</sub>| <br>
| <sub>Verifier ( [`Verifier`](./Verifier.md) )</sub>| <sub>Initializes a new instance of the [Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class based on another Verifier instance</sub>| <br>


## Properties

| Name<a href="#"><img width=160></a> | Summary<a href="#"><img width=400></a> | 
| --- | --- | 
| <sub>AllFeatures</sub>| <sub>This property is used by the Serializer to access a list of all FeatureDescriptors</sub>| <br>
| <sub>Classifier</sub>| <sub>Gets or sets the classifier pipeline. Hands over the Logger object.</sub>| <br>
| <sub>Logger</sub>| <sub>Gets or sets the class responsible for logging</sub>| <br>
| <sub>Pipeline</sub>| <sub>Gets or sets the transform pipeline. Hands over the Logger object.</sub>| <br>
| <sub>SignerModel</sub>| <sub>Gets or sets the signer model.</sub>| <br>


## Methods

| Name<a href="#"><img width=160></a> | Summary<a href="#"><img width=400></a> | 
| --- | --- | 
| <sub>[Test](./Methods/Verifier-100664243.md) ( [`Signature`](./../Signature.md) )</sub>| <sub>Verifies the genuinity of `signature`.</sub>| <br>
| <sub>[Train](./Methods/Verifier-100664242.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../Signature.md)> )</sub>| <sub>Trains the verifier with a list of signatures. Uses the [Pipeline](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to extract features,  and [Classifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to find an optimized limit.</sub>| <br>


