javascript: (function () 
{ var url = window.location.href;
    stringUrl = String(url);
    if (stringUrl.includes("solebox"))
    {
        stringUrl = "https://www.aiomoji.io/quicktask/add?quicktask=solebox:" + stringUrl;
        document.location = stringUrl;
    }
    else
    {
        stringUrl = "https://www.aiomoji.io/quicktask/add?quicktask=" + stringUrl;
        document.location = stringUrl;
    }
})()
