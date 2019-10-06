# [RealisticImageGenerator](./RealisticImageGenerator.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Generates a realistic looking image of the Signature based on standard features. Uses blue ink and white paper. It does NOT save the image to file.  <br>Default Pipeline Input: X, Y, Button, Pressure, Azimuth, Altitude [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)<br>Default Pipeline Output: [Features.Image](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| RealisticImageGenerator ( [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32), [`Int32`](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) )<div style="width: 400px">| Initializes a new instance of the [Transforms.RealisticImageGenerator](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Transforms/RealisticImageGenerator.md) class with specified settings.<div style="width: 400px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [Transform](./Methods/RealisticImageGenerator-100663699.md) ( [`Signature`](./../Signature.md) )<div style="width: 400px">| <div style="width: 400px">| <br>


