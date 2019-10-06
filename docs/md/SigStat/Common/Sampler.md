# [Sampler](./Sampler.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Takes samples from a set of [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md)s by given sampling strategies.  Use this to fine-tune the [VerifierBenchmark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <img width=200/> <sub>Sampler ( [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>, [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>>, [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>, [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>>, [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>, [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>> )</sub>| <sub>Initialize a new instance of the [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) class by given sampling strategies.</sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <img width=200/> <sub>ForgeryTestFilter</sub>| <sub></sub>| <br>
| <img width=200/> <sub>GenuineTestFilter</sub>| <sub></sub>| <br>
| <img width=200/> <sub>TrainingFilter</sub>| <sub></sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <img width=200/> <sub>[SampleForgeryTests](./Methods/Sampler-100663362.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)> )</sub>| <sub></sub>| <br>
| <img width=200/> <sub>[SampleGenuineTests](./Methods/Sampler-100663361.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)> )</sub>| <sub></sub>| <br>
| <img width=200/> <sub>[SampleReferences](./Methods/Sampler-100663360.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)> )</sub>| <sub></sub>| <br>


