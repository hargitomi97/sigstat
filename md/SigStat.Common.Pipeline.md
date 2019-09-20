#### AutoSetMode

<sub>Default strategy to set the value of a property</sub>
```csharp
public enum SigStat.Common.Pipeline.AutoSetMode
    : Enum, IComparable, IFormattable, IConvertible

```

Enum

| <sub>Value</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `0` | <sub>IfNull</sub> | <sub>Set the value if it is null</sub> | 
| `1` | <sub>Always</sub> | <sub>Always set the value</sub> | 
| `2` | <sub>Never</sub> | <sub>Never set the value</sub> | 


#### IClassifier

<sub>Trains classification models based on reference signatures</sub>
```csharp
public interface SigStat.Common.Pipeline.IClassifier

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>Test(ISignerModel, Signature)</sub> | <sub>Returns a double value in the range [0..1], representing the probability of the given signature belonging to the trained model.  <list type="bullet"><item>0: non-match</item><item>0.5: inconclusive</item><item>1: match</item></list></sub> | 
| `ISignerModel` | <sub>Train(List<Signature>)</sub> | <sub>Trains a model based on the signatures and returns the trained model</sub> | 


#### IDistanceClassifier

<sub>Trains classification models based on reference signatures, by calculating the distances between signature pairs</sub>
```csharp
public interface SigStat.Common.Pipeline.IDistanceClassifier
    : IClassifier

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Func<Double[], Double[], Double>` | <sub>DistanceFunction</sub> | <sub>A function to calculate the distance between two online signature points</sub> | 


#### Input

<sub>Annotates an input `SigStat.Common.FeatureDescriptor` in a transformation pipeline</sub>
```csharp
public class SigStat.Common.Pipeline.Input
    : Attribute, _Attribute

```

###### Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `AutoSetMode` | <sub>AutoSetMode</sub> | <sub>The automatic set mode</sub> | 


#### IPipelineIO

<sub>Supports the definition of `SigStat.Common.Pipeline.PipelineInput` and `SigStat.Common.Pipeline.PipelineOutput`</sub>
```csharp
public interface SigStat.Common.Pipeline.IPipelineIO

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<PipelineInput>` | <sub>PipelineInputs</sub> | <sub>A collection of inputs for the pipeline elements</sub> | 
| `List<PipelineOutput>` | <sub>PipelineOutputs</sub> | <sub>A collection of outputs for the pipeline elements</sub> | 


#### ISignerModel

<sub>Analyzes signatures based on their similiarity to the trained model</sub>
```csharp
public interface SigStat.Common.Pipeline.ISignerModel

```

#### Output

<sub>Annotates an output `SigStat.Common.FeatureDescriptor` in a transformation pipeline</sub>
```csharp
public class SigStat.Common.Pipeline.Output
    : Attribute, _Attribute

```

###### Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>Default</sub> | <sub>The default value for the property</sub> | 


#### ParallelTransformPipeline

<sub>Runs pipeline items in parallel.  <para>Default Pipeline Output: Range of all the Item outputs.</para></sub>
```csharp
public class SigStat.Common.Pipeline.ParallelTransformPipeline
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, IEnumerable, ITransformation

```

###### Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<ITransformation>` | <sub>Items</sub> | <sub>List of transforms to be run parallel.</sub> | 


###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<PipelineInput>` | <sub>PipelineInputs</sub> | <sub>Gets the pipeline inputs.</sub> | 
| `List<PipelineOutput>` | <sub>PipelineOutputs</sub> | <sub>Gets the pipeline outputs.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Add(ITransformation)</sub> | <sub>Add new transform to the list.</sub> | 
| `IEnumerator` | <sub>GetEnumerator()</sub> | <sub></sub> | 
| `void` | <sub>Transform(Signature)</sub> | <sub>Executes transform `SigStat.Common.Pipeline.ParallelTransformPipeline.Items` parallel.  Passes input features for each.  Output is a range of all the Item outputs.</sub> | 


#### PipelineInput

<sub>Represents an input for a `SigStat.Common.Pipeline.PipelineInput.PipelineItem`</sub>
```csharp
public class SigStat.Common.Pipeline.PipelineInput

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `AutoSetMode` | <sub>AutoSetMode</sub> | <sub>Gets the AutoSetMode</sub> | 
| `Object` | <sub>FD</sub> | <sub>Gets or sets the fd.</sub> | 
| `Boolean` | <sub>IsCollectionOfFeatureDescriptors</sub> | <sub>Gets a value indicating whether this instance is collection of feature descriptors.</sub> | 
| `String` | <sub>PropName</sub> | <sub>Gets the name of the property.</sub> | 
| `Type` | <sub>Type</sub> | <sub>Gets the type of the property</sub> | 


#### PipelineOutput

<sub>Represents an output for a `SigStat.Common.Pipeline.PipelineOutput.PipelineItem`</sub>
```csharp
public class SigStat.Common.Pipeline.PipelineOutput

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>Default</sub> | <sub>Gets the default value</sub> | 
| `Object` | <sub>FD</sub> | <sub>Gets or sets the fd.</sub> | 
| `Boolean` | <sub>IsCollectionOfFeatureDescriptors</sub> | <sub>Gets a value indicating whether this instance is collection of feature descriptors.</sub> | 
| `Boolean` | <sub>IsTemporary</sub> | <sub>Gets a value indicating whether this instance is temporary.</sub> | 
| `String` | <sub>PropName</sub> | <sub>Gets the name of the property.</sub> | 
| `Type` | <sub>Type</sub> | <sub>Gets the type of the property</sub> | 


#### SequentialTransformPipeline

<sub>Runs pipeline items in a sequence.  <para>Default Pipeline Output: Output of the last Item in the sequence.</para></sub>
```csharp
public class SigStat.Common.Pipeline.SequentialTransformPipeline
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, IEnumerable, ITransformation

```

###### Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<ITransformation>` | <sub>Items</sub> | <sub>List of transforms to be run in sequence.</sub> | 


###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<PipelineInput>` | <sub>PipelineInputs</sub> | <sub>Gets the pipeline inputs.</sub> | 
| `List<PipelineOutput>` | <sub>PipelineOutputs</sub> | <sub>Gets the pipeline outputs.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Add(ITransformation)</sub> | <sub>Add new transform to the list.</sub> | 
| `IEnumerator` | <sub>GetEnumerator()</sub> | <sub></sub> | 
| `void` | <sub>Transform(Signature)</sub> | <sub>Executes transform `SigStat.Common.Pipeline.SequentialTransformPipeline.Items` in sequence.  Passes input features for each.  Output is the output of the last Item in the sequence.</sub> | 


