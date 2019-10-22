# [HSCPThinningStep](./HSCPThinningStep.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Algorithms](./README.md)

Assembly: SigStat.Common.dll

## Summary
HSCP thinning algorithm  http://www.ppgia.pucpr.br/~facon/Afinamento/1987holt.pdf

## Constructors

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| HSCPThinningStep (  ) |  | 


## Properties

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| ResultChanged | Gets whether the last [Scan](https://github.com/hargitomi97/sigstat/blob/master/docs/md/SigStat/Common/Algorithms/Methods/Scan.md) call was effective. | 


## Methods

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| [Scan](./Methods/HSCPThinningStep--Scan.md) ( [`Boolean`](https://docs.microsoft.com/en-us/dotnet/api/System.Boolean)[] ) | Does one step of the thinning. Call it iteratively while ResultChanged. | 


