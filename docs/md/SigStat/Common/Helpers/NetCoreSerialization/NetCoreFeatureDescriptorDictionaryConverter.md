# [NetCoreFeatureDescriptorDictionaryConverter](./NetCoreFeatureDescriptorDictionaryConverter.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [Helpers](./../README.md) > [NetCoreSerialization](./README.md)

Assembly: SigStat.Common.dll


## Constructors

| Name | Summary | 
| --- | --- | 
| NetCoreFeatureDescriptorDictionaryConverter (  ) |  | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | [CanConvert](./Methods/NetCoreFeatureDescriptorDictionaryConverter-100664072.md) ( [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) objectType ) |  | 
| [Dictionary](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2)\<[String](https://docs.microsoft.com/en-us/dotnet/api/System.String), [FeatureDescriptor](./../../FeatureDescriptor.md)> | [Read](./Methods/NetCoreFeatureDescriptorDictionaryConverter-100664073.md) ( out [`Utf8JsonReader`](https://docs.microsoft.com/en-us/dotnet/api/System.Text.Json.Utf8JsonReader) reader, [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) typeToConvert, [`JsonSerializerOptions`](https://docs.microsoft.com/en-us/dotnet/api/System.Text.Json.JsonSerializerOptions) options ) |  | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Write](./Methods/NetCoreFeatureDescriptorDictionaryConverter-100664074.md) ( [`Utf8JsonWriter`](https://docs.microsoft.com/en-us/dotnet/api/System.Text.Json.Utf8JsonWriter) writer, [`Dictionary`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2)\<[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`FeatureDescriptor`](./../../FeatureDescriptor.md)> value, [`JsonSerializerOptions`](https://docs.microsoft.com/en-us/dotnet/api/System.Text.Json.JsonSerializerOptions) options ) |  | 


