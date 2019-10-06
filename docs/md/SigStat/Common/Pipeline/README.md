# [SigStat.Common.Pipeline](./README.md)

## Types

- <sub>[`IClassifier`](./IClassifier.md)</sub>
	- Trains classification models based on reference signatures
- <sub>[`IDistanceClassifier`](./IDistanceClassifier.md)</sub>
	- Trains classification models based on reference signatures, by calculating the distances between signature pairs
- <sub>[`Input`](./Input.md)</sub>
	- Annotates an input [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) in a transformation pipeline
- <sub>[`IPipelineIO`](./IPipelineIO.md)</sub>
	- Supports the definition of [Pipeline.PipelineInput](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Pipeline/PipelineInput.md) and [Pipeline.PipelineOutput](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Pipeline/PipelineOutput.md)
- <sub>[`ISignerModel`](./ISignerModel.md)</sub>
	- Analyzes signatures based on their similiarity to the trained model
- <sub>[`Output`](./Output.md)</sub>
	- Annotates an output [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) in a transformation pipeline
- <sub>[`ParallelTransformPipeline`](./ParallelTransformPipeline.md)</sub>
	- Runs pipeline items in parallel.  <br>Default Pipeline Output: Range of all the Item outputs.
- <sub>[`PipelineInput`](./PipelineInput.md)</sub>
	- Represents an input for a [Pipeline.PipelineInput.PipelineItem](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md)
- <sub>[`PipelineOutput`](./PipelineOutput.md)</sub>
	- Represents an output for a [Pipeline.PipelineOutput.PipelineItem](https://github.com/hargitomi97/sigstat/blob/master/docs/md/.md)
- <sub>[`SequentialTransformPipeline`](./SequentialTransformPipeline.md)</sub>
	- Runs pipeline items in a sequence.  <br>Default Pipeline Output: Output of the last Item in the sequence.

