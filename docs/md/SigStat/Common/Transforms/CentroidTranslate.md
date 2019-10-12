# [CentroidTranslate](./CentroidTranslate.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Sequential pipeline to translate X and Y [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) to Centroid.  The following Transforms are called: [CentroidExtraction](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/CentroidExtraction.md), [Multiply](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/Multiply.md)(-1), [Translate](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/Translate.md)<br>Default Pipeline Input: [X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: (List{double}) Centroid

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>CentroidTranslate (  )</sub><img width=100>| <sub>Initializes a new instance of the [CentroidTranslate](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/CentroidTranslate.md) class.</sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>InputX</sub><img width=100>| <sub>Gets or sets the input feature representing the X coordinates of an online signature</sub>| <br>
| <sub>InputY</sub><img width=100>| <sub>Gets or sets the input feature representing the Y coordinates of an online signature</sub>| <br>
| <sub>OutputX</sub><img width=100>| <sub>Gets or sets the output feature representing the X coordinates of an online signature</sub>| <br>
| <sub>OutputY</sub><img width=100>| <sub>Gets or sets the output feature representing the X coordinates of an online signature</sub>| <br>


