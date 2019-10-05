# [HSCPThinningStep](./HSCPThinningStep.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Algorithms](./README.md)

Assembly: SigStat.Common.dll

## Summary
HSCP thinning algorithm  http://www.ppgia.pucpr.br/~facon/Afinamento/1987holt.pdf

## Constructors

| Name | Summary | 
| --- | --- | 
| HSCPThinningStep (  ) | <sub></sub> | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [Nullable](https://docs.microsoft.com/en-us/dotnet/api/System.Nullable-1)\<[Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)> | <sub>ResultChanged</sub> | <sub>Gets whether the last [Algorithms.HSCPThinningStep.Scan](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/HSCPThinningStep.md) call was effective.</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Boolean](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[] | <sub>[Scan](./Methods/HSCPThinningStep-100664156.md) ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[] )</sub> | <sub>Does one step of the thinning. Call it iteratively while ResultChanged.</sub> | 


