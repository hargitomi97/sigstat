# [Verifier](./Verifier.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Model](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md)

## Summary
Uses pipelines to transform, train on, and classify [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md) objects.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>Verifier ( [`ILogger`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) )</sub><div style="width: 290px">| <sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class</sub><div style="width: 290px">| <br>
| <sub>Verifier (  )</sub><div style="width: 290px">| <sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class.</sub><div style="width: 290px">| <br>
| <sub>Verifier ( [`Verifier`](./Verifier.md) )</sub><div style="width: 290px">| <sub>Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class based on another Verifier instance</sub><div style="width: 290px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>AllFeatures</sub><div style="width: 290px">| <sub>This property is used by the Serializer to access a list of all FeatureDescriptors</sub><div style="width: 290px">| <br>
| <sub>Classifier</sub><div style="width: 290px">| <sub>Gets or sets the classifier pipeline. Hands over the Logger object.</sub><div style="width: 290px">| <br>
| <sub>Logger</sub><div style="width: 290px">| <sub>Gets or sets the class responsible for logging</sub><div style="width: 290px">| <br>
| <sub>Pipeline</sub><div style="width: 290px">| <sub>Gets or sets the transform pipeline. Hands over the Logger object.</sub><div style="width: 290px">| <br>
| <sub>SignerModel</sub><div style="width: 290px">| <sub>Gets or sets the signer model.</sub><div style="width: 290px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Test](./Methods/Verifier-100664117.md) ( [`Signature`](./../Signature.md) )</sub><div style="width: 290px">| <sub>Verifies the genuinity of `signature`.</sub><div style="width: 290px">| <br>
| <sub>[Train](./Methods/Verifier-100664116.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../Signature.md)> )</sub><div style="width: 290px">| <sub>Trains the verifier with a list of signatures. Uses the [Model.Verifier.Pipeline](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to extract features,  and [Model.Verifier.Classifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to find an optimized limit.</sub><div style="width: 290px">| <br>


