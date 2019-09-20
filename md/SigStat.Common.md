#### ArrayExtension

<sub>Helper methods for processing arrays</sub>
```csharp
public static class SigStat.Common.ArrayExtension

```

###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `ValueTuple<Int32, Int32>` | <sub>GetCog(this Double[,])</sub> | <sub>Calculates the center of gravity, assuming that each cell contains  a weight value</sub> | 
| `IEnumerable<T>` | <sub>GetValues(this T[,])</sub> | <sub>Enumerates all values in a two dimensional array</sub> | 
| `T[,]` | <sub>SetValues(this T[,], T)</sub> | <sub>Sets all values in a two dimensional array to `value`</sub> | 
| `Double` | <sub>Sum(this Double[,], Int32, Int32, Int32, Int32)</sub> | <sub>Calculates the sum of the values in the given sub-array</sub> | 
| `Double` | <sub>SumCol(this Double[,], Int32)</sub> | <sub>Returns the sum of column values in a two dimensional array</sub> | 
| `Double` | <sub>SumRow(this Double[,], Int32)</sub> | <sub>Returns the sum of row values in a two dimensional array</sub> | 


#### Baseline

```csharp
public class SigStat.Common.Baseline

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `PointF` | <sub>End</sub> | <sub>Endpoint of the baseline</sub> | 
| `PointF` | <sub>Start</sub> | <sub>Starting point of the baseline</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>ToString()</sub> | <sub>Returns a string representation of the baseline</sub> | 


#### BasicMetadataExtraction

<sub>Extracts basic statistical signature (like `SigStat.Common.Features.Bounds` or `SigStat.Common.Features.Cog`) information from an Image</sub>
```csharp
public class SigStat.Common.BasicMetadataExtraction
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


###### Static Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>Trim</sub> | <sub>Represents theratio of significant pixels that should be trimmed  from each side while calculating `SigStat.Common.Features.TrimmedBounds`</sub> | 


#### BenchmarkResults

<sub>Contains the benchmark results of every `SigStat.Common.Signer` and the summarized final results.</sub>
```csharp
public struct SigStat.Common.BenchmarkResults

```

###### Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Result` | <sub>FinalResult</sub> | <sub>Summarized, final result of the benchmark execution.</sub> | 
| `List<Result>` | <sub>SignerResults</sub> | <sub>List that contains the `SigStat.Common.Result`s for each `SigStat.Common.Signer`</sub> | 


#### DistanceMatrix<TRowKey, TColumnKey, TValue>

<sub>A Sparse Matrix representation of a distance graph.</sub>
```csharp
public class SigStat.Common.DistanceMatrix<TRowKey, TColumnKey, TValue>

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `TValue` | <sub>Item</sub> | <sub>Gets or sets a distance for a given row and column</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Boolean` | <sub>ContainsKey(TRowKey, TColumnKey)</sub> | <sub>Determines whether the Matrix contains the specified key pair</sub> | 
| `IEnumerable<TValue>` | <sub>GetValues()</sub> | <sub>Enumerates all values stored on the Matrix</sub> | 
| `Object[,]` | <sub>ToArray()</sub> | <sub>Generates a two dimensional array representation of the Matrix</sub> | 
| `Boolean` | <sub>TryGetValue(TRowKey, TColumnKey, TValue&)</sub> | <sub>Gets the value associated with the specified keys.</sub> | 


#### ErrorRate

<sub>Represents the ErrorRates achieved in a benchmark</sub>
```csharp
public struct SigStat.Common.ErrorRate

```

###### Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>Far</sub> | <sub>False Acceptance Rate</sub> | 
| `Double` | <sub>Frr</sub> | <sub>False Rejection Rate</sub> | 


###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>Aer</sub> | <sub>Average Error Rate (calculated from Far and Frr)</sub> | 


#### FeatureDescriptor

<sub>Represents a feature with name and type.</sub>
```csharp
public class SigStat.Common.FeatureDescriptor

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Type` | <sub>FeatureType</sub> | <sub>Gets or sets the type of the feature.</sub> | 
| `Boolean` | <sub>IsCollection</sub> | <sub>Gets whether the type of the feature is List.</sub> | 
| `String` | <sub>Key</sub> | <sub>Gets the unique key of the feature.</sub> | 
| `String` | <sub>Name</sub> | <sub>Gets or sets a human readable name of the feature.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>ToString()</sub> | <sub>Returns a string represenatation of the FeatureDescriptor</sub> | 


###### Static Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Dictionary<String, FeatureDescriptor>` | <sub>descriptors</sub> | <sub>The static dictionary of all descriptors.</sub> | 


###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor` | <sub>Get(String)</sub> | <sub>Gets the `SigStat.Common.FeatureDescriptor` specified by `key`.  Throws `System.Collections.Generic.KeyNotFoundException` exception if there is no descriptor registered with the given key.</sub> | 
| `FeatureDescriptor<T>` | <sub>Get(String)</sub> | <sub>Gets the `SigStat.Common.FeatureDescriptor` specified by `key`.  Throws `System.Collections.Generic.KeyNotFoundException` exception if there is no descriptor registered with the given key.</sub> | 
| `Dictionary<String, FeatureDescriptor>` | <sub>GetAll()</sub> | <sub>Gets a dictionary of all registered feature descriptors</sub> | 
| `Boolean` | <sub>IsRegistered(String)</sub> | <sub>Returns true, if there is a FeatureDescriptor registered with the given key</sub> | 
| `FeatureDescriptor` | <sub>Register(String, Type)</sub> | <sub>Registers a new `SigStat.Common.FeatureDescriptor` with a given key.  If the FeatureDescriptor is allready registered, this function will  return a reference to the originally registered FeatureDescriptor.  to the a</sub> | 


#### FeatureDescriptor<T>

<sub>Represents a feature with the type <type`T`</sub>
```csharp
public class SigStat.Common.FeatureDescriptor<T>
    : FeatureDescriptor

```

###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<T>` | <sub>Get(String)</sub> | <sub>Gets the `SigStat.Common.FeatureDescriptor`1` specified by `key`.  If the key is not registered yet, a new `SigStat.Common.FeatureDescriptor`1` is automatically created with the given key and type.</sub> | 


#### Features

<sub>Standard set of features.</sub>
```csharp
public static class SigStat.Common.Features

```

###### Static Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IReadOnlyList<FeatureDescriptor>` | <sub>All</sub> | <sub>Returns a readonly list of all `SigStat.Common.FeatureDescriptor`s defined in `SigStat.Common.Features`</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>Altitude</sub> | <sub>Altitude of an online signature as a function of `SigStat.Common.Features.T`</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>Azimuth</sub> | <sub>Azimuth of an online signature as a function of `SigStat.Common.Features.T`</sub> | 
| `FeatureDescriptor<RectangleF>` | <sub>Bounds</sub> | <sub>Actual bounds of the signature</sub> | 
| `FeatureDescriptor<List<Boolean>>` | <sub>Button</sub> | <sub>Pen position of an online signature as a function of `SigStat.Common.Features.T`</sub> | 
| `FeatureDescriptor<Point>` | <sub>Cog</sub> | <sub>Center of gravity in a signature</sub> | 
| `FeatureDescriptor<Int32>` | <sub>Dpi</sub> | <sub>Dots per inch</sub> | 
| `FeatureDescriptor<Image<Rgba32>>` | <sub>Image</sub> | <sub>The visaul representation of a signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>Pressure</sub> | <sub>Pressure of an online signature as a function of `SigStat.Common.Features.T`</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>T</sub> | <sub>Timestamps for online signatures</sub> | 
| `FeatureDescriptor<Rectangle>` | <sub>TrimmedBounds</sub> | <sub>Represents the main body of the signature `SigStat.Common.BasicMetadataExtraction`</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>X</sub> | <sub>X coordinates of an online signature as a function of `SigStat.Common.Features.T`</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>Y</sub> | <sub>Y coordinates of an online signature as a function of `SigStat.Common.Features.T`</sub> | 


#### ILoggerObject

<sub>Represents a type, that contains an ILogger property that can be used to perform logging.</sub>
```csharp
public interface SigStat.Common.ILoggerObject

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `ILogger` | <sub>Logger</sub> | <sub>Gets or sets the ILogger implementation used to perform logging</sub> | 


#### ILoggerObjectExtensions

<sub>ILoggerObject extension methods for common scenarios.</sub>
```csharp
public static class SigStat.Common.ILoggerObjectExtensions

```

###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>LogCritical(this ILoggerObject, String, Object[])</sub> | <sub>Formats and writes an critical error log message.</sub> | 
| `void` | <sub>LogDebug(this ILoggerObject, String, Object[])</sub> | <sub>Formats and writes an debug log message.</sub> | 
| `void` | <sub>LogError(this ILoggerObject, String, Object[])</sub> | <sub>Formats and writes an error log message.</sub> | 
| `void` | <sub>LogError(this ILoggerObject, Exception, String, Object[])</sub> | <sub>Formats and writes an error log message.</sub> | 
| `void` | <sub>LogInformation(this ILoggerObject, String, Object[])</sub> | <sub>Formats and writes an informational log message.</sub> | 
| `void` | <sub>LogTrace(this ILoggerObject, String, Object[])</sub> | <sub>Formats and writes a trace log message.</sub> | 
| `void` | <sub>LogWarning(this ILoggerObject, String, Object[])</sub> | <sub>Formats and writes an warning log message.</sub> | 
| `void` | <sub>LogWarning(this ILoggerObject, Exception, String, Object[])</sub> | <sub>Formats and writes an warning log message.</sub> | 


#### IOExtensions

<sub>Extension methods for common IO operations</sub>
```csharp
public static class SigStat.Common.IOExtensions

```

###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>GetPath(this String)</sub> | <sub>Gets the given relative or absolute path in a platform neutral form</sub> | 


#### ITransformation

<sub>Allows implementing a pipeline transform item capable of logging, progress tracking and IO rewiring.</sub>
```csharp
public interface SigStat.Common.ITransformation
    : IPipelineIO

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub>Executes the transform on the `signature` parameter.  This function gets called by the pipeline.</sub> | 


#### Loop

<sub>Represents a loop in a signature</sub>
```csharp
public class SigStat.Common.Loop

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `RectangleF` | <sub>Bounds</sub> | <sub>The bounding rectangle of the loop</sub> | 
| `PointF` | <sub>Center</sub> | <sub>The geometrical center of the looop</sub> | 
| `List<PointF>` | <sub>Points</sub> | <sub>A list of defining points of the loop</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>ToString()</sub> | <sub>Returns a string representation of the loop</sub> | 


#### MathHelper

<sub>Common mathematical functions used by the SigStat framework</sub>
```csharp
public static class SigStat.Common.MathHelper

```

###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>Median(this IEnumerable<Double>)</sub> | <sub>Calculates the median of the given data series</sub> | 
| `Double` | <sub>Min(Double, Double, Double)</sub> | <sub>Returns the smallest of the three double parameters</sub> | 


#### Origin

<sub>Represents our knowledge on the origin of a signature.</sub>
```csharp
public enum SigStat.Common.Origin
    : Enum, IComparable, IFormattable, IConvertible

```

Enum

| <sub>Value</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `0` | <sub>Unknown</sub> | <sub>Use this in practice before a signature is verified.</sub> | 
| `1` | <sub>Genuine</sub> | <sub>The `SigStat.Common.Signature`'s origin is verified to be from `SigStat.Common.Signature.Signer`</sub> | 
| `2` | <sub>Forged</sub> | <sub>The `SigStat.Common.Signature` is a forgery.</sub> | 


#### PipelineBase

<sub>TODO: Ideiglenes osztaly, C# 8.0 ban ezt atalakitani default implementacios interface be.  ILoggerObject, IProgress, IPipelineIO default implementacioja.</sub>
```csharp
public abstract class SigStat.Common.PipelineBase
    : ILoggerObject, IProgress, IPipelineIO

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `ILogger` | <sub>Logger</sub> | <sub></sub> | 
| `List<PipelineInput>` | <sub>PipelineInputs</sub> | <sub>A collection of inputs for the pipeline elements</sub> | 
| `List<PipelineOutput>` | <sub>PipelineOutputs</sub> | <sub>A collection of outputs for the pipeline elements</sub> | 
| `Int32` | <sub>Progress</sub> | <sub></sub> | 


###### Events

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `EventHandler<Int32>` | <sub>ProgressChanged</sub> | <sub>The event is raised whenever the value of `SigStat.Common.PipelineBase.Progress` changes</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>OnProgressChanged()</sub> | <sub>Raises the `SigStat.Common.PipelineBase.ProgressChanged` event</sub> | 


#### Result

<sub>Contains the benchmark results of a single `SigStat.Common.Signer`</sub>
```csharp
public class SigStat.Common.Result

```

###### Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>Aer</sub> | <sub>Average Error Rate</sub> | 
| `Double` | <sub>Far</sub> | <sub>False Acceptance Rate</sub> | 
| `Double` | <sub>Frr</sub> | <sub>False Rejection Rate</sub> | 
| `ISignerModel` | <sub>Model</sub> | <sub></sub> | 
| `String` | <sub>Signer</sub> | <sub>Identifier of the `SigStat.Common.Result.Signer`</sub> | 


#### Sampler

<sub>Takes samples from a set of `SigStat.Common.Signature`s by given sampling strategies.  Use this to fine-tune the `SigStat.Common.VerifierBenchmark`</sub>
```csharp
public class SigStat.Common.Sampler

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Func<List<Signature>, List<Signature>>` | <sub>ForgeryTestFilter</sub> | <sub></sub> | 
| `Func<List<Signature>, List<Signature>>` | <sub>GenuineTestFilter</sub> | <sub></sub> | 
| `Func<List<Signature>, List<Signature>>` | <sub>TrainingFilter</sub> | <sub></sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<Signature>` | <sub>SampleForgeryTests(List<Signature>)</sub> | <sub>Samples a batch of forged signatures to test on.</sub> | 
| `List<Signature>` | <sub>SampleGenuineTests(List<Signature>)</sub> | <sub>Samples a batch of genuine test signatures to test on.</sub> | 
| `List<Signature>` | <sub>SampleReferences(List<Signature>)</sub> | <sub>Samples a batch of genuine reference signatures to train on.</sub> | 


#### Signature

<sub>Represents a signature as a collection of features, containing the data that flows in the pipeline.</sub>
```csharp
public class SigStat.Common.Signature
    : IEnumerable<KeyValuePair<FeatureDescriptor, Object>>, IEnumerable

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>ID</sub> | <sub>An identifier for the Signature. Keep it unique to be useful for logs.</sub> | 
| `Object` | <sub>Item</sub> | <sub>Gets or sets the specified feature.</sub> | 
| `Object` | <sub>Item</sub> | <sub>Gets or sets the specified feature.</sub> | 
| `Origin` | <sub>Origin</sub> | <sub>Represents our knowledge on the origin of the signature. `SigStat.Common.Origin.Unknown` may be used in practice before it is verified.</sub> | 
| `Signer` | <sub>Signer</sub> | <sub>A reference to the `SigStat.Common.Signer` who this signature belongs to. (The origin is not constrained to be genuine.)</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<Double[]>` | <sub>GetAggregateFeature(List<FeatureDescriptor>)</sub> | <sub>Aggregate multiple features into one. Example: X, Y features -&gt; P.xy feature.  Use this for example at DTW algorithm input.</sub> | 
| `IEnumerator<KeyValuePair<FeatureDescriptor, Object>>` | <sub>GetEnumerator()</sub> | <sub>Returns an enumerator that iterates through the features.</sub> | 
| `T` | <sub>GetFeature(String)</sub> | <sub>Gets the specified feature.</sub> | 
| `T` | <sub>GetFeature(FeatureDescriptor<T>)</sub> | <sub>Gets the specified feature.</sub> | 
| `T` | <sub>GetFeature(FeatureDescriptor)</sub> | <sub>Gets the specified feature.</sub> | 
| `IEnumerable<FeatureDescriptor>` | <sub>GetFeatureDescriptors()</sub> | <sub>Gets a collection of `SigStat.Common.FeatureDescriptor`s that are used in this signature.</sub> | 
| `Boolean` | <sub>HasFeature(FeatureDescriptor)</sub> | <sub>Returns true if the signature contains the specified feature</sub> | 
| `Boolean` | <sub>HasFeature(String)</sub> | <sub>Returns true if the signature contains the specified feature</sub> | 
| `Signature` | <sub>SetFeature(FeatureDescriptor, T)</sub> | <sub>Sets the specified feature.</sub> | 
| `Signature` | <sub>SetFeature(String, T)</sub> | <sub>Sets the specified feature.</sub> | 
| `String` | <sub>ToString()</sub> | <sub>Returns a string representation of the signature</sub> | 


#### Signer

<sub>Represents a person as a `SigStat.Common.Signer.ID` and a list of `SigStat.Common.Signer.Signatures`.</sub>
```csharp
public class SigStat.Common.Signer

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>ID</sub> | <sub>An identifier for the Signer. Keep it unique to be useful for logs.</sub> | 
| `List<Signature>` | <sub>Signatures</sub> | <sub>List of signatures that belong to the signer.  (Their origin is not constrained to be genuine.)</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>ToString()</sub> | <sub>Returns a string representation of a Signer</sub> | 


#### SigStatEvents

<sub>Standard event identifiers used by the SigStat system</sub>
```csharp
public static class SigStat.Common.SigStatEvents

```

###### Static Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `EventId` | <sub>BenchmarkEvent</sub> | <sub>Events originating from a benchmark</sub> | 
| `EventId` | <sub>VerifierEvent</sub> | <sub>Events originating from a verifier</sub> | 


#### SimpleRenderingTransformation

<sub>Renders an image of the signature based on the available online information (X,Y,Dpi)</sub>
```csharp
public class SigStat.Common.SimpleRenderingTransformation
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### StrokeHelper

<sub>Helper class for locating and manipulating strokes in an online signature</sub>
```csharp
public static class SigStat.Common.StrokeHelper

```

###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<StrokeInterval>` | <sub>GetStrokes(this Signature)</sub> | <sub>Gets the strokes from an online signature with standard features. Note that  the signature has to contain `SigStat.Common.Features.T` and `SigStat.Common.Features.Pressure`</sub> | 


#### StrokeInterval

<sub>Represents a stroke in an online signature</sub>
```csharp
public class SigStat.Common.StrokeInterval

```

###### Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Int32` | <sub>EndIndex</sub> | <sub>The index of the last element</sub> | 
| `Int32` | <sub>StartIndex</sub> | <sub>The index of the firs element</sub> | 
| `StrokeType` | <sub>StrokeType</sub> | <sub>The `SigStat.Common.StrokeInterval.StrokeType` of the stroke.</sub> | 


#### StrokeType

<sub>Describes the type of a stroke</sub>
```csharp
public enum SigStat.Common.StrokeType
    : Enum, IComparable, IFormattable, IConvertible

```

Enum

| <sub>Value</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `0` | <sub>Unknown</sub> | <sub>The type of the stroke is not known</sub> | 
| `1` | <sub>Up</sub> | <sub>The stroke was made in the air (the pen did not tuch the tablet/paper)</sub> | 
| `2` | <sub>Down</sub> | <sub>The stroke was made on the writing surface (tablet, paper etc.)</sub> | 


#### VerifierBenchmark

<sub>Benchmarking class to test error rates of a `SigStat.Common.Model.Verifier`</sub>
```csharp
public class SigStat.Common.VerifierBenchmark
    : ILoggerObject

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IDataSetLoader` | <sub>Loader</sub> | <sub>The loader that will provide the database for benchmarking</sub> | 
| `ILogger` | <sub>Logger</sub> | <sub>Gets or sets the attached `Microsoft.Extensions.Logging.ILogger` object used to log messages. Hands it over to the verifier.</sub> | 
| `List<KeyValuePair<String, String>>` | <sub>Parameters</sub> | <sub>A key value store that can be used to store custom information about the benchmark</sub> | 
| `Int32` | <sub>Progress</sub> | <sub></sub> | 
| `Sampler` | <sub>Sampler</sub> | <sub>The `SigStat.Common.Sampler` to be used for benchmarking</sub> | 
| `Verifier` | <sub>Verifier</sub> | <sub>Gets or sets the `SigStat.Common.Model.Verifier` to be benchmarked.</sub> | 


###### Events

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `EventHandler<Int32>` | <sub>ProgressChanged</sub> | <sub></sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Dump(String, IEnumerable<KeyValuePair<String, String>>)</sub> | <sub>Dumps the results of the benchmark in a file.</sub> | 
| `BenchmarkResults` | <sub>Execute(Boolean = True)</sub> | <sub>Execute the benchmarking process.</sub> | 
| `BenchmarkResults` | <sub>Execute(Int32)</sub> | <sub>Execute the benchmarking process.</sub> | 


