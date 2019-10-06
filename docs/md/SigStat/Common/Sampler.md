# [Sampler](./Sampler.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Takes samples from a set of [<sub>Signature</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md)s by given sampling strategies.  Use this to fine-tune the [<sub>VerifierBenchmark</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md)

## Constructors

| Name | Summary | 

Sampler ( [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>, [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>>, [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>, [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>>, [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>, [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>> )<sub>Initialize a new instance of the [<sub>Sampler</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) class by given sampling strategies.</sub>


## Properties

| Type | Name | Summary | 

[Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)>, [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)>><sub>ForgeryTestFilter</sub><sub></sub>
[Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)>, [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)>><sub>GenuineTestFilter</sub><sub></sub>
[Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)>, [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)>><sub>TrainingFilter</sub><sub></sub>


## Methods

| Return | Name | Summary | 

[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)><sub>[SampleForgeryTests](./Methods/Sampler-100663362.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)> )</sub><sub></sub>
[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)><sub>[SampleGenuineTests](./Methods/Sampler-100663361.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)> )</sub><sub></sub>
[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)><sub>[SampleReferences](./Methods/Sampler-100663360.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)> )</sub><sub></sub>


