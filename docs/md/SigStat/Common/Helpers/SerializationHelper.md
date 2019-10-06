# [SerializationHelper](./SerializationHelper.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

## Summary
Json serialization and deserialization using the custom resolver  [Helpers.Serialization.VerifierResolver](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Helpers/Serialization/VerifierResolver.md)

## Constructors

| Name | Summary | 

SerializationHelper (  )<sub></sub>


## Static Methods

| Return | Name | Summary | 

[T](./SerializationHelper.md)<sub>[Deserialize](./Methods/SerializationHelper-100664028.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><sub>Constructs object from strings that were serialized previously</sub>
[T](./SerializationHelper.md)<sub>[DeserializeFromFile](./Methods/SerializationHelper-100664029.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><sub>Constructs object from file given by a path</sub>
[JsonSerializerSettings](./SerializationHelper.md)<sub>[GetSettings](./Methods/SerializationHelper-100664027.md) (  )</sub><sub>Settings used for the serialization methods</sub>
[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)<sub>[JsonSerialize](./Methods/SerializationHelper-100664031.md) ( [`T`](./SerializationHelper.md) )</sub><sub>Creates json string from object</sub>
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[JsonSerializeToFile](./Methods/SerializationHelper-100664030.md) ( [`T`](./SerializationHelper.md), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><sub>Writes object to file to the given by path in json format</sub>


