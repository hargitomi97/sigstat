# [HSCPThinningStep](./HSCPThinningStep.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Algorithms](./README.md)

Assembly: SigStat.Common.dll

## Summary
HSCP thinning algorithm  http://www.ppgia.pucpr.br/~facon/Afinamento/1987holt.pdf

## Constructors

| Name | Summary | 
| --- | --- | 
| <sub>HSCPThinningStep (  )</sub><div style="pointer-events:none;cursor:default;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub></sub>| <br>


## Properties

| Name | Summary | 
| --- | --- | 
| <sub>ResultChanged</sub><div style="pointer-events:none;cursor:default;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub>Gets whether the last [Scan](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/HSCPThinningStep.md) call was effective.</sub>| <br>


## Methods

| Name | Summary | 
| --- | --- | 
| <sub>[Scan](./Methods/HSCPThinningStep-100664210.md) ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[] )</sub><div style="pointer-events:none;cursor:default;"><img width=200 style="max-height:100%;max-width:100%;"/></div>| <sub>Does one step of the thinning. Call it iteratively while ResultChanged.</sub>| <br>


