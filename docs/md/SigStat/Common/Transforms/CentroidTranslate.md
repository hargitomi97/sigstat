# [CentroidTranslate](./CentroidTranslate.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable), [ITransformation](./../ITransformation.md)

## Summary
Sequential pipeline to translate X and Y [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md) to Centroid.  The following Transforms are called: [Transforms.CentroidExtraction](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/CentroidExtraction.md), [Transforms.Multiply](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/Multiply.md)(-1), [Transforms.Translate](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/Translate.md)<br>Default Pipeline Input: [Features.X](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md), [Features.Y](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: (List{double}) Centroid

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>CentroidTranslate (  )</sub><div style="width: 290px"> | <sub>Initializes a new instance of the [Transforms.CentroidTranslate](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/CentroidTranslate.md) class.</sub><div style="width: 290px"> | <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>InputX</sub><div style="width: 290px"> | <sub>Gets or sets the input feature representing the X coordinates of an online signature</sub><div style="width: 290px"> | <br>
| <sub>InputY</sub><div style="width: 290px"> | <sub>Gets or sets the input feature representing the Y coordinates of an online signature</sub><div style="width: 290px"> | <br>
| <sub>OutputX</sub><div style="width: 290px"> | <sub>Gets or sets the output feature representing the X coordinates of an online signature</sub><div style="width: 290px"> | <br>
| <sub>OutputY</sub><div style="width: 290px"> | <sub>Gets or sets the output feature representing the X coordinates of an online signature</sub><div style="width: 290px"> | <br>


