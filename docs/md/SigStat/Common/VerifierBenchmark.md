# [VerifierBenchmark](./VerifierBenchmark.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./ILoggerObject.md)

## Summary
<sub>Benchmarking class to test error rates of a [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md)</sub>

## Constructors

| Name | Summary | 
| --- | --- | 
| VerifierBenchmark (  ) | <sub>Initializes a new instance of the [VerifierBenchmark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md) class.  Sets the [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to the default [Framework.Samplers.FirstNSampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Framework/Samplers/FirstNSampler.md).</sub> | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [IDataSetLoader](./Loaders/IDataSetLoader.md) | Loader | <sub>The loader that will provide the database for benchmarking</sub> | 
| [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) | Logger | <sub>Gets or sets the attached [Microsoft.Extensions.Logging.ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) object used to log messages. Hands it over to the verifier.</sub> | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[String](https://docs.microsoft.com/en-us/dotnet/api/System.String), [String](https://docs.microsoft.com/en-us/dotnet/api/System.String)>> | Parameters | <sub>A key value store that can be used to store custom information about the benchmark</sub> | 
| [Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) | Progress | <sub></sub> | 
| [Sampler](./Sampler.md) | Sampler | <sub>The [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to be used for benchmarking</sub> | 
| [Verifier](./Model/Verifier.md) | Verifier | <sub>Gets or sets the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to be benchmarked.</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Dump](./Methods/VerifierBenchmark-100663370.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`IEnumerable`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[`KeyValuePair`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)>> ) | <sub>Dumps the results of the benchmark in a file.</sub> | 
| [BenchmarkResults](./BenchmarkResults.md) | [Execute](./Methods/VerifierBenchmark-100663382.md) ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) ) | <sub>Execute the benchmarking process.</sub> | 
| [BenchmarkResults](./BenchmarkResults.md) | [Execute](./Methods/VerifierBenchmark-100663383.md) ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) ) | <sub>Execute the benchmarking process with a degree of parallelism.</sub> | 


## Events

| Type | Name | Summary | 
| --- | --- | --- | 
| [EventHandler](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1)\<[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)> | ProgressChanged | <sub></sub> | 


