# [Sampler](./Sampler.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Takes samples from a set of [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md)s by given sampling strategies.  Use this to fine-tune the [VerifierBenchmark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>Sampler ( [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>, [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>>, [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>, [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>>, [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>, [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>> )</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub>Initialize a new instance of the [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) class by given sampling strategies.</sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>ForgeryTestFilter</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub></sub>| <br>
| <sub>GenuineTestFilter</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub></sub>| <br>
| <sub>TrainingFilter</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub></sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[SampleForgeryTests](./Methods/Sampler-100663364.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)> )</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub></sub>| <br>
| <sub>[SampleGenuineTests](./Methods/Sampler-100663363.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)> )</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub></sub>| <br>
| <sub>[SampleReferences](./Methods/Sampler-100663362.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)> )</sub><div style="z-index: 1; position: absolute;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub></sub>| <br>


