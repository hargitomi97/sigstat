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
| [List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[HierarchyElement](./HierarchyElement.md)> | Children | <sub>Gets the children.</sub> | 
| [Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object) | Content | <sub>Gets or sets the content.</sub> | 


## Methods

| Return | Name | Summary | 
| --- | --- | --- | 
| [Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void) | [Add](./Methods/HierarchyElement-100664010.md) ( [`HierarchyElement`](./HierarchyElement.md) ) | <sub></sub> | 
| [Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) | [GetCount](./Methods/HierarchyElement-100664012.md) (  ) | <sub>Returns number of elements under this node and itself</sub> | 
| [Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32) | [GetDepth](./Methods/HierarchyElement-100664011.md) (  ) | <sub>Return the hierarchy's depth from this node</sub> | 
| [IEnumerator](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerator-1)\<[HierarchyElement](./HierarchyElement.md)> | [GetEnumerator](./Methods/HierarchyElement-100664014.md) (  ) | <sub>Returns an enumerator that iterates through the collection.</sub> | 
| [String](https://docs.microsoft.com/en-us/dotnet/api/System.String) | [ToString](./Methods/HierarchyElement-100664013.md) (  ) | <sub>Converts to string.</sub> | 


