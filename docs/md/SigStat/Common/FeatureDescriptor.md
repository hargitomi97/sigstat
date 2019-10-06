# [FeatureDescriptor](./FeatureDescriptor.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Represents a feature with name and type.

## Properties

| Name | Summary | 
| --- | --- | 
| FeatureType<div style="width: 300px">| Gets or sets the type of the feature.<div style="width: 300px">| <br>
| IsCollection<div style="width: 300px">| Gets whether the type of the feature is List.<div style="width: 300px">| <br>
| Key<div style="width: 300px">| Gets the unique key of the feature.<div style="width: 300px">| <br>
| Name<div style="width: 300px">| Gets or sets a human readable name of the feature.<div style="width: 300px">| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| [ToString](./Methods/FeatureDescriptor-100663418.md) (  )<div style="width: 300px">| Returns a string represenatation of the FeatureDescriptor<div style="width: 300px">| <br>


## Static Methods

| Name | Summary | 
| --- | --- | 
| [Get](./Methods/FeatureDescriptor-100663415.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )<div style="width: 300px">| Gets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) specified by `key`.  Throws [System.Collections.Generic.KeyNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyNotFoundException) exception if there is no descriptor registered with the given key.<div style="width: 300px">| <br>
| [Get](./Methods/FeatureDescriptor-100663417.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )<div style="width: 300px">| Gets the [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) specified by `key`.  If the key is not registered yet, a new [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) is automatically created with the given key and type.<div style="width: 300px">| <br>
| [GetAll](./Methods/FeatureDescriptor-100663416.md) (  )<div style="width: 300px">| Gets a dictionary of all registered feature descriptors<div style="width: 300px">| <br>
| [IsRegistered](./Methods/FeatureDescriptor-100663413.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )<div style="width: 300px">| Returns true, if there is a FeatureDescriptor registered with the given key<div style="width: 300px">| <br>
| [Register](./Methods/FeatureDescriptor-100663414.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) )<div style="width: 300px">| Registers a new [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) with a given key.  If the FeatureDescriptor is allready registered, this function will  return a reference to the originally registered FeatureDescriptor.  to the a<div style="width: 300px">| <br>


