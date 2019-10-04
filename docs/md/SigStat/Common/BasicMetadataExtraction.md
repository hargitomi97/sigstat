# [BasicMetadataExtraction](./BasicMetadataExtraction.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./ILoggerObject.md), [IProgress](./Helpers/IProgress.md), [IPipelineIO](./Pipeline/IPipelineIO.md), [ITransformation](./ITransformation.md)

## Summary
Extracts basic statistical signature (like [Bounds](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.Features.Bounds.md) or [Cog](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.Features.Cog.md)) information from an Image

## Constructors

| Name | Summary | 
| --- | --- | 
| BasicMetadataExtraction (  ) |  | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| void | Transform ( [`Signature`](./Signature.md) signature ) |  | 


## Static Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | Trim | Represents theratio of significant pixels that should be trimmed  from each side while calculating [TrimmedBounds](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.Features.TrimmedBounds.md) | 


