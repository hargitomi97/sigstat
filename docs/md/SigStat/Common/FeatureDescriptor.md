# [FeatureDescriptor](./FeatureDescriptor.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Represents a feature with name and type.

## Properties

TypeNameSummary

<sub>FeatureType</sub><br><sub>Gets or sets the type of the feature.</sub><br><br>
<sub>IsCollection</sub><br><sub>Gets whether the type of the feature is List.</sub><br><br>
<sub>Key</sub><br><sub>Gets the unique key of the feature.</sub><br><br>
<sub>Name</sub><br><sub>Gets or sets a human readable name of the feature.</sub><br><br>


## Methods

ReturnNameSummary

<sub>[ToString](./Methods/FeatureDescriptor-100663418.md) (  )</sub><br><sub>Returns a string represenatation of the FeatureDescriptor</sub><br><br>


## Static Methods

NameSummary

<sub>[Get](./Methods/FeatureDescriptor-100663415.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><br><sub>Gets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) specified by `key`.  Throws [System.Collections.Generic.KeyNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyNotFoundException) exception if there is no descriptor registered with the given key.</sub><br>
<sub>[Get](./Methods/FeatureDescriptor-100663417.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><br><sub>Gets the [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) specified by `key`.  If the key is not registered yet, a new [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) is automatically created with the given key and type.</sub><br>
<sub>[GetAll](./Methods/FeatureDescriptor-100663416.md) (  )</sub><br><sub>Gets a dictionary of all registered feature descriptors</sub><br>
<sub>[IsRegistered](./Methods/FeatureDescriptor-100663413.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><br><sub>Returns true, if there is a FeatureDescriptor registered with the given key</sub><br>
<sub>[Register](./Methods/FeatureDescriptor-100663414.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) )</sub><br><sub>Registers a new [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) with a given key.  If the FeatureDescriptor is allready registered, this function will  return a reference to the originally registered FeatureDescriptor.  to the a</sub><br>


