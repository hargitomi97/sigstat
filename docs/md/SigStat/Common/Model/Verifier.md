# [Verifier](./Verifier.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Model](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md)

## Summary
Uses pipelines to transform, train on, and classify [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md) objects.

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>Verifier ( [`ILogger`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) )</sub><div style="z-index: 1; position: absolute;"><img width=200/></div>| <sub>Initializes a new instance of the [Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class</sub>| <br>
| <sub>Verifier (  )</sub><div style="z-index: 1; position: absolute;"><img width=200/></div>| <sub>Initializes a new instance of the [Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class.</sub>| <br>
| <sub>Verifier ( [`Verifier`](./Verifier.md) )</sub><div style="z-index: 1; position: absolute;"><img width=200/></div>| <sub>Initializes a new instance of the [Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class based on another Verifier instance</sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>AllFeatures</sub><div style="z-index: 1; position: absolute;"><img width=200/></div>| <sub>This property is used by the Serializer to access a list of all FeatureDescriptors</sub>| <br>
| <sub>Classifier</sub><div style="z-index: 1; position: absolute;"><img width=200/></div>| <sub>Gets or sets the classifier pipeline. Hands over the Logger object.</sub>| <br>
| <sub>Logger</sub><div style="z-index: 1; position: absolute;"><img width=200/></div>| <sub>Gets or sets the class responsible for logging</sub>| <br>
| <sub>Pipeline</sub><div style="z-index: 1; position: absolute;"><img width=200/></div>| <sub>Gets or sets the transform pipeline. Hands over the Logger object.</sub>| <br>
| <sub>SignerModel</sub><div style="z-index: 1; position: absolute;"><img width=200/></div>| <sub>Gets or sets the signer model.</sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Test](./Methods/Verifier-100664171.md) ( [`Signature`](./../Signature.md) )</sub><div style="z-index: 1; position: absolute;"><img width=200/></div>| <sub>Verifies the genuinity of `signature`.</sub>| <br>
| <sub>[Train](./Methods/Verifier-100664170.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../Signature.md)> )</sub><div style="z-index: 1; position: absolute;"><img width=200/></div>| <sub>Trains the verifier with a list of signatures. Uses the [Pipeline](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to extract features,  and [Classifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to find an optimized limit.</sub>| <br>


