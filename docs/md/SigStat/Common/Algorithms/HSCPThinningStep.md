# [HSCPThinningStep](./HSCPThinningStep.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Algorithms](./README.md)

Assembly: SigStat.Common.dll

## Summary
HSCP thinning algorithm  http://www.ppgia.pucpr.br/~facon/Afinamento/1987holt.pdf

## Constructors

| Name | Summary | 
| --- | --- | 
| HSCPThinningStep (  ) |  | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [Nullable](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)> | ResultChanged | Gets whether the last [Algorithms.HSCPThinningStep.Scan](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/HSCPThinningStep.md) call was effective. | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[] | [Scan](./Methods/HSCPThinningStep-100664156.md) ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[] ) | Does one step of the thinning. Call it iteratively while ResultChanged. | 


