#### EvenNSampler

<sub>Selects the first N signatures with even index for training</sub>
```csharp
public class SigStat.Common.Framework.Samplers.EvenNSampler
    : Sampler

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Int32` | <sub>N</sub> | <sub>Count of signatures used for training</sub> | 


#### FirstNSampler

<sub>Selects the first N signatures for training</sub>
```csharp
public class SigStat.Common.Framework.Samplers.FirstNSampler
    : Sampler

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Int32` | <sub>N</sub> | <sub>Count of signatures used for training</sub> | 


#### LastNSampler

<sub>Selects the first N signatures for training</sub>
```csharp
public class SigStat.Common.Framework.Samplers.LastNSampler
    : Sampler

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Int32` | <sub>N</sub> | <sub>Count of signatures used for training</sub> | 


#### OddNSampler

<sub>Selects the first N signatures with odd index for training</sub>
```csharp
public class SigStat.Common.Framework.Samplers.OddNSampler
    : Sampler

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Int32` | <sub>N</sub> | <sub>Count of signatures used for training</sub> | 


#### UniversalSampler

<sub>Selects a given number of signatures for training and testing</sub>
```csharp
public class SigStat.Common.Framework.Samplers.UniversalSampler
    : Sampler

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Int32` | <sub>TestCount</sub> | <sub>Count of signatures to use for testing</sub> | 
| `Int32` | <sub>TrainingCount</sub> | <sub>Count of signatures to use for training</sub> | 


