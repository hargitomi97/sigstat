#### Verifier

<sub>Uses pipelines to transform, train on, and classify `SigStat.Common.Signature` objects.</sub>
```csharp
public class SigStat.Common.Model.Verifier
    : ILoggerObject

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Dictionary<String, FeatureDescriptor>` | <sub>AllFeatures</sub> | <sub>This property is used by the Serializer to access a list of all FeatureDescriptors</sub> | 
| `IClassifier` | <sub>Classifier</sub> | <sub>Gets or sets the classifier pipeline. Hands over the Logger object.</sub> | 
| `ILogger` | <sub>Logger</sub> | <sub>Gets or sets the class responsible for logging</sub> | 
| `SequentialTransformPipeline` | <sub>Pipeline</sub> | <sub>Gets or sets the transform pipeline. Hands over the Logger object.</sub> | 
| `ISignerModel` | <sub>SignerModel</sub> | <sub>Gets or sets the signer model.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>Test(Signature)</sub> | <sub>Verifies the genuinity of `signature`.</sub> | 
| `void` | <sub>Train(List<Signature>)</sub> | <sub>Trains the verifier with a list of signatures. Uses the `SigStat.Common.Model.Verifier.Pipeline` to extract features,  and `SigStat.Common.Model.Verifier.Classifier` to find an optimized limit.</sub> | 


