# [EndpointExtraction](./EndpointExtraction.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Transforms](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../ILoggerObject.md), [IProgress](./../Helpers/IProgress.md), [IPipelineIO](./../Pipeline/IPipelineIO.md), [ITransformation](./../ITransformation.md)

## Summary
Extracts EndPoints and CrossingPoints from Skeleton.  <br>Default Pipeline Input: (bool[,]) Skeleton <br>Default Pipeline Output: (List{Point}) EndPoints, (List{Point}) CrossingPoints

## Constructors

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| EndpointExtraction (  ) |  | 


## Properties

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| OutputCrossingPoints | OutputCrossingPoints | 
| OutputEndpoints | OutputEndpoints | 
| Skeleton | Binary representation of an image | 


## Methods

| Name | Summary<div><a href="#"><img width=466></a></div> | 
| --- | --- | 
| [Transform](./Methods/EndpointExtraction--Transform.md) ( [`Signature`](./../Signature.md) ) |  | 


