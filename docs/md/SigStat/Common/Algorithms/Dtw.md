# [Dtw](./Dtw.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Algorithms](./README.md)

Assembly: SigStat.Common.dll

## Summary
Dynamic Time Warping algorithm

## Constructors

| Name | Summary | 
| --- | --- | 
| [Dtw](./../../../ctor/Dtw-100664126.md) (  ) | Initialize the DTW algorithm with the default Euclidean distance method. | 
| [Dtw](./../../../ctor/Dtw-100664127.md) ( [`Func`](https://docs.microsoft.com/en-us/dotnet/api/System.Func-3)\<[`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[], [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)> distMethod ) | Initialize the DTW algorithm with given distance method. | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[ValueTuple](https://docs.microsoft.com/en-us/dotnet/api/System.ValueTuple-2)\<[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32), [Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)>> | ForwardPath | Gets the list of points representing the shortest path. | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | [Compute](./Methods/Dtw-100664128.md) ( [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[] signature1, [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[] signature2 ) |  | 
| [Double](https://docs.microsoft.com/en-us/dotnet/api/System.Double) | [Distance](./Methods/Dtw-100664129.md) ( [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[] p1, [`Double`](https://docs.microsoft.com/en-us/dotnet/api/System.Double)[] p2 ) | Calculates distance between two points.  Distance method can be set in ctor. | 


