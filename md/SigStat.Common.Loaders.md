#### DataSetLoader

<sub>Abstract loader class to inherit from. Implements ILogger.</sub>
```csharp
public abstract class SigStat.Common.Loaders.DataSetLoader
    : IDataSetLoader, ILoggerObject

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `ILogger` | <sub>Logger</sub> | <sub></sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IEnumerable<Signer>` | <sub>EnumerateSigners()</sub> | <sub></sub> | 
| `IEnumerable<Signer>` | <sub>EnumerateSigners(Predicate<Signer>)</sub> | <sub></sub> | 


#### IDataSetLoader

<sub>Exposes a function to enable loading collections of `SigStat.Common.Signer`s.  Base abstract class: `SigStat.Common.Loaders.DataSetLoader`.</sub>
```csharp
public interface SigStat.Common.Loaders.IDataSetLoader

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IEnumerable<Signer>` | <sub>EnumerateSigners()</sub> | <sub>Enumerates all signers of the database</sub> | 
| `IEnumerable<Signer>` | <sub>EnumerateSigners(Predicate<Signer>)</sub> | <sub>Enumerates all signers of the database</sub> | 


#### ImageLoader

<sub>DataSetLoader for Image type databases.  Similar format to Svc2004Loader, but finds png images.</sub>
```csharp
public class SigStat.Common.Loaders.ImageLoader
    : DataSetLoader, IDataSetLoader, ILoggerObject

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IEnumerable<Signer>` | <sub>EnumerateSigners(Predicate<Signer>)</sub> | <sub></sub> | 


###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>LoadImage(Signature, String)</sub> | <sub>Load one image.</sub> | 
| `Signature` | <sub>LoadSignature(String)</sub> | <sub></sub> | 


#### ImageSaver

<sub>Get the `SigStat.Common.Features.Image` of a `SigStat.Common.Signature` and save it as png file.</sub>
```csharp
public static class SigStat.Common.Loaders.ImageSaver

```

###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>Save(Signature, String)</sub> | <sub>Saves a png image file to the specified `path`.</sub> | 


#### MCYTLoader

<sub>`SigStat.Common.Loaders.DataSetLoader` for the MCYT dataset</sub>
```csharp
public class SigStat.Common.Loaders.MCYTLoader
    : DataSetLoader, IDataSetLoader, ILoggerObject

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>DatabasePath</sub> | <sub>Gets or sets the database path.</sub> | 
| `Boolean` | <sub>StandardFeatures</sub> | <sub>Gets or sets a value indicating whether features are also loaded as `SigStat.Common.Features`</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IEnumerable<Signer>` | <sub>EnumerateSigners(Predicate<Signer>)</sub> | <sub></sub> | 


###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>LoadSignature(Signature, MemoryStream, Boolean)</sub> | <sub>Loads one signature from specified stream.</sub> | 


#### SigComp11ChineseLoader

<sub>`SigStat.Common.Loaders.DataSetLoader` for the SigComp11Chinese dataset</sub>
```csharp
public class SigStat.Common.Loaders.SigComp11ChineseLoader
    : DataSetLoader, IDataSetLoader, ILoggerObject

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>DatabasePath</sub> | <sub>Gets or sets the database path.</sub> | 
| `Boolean` | <sub>StandardFeatures</sub> | <sub>Gets or sets a value indicating whether features are also loaded as `SigStat.Common.Features`</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IEnumerable<Signer>` | <sub>EnumerateSigners(Predicate<Signer>)</sub> | <sub></sub> | 


###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>LoadSignature(Signature, MemoryStream, Boolean)</sub> | <sub>Loads one signature from specified stream.</sub> | 


#### SigComp11DutchLoader

<sub>`SigStat.Common.Loaders.DataSetLoader` for the SigComp11Dutch dataset</sub>
```csharp
public class SigStat.Common.Loaders.SigComp11DutchLoader
    : DataSetLoader, IDataSetLoader, ILoggerObject

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>DatabasePath</sub> | <sub>Gets or sets the database path.</sub> | 
| `Boolean` | <sub>StandardFeatures</sub> | <sub>Gets or sets a value indicating whether features are also loaded as `SigStat.Common.Features`</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IEnumerable<Signer>` | <sub>EnumerateSigners(Predicate<Signer>)</sub> | <sub></sub> | 


###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>LoadSignature(Signature, MemoryStream, Boolean)</sub> | <sub>Loads one signature from specified stream.</sub> | 


#### SigComp13JapaneseLoader

<sub>`SigStat.Common.Loaders.DataSetLoader` for the SigComp13Japanese dataset</sub>
```csharp
public class SigStat.Common.Loaders.SigComp13JapaneseLoader
    : DataSetLoader, IDataSetLoader, ILoggerObject

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>DatabasePath</sub> | <sub>Gets or sets the database path.</sub> | 
| `Boolean` | <sub>StandardFeatures</sub> | <sub>Gets or sets a value indicating whether features are also loaded as `SigStat.Common.Features`</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IEnumerable<Signer>` | <sub>EnumerateSigners(Predicate<Signer>)</sub> | <sub></sub> | 


###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>LoadSignature(Signature, MemoryStream, Boolean)</sub> | <sub>Loads one signature from specified stream.</sub> | 


#### SigComp15GermanLoader

<sub>`SigStat.Common.Loaders.DataSetLoader` for the SigComp15German dataset</sub>
```csharp
public class SigStat.Common.Loaders.SigComp15GermanLoader
    : DataSetLoader, IDataSetLoader, ILoggerObject

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>DatabasePath</sub> | <sub>Gets or sets the database path.</sub> | 
| `Boolean` | <sub>StandardFeatures</sub> | <sub>Gets or sets a value indicating whether features are also loaded as `SigStat.Common.Features`</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IEnumerable<Signer>` | <sub>EnumerateSigners(Predicate<Signer>)</sub> | <sub></sub> | 


###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>LoadSignature(Signature, MemoryStream, Boolean)</sub> | <sub>Loads one signature from specified stream.</sub> | 


#### SigComp19OnlineLoader

<sub>`SigStat.Common.Loaders.DataSetLoader` for the SigComp19 dataset</sub>
```csharp
public class SigStat.Common.Loaders.SigComp19OnlineLoader
    : DataSetLoader, IDataSetLoader, ILoggerObject

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>DatabasePath</sub> | <sub>Gets or sets the database path.</sub> | 
| `Boolean` | <sub>StandardFeatures</sub> | <sub>Gets or sets a value indicating whether features are also loaded as `SigStat.Common.Features`</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IEnumerable<Signer>` | <sub>EnumerateSigners(Predicate<Signer>)</sub> | <sub></sub> | 


###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>LoadSignature(Signature, MemoryStream, Boolean)</sub> | <sub>Loads one signature from specified stream.</sub> | 


#### Svc2004

<sub>Set of features containing raw data loaded from SVC2004-format database.</sub>
```csharp
public static class SigStat.Common.Loaders.Svc2004

```

###### Static Fields

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `FeatureDescriptor[]` | <sub>All</sub> | <sub>A list of all Svc2004 feature descriptors</sub> | 
| `FeatureDescriptor<List<Int32>>` | <sub>Altitude</sub> | <sub>Altitude values from the online signature imported from the SVC2004 database</sub> | 
| `FeatureDescriptor<List<Int32>>` | <sub>Azimuth</sub> | <sub>Azimuth values from the online signature imported from the SVC2004 database</sub> | 
| `FeatureDescriptor<List<Int32>>` | <sub>Button</sub> | <sub>Button values from the online signature imported from the SVC2004 database</sub> | 
| `FeatureDescriptor<List<Int32>>` | <sub>Pressure</sub> | <sub>Pressure values from the online signature imported from the SVC2004 database</sub> | 
| `FeatureDescriptor<List<Int32>>` | <sub>T</sub> | <sub>T values from the online signature imported from the SVC2004 database</sub> | 
| `FeatureDescriptor<List<Int32>>` | <sub>X</sub> | <sub>X cooridnates from the online signature imported from the SVC2004 database</sub> | 
| `FeatureDescriptor<List<Int32>>` | <sub>Y</sub> | <sub>Y cooridnates from the online signature imported from the SVC2004 database</sub> | 


#### Svc2004Loader

<sub>Loads SVC2004-format database from .zip</sub>
```csharp
public class SigStat.Common.Loaders.Svc2004Loader
    : DataSetLoader, IDataSetLoader, ILoggerObject

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `String` | <sub>DatabasePath</sub> | <sub>Gets or sets the database path.</sub> | 
| `Predicate<Signer>` | <sub>SignerFilter</sub> | <sub>Ignores any signers during the loading, that do not match the predicate</sub> | 
| `Boolean` | <sub>StandardFeatures</sub> | <sub>Gets or sets a value indicating whether features are also loaded as `SigStat.Common.Features`</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `IEnumerable<Signer>` | <sub>EnumerateSigners(Predicate<Signer>)</sub> | <sub></sub> | 
| `void` | <sub>LoadSignature(Signature, String, Boolean)</sub> | <sub>Loads one signature from specified file path.</sub> | 


###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `void` | <sub>LoadSignature(Signature, Stream, Boolean)</sub> | <sub>Loads one signature from specified file path.</sub> | 


