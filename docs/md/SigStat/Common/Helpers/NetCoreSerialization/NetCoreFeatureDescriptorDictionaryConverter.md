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
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | CanConvert ( [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) objectType ) |  | 
| [Dictionary](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2)\<[String](https://docs.microsoft.com/en-us/dotnet/api/System.String), [FeatureDescriptor](./../../FeatureDescriptor.md)> | Read ( out [`Utf8JsonReader`](https://docs.microsoft.com/en-us/dotnet/api/System.Text.Json.Utf8JsonReader) reader, [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) typeToConvert, [`JsonSerializerOptions`](https://docs.microsoft.com/en-us/dotnet/api/System.Text.Json.JsonSerializerOptions) options ) |  | 
| void | Write ( [`Utf8JsonWriter`](https://docs.microsoft.com/en-us/dotnet/api/System.Text.Json.Utf8JsonWriter) writer, [`Dictionary`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.Dictionary-2)\<[`String`](https://docs.microsoft.com/en-us/dotnet/api/System.String), [`FeatureDescriptor`](./../../FeatureDescriptor.md)> value, [`JsonSerializerOptions`](https://docs.microsoft.com/en-us/dotnet/api/System.Text.Json.JsonSerializerOptions) options ) |  | 


