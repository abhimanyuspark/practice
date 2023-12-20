**This is for showing flie and add file image 'url' from the state**

> [!NOTE]
> This is for only demo perpose.
> In actaull api you need to upload a hole file to the server api.

```javascript
const handleFile = (e) => {
  const file = e.target.files[0];
  const pro = URL.createObjectURL(file);
  setFormData((p) => ({ ...p, profile: pro }));
};
```
