# [FeatureDescriptor](./FeatureDescriptor.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Represents a feature with name and type.

## Properties

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>FeatureType</sub></div>| <sub>Gets or sets the type of the feature.</sub></div>| <br>
| <div style="width:490px"><sub>IsCollection</sub></div>| <sub>Gets whether the type of the feature is List.</sub></div>| <br>
| <div style="width:490px"><sub>Key</sub></div>| <sub>Gets the unique key of the feature.</sub></div>| <br>
| <div style="width:490px"><sub>Name</sub></div>| <sub>Gets or sets a human readable name of the feature.</sub></div>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>[ToString](./Methods/FeatureDescriptor-100663418.md) (  )</sub></div>| <sub>Returns a string represenatation of the FeatureDescriptor</sub></div>| <br>


## Static Methods

| Name | Summary | 
| --- | --- | 
| <div style="width:490px"><sub>[Get](./Methods/FeatureDescriptor-100663415.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub></div>| <sub>Gets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) specified by `key`.  Throws [System.Collections.Generic.KeyNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyNotFoundException) exception if there is no descriptor registered with the given key.</sub></div>| <br>
| <div style="width:490px"><sub>[Get](./Methods/FeatureDescriptor-100663417.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub></div>| <sub>Gets the [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) specified by `key`.  If the key is not registered yet, a new [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) is automatically created with the given key and type.</sub></div>| <br>
| <div style="width:490px"><sub>[GetAll](./Methods/FeatureDescriptor-100663416.md) (  )</sub></div>| <sub>Gets a dictionary of all registered feature descriptors</sub></div>| <br>
| <div style="width:490px"><sub>[IsRegistered](./Methods/FeatureDescriptor-100663413.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub></div>| <sub>Returns true, if there is a FeatureDescriptor registered with the given key</sub></div>| <br>
| <div style="width:490px"><sub>[Register](./Methods/FeatureDescriptor-100663414.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) )</sub></div>| <sub>Registers a new [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) with a given key.  If the FeatureDescriptor is allready registered, this function will  return a reference to the originally registered FeatureDescriptor.  to the a</sub></div>| <br>


