# [SigStat.Common.PipelineItems.Transforms.Preprocessing](./README.md)

## Types

- <sub>[`CubicInterpolation`](./CubicInterpolation.md)</sub>
	- Cubic interpolation algorithm
- <sub>[`FillPenUpDurations`](./FillPenUpDurations.md)</sub>
	- This transformation will fill "holes" in the "Time" feature by interpolating the last known  feature values.
- <sub>[`FilterPoints`](./FilterPoints.md)</sub>
	- Removes samples based on a criteria from online signature time series
- <sub>[`IInterpolation`](./IInterpolation.md)</sub>
	- Represents an interploation algorithm
- <sub>[`LinearInterpolation`](./LinearInterpolation.md)</sub>
	- Performs linear interpolation on the input
- <sub>[`NormalizeRotation`](./NormalizeRotation.md)</sub>
	- Performs rotation normalization on the online signature
- <sub>[`RelativeScale`](./RelativeScale.md)</sub>
	- Maps values of a feature to a specific range.  <br>InputFeature: feature to be scaled.<br>OutputFeature: output feature for scaled InputFeature
- <sub>[`ResampleSamplesCountBased`](./ResampleSamplesCountBased.md)</sub>
	- Resamples an online signature to a specific sample count using the specified [PipelineItems.Transforms.Preprocessing.IInterpolation](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/PipelineItems/Transforms/Preprocessing/IInterpolation.md) algorithm
- <sub>[`Scale`](./Scale.md)</sub>
	- Maps values of a feature to a specific range.  <br>InputFeature: feature to be scaled.<br>OutputFeature: output feature for scaled InputFeature
- <sub>[`TranslatePreproc`](./TranslatePreproc.md)</sub>
	- This transformations can be used to translate the coordinates of an online signature
- <sub>[`UniformScale`](./UniformScale.md)</sub>
	- Maps values of a feature to a specific range and another proportional.  <br>BaseDimension: feature modelled the base dimension of the scaling. <br>ProportionalDimension: feature modelled the dimension scaled proportionally to the base dimension. <br>BaseDimensionOutput: output feature for scaled BaseDimension<br>ProportionalDimensionOutput: output feature for scaled ProportionalDimension

