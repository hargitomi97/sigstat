# [Features](./Features.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
<sub>Standard set of features.</sub>

## Static Fields

| Type | Name | Summary | 
| --- | --- | --- | 
| [IReadOnlyList](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IReadOnlyList-1)\<[FeatureDescriptor](./FeatureDescriptor.md)> | All | <sub>Returns a readonly list of all [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md)s defined in [Features](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub> | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | Altitude | <sub>Altitude of an online signature as a function of [Features.T](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub> | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | Azimuth | <sub>Azimuth of an online signature as a function of [Features.T](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub> | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[RectangleF](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.RectangleF)> | Bounds | <sub>Actual bounds of the signature</sub> | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)>> | Button | <sub>Pen position of an online signature as a function of [Features.T](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub> | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[Point](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Point)> | Cog | <sub>Center of gravity in a signature</sub> | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)> | Dpi | <sub>Dots per inch</sub> | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[Image](./Features.md)\<[Rgba32](./Features.md)>> | Image | <sub>The visaul representation of a signature</sub> | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | Pressure | <sub>Pressure of an online signature as a function of [Features.T](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub> | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | T | <sub>Timestamps for online signatures</sub> | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[Rectangle](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Rectangle)> | TrimmedBounds | <sub>Represents the main body of the signature [BasicMetadataExtraction](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/BasicMetadataExtraction.md)</sub> | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | X | <sub>X coordinates of an online signature as a function of [Features.T](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub> | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)>> | Y | <sub>Y coordinates of an online signature as a function of [Features.T](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Features.md)</sub> | 


