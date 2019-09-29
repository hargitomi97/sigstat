# [Sampler](./Sampler.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Takes samples from a set of [SigStat.Common.Signature](./Signature.md)s by given sampling strategies.  Use this to fine-tune the [SigStat.Common.VerifierBenchmark](./Signature.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| [Sampler](./../../ctor/Sampler-100663359.md) ( [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>, [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>> references, [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>, [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>> genuineTests, [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>, [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)>> forgeryTests ) | Initialize a new instance of the [SigStat.Common.Sampler](./Signature.md) class by given sampling strategies. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)>, [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)>> | ForgeryTestFilter |  | 
| [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)>, [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)>> | GenuineTestFilter |  | 
| [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-2)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)>, [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)>> | TrainingFilter |  | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)> | [SampleForgeryTests](./Methods/Sampler-100663362.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)> signatures ) |  | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)> | [SampleGenuineTests](./Methods/Sampler-100663361.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)> signatures ) |  | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)> | [SampleReferences](./Methods/Sampler-100663360.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`Signature`](./Signature.md)> signatures ) |  | 


