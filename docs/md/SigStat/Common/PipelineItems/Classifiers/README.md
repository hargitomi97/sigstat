# [SigStat.Common.PipelineItems.Classifiers](./README.md)

## Types

- [`DtwClassifier`](./DtwClassifier.md)
	- Classifies Signatures with the [Dtw](../SigStat/Common/Algorithms/Dtw.md) algorithm.
- [`DtwSignerModel`](./DtwSignerModel.md)
	- Represents a trained model for [DtwClassifier](../SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)
- [`OptimalDtwClassifier`](./OptimalDtwClassifier.md)
	- This [IDistanceClassifier](../SigStat/Common/Pipeline/IDistanceClassifier.md) implementation will consider both test and  training samples and claculate the threshold to separate the original and forged  signatures to approximate EER. Note that this classifier is not applicable for  real world scenarios. It was developed to test the theoratical boundaries of  threshold based classification
- [`WeightedClassifier`](./WeightedClassifier.md)
	- Classifies Signatures by weighing other Classifier results.

