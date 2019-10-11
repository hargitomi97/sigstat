# [ComponentExtraction](./ComponentExtraction.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Extracts unsorted components by tracing through the binary Skeleton raster.  <br>Default Pipeline Input: (bool[,]) Skeleton, (List{Point}) EndPoints, (List{Point}) CrossingPoints<br>Default Pipeline Output: (List{List{PointF}}) Components

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>ComponentExtraction ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )</sub><button style="pointer-events: none;">Hover or focus over me too</button>| <sub>Initializes a new instance of the [ComponentExtraction](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/ComponentExtraction.md) class with specified sampling resolution.</sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>CrossingPoints</sub><button style="pointer-events: none;">Hover or focus over me too</button>| <sub>crossing points</sub>| <br>
| <sub>EndPoints</sub><button style="pointer-events: none;">Hover or focus over me too</button>| <sub>endpoints</sub>| <br>
| <sub>OutputComponents</sub><button style="pointer-events: none;">Hover or focus over me too</button>| <sub>Output components</sub>| <br>
| <sub>Skeleton</sub><button style="pointer-events: none;">Hover or focus over me too</button>| <sub>binary representation of a signature image</sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Transform](./Methods/ComponentExtraction-100663567.md) ( [`Signature`](./../Signature.md) )</sub><button style="pointer-events: none;">Hover or focus over me too</button>| <sub></sub>| <br>


