# <sub>[FeatureDescriptor](./FeatureDescriptor.md)</sub>

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Represents a feature with name and type.

## Properties

| Type | Name | Summary | 

<sub>[Type](https://docs.microsoft.com/en-us/dotnet/api/System.Type)</sub><sub>FeatureType</sub><sub>Gets or sets the type of the feature.</sub>
<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)</sub><sub>IsCollection</sub><sub>Gets whether the type of the feature is List.</sub>
<sub>[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub><sub>Key</sub><sub>Gets the unique key of the feature.</sub>
<sub>[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub><sub>Name</sub><sub>Gets or sets a human readable name of the feature.</sub>


## Methods

| Return | Name | Summary | 

<sub>[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub><sub>[ToString](./Methods/FeatureDescriptor-100663418.md) (  )</sub><sub>Returns a string represenatation of the FeatureDescriptor</sub>


## Static Methods

| Return | Name | Summary | 

<sub>[FeatureDescriptor](./FeatureDescriptor.md)</sub><sub>[Get](./Methods/FeatureDescriptor-100663415.md) ( <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub> )</sub><sub>Gets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) specified by `key`.  Throws [System.Collections.Generic.KeyNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyNotFoundException) exception if there is no descriptor registered with the given key.</sub>
<sub>[FeatureDescriptor](./FeatureDescriptor-1.md)</sub>\<<sub>[T](./FeatureDescriptor.md)</sub>><sub>[Get](./Methods/FeatureDescriptor-100663417.md) ( <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub> )</sub><sub>Gets the [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) specified by `key`.  If the key is not registered yet, a new [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) is automatically created with the given key and type.</sub>
<sub>[Dictionary](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2)</sub>\<<sub>[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub>, <sub>[FeatureDescriptor](./FeatureDescriptor.md)</sub>><sub>[GetAll](./Methods/FeatureDescriptor-100663416.md) (  )</sub><sub>Gets a dictionary of all registered feature descriptors</sub>
<sub>[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)</sub><sub>[IsRegistered](./Methods/FeatureDescriptor-100663413.md) ( <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub> )</sub><sub>Returns true, if there is a FeatureDescriptor registered with the given key</sub>
<sub>[FeatureDescriptor](./FeatureDescriptor.md)</sub><sub>[Register](./Methods/FeatureDescriptor-100663414.md) ( <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub>, <sub>[`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type)</sub> )</sub><sub>Registers a new [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) with a given key.  If the FeatureDescriptor is allready registered, this function will  return a reference to the originally registered FeatureDescriptor.  to the a</sub>


