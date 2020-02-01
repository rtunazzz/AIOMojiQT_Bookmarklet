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
