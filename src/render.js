const { ipcRenderer } = require("electron");

global.loggedIn = false;

// ipcRenderer.send("requestJsonData", "resourceNameHere", tokenHere);

// Handle response
ipcRenderer.on("requestJsonData", (event, jsonData, resource) => {
    ipcRenderer.send("openNewPage", resource);
    console.log(jsonData);
});
