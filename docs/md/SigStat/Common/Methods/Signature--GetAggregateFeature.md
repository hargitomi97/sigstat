# [GetAggregateFeature](./Signature--GetAggregateFeature.md)

Aggregate multiple features into one. Example: X, Y features -&gt; P.xy feature.  Use this for example at DTW algorithm input.

| Return | Name | 
| --- | --- | 
| <sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[]></sub> | <sub>[GetAggregateFeature](./Signature--GetAggregateFeature.md) ( [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`FeatureDescriptor`](./../FeatureDescriptor.md)> fs )</sub> | 


#### Parameters
**`fs`**  [`List`](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[`FeatureDescriptor`](./../FeatureDescriptor.md)><br>List of features to aggregate.
#### Returns
[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[]><br>
Aggregated feature value