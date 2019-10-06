# [VerifierBenchmark](./VerifierBenchmark.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./ILoggerObject.md)

## Summary
Benchmarking class to test error rates of a [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md)

## Constructors

NameSummary

<sub>Initializes a new instance of the [VerifierBenchmark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md) class.  Sets the [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to the default [Framework.Samplers.FirstNSampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Framework/Samplers/FirstNSampler.md).</sub><br><sub>Initializes a new instance of the [VerifierBenchmark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md) class.  Sets the [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to the default [Framework.Samplers.FirstNSampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Framework/Samplers/FirstNSampler.md).</sub><br>


## Properties

TypeNameSummary

<sub>Loader</sub><br><sub>The loader that will provide the database for benchmarking</sub><br><br>
<sub>Logger</sub><br><sub>Gets or sets the attached [Microsoft.Extensions.Logging.ILogger](https://docs.microsoft.com/en-us/dotnet/api/Microsoft.Extensions.Logging.ILogger) object used to log messages. Hands it over to the verifier.</sub><br><br>
<sub>Parameters</sub><br><sub>A key value store that can be used to store custom information about the benchmark</sub><br><br>
<sub>Progress</sub><br><sub></sub><br><br>
<sub>Sampler</sub><br><sub>The [Sampler](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Sampler.md) to be used for benchmarking</sub><br><br>
<sub>Verifier</sub><br><sub>Gets or sets the [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md) to be benchmarked.</sub><br><br>


## Methods

NameSummary

<sub>[Dump](./Methods/VerifierBenchmark-100663370.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`IEnumerable`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[`KeyValuePair`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyValuePair-2)\<[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)>> )</sub><br><sub>Dumps the results of the benchmark in a file.</sub><br>
<sub>[Execute](./Methods/VerifierBenchmark-100663382.md) ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) )</sub><br><sub>Execute the benchmarking process.</sub><br>
<sub>[Execute](./Methods/VerifierBenchmark-100663383.md) ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )</sub><br><sub>Execute the benchmarking process with a degree of parallelism.</sub><br>


## Events

TypeNameSummary

<sub>ProgressChanged</sub><br><sub></sub><br><br>


