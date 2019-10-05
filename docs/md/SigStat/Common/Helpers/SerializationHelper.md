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
| [T](./SerializationHelper.md) | [Deserialize](./Methods/SerializationHelper-100664028.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) s ) | Constructs object from strings that were serialized previously | 
| [T](./SerializationHelper.md) | [DeserializeFromFile](./Methods/SerializationHelper-100664029.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) path ) | Constructs object from file given by a path | 
| [JsonSerializerSettings](./SerializationHelper.md) | [GetSettings](./Methods/SerializationHelper-100664027.md) (  ) | Settings used for the serialization methods | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | [JsonSerialize](./Methods/SerializationHelper-100664031.md) ( [`T`](./SerializationHelper.md) o ) | Creates json string from object | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [JsonSerializeToFile](./Methods/SerializationHelper-100664030.md) ( [`T`](./SerializationHelper.md) o, [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) path ) | Writes object to file to the given by path in json format | 


