# [API](./README.md)

## Summary
This is the root summary

## Namespaces

### [SigStat.Common](./SigStat/Common/README.md)

- [`ArrayExtension`](./SigStat/Common/ArrayExtension.md)
	- <sub>Helper methods for processing arrays</sub>
- [`Baseline`](./SigStat/Common/Baseline.md)
	- <sub></sub>
- [`BasicMetadataExtraction`](./SigStat/Common/BasicMetadataExtraction.md)
	- <sub>Extracts basic statistical signature (like [Features.Bounds](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) or [Features.Cog](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)) information from an Image</sub>
- [`BenchmarkResults`](./SigStat/Common/BenchmarkResults.md)
	- <sub>Contains the benchmark results of every [Signer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md) and the summarized final results.</sub>
- [`DistanceMatrix`](./SigStat/Common/DistanceMatrix-3.md)\<[`TRowKey`](./README.md), [`TColumnKey`](./README.md), [`TValue`](./README.md)>
	- <sub>A Sparse Matrix representation of a distance graph.</sub>
- [`ErrorRate`](./SigStat/Common/ErrorRate.md)
	- <sub>Represents the ErrorRates achieved in a benchmark</sub>
- [`FeatureDescriptor`](./SigStat/Common/FeatureDescriptor.md)
	- <sub>Represents a feature with name and type.</sub>
- [`FeatureDescriptor`](./SigStat/Common/FeatureDescriptor-1.md)\<[`T`](./README.md)>
	- <sub>Represents a feature with the type `T`</sub>
- [`Features`](./SigStat/Common/Features.md)
	- <sub>Standard set of features.</sub>
- [`ILoggerObject`](./SigStat/Common/ILoggerObject.md)
	- <sub>Represents a type, that contains an ILogger property that can be used to perform logging.</sub>
- [`ILoggerObjectExtensions`](./SigStat/Common/ILoggerObjectExtensions.md)
	- <sub>ILoggerObject extension methods for common scenarios.</sub>
- [`IOExtensions`](./SigStat/Common/IOExtensions.md)
	- <sub>Extension methods for common IO operations</sub>
- [`ITransformation`](./SigStat/Common/ITransformation.md)
	- <sub>Allows implementing a pipeline transform item capable of logging, progress tracking and IO rewiring.</sub>
- [`Loop`](./SigStat/Common/Loop.md)
	- <sub>Represents a loop in a signature</sub>
- [`MathHelper`](./SigStat/Common/MathHelper.md)
	- <sub>Common mathematical functions used by the SigStat framework</sub>
- [`PipelineBase`](./SigStat/Common/PipelineBase.md)
	- <sub>TODO: Ideiglenes osztaly, C# 8.0 ban ezt atalakitani default implementacios interface be.  ILoggerObject, IProgress, IPipelineIO default implementacioja.</sub>
- [`Result`](./SigStat/Common/Result.md)
	- <sub>Contains the benchmark results of a single [Signer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md)</sub>
- [`Sampler`](./SigStat/Common/Sampler.md)
	- <sub>Takes samples from a set of [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md)s by given sampling strategies.  Use this to fine-tune the [VerifierBenchmark](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/VerifierBenchmark.md)</sub>
- [`Signature`](./SigStat/Common/Signature.md)
	- <sub>Represents a signature as a collection of features, containing the data that flows in the pipeline.</sub>
- [`Signer`](./SigStat/Common/Signer.md)
	- <sub>Represents a person as an [Signer.ID](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md) and a list of [Signer.Signatures](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md).</sub>
- [`SigStatEvents`](./SigStat/Common/SigStatEvents.md)
	- <sub>Standard event identifiers used by the SigStat system</sub>
- [`SimpleRenderingTransformation`](./SigStat/Common/SimpleRenderingTransformation.md)
	- <sub>Renders an image of the signature based on the available online information (X,Y,Dpi)</sub>
- [`StrokeHelper`](./SigStat/Common/StrokeHelper.md)
	- <sub>Helper class for locating and manipulating strokes in an online signature</sub>
- [`StrokeInterval`](./SigStat/Common/StrokeInterval.md)
	- <sub>Represents a stroke in an online signature</sub>
- [`VerifierBenchmark`](./SigStat/Common/VerifierBenchmark.md)
	- <sub>Benchmarking class to test error rates of a [Model.Verifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Model/Verifier.md)</sub>
### [SigStat.Common.Pipeline](./SigStat/Common/Pipeline/README.md)

- [`IClassifier`](./SigStat/Common/Pipeline/IClassifier.md)
	- <sub>Trains classification models based on reference signatures</sub>
- [`IDistanceClassifier`](./SigStat/Common/Pipeline/IDistanceClassifier.md)
	- <sub>Trains classification models based on reference signatures, by calculating the distances between signature pairs</sub>
- [`Input`](./SigStat/Common/Pipeline/Input.md)
	- <sub>Annotates an input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) in a transformation pipeline</sub>
- [`IPipelineIO`](./SigStat/Common/Pipeline/IPipelineIO.md)
	- <sub>Supports the definition of [Pipeline.PipelineInput](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Pipeline/PipelineInput.md) and [Pipeline.PipelineOutput](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Pipeline/PipelineOutput.md)</sub>
- [`ISignerModel`](./SigStat/Common/Pipeline/ISignerModel.md)
	- <sub>Analyzes signatures based on their similiarity to the trained model</sub>
- [`Output`](./SigStat/Common/Pipeline/Output.md)
	- <sub>Annotates an output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) in a transformation pipeline</sub>
- [`ParallelTransformPipeline`](./SigStat/Common/Pipeline/ParallelTransformPipeline.md)
	- <sub>Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.</sub>
- [`PipelineInput`](./SigStat/Common/Pipeline/PipelineInput.md)
	- <sub>Represents an input for a [Pipeline.PipelineInput.PipelineItem](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md)</sub>
- [`PipelineOutput`](./SigStat/Common/Pipeline/PipelineOutput.md)
	- <sub>Represents an output for a [Pipeline.PipelineOutput.PipelineItem](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md)</sub>
- [`SequentialTransformPipeline`](./SigStat/Common/Pipeline/SequentialTransformPipeline.md)
	- <sub>Runs pipeline items in a sequence.  <br>Default Pipeline Output: Output of the last Item in the sequence.</sub>
### [SigStat.Common.Transforms](./SigStat/Common/Transforms/README.md)

- [`AddConst`](./SigStat/Common/Transforms/AddConst.md)
	- <sub>Adds a constant value to a feature. Works with collection features too.  <br>Default Pipeline Output: Pipeline Input</sub>
- [`AddVector`](./SigStat/Common/Transforms/AddVector.md)
	- <sub>Adds a vector feature's elements to other features.  <br>Default Pipeline Output: Pipeline Input</sub>
- [`ApproximateOnlineFeatures`](./SigStat/Common/Transforms/ApproximateOnlineFeatures.md)
	- <sub>init Pressure, Altitude, Azimuth features with default values.  <br>Default Pipeline Output: Features.Pressure, Features.Altitude, Features.Azimuth</sub>
- [`Binarization`](./SigStat/Common/Transforms/Binarization.md)
	- <sub>Generates a binary raster version of the input image with the iterative threshold method.  <br>Pipeline Input type: Image{Rgba32}<br>Default Pipeline Output: (bool[,]) Binarized</sub>
- [`BinaryRasterizer`](./SigStat/Common/Transforms/BinaryRasterizer.md)
	- <sub>Converts standard features to a binary raster.  <br>Default Pipeline Input: Standard [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: (bool[,]) Binarized</sub>
- [`CentroidExtraction`](./SigStat/Common/Transforms/CentroidExtraction.md)
	- <sub>Extracts the Centroid (aka. Center Of Gravity) of the input features.  <br> Default Pipeline Output: (List{double}) Centroid.</sub>
- [`CentroidTranslate`](./SigStat/Common/Transforms/CentroidTranslate.md)
	- <sub>Sequential pipeline to translate X and Y [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) to Centroid.  The following Transforms are called: [Transforms.CentroidExtraction](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/CentroidExtraction.md), [Transforms.Multiply](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/Multiply.md)(-1), [Transforms.Translate](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/Translate.md)<br>Default Pipeline Input: [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Features.Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: (List{double}) Centroid</sub>
- [`ComponentExtraction`](./SigStat/Common/Transforms/ComponentExtraction.md)
	- <sub>Extracts unsorted components by tracing through the binary Skeleton raster.  <br>Default Pipeline Input: (bool[,]) Skeleton, (List{Point}) EndPoints, (List{Point}) CrossingPoints<br>Default Pipeline Output: (List{List{PointF}}) Components</sub>
- [`ComponentSorter`](./SigStat/Common/Transforms/ComponentSorter.md)
	- <sub>Sorts Component order by comparing each starting X value, and finding nearest components.  <br>Default Pipeline Input: (bool[,]) Components<br>Default Pipeline Output: (bool[,]) Components</sub>
- [`ComponentsToFeatures`](./SigStat/Common/Transforms/ComponentsToFeatures.md)
	- <sub>Extracts standard [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) from sorted Components.  <br>Default Pipeline Input: (List{List{PointF}}) Components<br>Default Pipeline Output: X, Y, Button [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub>
- [`EndpointExtraction`](./SigStat/Common/Transforms/EndpointExtraction.md)
	- <sub>Extracts EndPoints and CrossingPoints from Skeleton.  <br>Default Pipeline Input: (bool[,]) Skeleton<br>Default Pipeline Output: (List{Point}) EndPoints, (List{Point}) CrossingPoints</sub>
- [`Extrema`](./SigStat/Common/Transforms/Extrema.md)
	- <sub>Extracts minimum and maximum values of given feature.  <br>Default Pipeline Output: (List{double}) Min, (List{double}) Max</sub>
- [`HSCPThinning`](./SigStat/Common/Transforms/HSCPThinning.md)
	- <sub>Iteratively thins the input binary raster with the [Algorithms.HSCPThinningStep](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/HSCPThinningStep.md) algorithm.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) HSCPThinningResult</sub>
- [`ImageGenerator`](./SigStat/Common/Transforms/ImageGenerator.md)
	- <sub>Generates an image feature out of a binary raster.  Optionally, saves the image to a png file.  Useful for debugging pipeline steps.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) Input, (Image{Rgba32}) InputImage</sub>
- [`Map`](./SigStat/Common/Transforms/Map.md)
	- <sub>Maps values of a feature to a specified range.  <br>Pipeline Input type: List{double}<br>Default Pipeline Output: (List{double}) MapResult</sub>
- [`Multiply`](./SigStat/Common/Transforms/Multiply.md)
	- <sub>Multiplies the values of a feature with a given constant.  <br>Pipeline Input type: List{double}<br>Default Pipeline Output: (List{double}) Input</sub>
- [`Normalize`](./SigStat/Common/Transforms/Normalize.md)
	- <sub>Maps values of a feature to 0.0 - 1.0 range.  <br>Pipeline Input type: List{double}<br>Default Pipeline Output: (List{double}) NormalizationResult</sub>
- [`OnePixelThinning`](./SigStat/Common/Transforms/OnePixelThinning.md)
	- <sub>Iteratively thins the input binary raster with the [Algorithms.OnePixelThinningStep](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/OnePixelThinningStep.md) algorithm.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) OnePixelThinningResult</sub>
- [`RealisticImageGenerator`](./SigStat/Common/Transforms/RealisticImageGenerator.md)
	- <sub>Generates a realistic looking image of the Signature based on standard features. Uses blue ink and white paper. It does NOT save the image to file.  <br>Default Pipeline Input: X, Y, Button, Pressure, Azimuth, Altitude [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: [Features.Image](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub>
- [`Resize`](./SigStat/Common/Transforms/Resize.md)
	- <sub>Resizes the image to a specified width and height</sub>
- [`TangentExtraction`](./SigStat/Common/Transforms/TangentExtraction.md)
	- <sub>Extracts tangent values of the standard X, Y [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Input: X, Y [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: (List{double})  Tangent</sub>
- [`TimeReset`](./SigStat/Common/Transforms/TimeReset.md)
	- <sub>Sequential pipeline to reset time values to begin at 0.  The following Transforms are called: Extrema, Multiply, AddVector.  <br>Default Pipeline Input: [Features.T](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: [Features.T](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub>
- [`Translate`](./SigStat/Common/Transforms/Translate.md)
	- <sub>Sequential pipeline to translate X and Y [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) by specified vector (constant or feature).  The following Transforms are called: [Transforms.AddConst](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddConst.md) twice, or [Transforms.AddVector](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/AddVector.md).  <br>Default Pipeline Input: [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Features.Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Features.Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub>
- [`Trim`](./SigStat/Common/Transforms/Trim.md)
	- <sub>Trims unnecessary empty space from a binary raster.  <br>Pipeline Input type: bool[,]<br>Default Pipeline Output: (bool[,]) Trimmed</sub>
### [SigStat.Common.PipelineItems.Transforms.Preprocessing](./SigStat/Common/PipelineItems/Transforms/Preprocessing/README.md)

- [`CubicInterpolation`](./SigStat/Common/PipelineItems/Transforms/Preprocessing/CubicInterpolation.md)
	- <sub>Cubic interpolation algorithm</sub>
- [`FillPenUpDurations`](./SigStat/Common/PipelineItems/Transforms/Preprocessing/FillPenUpDurations.md)
	- <sub>This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.</sub>
- [`FilterPoints`](./SigStat/Common/PipelineItems/Transforms/Preprocessing/FilterPoints.md)
	- <sub>Removes samples based on a criteria from online signature time series</sub>
- [`IInterpolation`](./SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md)
	- <sub>Represents an interploation algorithm</sub>
- [`LinearInterpolation`](./SigStat/Common/PipelineItems/Transforms/Preprocessing/LinearInterpolation.md)
	- <sub>Performs linear interpolation on the input</sub>
- [`NormalizeRotation`](./SigStat/Common/PipelineItems/Transforms/Preprocessing/NormalizeRotation.md)
	- <sub>Performs rotation normalization on the online signature</sub>
- [`RelativeScale`](./SigStat/Common/PipelineItems/Transforms/Preprocessing/RelativeScale.md)
	- <sub>Maps values of a feature to a specific range.  <br>InputFeature: feature to be scaled.<br>OutputFeature: output feature for scaled InputFeature</sub>
- [`ResampleSamplesCountBased`](./SigStat/Common/PipelineItems/Transforms/Preprocessing/ResampleSamplesCountBased.md)
	- <sub>Resamples an online signature to a specific sample count using the specified [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm</sub>
- [`Scale`](./SigStat/Common/PipelineItems/Transforms/Preprocessing/Scale.md)
	- <sub>Maps values of a feature to a specific range.  <br>InputFeature: feature to be scaled.<br>OutputFeature: output feature for scaled InputFeature</sub>
- [`TranslatePreproc`](./SigStat/Common/PipelineItems/Transforms/Preprocessing/TranslatePreproc.md)
	- <sub>This transformations can be used to translate the coordinates of an online signature</sub>
- [`UniformScale`](./SigStat/Common/PipelineItems/Transforms/Preprocessing/UniformScale.md)
	- <sub>Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension</sub>
### [SigStat.Common.PipelineItems.Classifiers](./SigStat/Common/PipelineItems/Classifiers/README.md)

- [`DtwClassifier`](./SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)
	- <sub>Classifies Signatures with the [Algorithms.Dtw](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/Dtw.md) algorithm.</sub>
- [`DtwSignerModel`](./SigStat/Common/PipelineItems/Classifiers/DtwSignerModel.md)
	- <sub>Represents a trained model for [PipelineItems.Classifiers.DtwClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Classifiers/DtwClassifier.md)</sub>
- [`OptimalDtwClassifier`](./SigStat/Common/PipelineItems/Classifiers/OptimalDtwClassifier.md)
	- <sub>This [Pipeline.IDistanceClassifier](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Pipeline/IDistanceClassifier.md) implementation will consider both test and  training samples and claculate the threshold to separate the original and forged  signatures to approximate EER. Note that this classifier is not applicable for  real world scenarios. It was developed to test the theoratical boundaries of  threshold based classification</sub>
- [`WeightedClassifier`](./SigStat/Common/PipelineItems/Classifiers/WeightedClassifier.md)
	- <sub>Classifies Signatures by weighing other Classifier results.</sub>
### [SigStat.Common.Loaders](./SigStat/Common/Loaders/README.md)

- [`DataSetLoader`](./SigStat/Common/Loaders/DataSetLoader.md)
	- <sub>Abstract loader class to inherit from. Implements ILogger.</sub>
- [`IDataSetLoader`](./SigStat/Common/Loaders/IDataSetLoader.md)
	- <sub>Exposes a function to enable loading collections of [Signer](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signer.md)s.  Base abstract class: [Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md).</sub>
- [`ImageLoader`](./SigStat/Common/Loaders/ImageLoader.md)
	- <sub>DataSetLoader for Image type databases.  Similar format to Svc2004Loader, but finds png images.</sub>
- [`ImageSaver`](./SigStat/Common/Loaders/ImageSaver.md)
	- <sub>Get the [Features.Image](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) of a [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md) and save it as png file.</sub>
- [`MCYTLoader`](./SigStat/Common/Loaders/MCYTLoader.md)
	- <sub>[Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the MCYT dataset</sub>
- [`SigComp11ChineseLoader`](./SigStat/Common/Loaders/SigComp11ChineseLoader.md)
	- <sub>[Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp11Chinese dataset</sub>
- [`SigComp11DutchLoader`](./SigStat/Common/Loaders/SigComp11DutchLoader.md)
	- <sub>[Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp11Dutch dataset</sub>
- [`SigComp13JapaneseLoader`](./SigStat/Common/Loaders/SigComp13JapaneseLoader.md)
	- <sub>[Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp13Japanese dataset</sub>
- [`SigComp15GermanLoader`](./SigStat/Common/Loaders/SigComp15GermanLoader.md)
	- <sub>[Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp15German dataset</sub>
- [`SigComp19OnlineLoader`](./SigStat/Common/Loaders/SigComp19OnlineLoader.md)
	- <sub>[Loaders.DataSetLoader](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Loaders/DataSetLoader.md) for the SigComp19 dataset</sub>
- [`Svc2004`](./SigStat/Common/Loaders/Svc2004.md)
	- <sub>Set of features containing raw data loaded from SVC2004-format database.</sub>
- [`Svc2004Loader`](./SigStat/Common/Loaders/Svc2004Loader.md)
	- <sub>Loads SVC2004-format database from .zip</sub>
### [SigStat.Common.Helpers](./SigStat/Common/Helpers/README.md)

- [`ExcelHelper`](./SigStat/Common/Helpers/ExcelHelper.md)
	- <sub>Extension methods for common EPPlus tasks</sub>
- [`FeatureDescriptorJsonConverter`](./SigStat/Common/Helpers/FeatureDescriptorJsonConverter.md)
	- <sub>Custom serializer for [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) objects</sub>
- [`FeatureDescriptorTJsonConverter`](./SigStat/Common/Helpers/FeatureDescriptorTJsonConverter.md)
	- <sub>Custom serializer for [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) objects</sub>
- [`HierarchyElement`](./SigStat/Common/Helpers/HierarchyElement.md)
	- <sub>Hierarchical structure to store object</sub>
- [`IProgress`](./SigStat/Common/Helpers/IProgress.md)
	- <sub>Enables progress tracking by expsoing the [Helpers.IProgress.Progress](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Helpers/IProgress.md) property and the [Helpers.IProgress.ProgressChanged](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Helpers/IProgress.md) event.</sub>
- [`SerializationHelper`](./SigStat/Common/Helpers/SerializationHelper.md)
	- <sub>Json serialization and deserialization using the custom resolver  [Helpers.Serialization.VerifierResolver](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Helpers/Serialization/VerifierResolver.md)</sub>
- [`SimpleConsoleLogger`](./SigStat/Common/Helpers/SimpleConsoleLogger.md)
	- <sub>A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.</sub>
### [SigStat.Common.Helpers.Serialization](./SigStat/Common/Helpers/Serialization/README.md)

- [`DistanceFunctionJsonConverter`](./SigStat/Common/Helpers/Serialization/DistanceFunctionJsonConverter.md)
	- <sub>Helper class for serializing distance functions</sub>
- [`FeatureStreamingContextState`](./SigStat/Common/Helpers/Serialization/FeatureStreamingContextState.md)
	- <sub>SerializationContext for serializing SigStat objects</sub>
- [`RectangleFConverter`](./SigStat/Common/Helpers/Serialization/RectangleFConverter.md)
	- <sub>Custom serializer for [System.Drawing.RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF) objects</sub>
- [`VerifierResolver`](./SigStat/Common/Helpers/Serialization/VerifierResolver.md)
	- <sub>Custom resolver for customizing the json serialization</sub>
### [SigStat.Common.Helpers.NetCoreSerialization](./SigStat/Common/Helpers/NetCoreSerialization/README.md)

- [`NetCoreFeatureDescriptorConverter`](./SigStat/Common/Helpers/NetCoreSerialization/NetCoreFeatureDescriptorConverter.md)
- [`NetCoreFeatureDescriptorDictionaryConverter`](./SigStat/Common/Helpers/NetCoreSerialization/NetCoreFeatureDescriptorDictionaryConverter.md)
- [`NetCoreFeatureDescriptorTConverter`](./SigStat/Common/Helpers/NetCoreSerialization/NetCoreFeatureDescriptorTConverter.md)
- [`NetCoreSerializationHelper`](./SigStat/Common/Helpers/NetCoreSerialization/NetCoreSerializationHelper.md)
### [SigStat.Common.Helpers.Excel](./SigStat/Common/Helpers/Excel/README.md)

- [`Palette`](./SigStat/Common/Helpers/Excel/Palette.md)
	- <sub></sub>
### [SigStat.Common.Model](./SigStat/Common/Model/README.md)

- [`Verifier`](./SigStat/Common/Model/Verifier.md)
	- <sub>Uses pipelines to transform, train on, and classify [Signature](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Signature.md) objects.</sub>
### [SigStat.Common.Framework.Samplers](./SigStat/Common/Framework/Samplers/README.md)

- [`EvenNSampler`](./SigStat/Common/Framework/Samplers/EvenNSampler.md)
	- <sub>Selects the first N signatures with even index for training</sub>
- [`FirstNSampler`](./SigStat/Common/Framework/Samplers/FirstNSampler.md)
	- <sub>Selects the first N signatures for training</sub>
- [`LastNSampler`](./SigStat/Common/Framework/Samplers/LastNSampler.md)
	- <sub>Selects the first N signatures for training</sub>
- [`OddNSampler`](./SigStat/Common/Framework/Samplers/OddNSampler.md)
	- <sub>Selects the first N signatures with odd index for training</sub>
- [`UniversalSampler`](./SigStat/Common/Framework/Samplers/UniversalSampler.md)
	- <sub>Selects a given number of signatures for training and testing</sub>
### [SigStat.Common.Algorithms](./SigStat/Common/Algorithms/README.md)

- [`Dtw`](./SigStat/Common/Algorithms/Dtw.md)
	- <sub>Dynamic Time Warping algorithm</sub>
- [`DtwPy`](./SigStat/Common/Algorithms/DtwPy.md)
	- <sub>A simple implementation of the DTW algorithm.</sub>
- [`HSCPThinningStep`](./SigStat/Common/Algorithms/HSCPThinningStep.md)
	- <sub>HSCP thinning algorithm  http://www.ppgia.pucpr.br/~facon/Afinamento/1987holt.pdf</sub>
- [`PatternMatching3x3`](./SigStat/Common/Algorithms/PatternMatching3x3.md)
	- <sub>Binary 3x3 pattern matcher with rotating option.</sub>

