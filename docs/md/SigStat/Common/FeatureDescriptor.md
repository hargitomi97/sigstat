# [FeatureDescriptor](./FeatureDescriptor.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Represents a feature with name and type.

## Properties

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>FeatureType</sub> | <sub>Gets or sets the type of the feature.</sub> | 
| <sub>IsCollection</sub> | <sub>Gets whether the type of the feature is List.</sub> | 
| <sub>Key</sub> | <sub>Gets the unique key of the feature.</sub> | 
| <sub>Name</sub> | <sub>Gets or sets a human readable name of the feature.</sub> | 


## Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[ToString](./Methods/FeatureDescriptor-100663420.md) (  )</sub> | <sub>Returns a string represenatation of the FeatureDescriptor</sub> | 


## Static Methods

| Name<div><a href="#"><img width=400></a></div> | Summary<div><a href="#"><img width=475></a></div> | 
| --- | --- | 
| <sub>[Get](./Methods/FeatureDescriptor-100663417.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub> | <sub>Gets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) specified by `key`.  Throws [System.Collections.Generic.KeyNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyNotFoundException) exception if there is no descriptor registered with the given key.</sub> | 
| <sub>[Get](./Methods/FeatureDescriptor-100663419.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub> | <sub>Gets the [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) specified by `key`.  If the key is not registered yet, a new [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) is automatically created with the given key and type.</sub> | 
| <sub>[GetAll](./Methods/FeatureDescriptor-100663418.md) (  )</sub> | <sub>Gets a dictionary of all registered feature descriptors</sub> | 
| <sub>[IsRegistered](./Methods/FeatureDescriptor-100663415.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub> | <sub>Returns true, if there is a FeatureDescriptor registered with the given key</sub> | 
| <sub>[Register](./Methods/FeatureDescriptor-100663416.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) )</sub> | <sub>Registers a new [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) with a given key.  If the FeatureDescriptor is allready registered, this function will  return a reference to the originally registered FeatureDescriptor.  to the a</sub> | 


