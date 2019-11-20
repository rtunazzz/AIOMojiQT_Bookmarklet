# AIOMoji Quicktask Bookmarklet
A Bookmarklet that creates a QT for Aiomoji.

- Works for **Chrome**, not sure if it'd work for any other browsers but feel free to try.
- Currently only supports Solebox QTs

```javascript
javascript: (function () { 
    let stringUrl = String(window.location.href);

    try {
        if (String(stringUrl).toLowerCase().includes("solebox")) {
            document.location = `https://www.aiomoji.io/quicktask/add?storetype=solebox&url=${stringUrl}`;
        };
    } catch (err) {
    };
})();
```

## How to set it up:
- Make sure you have your bookmark bar visible (on Mac: ⇧⌘)
- Copy the code above
- Bookmark this page (on Mac: ⌘D)
- Right click on the bookmark → Edit...
- Paste the code above into the `URL` field
**All set up!**
Now, just navigate to a product page, press the Bookmark and it will automatically start a Quicktask.

# Link for a setup video:
https://i.imgur.com/yPlNyQv.mp4

-------------------------------

![Salute](https://www.emojirequest.com/images/SalutingEmoji.jpg)


**Special thanks to Vlad for assistance and codereview <3**
