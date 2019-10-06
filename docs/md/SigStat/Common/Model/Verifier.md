# [Verifier](./Verifier.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Model](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md)

## Summary
Uses pipelines to transform, train on, and classify [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md) objects.

## Constructors

| Name | Summary | 
| --- | --- | 
| Verifier ( [`ILogger`](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) )<div style="width: 300px">| Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class<div style="width: 300px">| <br>
| Verifier (  )<div style="width: 300px">| Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class.<div style="width: 300px">| <br>
| Verifier ( [`Verifier`](./Verifier.md) )<div style="width: 300px">| Initializes a new instance of the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) class based on another Verifier instance<div style="width: 300px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| AllFeatures<div style="width: 300px">| This property is used by the Serializer to access a list of all FeatureDescriptors<div style="width: 300px">| <br>
| Classifier<div style="width: 300px">| Gets or sets the classifier pipeline. Hands over the Logger object.<div style="width: 300px">| <br>
| Logger<div style="width: 300px">| Gets or sets the class responsible for logging<div style="width: 300px">| <br>
| Pipeline<div style="width: 300px">| Gets or sets the transform pipeline. Hands over the Logger object.<div style="width: 300px">| <br>
| SignerModel<div style="width: 300px">| Gets or sets the signer model.<div style="width: 300px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Test](./Methods/Verifier-100664117.md) ( [`Signature`](./../Signature.md) )<div style="width: 300px">| Verifies the genuinity of `signature`.<div style="width: 300px">| <br>
| [Train](./Methods/Verifier-100664116.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./../Signature.md)> )<div style="width: 300px">| Trains the verifier with a list of signatures. Uses the [Model.Verifier.Pipeline](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to extract features,  and [Model.Verifier.Classifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to find an optimized limit.<div style="width: 300px">| <br>


