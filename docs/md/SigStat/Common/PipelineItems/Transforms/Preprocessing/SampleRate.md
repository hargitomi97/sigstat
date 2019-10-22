# [SampleRate](./SampleRate.md)

Namespace: [SigStat]() > [Common](./../../../README.md) > [PipelineItems]() > [Transforms]() > [Preprocessing](./README.md)

Assembly: SigStat.Common.dll

Implements [ILoggerObject](./../../../ILoggerObject.md), [IProgress](./../../../Helpers/IProgress.md), [IPipelineIO](./../../../Pipeline/IPipelineIO.md), [ITransformation](./../../../ITransformation.md)

## Summary
Performs rotation normalization on the online signature

## Constructors

| Name<span><div><a href="#"><img width=225></a></div></span> | Summary<div><a href="#"><img width=525></a></div> | 
| --- | --- | 
| SampleRate (  ) |  | 


## Properties

| Name<span><div><a href="#"><img width=225></a></div></span> | Summary<div><a href="#"><img width=525></a></div> | 
| --- | --- | 
| InputT | Gets or sets the input feature representing the timestamps of an online signature | 
| InputX | Gets or sets the input feature representing the X coordinates of an online signature | 
| InputY | Gets or sets the input feature representing the Y coordinates of an online signature | 
| OutputX | Gets or sets the output feature representing the X coordinates of an online signature | 
| OutputY | Gets or sets the input feature representing the Y coordinates of an online signature | 
| samplerate | Gets or sets the input feature representing the X coordinates of an online signature | 


## Methods

| Name<span><div><a href="#"><img width=225></a></div></span> | Summary<div><a href="#"><img width=525></a></div> | 
| --- | --- | 
| [Transform](./Methods/SampleRate--Transform.md) ( [`Signature`](./../../../Signature.md) ) |  | 


