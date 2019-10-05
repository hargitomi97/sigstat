# [Verifier](./Verifier.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Model](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md)

## Summary
Uses pipelines to transform, train on, and classify [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md) objects.

## Constructors

| Name | Summary | 
| --- | --- | 
| Verifier ( [`ILogger`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) logger ) | Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class | 
| Verifier (  ) | Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class. | 
| Verifier ( [`Verifier`](./Verifier.md) baseVerifier ) | Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class based on another Verifier instance | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [Dictionary](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2)\<[String](https://docs.microsoft.com/en-us/dotnet/api/System.String), [FeatureDescriptor](./../FeatureDescriptor.md)> | AllFeatures | This property is used by the Serializer to access a list of all FeatureDescriptors | 
| [IClassifier](./../Pipeline/IClassifier.md) | Classifier | Gets or sets the classifier pipeline. Hands over the Logger object. | 
| [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) | Logger | Gets or sets the class responsible for logging | 
| [SequentialTransformPipeline](./../Pipeline/SequentialTransformPipeline.md) | Pipeline | Gets or sets the transform pipeline. Hands over the Logger object. | 
| [ISignerModel](./../Pipeline/ISignerModel.md) | SignerModel | Gets or sets the signer model. | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | [Test](./Methods/Verifier-100664117.md) ( [`Signature`](./../Signature.md) signature ) | Verifies the genuinity of `signature`. | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Train](./Methods/Verifier-100664116.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../Signature.md)> signatures ) | Trains the verifier with a list of signatures. Uses the [Model.Verifier.Pipeline](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to extract features,  and [Model.Verifier.Classifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to find an optimized limit. | 


