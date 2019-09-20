#### DistanceFunctionJsonConverter

<sub>Helper class for serializing distance functions</sub>
```csharp
public class SigStat.Common.Helpers.Serialization.DistanceFunctionJsonConverter
    : JsonConverter

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Boolean` | <sub>CanConvert(Type)</sub> | <sub></sub> | 
| `Object` | <sub>ReadJson(JsonReader, Type, Object, JsonSerializer)</sub> | <sub></sub> | 
| `void` | <sub>WriteJson(JsonWriter, Object, JsonSerializer)</sub> | <sub></sub> | 


#### FeatureStreamingContextState

<sub>SerializationContext for serializing SigStat objects</sub>
```csharp
public class SigStat.Common.Helpers.Serialization.FeatureStreamingContextState

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<String>` | <sub>KnownFeatureKeys</sub> | <sub>A list of already serialized FeatureDescriptor keys</sub> | 


#### RectangleFConverter

<sub>Custom serializer for `System.Drawing.RectangleF` objects</sub>
```csharp
public class SigStat.Common.Helpers.Serialization.RectangleFConverter
    : JsonConverter

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Boolean` | <sub>CanConvert(Type)</sub> | <sub>Tells if the current object is of the correct type</sub> | 
| `Object` | <sub>ReadJson(JsonReader, Type, Object, JsonSerializer)</sub> | <sub>Overwrite of the `Newtonsoft.Json.JsonConverter` method  Deserializes the `System.Drawing.RectangleF` json created by the same class</sub> | 
| `void` | <sub>WriteJson(JsonWriter, Object, JsonSerializer)</sub> | <sub>Overwrite of the `Newtonsoft.Json.JsonConverter` method  Serializes the `System.Drawing.RectangleF` to json</sub> | 


