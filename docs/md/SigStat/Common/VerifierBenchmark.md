# [VerifierBenchmark](./VerifierBenchmark.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./ILoggerObject.md)

## Summary
Benchmarking class to test error rates of a [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| VerifierBenchmark (  ) | Initializes a new instance of the [VerifierBenchmark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md) class.  Sets the [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to the default [Framework.Samplers.FirstNSampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Framework/Samplers/FirstNSampler.md). | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [IDataSetLoader](./Loaders/IDataSetLoader.md) | Loader | The loader that will provide the database for benchmarking | 
| [ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) | Logger | Gets or sets the attached [s.Logging.ILogger](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md) object used to log messages. Hands it over to the verifier. | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[KeyValuePair](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[String](https://docs.microsoft.com/en-us/dotnet/api/System.String), [String](https://docs.microsoft.com/en-us/dotnet/api/System.String)>> | Parameters | A key value store that can be used to store custom information about the benchmark | 
| [Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) | Progress |  | 
| [Sampler](./Sampler.md) | Sampler | The [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to be used for benchmarking | 
| [Verifier](./Model/Verifier.md) | Verifier | Gets or sets the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to be benchmarked. | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | Dump ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) filename, [`IEnumerable`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[`KeyValuePair`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)>> parameters ) | Dumps the results of the benchmark in a file. | 
| [BenchmarkResults](./BenchmarkResults.md) | Execute ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) ParallelMode ) | Execute the benchmarking process. | 
| [BenchmarkResults](./BenchmarkResults.md) | Execute ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) degreeOfParallelism ) | Execute the benchmarking process with a degree of parallelism. | 


## Events

| Type | Name | Summary | 
| --- | --- | --- | 
| [EventHandler](https://docs.microsoft.com/en-us/dotnet/api/System.EventHandler-1)\<[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)> | ProgressChanged |  | 


