**This is for sorting the data or selectedItem and setItem.**

```javascript
useEffect(() => {
  const sortedData = sorting
    ? [...modified].sort((a, b) => {
        const textA = typeof text === "function" ? text(a) : a[text];
        const textB = typeof text === "function" ? text(b) : b[text];
        return textA.localeCompare(textB);
      })
    : modified;
  console.log("sortedData");
  setModified(sortedData);

  const defaultItem = sortedData[0]; // Get the first item after sorting
  setSelectedItems([defaultItem]); // Set it as the selected item
  setItem(defaultItem);
}, [sorting]);
```
