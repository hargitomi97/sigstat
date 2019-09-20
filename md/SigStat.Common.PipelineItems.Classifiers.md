#### DtwClassifier

<sub>Classifies Signatures with the `SigStat.Common.Algorithms.Dtw` algorithm.</sub>
```csharp
public class SigStat.Common.PipelineItems.Classifiers.DtwClassifier
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, IDistanceClassifier, IClassifier

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Func<Double[], Double[], Double>` | <sub>DistanceFunction</sub> | <sub>The function used to calculate the distance between two data points during DTW calculation</sub> | 
| `List<FeatureDescriptor>` | <sub>Features</sub> | <sub>Gets or sets the features to consider during distance calculation</sub> | 
| `Double` | <sub>MultiplicationFactor</sub> | <sub>Gets or sets the multiplication factor to be used during threshold calculation</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>Test(ISignerModel, Signature)</sub> | <sub></sub> | 
| `ISignerModel` | <sub>Train(List<Signature>)</sub> | <sub></sub> | 


#### DtwSignerModel

<sub>Represents a trained model for `SigStat.Common.PipelineItems.Classifiers.DtwClassifier`</sub>
```csharp
public class SigStat.Common.PipelineItems.Classifiers.DtwSignerModel
    : ISignerModel

```

###### Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `DistanceMatrix<String, String, Double>` | <sub>DistanceMatrix</sub> | <sub>DTW distance matrix of the genuine signatures</sub> | 
| `Double` | <sub>Threshold</sub> | <sub>A threshold, that will be used for classification. Signatures with  an average DTW distance from the genuines above this threshold will  be classified as forgeries</sub> | 


###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<KeyValuePair<String, Double[][]>>` | <sub>GenuineSignatures</sub> | <sub>A list a of genuine signatures used for training</sub> | 


#### OptimalDtwClassifier

<sub>This `SigStat.Common.Pipeline.IDistanceClassifier` implementation will consider both test and  training samples and claculate the threshold to separate the original and forged  signatures to approximate EER. Note that this classifier is not applicable for  real world scenarios. It was developed to test the theoratical boundaries of  threshold based classification</sub>
```csharp
public class SigStat.Common.PipelineItems.Classifiers.OptimalDtwClassifier
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, IDistanceClassifier, IClassifier

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Func<Double[], Double[], Double>` | <sub>DistanceFunction</sub> | <sub>The function used to calculate the distance between two data points during DTW calculation</sub> | 
| `List<FeatureDescriptor>` | <sub>Features</sub> | <sub>`SigStat.Common.FeatureDescriptor`s to consider during classification</sub> | 
| `Sampler` | <sub>Sampler</sub> | <sub>`SigStat.Common.PipelineItems.Classifiers.OptimalDtwClassifier.Sampler` used for selecting training and test sets during a benchmark</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>Test(ISignerModel, Signature)</sub> | <sub></sub> | 
| `ISignerModel` | <sub>Train(List<Signature>)</sub> | <sub></sub> | 


#### WeightedClassifier

<sub>Classifies Signatures by weighing other Classifier results.</sub>
```csharp
public class SigStat.Common.PipelineItems.Classifiers.WeightedClassifier
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, IEnumerable, IClassifier

```

###### Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<ValueTuple<IClassifier, Double>>` | <sub>Items</sub> | <sub>List of classifiers and belonging weights.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Add(ValueTuple<IClassifier, Double>)</sub> | <sub>Add a new classifier with given weight to the list of items.</sub> | 
| `IEnumerator` | <sub>GetEnumerator()</sub> | <sub></sub> | 
| `Double` | <sub>Test(ISignerModel, Signature)</sub> | <sub></sub> | 
| `ISignerModel` | <sub>Train(List<Signature>)</sub> | <sub></sub> | 


