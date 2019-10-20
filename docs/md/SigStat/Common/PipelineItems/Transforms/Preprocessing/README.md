# [SigStat.Common.PipelineItems.Transforms.Preprocessing](./README.md)

## Types

- [`CubicInterpolation`](./CubicInterpolation.md)
	- Cubic interpolation algorithm
- [`FillPenUpDurations`](./FillPenUpDurations.md)
	- This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.
- [`FilterPoints`](./FilterPoints.md)
	- Removes samples based on a criteria from online signature time series
- [`IInterpolation`](./IInterpolation.md)
	- Represents an interploation algorithm
- [`LinearInterpolation`](./LinearInterpolation.md)
	- Performs linear interpolation on the input
- [`NormalizeRotation`](./NormalizeRotation.md)
	- Performs rotation normalization on the online signature
- [`NormalizeRotationForX`](./NormalizeRotationForX.md)
	- Performs rotation normalization on the online signature
- [`OrthognalRotation`](./OrthognalRotation.md)
	- Performs rotation normalization on the online signature
- [`RelativeScale`](./RelativeScale.md)
	- Maps values of a feature to a specific range.  \InputFeature: feature to be scaled.\\OutputFeature: output feature for scaled InputFeature\
- [`ResampleSamplesCountBased`](./ResampleSamplesCountBased.md)
	- Resamples an online signature to a specific sample count using the specified [IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm
- [`SampleRate`](./SampleRate.md)
	- Performs rotation normalization on the online signature
- [`Scale`](./Scale.md)
	- Maps values of a feature to a specific range.  \InputFeature: feature to be scaled.\\OutputFeature: output feature for scaled InputFeature\
- [`TranslatePreproc`](./TranslatePreproc.md)
	- This transformations can be used to translate the coordinates of an online signature
- [`UniformScale`](./UniformScale.md)
	- Maps values of a feature to a specific range and another proportional.  \BaseDimension: feature modelled the base dimension of the scaling. \\ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. \\BaseDimensionOutput: output feature for scaled BaseDimension\\ProportionalDimensionOutput: output feature for scaled ProportionalDimension\

