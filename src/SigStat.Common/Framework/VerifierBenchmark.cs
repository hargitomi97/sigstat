using System.Collections.Generic;
using Newtonsoft.Json;

namespace SigStat.Common
{
    /// <summary>Contains the benchmark results of a single/></summary>
    public class Result
    {
        /// <summary>Identifier of the <see cref="Signer"/></summary>
        [JsonProperty]
        public readonly string Signer;

        //ez internal, mert csak a Benchmark keszithet uj Resultokat
        internal Result(string signer, double frr, double far, double aer)
        {
            Signer = signer;
        }
    }

    /// <summary>Contains the benchmark results of every  and the summarized final results.</summary>
    [JsonObject(MemberSerialization.OptOut)]
    public struct BenchmarkResults
    {

        /// <summary>List that contains the <see cref="Result"/>s for each </summary>
        [JsonProperty]
        public readonly List<Result> SignerResults;
        /// <summary>Summarized, final result of the benchmark execution.</summary>
        [JsonProperty]
        public readonly Result FinalResult;

        //ez internal, mert csak a Benchmark keszithet uj BenchmarkResults-t
        internal BenchmarkResults(List<Result> signerResults, Result finalResult)
        {
            SignerResults = signerResults;
            FinalResult = finalResult;
        }
    }
}
