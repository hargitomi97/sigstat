# [VerifierBenchmark](./VerifierBenchmark.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./ILoggerObject.md)

## Summary
Benchmarking class to test error rates of a [Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>VerifierBenchmark (  )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>Initializes a new instance of the [VerifierBenchmark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md) class.  Sets the [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to the default [FirstNSampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Framework/Samplers/FirstNSampler.md).</sub><p>&nbsp;</p>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>Loader</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>The loader that will provide the database for benchmarking</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>Logger</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>Gets or sets the attached [Microsoft.Extensions.Logging.ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) object used to log messages. Hands it over to the verifier.</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>Parameters</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>A key value store that can be used to store custom information about the benchmark</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>Progress</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>Sampler</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>The [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to be used for benchmarking</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>Verifier</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>Gets or sets the [Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to be benchmarked.</sub><p>&nbsp;</p>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>[Dump](./Methods/VerifierBenchmark-100663372.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`IEnumerable`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[`KeyValuePair`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)>> )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>Dumps the results of the benchmark in a file.</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>[Execute](./Methods/VerifierBenchmark-100663384.md) ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>Execute the benchmarking process.</sub><p>&nbsp;</p>| <br>
| <p>&nbsp;</p><sub>[Execute](./Methods/VerifierBenchmark-100663385.md) ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub>Execute the benchmarking process with a degree of parallelism.</sub><p>&nbsp;</p>| <br>


## Events

| Name | Summary | 
| --- | --- | 
| <p>&nbsp;</p><sub>ProgressChanged</sub><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p>&nbsp;</p><sub></sub><p>&nbsp;</p>| <br>


