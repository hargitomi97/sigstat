# [SerializationHelper](./SerializationHelper.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

## Summary
Json serialization and deserialization using the custom resolver  [Helpers.Serialization.VerifierResolver](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Helpers/Serialization/VerifierResolver.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| SerializationHelper (  ) |  | 


## Static Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [T](./SerializationHelper.md) | [Deserialize](./Methods/SerializationHelper-100664028.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) ) | <sub>Constructs object from strings that were serialized previously</sub> | 
| [T](./SerializationHelper.md) | [DeserializeFromFile](./Methods/SerializationHelper-100664029.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) ) | <sub>Constructs object from file given by a path</sub> | 
| [JsonSerializerSettings](./SerializationHelper.md) | [GetSettings](./Methods/SerializationHelper-100664027.md) (  ) | <sub>Settings used for the serialization methods</sub> | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | [JsonSerialize](./Methods/SerializationHelper-100664031.md) ( [`T`](./SerializationHelper.md) ) | <sub>Creates json string from object</sub> | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [JsonSerializeToFile](./Methods/SerializationHelper-100664030.md) ( [`T`](./SerializationHelper.md), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) ) | <sub>Writes object to file to the given by path in json format</sub> | 


