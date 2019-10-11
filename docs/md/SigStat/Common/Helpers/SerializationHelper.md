# [SerializationHelper](./SerializationHelper.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

## Summary
Json serialization and deserialization using the custom resolver  [VerifierResolver](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Helpers/Serialization/VerifierResolver.md)

## Constructors

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>SerializationHelper (  )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub></sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


## Static Methods

| Name | Summary | 
| --- | --- | 
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>[Deserialize](./Methods/SerializationHelper-100664071.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Constructs object from strings that were serialized previously</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>[DeserializeFromFile](./Methods/SerializationHelper-100664072.md) ( [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Constructs object from file given by a path</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>[GetSettings](./Methods/SerializationHelper-100664070.md) (  )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Settings used for the serialization methods</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>[JsonSerialize](./Methods/SerializationHelper-100664074.md) ( [`T`](./SerializationHelper.md) )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Creates json string from object</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>
| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>[JsonSerializeToFile](./Methods/SerializationHelper-100664073.md) ( [`T`](./SerializationHelper.md), [`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String) )</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>| <p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p><sub>Writes object to file to the given by path in json format</sub><p style="margin-top: 0.2em; margin-bottom: 0em;">&nbsp;</p>| <br>


