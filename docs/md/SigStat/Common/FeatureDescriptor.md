# [FeatureDescriptor](./FeatureDescriptor.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Represents a feature with name and type.


## Static Methods

| <span>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> | Summary | 
| :--- | :--- | 
| [Get](./Methods/FeatureDescriptor--Get.md) ([`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)) | Gets the [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) specified by a key.  Throws [KeyNotFoundException](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.KeyNotFoundException-1) exception if there is no descriptor registered with the given key. | 
| [Get](./Methods/FeatureDescriptor--Get.md) ([`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)) | Gets the [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) specified by a key.  If the key is not registered yet, a new [FeatureDescriptor-1](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor-1.md) is automatically created with the given key and type. | 
| [GetAll](./Methods/FeatureDescriptor--GetAll.md) () | Gets a dictionary of all registered feature descriptors | 
| [IsRegistered](./Methods/FeatureDescriptor--IsRegistered.md) ([`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)) | Returns true, if there is a FeatureDescriptor registered with the given key | 
| [Register](./Methods/FeatureDescriptor--Register.md) ([`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type)) | Registers a new [FeatureDescriptor](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/FeatureDescriptor.md) with a given key.  If the FeatureDescriptor is already registered, this function will  return a reference to the originally registered FeatureDescriptor. | 


