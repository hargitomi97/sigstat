# [HierarchyElement](./HierarchyElement.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[HierarchyElement](./HierarchyElement.md)>, [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)

## Summary
Hierarchical structure to store object

## Constructors

| Name | Summary | 
| --- | --- | 
| HierarchyElement (  ) | Create an emty element | 
| HierarchyElement ( [`Object`](https://docs.microsoft.com/en-us/dotnet/api/System.Object) ) | Create a new element with content | 


## Properties

| Type | Name | Summary | 
| --- | --- | --- | 
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[HierarchyElement](./HierarchyElement.md)> | Children | Gets the children. | 
| [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object) | Content | Gets or sets the content. | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Add](./Methods/HierarchyElement-100664010.md) ( [`HierarchyElement`](./HierarchyElement.md) ) |  | 
| [Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) | [GetCount](./Methods/HierarchyElement-100664012.md) (  ) | Returns number of elements under this node and itself | 
| [Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) | [GetDepth](./Methods/HierarchyElement-100664011.md) (  ) | Return the hierarchy's depth from this node | 
| [IEnumerator](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerator-1)\<[HierarchyElement](./HierarchyElement.md)> | [GetEnumerator](./Methods/HierarchyElement-100664014.md) (  ) | Returns an enumerator that iterates through the collection. | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | [ToString](./Methods/HierarchyElement-100664013.md) (  ) | Converts to string. | 


