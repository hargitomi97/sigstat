# [HierarchyElement](./HierarchyElement.md)

Namespace: [SigStat]() > [Common](./../README.md) > [Helpers](./README.md)

Assembly: SigStat.Common.dll

Implements [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerable-1)\<[HierarchyElement](./HierarchyElement.md)>, [IEnumerable](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.IEnumerable)

## Summary
Hierarchical structure to store object

## Constructors

| Name | Summary | 

HierarchyElement (  )<sub>Create an emty element</sub>
HierarchyElement ( [`Object`](https://docs.microsoft.com/en-us/dotnet/api/System.Object) )<sub>Create a new element with content</sub>


## Properties

| Type | Name | Summary | 

[List](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.List-1)\<[HierarchyElement](./HierarchyElement.md)><sub>Children</sub><sub>Gets the children.</sub>
[Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object)<sub>Content</sub><sub>Gets or sets the content.</sub>


## Methods

| Return | Name | Summary | 

[Void](https://docs.microsoft.com/en-us/dotnet/api/System.Void)<sub>[Add](./Methods/HierarchyElement-100664010.md) ( [`HierarchyElement`](./HierarchyElement.md) )</sub><sub></sub>
[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)<sub>[GetCount](./Methods/HierarchyElement-100664012.md) (  )</sub><sub>Returns number of elements under this node and itself</sub>
[Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32)<sub>[GetDepth](./Methods/HierarchyElement-100664011.md) (  )</sub><sub>Return the hierarchy's depth from this node</sub>
[IEnumerator](https://docs.microsoft.com/en-us/dotnet/api/System.Collections.Generic.IEnumerator-1)\<[HierarchyElement](./HierarchyElement.md)><sub>[GetEnumerator](./Methods/HierarchyElement-100664014.md) (  )</sub><sub>Returns an enumerator that iterates through the collection.</sub>
[String](https://docs.microsoft.com/en-us/dotnet/api/System.String)<sub>[ToString](./Methods/HierarchyElement-100664013.md) (  )</sub><sub>Converts to string.</sub>


