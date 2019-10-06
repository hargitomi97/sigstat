# <sub>[SerializationHelper](./SerializationHelper.md)</sub>

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

## Summary
Json serialization and deserialization using the custom resolver  [Helpers.Serialization.VerifierResolver](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Helpers/Serialization/VerifierResolver.md)

## Constructors

| Name | Summary | 

SerializationHelper (  )<sub></sub>


## Static Methods

| Return | Name | Summary | 

<sub>[T](./SerializationHelper.md)</sub><sub>[Deserialize](./Methods/SerializationHelper-100664028.md) ( <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub> )</sub><sub>Constructs object from strings that were serialized previously</sub>
<sub>[T](./SerializationHelper.md)</sub><sub>[DeserializeFromFile](./Methods/SerializationHelper-100664029.md) ( <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub> )</sub><sub>Constructs object from file given by a path</sub>
<sub>[JsonSerializerSettings](./SerializationHelper.md)</sub><sub>[GetSettings](./Methods/SerializationHelper-100664027.md) (  )</sub><sub>Settings used for the serialization methods</sub>
<sub>[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub><sub>[JsonSerialize](./Methods/SerializationHelper-100664031.md) ( <sub>[`T`](./SerializationHelper.md)</sub> )</sub><sub>Creates json string from object</sub>
[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[JsonSerializeToFile](./Methods/SerializationHelper-100664030.md) ( <sub>[`T`](./SerializationHelper.md)</sub>, <sub>[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String)</sub> )</sub><sub>Writes object to file to the given by path in json format</sub>


