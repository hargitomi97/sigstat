﻿using SigStat.Common.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Extensions.Logging;
using SigStat.Common.Pipeline;

namespace SigStat.Common.Transforms
{
    /// <summary>
    /// Adds a vector feature's elements to other features.
    /// <para>Default Pipeline Output: Pipeline Input</para>
    /// </summary>
    /// <example>
    /// Inputs are: Centroid.xy, X, Y .
    /// Adds Centroid.x to each element of X.
    /// Adds Centroid.y to each element of Y.
    /// </example>
    public class AddVector : PipelineBase, ITransformation
    {
        [Input]
        public List<FeatureDescriptor<List<double>>> Inputs;

        [Output("AddVectorOutputs")]
        public List<FeatureDescriptor<List<double>>> Outputs;

        private readonly FeatureDescriptor<List<double>> vectorFeature;

        /// <summary>
        /// Initializes a new instance of the <see cref="AddVector"/> class with a vector feature.
        /// Don't forget to add as many Inputs as the vector's dimension.
        /// </summary>
        /// <param name="vectorFeature">A collection-type feature where each element represents a dimension of the vector.</param>
        public AddVector(FeatureDescriptor<List<double>> vectorFeature)
        {
            this.vectorFeature = vectorFeature;
        }

        /// <inheritdoc/>
        public void Transform(Signature signature)
        {
            var vector = signature.GetFeature(vectorFeature);

            int dim = vector.Count;
            if ((Inputs.Count) != dim)
            {
                Logger?.LogError("Dimension mismatch");
            }

            for (int iF = 0; iF < dim; iF++)
            {
                var listFeature = signature.GetFeature(Inputs[iF]);
                for (int i = 0; i < listFeature.Count; i++)
                {
                    listFeature[i] += vector[iF];
                }
                signature.SetFeature(Outputs[iF], listFeature);
                Progress += 100 / dim;
            }

            Progress = 100;
        }

    }
}
