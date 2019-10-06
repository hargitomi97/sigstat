# [FeatureDescriptor](./FeatureDescriptor.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Represents a feature with name and type.

## Properties

| Type | Name | Summary | 

[Type](https://docs.microsoft.com/en-us/dotnet/api/System.Type)<sub>FeatureType</sub><sub>Gets or sets the type of the feature.</sub>
[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)<sub>IsCollection</sub><sub>Gets whether the type of the feature is List.</sub>
[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)<sub>Key</sub><sub>Gets the unique key of the feature.</sub>
[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)<sub>Name</sub><sub>Gets or sets a human readable name of the feature.</sub>


## Methods

| Return | Name | Summary | 

[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)<sub>[ToString](./Methods/FeatureDescriptor-100663418.md) (  )</sub><sub>Returns a string represenatation of the FeatureDescriptor</sub>


## Static Methods

| Return | Name | Summary | 

[FeatureDescriptor](./FeatureDescriptor.md)<sub>[Get](./Methods/FeatureDescriptor-100663415.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><sub>Gets the [<sub>FeatureDescriptor</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) specified by `key`.  Throws [System.Collections.Generic.KeyNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyNotFoundException) exception if there is no descriptor registered with the given key.</sub>
[FeatureDescriptor](./FeatureDescriptor-1.md)\<[T](./FeatureDescriptor.md)><sub>[Get](./Methods/FeatureDescriptor-100663417.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><sub>Gets the [<sub>FeatureDescriptor-1</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) specified by `key`.  If the key is not registered yet, a new [<sub>FeatureDescriptor-1</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) is automatically created with the given key and type.</sub>
[Dictionary](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2)\<[String](https://docs.microsoft.com/en-us/dotnet/api/System.String), [FeatureDescriptor](./FeatureDescriptor.md)><sub>[GetAll](./Methods/FeatureDescriptor-100663416.md) (  )</sub><sub>Gets a dictionary of all registered feature descriptors</sub>
[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)<sub>[IsRegistered](./Methods/FeatureDescriptor-100663413.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><sub>Returns true, if there is a FeatureDescriptor registered with the given key</sub>
[FeatureDescriptor](./FeatureDescriptor.md)<sub>[Register](./Methods/FeatureDescriptor-100663414.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) )</sub><sub>Registers a new [<sub>FeatureDescriptor</sub>](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) with a given key.  If the FeatureDescriptor is allready registered, this function will  return a reference to the originally registered FeatureDescriptor.  to the a</sub>


