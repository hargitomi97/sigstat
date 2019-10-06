# [VerifierBenchmark](./VerifierBenchmark.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./ILoggerObject.md)

## Summary
Benchmarking class to test error rates of a [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>VerifierBenchmark (  )</sub><img width=200/>  | <sub>Initializes a new instance of the [VerifierBenchmark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md) class.  Sets the [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to the default [Framework.Samplers.FirstNSampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Framework/Samplers/FirstNSampler.md).</sub><img width=200/>  | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>Loader</sub><img width=200/>  | <sub>The loader that will provide the database for benchmarking</sub><img width=200/>  | <br>
| <sub>Logger</sub><img width=200/>  | <sub>Gets or sets the attached [Microsoft.Extensions.Logging.ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) object used to log messages. Hands it over to the verifier.</sub><img width=200/>  | <br>
| <sub>Parameters</sub><img width=200/>  | <sub>A key value store that can be used to store custom information about the benchmark</sub><img width=200/>  | <br>
| <sub>Progress</sub><img width=200/>  | <sub></sub><img width=200/>  | <br>
| <sub>Sampler</sub><img width=200/>  | <sub>The [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to be used for benchmarking</sub><img width=200/>  | <br>
| <sub>Verifier</sub><img width=200/>  | <sub>Gets or sets the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to be benchmarked.</sub><img width=200/>  | <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Dump](./Methods/VerifierBenchmark-100663370.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`IEnumerable`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[`KeyValuePair`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)>> )</sub><img width=200/>  | <sub>Dumps the results of the benchmark in a file.</sub><img width=200/>  | <br>
| <sub>[Execute](./Methods/VerifierBenchmark-100663382.md) ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><img width=200/>  | <sub>Execute the benchmarking process.</sub><img width=200/>  | <br>
| <sub>[Execute](./Methods/VerifierBenchmark-100663383.md) ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )</sub><img width=200/>  | <sub>Execute the benchmarking process with a degree of parallelism.</sub><img width=200/>  | <br>


## Events

| Type | Name | Summary | 
| --- | --- | --- | 
| <sub>ProgressChanged</sub><img width=200/>  | <sub></sub><img width=200/>  | <img width=200/>  | <br>


