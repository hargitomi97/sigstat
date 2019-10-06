# [VerifierBenchmark](./VerifierBenchmark.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./ILoggerObject.md)

## Summary
Benchmarking class to test error rates of a [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>VerifierBenchmark (  )</sub></div>| <sub>Initializes a new instance of the [VerifierBenchmark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md) class.  Sets the [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to the default [Framework.Samplers.FirstNSampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Framework/Samplers/FirstNSampler.md).</sub></div>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>Loader</sub></div>| <sub>The loader that will provide the database for benchmarking</sub></div>| <br>
| <div style="width:490px"><sub>Logger</sub></div>| <sub>Gets or sets the attached [Microsoft.Extensions.Logging.ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) object used to log messages. Hands it over to the verifier.</sub></div>| <br>
| <div style="width:490px"><sub>Parameters</sub></div>| <sub>A key value store that can be used to store custom information about the benchmark</sub></div>| <br>
| <div style="width:490px"><sub>Progress</sub></div>| <sub></sub></div>| <br>
| <div style="width:490px"><sub>Sampler</sub></div>| <sub>The [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to be used for benchmarking</sub></div>| <br>
| <div style="width:490px"><sub>Verifier</sub></div>| <sub>Gets or sets the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to be benchmarked.</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>[Dump](./Methods/VerifierBenchmark-100663370.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`IEnumerable`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[`KeyValuePair`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)>> )</sub></div>| <sub>Dumps the results of the benchmark in a file.</sub></div>| <br>
| <div style="width:490px"><sub>[Execute](./Methods/VerifierBenchmark-100663382.md) ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub></div>| <sub>Execute the benchmarking process.</sub></div>| <br>
| <div style="width:490px"><sub>[Execute](./Methods/VerifierBenchmark-100663383.md) ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )</sub></div>| <sub>Execute the benchmarking process with a degree of parallelism.</sub></div>| <br>


## Events

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>ProgressChanged</sub></div>| <sub></sub></div>| <br>


