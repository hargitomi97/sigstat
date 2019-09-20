#### AddConst

<sub>Adds a constant value to a feature. Works with collection features too.  <para>Default Pipeline Output: Pipeline Input</para></sub>
```csharp
public class SigStat.Common.Transforms.AddConst
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Double>>` | <sub>Input</sub> | <sub>Input values for trasformation</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>Output</sub> | <sub>Output feature to store results</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### AddVector

<sub>Adds a vector feature's elements to other features.  <para>Default Pipeline Output: Pipeline Input</para></sub>
```csharp
public class SigStat.Common.Transforms.AddVector
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<FeatureDescriptor<List<Double>>>` | <sub>Inputs</sub> | <sub>Inputs</sub> | 
| `List<FeatureDescriptor<List<Double>>>` | <sub>Outputs</sub> | <sub>Outputs</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### ApproximateOnlineFeatures

<sub>init Pressure, Altitude, Azimuth features with default values.  <para>Default Pipeline Output: Features.Pressure, Features.Altitude, Features.Azimuth</para></sub>
```csharp
public class SigStat.Common.Transforms.ApproximateOnlineFeatures
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### Binarization

<sub>Generates a binary raster version of the input image with the iterative threshold method.  <para>Pipeline Input type: Image{Rgba32}</para><para>Default Pipeline Output: (bool[,]) Binarized</para></sub>
```csharp
public class SigStat.Common.Transforms.Binarization
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<Image<Rgba32>>` | <sub>InputImage</sub> | <sub>Gets or sets the featuredescriptor of the input image.</sub> | 
| `FeatureDescriptor<Boolean[,]>` | <sub>OutputMask</sub> | <sub>Gets or sets the featuredescriptor of a the binarized image.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### BinaryRasterizer

<sub>Converts standard features to a binary raster.  <para>Default Pipeline Input: Standard `SigStat.Common.Features`</para><para>Default Pipeline Output: (bool[,]) Binarized</para></sub>
```csharp
public class SigStat.Common.Transforms.BinaryRasterizer
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Boolean>>` | <sub>InputButton</sub> | <sub>Gets or sets the `SigStat.Common.FeatureDescriptor` representing the stroke endings of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>InputX</sub> | <sub>Gets or sets the `SigStat.Common.FeatureDescriptor` representing the X coordinates of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>InputY</sub> | <sub>Gets or sets the `SigStat.Common.FeatureDescriptor` representing the Y coordinates of an online signature</sub> | 
| `FeatureDescriptor<Boolean[,]>` | <sub>Output</sub> | <sub>Gets or sets the `SigStat.Common.FeatureDescriptor` representing the output of the transformation</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### CentroidExtraction

<sub>Extracts the Centroid (aka. Center Of Gravity) of the input features.  <para> Default Pipeline Output: (List{double}) Centroid. </para></sub>
```csharp
public class SigStat.Common.Transforms.CentroidExtraction
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<FeatureDescriptor<List<Double>>>` | <sub>Inputs</sub> | <sub>List of features to process</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>OutputCentroid</sub> | <sub>List of centroid values</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### CentroidTranslate

<sub>Sequential pipeline to translate X and Y `SigStat.Common.Features` to Centroid.  The following Transforms are called: `SigStat.Common.Transforms.CentroidExtraction`, `SigStat.Common.Transforms.Multiply`(-1), `SigStat.Common.Transforms.Translate`<para>Default Pipeline Input: `SigStat.Common.Features.X`, `SigStat.Common.Features.Y`</para><para>Default Pipeline Output: (List{double}) Centroid</para></sub>
```csharp
public class SigStat.Common.Transforms.CentroidTranslate
    : SequentialTransformPipeline, ILoggerObject, IProgress, IPipelineIO, IEnumerable, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Double>>` | <sub>InputX</sub> | <sub>Gets or sets the input feature representing the X coordinates of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>InputY</sub> | <sub>Gets or sets the input feature representing the Y coordinates of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>OutputX</sub> | <sub>Gets or sets the output feature representing the X coordinates of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>OutputY</sub> | <sub>Gets or sets the output feature representing the X coordinates of an online signature</sub> | 


#### ComponentExtraction

<sub>Extracts unsorted components by tracing through the binary Skeleton raster.  <para>Default Pipeline Input: (bool[,]) Skeleton, (List{Point}) EndPoints, (List{Point}) CrossingPoints</para><para>Default Pipeline Output: (List{List{PointF}}) Components</para></sub>
```csharp
public class SigStat.Common.Transforms.ComponentExtraction
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Point>>` | <sub>CrossingPoints</sub> | <sub>crossing points</sub> | 
| `FeatureDescriptor<List<Point>>` | <sub>EndPoints</sub> | <sub>endpoints</sub> | 
| `FeatureDescriptor<List<List<PointF>>>` | <sub>OutputComponents</sub> | <sub>Output components</sub> | 
| `FeatureDescriptor<Boolean[,]>` | <sub>Skeleton</sub> | <sub>binary representation of a signature image</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### ComponentSorter

<sub>Sorts Component order by comparing each starting X value, and finding nearest components.  <para>Default Pipeline Input: (bool[,]) Components</para><para>Default Pipeline Output: (bool[,]) Components</para></sub>
```csharp
public class SigStat.Common.Transforms.ComponentSorter
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<List<PointF>>>` | <sub>Input</sub> | <sub>Gets or sets the input.</sub> | 
| `FeatureDescriptor<List<List<PointF>>>` | <sub>Output</sub> | <sub>Gets or sets the output.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### ComponentsToFeatures

<sub>Extracts standard `SigStat.Common.Features` from sorted Components.  <para>Default Pipeline Input: (List{List{PointF}}) Components</para><para>Default Pipeline Output: X, Y, Button `SigStat.Common.Features`</para></sub>
```csharp
public class SigStat.Common.Transforms.ComponentsToFeatures
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Boolean>>` | <sub>Button</sub> | <sub>Button</sub> | 
| `FeatureDescriptor<List<List<PointF>>>` | <sub>InputComponents</sub> | <sub>Components</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>X</sub> | <sub>X</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>Y</sub> | <sub>Y</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### EndpointExtraction

<sub>Extracts EndPoints and CrossingPoints from Skeleton.  <para>Default Pipeline Input: (bool[,]) Skeleton</para><para>Default Pipeline Output: (List{Point}) EndPoints, (List{Point}) CrossingPoints </para></sub>
```csharp
public class SigStat.Common.Transforms.EndpointExtraction
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Point>>` | <sub>OutputCrossingPoints</sub> | <sub>OutputCrossingPoints</sub> | 
| `FeatureDescriptor<List<Point>>` | <sub>OutputEndpoints</sub> | <sub>OutputEndpoints</sub> | 
| `FeatureDescriptor<Boolean[,]>` | <sub>Skeleton</sub> | <sub>Binary representation of an image</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### Extrema

<sub>Extracts minimum and maximum values of given feature.  <para>Default Pipeline Output: (List{double}) Min, (List{double}) Max </para></sub>
```csharp
public class SigStat.Common.Transforms.Extrema
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### HSCPThinning

<sub>Iteratively thins the input binary raster with the `SigStat.Common.Algorithms.HSCPThinningStep` algorithm.  <para>Pipeline Input type: bool[,]</para><para>Default Pipeline Output: (bool[,]) HSCPThinningResult </para></sub>
```csharp
public class SigStat.Common.Transforms.HSCPThinning
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<Boolean[,]>` | <sub>Input</sub> | <sub>Input `SigStat.Common.FeatureDescriptor` for the binary image of the signature</sub> | 
| `FeatureDescriptor<Boolean[,]>` | <sub>Output</sub> | <sub>Output `SigStat.Common.FeatureDescriptor` for the binary image of the signature</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### ImageGenerator

<sub>Generates an image feature out of a binary raster.  Optionally, saves the image to a png file.  Useful for debugging pipeline steps.  <para>Pipeline Input type: bool[,]</para><para>Default Pipeline Output: (bool[,]) Input, (Image{Rgba32}) InputImage</para></sub>
```csharp
public class SigStat.Common.Transforms.ImageGenerator
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Rgba32` | <sub>BackgroundColor</sub> | <sub>Gets or sets the color of the backgroung used to render the signature</sub> | 
| `Rgba32` | <sub>ForegroundColor</sub> | <sub>Gets or sets the color of the foreground used to render the signature</sub> | 
| `FeatureDescriptor<Boolean[,]>` | <sub>Input</sub> | <sub>Input `SigStat.Common.FeatureDescriptor` for the binary image of a signature</sub> | 
| `FeatureDescriptor<Image<Rgba32>>` | <sub>OutputImage</sub> | <sub>Input `SigStat.Common.FeatureDescriptor` for the binary image of a signature</sub> | 
| `Boolean` | <sub>WriteToFile</sub> | <sub>Gets or sets a value indicating whether the results should be saved to a file or not.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### Map

<sub>Maps values of a feature to a specified range.  <para>Pipeline Input type: List{double}</para><para>Default Pipeline Output: (List{double}) MapResult</para></sub>
```csharp
public class SigStat.Common.Transforms.Map
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Double>>` | <sub>Input</sub> | <sub>Input</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>Output</sub> | <sub>Output</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### Multiply

<sub>Multiplies the values of a feature with a given constant.  <para>Pipeline Input type: List{double}</para><para>Default Pipeline Output: (List{double}) Input</para></sub>
```csharp
public class SigStat.Common.Transforms.Multiply
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Double>>` | <sub>InputList</sub> | <sub>Input</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>Output</sub> | <sub>Output</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### Normalize

<sub>Maps values of a feature to 0.0 - 1.0 range.  <para>Pipeline Input type: List{double}</para><para>Default Pipeline Output: (List{double}) NormalizationResult</para></sub>
```csharp
public class SigStat.Common.Transforms.Normalize
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Double>>` | <sub>Input</sub> | <sub>Input</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>Output</sub> | <sub>Output</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### OnePixelThinning

<sub>Iteratively thins the input binary raster with the `SigStat.Common.Algorithms.OnePixelThinningStep` algorithm.  <para>Pipeline Input type: bool[,]</para><para>Default Pipeline Output: (bool[,]) OnePixelThinningResult </para></sub>
```csharp
public class SigStat.Common.Transforms.OnePixelThinning
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<Boolean[,]>` | <sub>Input</sub> | <sub>Input `SigStat.Common.FeatureDescriptor` for the binary image of the signature</sub> | 
| `FeatureDescriptor<Boolean[,]>` | <sub>Output</sub> | <sub>Output `SigStat.Common.FeatureDescriptor` for the binary image of the signature</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### RealisticImageGenerator

<sub>Generates a realistic looking image of the Signature based on standard features. Uses blue ink and white paper. It does NOT save the image to file.  <para>Default Pipeline Input: X, Y, Button, Pressure, Azimuth, Altitude `SigStat.Common.Features`</para><para>Default Pipeline Output: `SigStat.Common.Features.Image`</para></sub>
```csharp
public class SigStat.Common.Transforms.RealisticImageGenerator
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### Resize

<sub>Resizes the image to a specified width and height</sub>
```csharp
public class SigStat.Common.Transforms.Resize
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Nullable<Int32>` | <sub>Height</sub> | <sub>The new height. Leave it as null, if you do not want to explicitly specify a given height</sub> | 
| `FeatureDescriptor<Image<Rgba32>>` | <sub>InputImage</sub> | <sub>Input `SigStat.Common.FeatureDescriptor` describing the image of the signature</sub> | 
| `FeatureDescriptor<Image<Rgba32>>` | <sub>OutputImage</sub> | <sub>Output `SigStat.Common.FeatureDescriptor` describing the resized image of the signature</sub> | 
| `Func<Image<Rgba32>, Size>` | <sub>ResizeFunction</sub> | <sub>Set a resize function if you want to dynamically calculate the new width and height of the image</sub> | 
| `Nullable<Int32>` | <sub>Width</sub> | <sub>The new width. Leave it as null, if you do not want to explicitly specify a given width</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### TangentExtraction

<sub>Extracts tangent values of the standard X, Y `SigStat.Common.Features`<para>Default Pipeline Input: X, Y `SigStat.Common.Features`</para><para>Default Pipeline Output: (List{double})  Tangent </para></sub>
```csharp
public class SigStat.Common.Transforms.TangentExtraction
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Double>>` | <sub>OutputTangent</sub> | <sub>Gets or sets the output feature representing the tangent angles of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>X</sub> | <sub>Gets or sets the input feature representing the X coordinates of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>Y</sub> | <sub>Gets or sets the input feature representing the Y coordinates of an online signature</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### TimeReset

<sub>Sequential pipeline to reset time values to begin at 0.  The following Transforms are called: Extrema, Multiply, AddVector.  <para>Default Pipeline Input: `SigStat.Common.Features.T`</para><para>Default Pipeline Output: `SigStat.Common.Features.T`</para></sub>
```csharp
public class SigStat.Common.Transforms.TimeReset
    : SequentialTransformPipeline, ILoggerObject, IProgress, IPipelineIO, IEnumerable, ITransformation

```

#### Translate

<sub>Sequential pipeline to translate X and Y `SigStat.Common.Features` by specified vector (constant or feature).  The following Transforms are called: `SigStat.Common.Transforms.AddConst` twice, or `SigStat.Common.Transforms.AddVector`.  <para>Default Pipeline Input: `SigStat.Common.Features.X`, `SigStat.Common.Features.Y`</para><para>Default Pipeline Output: `SigStat.Common.Features.X`, `SigStat.Common.Features.Y`</para></sub>
```csharp
public class SigStat.Common.Transforms.Translate
    : SequentialTransformPipeline, ILoggerObject, IProgress, IPipelineIO, IEnumerable, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Double>>` | <sub>InputX</sub> | <sub>The feature representing the horizontal coordinates of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>InputY</sub> | <sub>The feature representing the vertical coordinates of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>OutputX</sub> | <sub>Target feature for storing the transformed horizontal coordinates</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>OutputY</sub> | <sub>Target feature for storing the transformed vertical coordinates</sub> | 


#### Trim

<sub>Trims unnecessary empty space from a binary raster.  <para>Pipeline Input type: bool[,]</para><para>Default Pipeline Output: (bool[,]) Trimmed</para></sub>
```csharp
public class SigStat.Common.Transforms.Trim
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<Boolean[,]>` | <sub>Input</sub> | <sub>Input `SigStat.Common.FeatureDescriptor` describing the image of the signature</sub> | 
| `FeatureDescriptor<Boolean[,]>` | <sub>Output</sub> | <sub>Output `SigStat.Common.FeatureDescriptor` describing the trimed image of the signature</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


