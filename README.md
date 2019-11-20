# AIOMoji Quicktask Bookmarklet
A Bookmarklet that creates a QT for Aiomoji.

```javascript
javascript: (function () 
{ var url = window.location.href;
    stringUrl = String(url);
    if (stringUrl.includes("solebox"))
    {
        stringUrl = "https://www.aiomoji.io/quicktask/add?storetype=solebox&url=" + stringUrl;
        document.location = stringUrl;
    }
})()
```
