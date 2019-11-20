javascript: (function () { 
    let stringUrl = String(window.location.href);

    // add a try catch here, includes tends to crash sometimes
    try {
        if (String(stringUrl).toLowerCase().includes("solebox")) {
            document.location = `https://www.aiomoji.io/quicktask/add?storetype=solebox&url=${stringUrl}`;
        };
    } catch (err) {
        // do nothing - it might crash if it doesn't find solebox
    };
})();
