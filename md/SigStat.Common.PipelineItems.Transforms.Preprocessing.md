#### CubicInterpolation

<sub>Cubic interpolation algorithm</sub>
```csharp
public class SigStat.Common.PipelineItems.Transforms.Preprocessing.CubicInterpolation
    : IInterpolation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<Double>` | <sub>FeatureValues</sub> | <sub>FeatureValues</sub> | 
| `List<Double>` | <sub>TimeValues</sub> | <sub>TimeValues</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>GetValue(Double)</sub> | <sub>Gets the value.</sub> | 


#### FillPenUpDurations

<sub>This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.</sub>
```csharp
public class SigStat.Common.PipelineItems.Transforms.Preprocessing.FillPenUpDurations
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<FeatureDescriptor<List<Double>>>` | <sub>InputFeatures</sub> | <sub>Gets or sets the features of an online signature that need to be altered</sub> | 
| `Type` | <sub>InterpolationType</sub> | <sub>An implementation of `SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation`</sub> | 
| `List<FeatureDescriptor<List<Double>>>` | <sub>OutputFeatures</sub> | <sub>Gets or sets the features of an online signature that were altered</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>TimeInputFeature</sub> | <sub>Gets or sets the feature representing the timestamps of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>TimeOutputFeature</sub> | <sub>Gets or sets the feature representing the modified timestamps of an online signature</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### FilterPoints

<sub>Removes samples based on a criteria from online signature time series</sub>
```csharp
public class SigStat.Common.PipelineItems.Transforms.Preprocessing.FilterPoints
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<FeatureDescriptor<List<Double>>>` | <sub>InputFeatures</sub> | <sub>`SigStat.Common.FeatureDescriptor` list of all features to resample</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>KeyFeatureInput</sub> | <sub>`SigStat.Common.FeatureDescriptor` that controls the removal of samples (e.g. `SigStat.Common.Features.Pressure`)</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>KeyFeatureOutput</sub> | <sub>Resampled output for `SigStat.Common.FeatureDescriptor` that controls the removal of samples (e.g. `SigStat.Common.Features.Pressure`)</sub> | 
| `List<FeatureDescriptor<List<Double>>>` | <sub>OutputFeatures</sub> | <sub>Resampled output for all input features</sub> | 
| `Int32` | <sub>Percentile</sub> | <sub>The lowes percentile of the `SigStat.Common.PipelineItems.Transforms.Preprocessing.FilterPoints.KeyFeatureInput` will be removed during filtering</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### IInterpolation

<sub>Represents an interploation algorithm</sub>
```csharp
public interface SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<Double>` | <sub>FeatureValues</sub> | <sub>Gets or sets the feature values.</sub> | 
| `List<Double>` | <sub>TimeValues</sub> | <sub>Timestamps</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>GetValue(Double)</sub> | <sub>Gets the interpolated value at a given timestamp</sub> | 


#### LinearInterpolation

<sub>Performs linear interpolation on the input</sub>
```csharp
public class SigStat.Common.PipelineItems.Transforms.Preprocessing.LinearInterpolation
    : IInterpolation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<Double>` | <sub>FeatureValues</sub> | <sub></sub> | 
| `List<Double>` | <sub>TimeValues</sub> | <sub></sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>GetValue(Double)</sub> | <sub>Gets the interpolated value at a given timestamp</sub> | 


#### NormalizeRotation

<sub>Performs rotation normalization on the online signature</sub>
```csharp
public class SigStat.Common.PipelineItems.Transforms.Preprocessing.NormalizeRotation
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Double>>` | <sub>InputT</sub> | <sub>Gets or sets the input feature representing the timestamps of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>InputX</sub> | <sub>Gets or sets the input feature representing the X coordinates of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>InputY</sub> | <sub>Gets or sets the input feature representing the Y coordinates of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>OutputX</sub> | <sub>Gets or sets the output feature representing the X coordinates of an online signature</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>OutputY</sub> | <sub>Gets or sets the input feature representing the Y coordinates of an online signature</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### OriginType

<sub>Origin specification for `SigStat.Common.PipelineItems.Transforms.Preprocessing.TranslatePreproc`</sub>
```csharp
public enum SigStat.Common.PipelineItems.Transforms.Preprocessing.OriginType
    : Enum, IComparable, IFormattable, IConvertible

```

Enum

| <sub>Value</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `0` | <sub>CenterOfGravity</sub> | <sub>Center of gravity</sub> | 
| `1` | <sub>Minimum</sub> | <sub>Minimum</sub> | 
| `2` | <sub>Maximum</sub> | <sub>Maximum</sub> | 
| `3` | <sub>Predefined</sub> | <sub>Predefined</sub> | 


#### RelativeScale

<sub>Maps values of a feature to a specific range.  <para>InputFeature: feature to be scaled.</para><para>OutputFeature: output feature for scaled InputFeature&gt;</para></sub>
```csharp
public class SigStat.Common.PipelineItems.Transforms.Preprocessing.RelativeScale
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Double>>` | <sub>InputFeature</sub> | <sub>Gets or sets the input feature.</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>OutputFeature</sub> | <sub>Gets or sets the output feature.</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>ReferenceFeature</sub> | <sub>Gets or sets the reference feature.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### ResampleSamplesCountBased

<sub>Resamples an online signature to a specific sample count using the specified `SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation` algorithm</sub>
```csharp
public class SigStat.Common.PipelineItems.Transforms.Preprocessing.ResampleSamplesCountBased
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<FeatureDescriptor<List<Double>>>` | <sub>InputFeatures</sub> | <sub>Gets or sets the input features.</sub> | 
| `Type` | <sub>InterpolationType</sub> | <sub>Gets or sets the type of the interpolation. <seealso cref="T:SigStat.Common.PipelineItems.Transforms.Preprocessing.IInterpolation" /></sub> | 
| `Int32` | <sub>NumOfSamples</sub> | <sub>Gets or sets the number of samples.</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>OriginalTFeature</sub> | <sub>Gets or sets the input timestamp feature.</sub> | 
| `List<FeatureDescriptor<List<Double>>>` | <sub>OutputFeatures</sub> | <sub>Gets or sets the resampled  features.</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>ResampledTFeature</sub> | <sub>Gets or sets the resampled timestamp feature.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### Scale

<sub>Maps values of a feature to a specific range.  <para>InputFeature: feature to be scaled.</para><para>OutputFeature: output feature for scaled InputFeature&gt;</para></sub>
```csharp
public class SigStat.Common.PipelineItems.Transforms.Preprocessing.Scale
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Double>>` | <sub>InputFeature</sub> | <sub>Gets or sets the input feature.</sub> | 
| `Double` | <sub>NewMaxValue</sub> | <sub><para>NewMaxValue: upper bound of the interval, in which the input feature will be scaled</para></sub> | 
| `Double` | <sub>NewMinValue</sub> | <sub><para>NewMinValue: lower bound of the interval, in which the input feature will be scaled</para></sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>OutputFeature</sub> | <sub>Gets or sets the output feature.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### TranslatePreproc

<sub>This transformations can be used to translate the coordinates of an online signature</sub>
```csharp
public class SigStat.Common.PipelineItems.Transforms.Preprocessing.TranslatePreproc
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `OriginType` | <sub>GoalOrigin</sub> | <sub>Goal origin of the translation</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>InputFeature</sub> | <sub>Input `SigStat.Common.FeatureDescriptor` (e.g. `SigStat.Common.Features.X`)</sub> | 
| `Double` | <sub>NewOrigin</sub> | <sub>New origin after the translation</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>OutputFeature</sub> | <sub>Output `SigStat.Common.FeatureDescriptor` (e.g. `SigStat.Common.Features.X`)</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


#### UniformScale

<sub>Maps values of a feature to a specific range and another proportional.  <para>BaseDimension: feature modelled the base dimension of the scaling. </para><para>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. </para><para>BaseDimensionOutput: output feature for scaled BaseDimension&gt;</para><para>ProportionalDimensionOutput: output feature for scaled ProportionalDimension&gt;</para></sub>
```csharp
public class SigStat.Common.PipelineItems.Transforms.Preprocessing.UniformScale
    : PipelineBase, ILoggerObject, IProgress, IPipelineIO, ITransformation

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor<List<Double>>` | <sub>BaseDimension</sub> | <sub>Gets or sets the base dimension.</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>BaseDimensionOutput</sub> | <sub>Gets or sets the output base dimension output.</sub> | 
| `Double` | <sub>NewMaxBaseValue</sub> | <sub>Upper bound of the interval, in which the base dimension will be scaled</sub> | 
| `Double` | <sub>NewMinBaseValue</sub> | <sub>Lower bound of the interval, in which the base dimension will be scaled</sub> | 
| `Double` | <sub>NewMinProportionalValue</sub> | <sub>Lower bound of the interval, in which the proportional dimension will be scaled</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>ProportionalDimension</sub> | <sub>Gets or sets the ProportionalDimension.</sub> | 
| `FeatureDescriptor<List<Double>>` | <sub>ProportionalDimensionOutput</sub> | <sub>Gets or sets the output proportional dimension output.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Transform(Signature)</sub> | <sub></sub> | 


