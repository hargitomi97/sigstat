# [CentroidTranslate](./CentroidTranslate.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Sequential pipeline to translate X and Y [Features](../../docs/md/SigStat/Common/Features.md) to Centroid.  The following Transforms are called: [CentroidExtraction](../../docs/md/SigStat/Common/Transforms/CentroidExtraction.md), [Multiply](../../docs/md/SigStat/Common/Transforms/Multiply.md)(-1), [Translate](../../docs/md/SigStat/Common/Transforms/Translate.md)<br>Default Pipeline Input: [X](../../docs/md/SigStat/Common/Features.md), [Y](../../docs/md/SigStat/Common/Features.md) <br>Default Pipeline Output: (List{double}) Centroid

## Constructors

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>CentroidTranslate (  )</sub> | <sub>Initializes a new instance of the [CentroidTranslate](../../docs/md/SigStat/Common/Transforms/CentroidTranslate.md) class.</sub> | 


## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>InputX</sub> | <sub>Gets or sets the input feature representing the X coordinates of an online signature</sub> | 
| <sub>InputY</sub> | <sub>Gets or sets the input feature representing the Y coordinates of an online signature</sub> | 
| <sub>OutputX</sub> | <sub>Gets or sets the output feature representing the X coordinates of an online signature</sub> | 
| <sub>OutputY</sub> | <sub>Gets or sets the output feature representing the X coordinates of an online signature</sub> | 


