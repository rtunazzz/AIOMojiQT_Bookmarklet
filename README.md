# AIOMoji Quicktask Bookmarklet
A Bookmarklet that creates a QT for Aiomoji.

### I also made an iOS Shortcut, that does the same thing except you can use it on your iOS device! It's available from [this link](https://www.icloud.com/shortcuts/b88754208503478c8590699106173d8d), enjoy!


- Works for **Chrome**, not sure if it'd work for any other browsers but feel free to try.
- Currently only supports Solebox & Shopify QTs

```javascript
javascript: (function () { 
    let stringUrl = String(window.location.href);

    try {
        if (String(stringUrl).toLowerCase().includes("solebox")) {
            document.location = `https://www.aiomoji.io/quicktask/add?quicktask=solebox:${stringUrl}`;
        }
        else{
            document.location = `https://www.aiomoji.io/quicktask/add?quicktask=${stringUrl}`;
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
**Special thanks to Vlad for his assistance and codereview <3**


![Salute](https://www.emojirequest.com/images/SalutingEmoji.jpg)
