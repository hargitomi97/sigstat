# [NetCoreFeatureDescriptorConverter](./NetCoreFeatureDescriptorConverter.md)

Namespace: [SigStat]() > [Common](./../../README.md) > [Helpers](./../README.md) > [NetCoreSerialization](./README.md)

Assembly: SigStat.Common.dll


## Constructors

| Name | Summary | 
| --- | --- | 
| NetCoreFeatureDescriptorConverter (  ) |  | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean) | [CanConvert](./Methods/NetCoreFeatureDescriptorConverter-100664068.md) ( [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) typeToConvert ) |  | 
| [FeatureDescriptor](./../../FeatureDescriptor.md) | [Read](./Methods/NetCoreFeatureDescriptorConverter-100664069.md) ( out [`Utf8JsonReader`](https://docs.microsoft.com/en-us/dotnet/api/System.Text.Json.Utf8JsonReader) reader, [`Type`](https://docs.microsoft.com/en-us/dotnet/api/System.Type) typeToConvert, [`JsonSerializerOptions`](https://docs.microsoft.com/en-us/dotnet/api/System.Text.Json.JsonSerializerOptions) options ) |  | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Write](./Methods/NetCoreFeatureDescriptorConverter-100664070.md) ( [`Utf8JsonWriter`](https://docs.microsoft.com/en-us/dotnet/api/System.Text.Json.Utf8JsonWriter) writer, [`FeatureDescriptor`](./../../FeatureDescriptor.md) value, [`JsonSerializerOptions`](https://docs.microsoft.com/en-us/dotnet/api/System.Text.Json.JsonSerializerOptions) options ) |  | 


