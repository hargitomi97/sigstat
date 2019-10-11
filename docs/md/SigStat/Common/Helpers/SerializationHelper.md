# [SerializationHelper](./SerializationHelper.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

## Summary
Json serialization and deserialization using the custom resolver  [VerifierResolver](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Helpers/Serialization/VerifierResolver.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>SerializationHelper (  )</sub><p style="margin-block-start: 0em; margin-block-end: 0em; margin-bottom: 0px; height:0px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <sub></sub>| <br>


## Static Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Deserialize](./Methods/SerializationHelper-100664071.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><p style="margin-block-start: 0em; margin-block-end: 0em; margin-bottom: 0px; height:0px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <sub>Constructs object from strings that were serialized previously</sub>| <br>
| <sub>[DeserializeFromFile](./Methods/SerializationHelper-100664072.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><p style="margin-block-start: 0em; margin-block-end: 0em; margin-bottom: 0px; height:0px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <sub>Constructs object from file given by a path</sub>| <br>
| <sub>[GetSettings](./Methods/SerializationHelper-100664070.md) (  )</sub><p style="margin-block-start: 0em; margin-block-end: 0em; margin-bottom: 0px; height:0px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <sub>Settings used for the serialization methods</sub>| <br>
| <sub>[JsonSerialize](./Methods/SerializationHelper-100664074.md) ( [`T`](./SerializationHelper.md) )</sub><p style="margin-block-start: 0em; margin-block-end: 0em; margin-bottom: 0px; height:0px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <sub>Creates json string from object</sub>| <br>
| <sub>[JsonSerializeToFile](./Methods/SerializationHelper-100664073.md) ( [`T`](./SerializationHelper.md), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><p style="margin-block-start: 0em; margin-block-end: 0em; margin-bottom: 0px; height:0px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <sub>Writes object to file to the given by path in json format</sub>| <br>


