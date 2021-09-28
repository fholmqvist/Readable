var readable = document.getElementById("readable")
readable.addEventListener("click", () => {
        chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
                chrome.tabs.executeScript(tabs[0].id, {
                        code: `
        document.body.style.maxWidth = "50em";
        document.body.style.padding = "2em 0em";
        document.body.style.margin = "0 auto";
        document.body.style.lineHeight = "1.5";
        console.log("Readable!");`}, null)
        })
})
