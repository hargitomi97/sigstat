# [VerifierBenchmark](./VerifierBenchmark.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./ILoggerObject.md)

## Summary
Benchmarking class to test error rates of a [Verifier](../../docs/md/SigStat/Common/Model/Verifier.md)

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>VerifierBenchmark (  )</sub> | <sub>Initializes a new instance of the [VerifierBenchmark](../../docs/md/SigStat/Common/VerifierBenchmark.md) class.  Sets the [Sampler](../../docs/md/SigStat/Common/Sampler.md) to the default [FirstNSampler](../../docs/md/SigStat/Common/Framework/Samplers/FirstNSampler.md).</sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>Loader</sub> | <sub>The loader that will provide the database for benchmarking</sub> | 
| <sub>Logger</sub> | <sub>Gets or sets the attached [ILogger](../../docs/md/Microsoft/Extensions/Logging/ILogger.md) object used to log messages. Hands it over to the verifier.</sub> | 
| <sub>Parameters</sub> | <sub>A key value store that can be used to store custom information about the benchmark</sub> | 
| <sub>Progress</sub> | <sub></sub> | 
| <sub>Sampler</sub> | <sub>The [Sampler](../../docs/md/SigStat/Common/Sampler.md) to be used for benchmarking</sub> | 
| <sub>Verifier</sub> | <sub>Gets or sets the [Verifier](../../docs/md/SigStat/Common/Model/Verifier.md) to be benchmarked.</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[Dump](./Methods/VerifierBenchmark--Dump.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`IEnumerable`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[`KeyValuePair`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)>> )</sub> | <sub>Dumps the results of the benchmark in a file.</sub> | 
| <sub>[Execute](./Methods/VerifierBenchmark--Execute.md) ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub> | <sub>Execute the benchmarking process.</sub> | 
| <sub>[Execute](./Methods/VerifierBenchmark--Execute.md) ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )</sub> | <sub>Execute the benchmarking process with a degree of parallelism.</sub> | 


## Events

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>ProgressChanged</sub> | <sub></sub> | 


