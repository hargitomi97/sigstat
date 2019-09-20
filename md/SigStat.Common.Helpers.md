#### ExcelHelper

<sub>Extension methods for common EPPlus tasks</sub>
```csharp
public static class SigStat.Common.Helpers.ExcelHelper

```

###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>FormatAsTable(this ExcelRange, ExcelColor = Primary, Boolean = True, Boolean = True)</sub> | <sub>Format cells in the range into a table</sub> | 
| `Int32` | <sub>FormatAsTableWithTitle(this ExcelRange, String, ExcelColor = Primary, Boolean = True, Boolean = True)</sub> | <sub>Format cells in the range into a table with possible title</sub> | 
| `void` | <sub>InsertColumnChart(this ExcelWorksheet, ExcelRange, Int32, Int32, String, String = null, String = null, ExcelRange = null, Int32 = -1, Int32 = -1, String = null)</sub> | <sub>Draws a column chart for the given data</sub> | 
| `ExcelRange` | <sub>InsertDictionary(this ExcelWorksheet, Int32, Int32, IEnumerable<KeyValuePair<TKey, TValue>>, String = null, ExcelColor = Primary, String = null)</sub> | <sub>Insert table from key-value pairs</sub> | 
| `void` | <sub>InsertHierarchicalList(this ExcelWorksheet, Int32, Int32, HierarchyElement, String = null, ExcelColor = Primary)</sub> | <sub>Insert a hierarchical list in tree style into the worksheet</sub> | 
| `void` | <sub>InsertLegend(this ExcelRange, String, String = null, ExcelColor = Info)</sub> | <sub>Insert legend</sub> | 
| `void` | <sub>InsertLineChart(this ExcelWorksheet, ExcelRange, Int32, Int32, String, String = null, String = null, ExcelRange = null, Int32 = -1, Int32 = -1, String = null)</sub> | <sub>Draws a line chart for the given data</sub> | 
| `void` | <sub>InsertLink(this ExcelRange, String)</sub> | <sub>Creates a link to given sheet</sub> | 
| `void` | <sub>InsertLink(this ExcelRange, String, String)</sub> | <sub>Creates a link to given sheet</sub> | 
| `ExcelRange` | <sub>InsertTable(this ExcelWorksheet, Int32, Int32, Object[,], String = null, ExcelColor = Primary, Boolean = True, Boolean = True, String = null)</sub> | <sub>Insert table filled with data from a 2D array</sub> | 
| `ExcelRange` | <sub>InsertTable(this ExcelWorksheet, Int32, Int32, Double[,], String = null, ExcelColor = Primary, Boolean = True, Boolean = True, String = null)</sub> | <sub>Insert table filled with data from a 2D array</sub> | 
| `ExcelRange` | <sub>InsertTable(this ExcelWorksheet, Int32, Int32, IEnumerable<T>, String = null, ExcelColor = Primary, Boolean = True, String = null)</sub> | <sub>Insert table filled with data from a 2D array</sub> | 
| `void` | <sub>InsertText(this ExcelWorksheet, Int32, Int32, String, TextLevel = Normal)</sub> | <sub>Inserts text into the defined cell, and format to match text level</sub> | 
| `void` | <sub>Merge(this ExcelRangeBase)</sub> | <sub>Merge all cells into one in the range.</sub> | 


#### FeatureDescriptorJsonConverter

<sub>Custom serializer for `SigStat.Common.FeatureDescriptor` objects</sub>
```csharp
public class SigStat.Common.Helpers.FeatureDescriptorJsonConverter
    : JsonConverter

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Boolean` | <sub>CanConvert(Type)</sub> | <sub>Tells if the current object is of the correct type</sub> | 
| `Object` | <sub>ReadJson(JsonReader, Type, Object, JsonSerializer)</sub> | <sub>Overwrite of the `Newtonsoft.Json.JsonConverter` method  Deserializes the `SigStat.Common.FeatureDescriptor` json created by the this class</sub> | 
| `void` | <sub>WriteJson(JsonWriter, Object, JsonSerializer)</sub> | <sub>Overwrite of the `Newtonsoft.Json.JsonConverter` method  Serializes the `SigStat.Common.FeatureDescriptor` to json with type depending on if it was serialized earlier or not</sub> | 


#### FeatureDescriptorTJsonConverter

<sub>Custom serializer for `SigStat.Common.FeatureDescriptor`1` objects</sub>
```csharp
public class SigStat.Common.Helpers.FeatureDescriptorTJsonConverter
    : JsonConverter

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Boolean` | <sub>CanConvert(Type)</sub> | <sub>Tells if the current object is of the correct type</sub> | 
| `Object` | <sub>ReadJson(JsonReader, Type, Object, JsonSerializer)</sub> | <sub>Overwrite of the `Newtonsoft.Json.JsonConverter` method  Deserializes the `SigStat.Common.FeatureDescriptor`1` json created by the this class</sub> | 
| `void` | <sub>WriteJson(JsonWriter, Object, JsonSerializer)</sub> | <sub>Overwrite of the `Newtonsoft.Json.JsonConverter` method  Serializes the `SigStat.Common.FeatureDescriptor`1` to json with type depending on if it was serialized earlier or not</sub> | 


#### HierarchyElement

<sub>Hierarchical structure to store object</sub>
```csharp
public class SigStat.Common.Helpers.HierarchyElement
    : IEnumerable<HierarchyElement>, IEnumerable

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<HierarchyElement>` | <sub>Children</sub> | <sub>Gets the children.</sub> | 
| `Object` | <sub>Content</sub> | <sub>Gets or sets the content.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Add(HierarchyElement)</sub> | <sub>Adds the specified element as a child</sub> | 
| `Int32` | <sub>GetCount()</sub> | <sub>Returns number of elements under this node and itself</sub> | 
| `Int32` | <sub>GetDepth()</sub> | <sub>Return the hierarchy's depth from this node</sub> | 
| `IEnumerator<HierarchyElement>` | <sub>GetEnumerator()</sub> | <sub>Returns an enumerator that iterates through the collection.</sub> | 
| `String` | <sub>ToString()</sub> | <sub>Converts to string.</sub> | 


#### IProgress

<sub>Enables progress tracking by expsoing the `SigStat.Common.Helpers.IProgress.Progress` property and the `SigStat.Common.Helpers.IProgress.ProgressChanged` event.</sub>
```csharp
public interface SigStat.Common.Helpers.IProgress

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Int32` | <sub>Progress</sub> | <sub>Gets the current progress in percentage.</sub> | 


###### Events

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `EventHandler<Int32>` | <sub>ProgressChanged</sub> | <sub>Invoked whenever the `SigStat.Common.Helpers.IProgress.Progress` property is changed.</sub> | 


#### SerializationHelper

<sub>Json serialization and deserialization using the custom resolver  `SigStat.Common.Helpers.Serialization.VerifierResolver`</sub>
```csharp
public class SigStat.Common.Helpers.SerializationHelper

```

###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `T` | <sub>Deserialize(String)</sub> | <sub>Constructs object from strings that were serialized previously</sub> | 
| `T` | <sub>DeserializeFromFile(String)</sub> | <sub>Constructs object from file given by a path</sub> | 
| `JsonSerializerSettings` | <sub>GetSettings()</sub> | <sub>Settings used for the serialization methods</sub> | 
| `String` | <sub>JsonSerialize(T)</sub> | <sub>Creates json string from object</sub> | 
| `void` | <sub>JsonSerializeToFile(T, String)</sub> | <sub>Writes object to file to the given by path in json format</sub> | 


#### SimpleConsoleLogger

<sub>A easy-to-use class to log pipeline messages, complete with filtering levels and multi-thread support.</sub>
```csharp
public class SigStat.Common.Helpers.SimpleConsoleLogger
    : ILogger

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `LogLevel` | <sub>LogLevel</sub> | <sub>All events below this level will be filtered</sub> | 


###### Events

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `ErrorEventHandler` | <sub>Logged</sub> | <sub>Occurs when an error is logged</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IDisposable` | <sub>BeginScope(TState)</sub> | <sub></sub> | 
| `Boolean` | <sub>IsEnabled(LogLevel)</sub> | <sub></sub> | 
| `void` | <sub>Log(LogLevel, EventId, TState, Exception, Func<TState, Exception, String>)</sub> | <sub></sub> | 


