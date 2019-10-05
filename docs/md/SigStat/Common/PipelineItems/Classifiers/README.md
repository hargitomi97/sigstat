# [SigStat.Common.PipelineItems.Classifiers](./README.md)

## Types

- [`DtwClassifier`](./DtwClassifier.md)
	- <sub>Classifies Signatures with the [Algorithms.Dtw](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/Dtw.md) algorithm.</sub>
- [`DtwSignerModel`](./DtwSignerModel.md)
	- <sub>Represents a trained model for [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)</sub>
- [`OptimalDtwClassifier`](./OptimalDtwClassifier.md)
	- <sub>This [Pipeline.IDistanceClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Pipeline/IDistanceClassifier.md) implementation will consider both test and  training samples and claculate the threshold to separate the original and forged  signatures to approximate EER. Note that this classifier is not applicable for  real world scenarios. It was developed to test the theoratical boundaries of  threshold based classification</sub>
- [`WeightedClassifier`](./WeightedClassifier.md)
	- <sub>Classifies Signatures by weighing other Classifier results.</sub>

