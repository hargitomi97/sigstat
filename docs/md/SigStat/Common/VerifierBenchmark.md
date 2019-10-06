# [VerifierBenchmark](./VerifierBenchmark.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./ILoggerObject.md)

## Summary
Benchmarking class to test error rates of a [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>VerifierBenchmark (  )</sub><div style="width: 290px">| <sub>Initializes a new instance of the [VerifierBenchmark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md) class.  Sets the [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to the default [Framework.Samplers.FirstNSampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Framework/Samplers/FirstNSampler.md).</sub><div style="width: 290px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>Loader</sub><div style="width: 290px">| <sub>The loader that will provide the database for benchmarking</sub><div style="width: 290px">| <br>
| <sub>Logger</sub><div style="width: 290px">| <sub>Gets or sets the attached [Microsoft.Extensions.Logging.ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) object used to log messages. Hands it over to the verifier.</sub><div style="width: 290px">| <br>
| <sub>Parameters</sub><div style="width: 290px">| <sub>A key value store that can be used to store custom information about the benchmark</sub><div style="width: 290px">| <br>
| <sub>Progress</sub><div style="width: 290px">| <sub></sub><div style="width: 290px">| <br>
| <sub>Sampler</sub><div style="width: 290px">| <sub>The [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to be used for benchmarking</sub><div style="width: 290px">| <br>
| <sub>Verifier</sub><div style="width: 290px">| <sub>Gets or sets the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to be benchmarked.</sub><div style="width: 290px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Dump](./Methods/VerifierBenchmark-100663370.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`IEnumerable`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[`KeyValuePair`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)>> )</sub><div style="width: 290px">| <sub>Dumps the results of the benchmark in a file.</sub><div style="width: 290px">| <br>
| <sub>[Execute](./Methods/VerifierBenchmark-100663382.md) ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><div style="width: 290px">| <sub>Execute the benchmarking process.</sub><div style="width: 290px">| <br>
| <sub>[Execute](./Methods/VerifierBenchmark-100663383.md) ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )</sub><div style="width: 290px">| <sub>Execute the benchmarking process with a degree of parallelism.</sub><div style="width: 290px">| <br>


## Events

| Name | Summary | 
| --- | --- | 
| <sub>ProgressChanged</sub><div style="width: 290px">| <sub></sub><div style="width: 290px">| <br>


