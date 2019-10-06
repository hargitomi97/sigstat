# [Dtw](./Dtw.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Algorithms](./README.md)

Assembly: SigStat.Common.dll

## Summary
Dynamic Time Warping algorithm

## Constructors

| Name | Summary | 

Dtw (  )<sub>Initialize the DTW algorithm with the default Euclidean distance method.</sub>
Dtw ( [Func](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> )<sub>Initialize the DTW algorithm with given distance method.</sub>


## Properties

| Type | Name | Summary | 

<sub>[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[ValueTuple](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple-2)\<[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32), [Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)>></sub><sub>ForwardPath</sub><sub>Gets the list of points representing the shortest path.</sub>


## Methods

| Return | Name | Summary | 

<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub><sub>[Compute](./Methods/Dtw-100664150.md) ( [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[] )</sub><sub></sub>
<sub>[Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double)</sub><sub>[Distance](./Methods/Dtw-100664151.md) ( [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[] )</sub><sub>Calculates distance between two points.  Distance method can be set in ctor.</sub>


