# [Signer](./Signer.md)

Namespace: [SigStat]() > [Common](./README.md)

Assembly: SigStat.Common.dll

## Summary
Represents a person as a [ID](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.Signer.ID.md) and a list of [Signatures](https://github.com/hargitomi97/sigstat/tree/develop/docs/md/SigStat/Common/SigStat.Common.Signer.Signatures.md).

## Constructors

| Name | Summary | 
| --- | --- | 
| Signer (  ) |  | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | ID | An identifier for the Signer. Keep it unique to be useful for logs. | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[Signature](./Signature.md)> | Signatures | List of signatures that belong to the signer.  (Their origin is not constrained to be genuine.) | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | ToString (  ) | Returns a string representation of a Signer | 


