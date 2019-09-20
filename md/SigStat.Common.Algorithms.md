#### Dtw

<sub>Dynamic Time Warping algorithm</sub>
```csharp
public class SigStat.Common.Algorithms.Dtw

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `List<ValueTuple<Int32, Int32>>` | <sub>ForwardPath</sub> | <sub>Gets the list of points representing the shortest path.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>Compute(Double[][], Double[][])</sub> | <sub>Generate shortest path between the two sequences.</sub> | 
| `Double` | <sub>Distance(Double[], Double[])</sub> | <sub>Calculates distance between two points.  Distance method can be set in ctor.</sub> | 


#### DtwPy

<sub>A simple implementation of the DTW algorithm.</sub>
```csharp
public static class SigStat.Common.Algorithms.DtwPy

```

###### Static Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Double` | <sub>Dtw(IEnumerable<P>, IEnumerable<P>, Func<P, P, Double>)</sub> | <sub>Calculates the distance between two time sequences</sub> | 
| `Double` | <sub>EuclideanDistance(Double[], Double[])</sub> | <sub>Calculates the euclidean distance of two vectors</sub> | 


#### HSCPThinningStep

<sub>HSCP thinning algorithm  http://www.ppgia.pucpr.br/~facon/Afinamento/1987holt.pdf</sub>
```csharp
public class SigStat.Common.Algorithms.HSCPThinningStep

```

###### Properties

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Nullable<Boolean>` | <sub>ResultChanged</sub> | <sub>Gets whether the last `SigStat.Common.Algorithms.HSCPThinningStep.Scan(System.Boolean[0:,0:])` call was effective.</sub> | 


###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Boolean[,]` | <sub>Scan(Boolean[,])</sub> | <sub>Does one step of the thinning. Call it iteratively while ResultChanged.</sub> | 


#### PatternMatching3x3

<sub>Binary 3x3 pattern matcher with rotating option.</sub>
```csharp
public class SigStat.Common.Algorithms.PatternMatching3x3

```

###### Methods

| <sub>Type</sub> | <sub>Name</sub> | <sub>Summary</sub> | 
| --- | --- | --- | 
| `Boolean` | <sub>Match(Boolean[,])</sub> | <sub>Match the 3x3 input with the 3x3 pattern.</sub> | 
| `Boolean` | <sub>RotMatch(Boolean[,])</sub> | <sub>Match the 3x3 input with the 3x3 pattern from all 4 directions.</sub> | 


