# [VerifierBenchmark](./VerifierBenchmark.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./ILoggerObject.md)

## Summary
Benchmarking class to test error rates of a [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| VerifierBenchmark (  )<div style="width: 300px">| Initializes a new instance of the [VerifierBenchmark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md) class.  Sets the [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to the default [Framework.Samplers.FirstNSampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Framework/Samplers/FirstNSampler.md).<div style="width: 300px">| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| Loader<div style="width: 300px">| The loader that will provide the database for benchmarking<div style="width: 300px">| <br>
| Logger<div style="width: 300px">| Gets or sets the attached [Microsoft.Extensions.Logging.ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) object used to log messages. Hands it over to the verifier.<div style="width: 300px">| <br>
| Parameters<div style="width: 300px">| A key value store that can be used to store custom information about the benchmark<div style="width: 300px">| <br>
| Progress<div style="width: 300px">| <div style="width: 300px">| <br>
| Sampler<div style="width: 300px">| The [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to be used for benchmarking<div style="width: 300px">| <br>
| Verifier<div style="width: 300px">| Gets or sets the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to be benchmarked.<div style="width: 300px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Dump](./Methods/VerifierBenchmark-100663370.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`IEnumerable`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[`KeyValuePair`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)>> )<div style="width: 300px">| Dumps the results of the benchmark in a file.<div style="width: 300px">| <br>
| [Execute](./Methods/VerifierBenchmark-100663382.md) ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )<div style="width: 300px">| Execute the benchmarking process.<div style="width: 300px">| <br>
| [Execute](./Methods/VerifierBenchmark-100663383.md) ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )<div style="width: 300px">| Execute the benchmarking process with a degree of parallelism.<div style="width: 300px">| <br>


## Events

| Name | Summary | 
| --- | --- | 
| ProgressChanged<div style="width: 300px">| <div style="width: 300px">| <br>


