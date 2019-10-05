# [FeatureDescriptor](./FeatureDescriptor.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Represents a feature with name and type.

## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [Type](https://docs.microsoft.com/en-us/dotnet/api/System.Type) | FeatureType | Gets or sets the type of the feature. | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | IsCollection | Gets whether the type of the feature is List. | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | Key | Gets the unique key of the feature. | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | Name | Gets or sets a human readable name of the feature. | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | [ToString](./Methods/FeatureDescriptor-100663418.md) (  ) | Returns a string represenatation of the FeatureDescriptor | 


## Static Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [FeatureDescriptor](./FeatureDescriptor.md) | [Get](./Methods/FeatureDescriptor-100663415.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) key ) | Gets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) specified by `key`.  Throws [System.Collections.Generic.KeyNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyNotFoundException) exception if there is no descriptor registered with the given key. | 
| [FeatureDescriptor](./FeatureDescriptor-1.md)\<[T](./FeatureDescriptor.md)> | [Get](./Methods/FeatureDescriptor-100663417.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) key ) | Gets the [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) specified by `key`.  If the key is not registered yet, a new [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) is automatically created with the given key and type. | 
| [Dictionary](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2)\<[String](https://docs.microsoft.com/en-us/dotnet/api/System.String), [FeatureDescriptor](./FeatureDescriptor.md)> | [GetAll](./Methods/FeatureDescriptor-100663416.md) (  ) | Gets a dictionary of all registered feature descriptors | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | [IsRegistered](./Methods/FeatureDescriptor-100663413.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) featureKey ) | Returns true, if there is a FeatureDescriptor registered with the given key | 
| [FeatureDescriptor](./FeatureDescriptor.md) | [Register](./Methods/FeatureDescriptor-100663414.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) featureKey, [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) type ) | Registers a new [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) with a given key.  If the FeatureDescriptor is allready registered, this function will  return a reference to the originally registered FeatureDescriptor.  to the a | 


