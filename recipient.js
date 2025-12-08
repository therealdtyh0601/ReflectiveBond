/* ============================================================
   REFLECTIVE BOND — RECIPIENT VIEW SCRIPT
   Handles parsing URL parameters, rendering the reflection,
   theme switching, downloading, and iPhone fallbacks.
   ============================================================ */

/* --------------------------------------------
   ERROR BAR (Soft message box)
--------------------------------------------- */
function showError(msg) {
    const bar = document.getElementById("errorBar");
    bar.innerText = msg;
    bar.style.display = "block";
    setTimeout(() => {
        bar.style.display = "none";
    }, 3000);
}

/* --------------------------------------------
   READ URL PARAMETERS
--------------------------------------------- */
function getParam(key) {
    const url = new URL(window.location.href);
    return url.searchParams.get(key);
}

/* --------------------------------------------
   DECODE REFLECTION DATA
--------------------------------------------- */
function loadReflection() {
    const person = decodeURIComponent(getParam("p") || "");
    const ventsRaw = decodeURIComponent(getParam("v") || "");
    const appsRaw = decodeURIComponent(getParam("a") || "");
    const sender = decodeURIComponent(getParam("s") || "");
    const date = decodeURIComponent(getParam("d") || "");

    if (!person || !sender) {
        showError("The reflection link is incomplete.");
    }

    // Split bullet lists
    const vents = ventsRaw ? ventsRaw.split("||").filter(v => v.trim() !== "") : [];
    const apps = appsRaw ? appsRaw.split("||").filter(a => a.trim() !== "") : [];

    // Populate fields
    document.getElementById("outputRecipientName").innerText = person;
    document.getElementById("outputSignature").innerText = `${sender} — ${date}`;

    document.getElementById("outputChallenges").innerHTML =
        vents.map(v => `• ${v}`).join("<br>");

    document.getElementById("outputAppreciations").innerHTML =
        apps.map(a => `• ${a}`).join("<br>");
}

/* --------------------------------------------
   THEME SWITCHING
--------------------------------------------- */
function setTheme(theme) {
    const card = document.getElementById("outputCard");
    card.className = "";         // Reset existing classes
    card.classList.add(theme);   // Apply new theme
}

/* --------------------------------------------
   DOWNLOAD CARD — iPhone Safe
--------------------------------------------- */
function downloadCard() {
    const node = document.getElementById("outputCard");

    html2canvas(node, { scale: 2 }).then(canvas => {
        const dataURL = canvas.toDataURL("image/png");

        const isSafari = navigator.userAgent.includes("Safari") &&
                         !navigator.userAgent.includes("Chrome");

        if (isSafari) {
            const tab = window.open();
            tab.document.write(`<img src="${dataURL}" style="width:100%">`);
            showError("Long-press the image to save on iPhone Safari.");
            return;
        }

        const link = document.createElement("a");
        link.download = "ReflectiveBond_RecipientCard.png";
        link.href = dataURL.replace("image/png", "image/octet-stream");
        link.click();
    });
}

/* --------------------------------------------
   DOWNLOAD — STORY CARD VERSION (1080x1920)
--------------------------------------------- */
function downloadStoryCard() {
    const node = document.getElementById("outputCard");
    node.classList.add("storyMode");

    html2canvas(node, { scale: 2 }).then(canvas => {
        const dataURL = canvas.toDataURL("image/png");

        const isSafari = navigator.userAgent.includes("Safari") &&
                         !navigator.userAgent.includes("Chrome");

        if (isSafari) {
            const tab = window.open();
            tab.document.write(`<img src="${dataURL}" style="width:100%">`);
            showError("Long-press the image to save on iPhone Safari.");
            node.classList.remove("storyMode");
            return;
        }

        const link = document.createElement("a");
        link.download = "ReflectiveBond_StoryVersion.png";
        link.href = dataURL.replace("image/png", "image/octet-stream");
        link.click();

        node.classList.remove("storyMode");
    });
}

/* --------------------------------------------
   ON LOAD
--------------------------------------------- */
window.onload = function () {
    loadReflection();
};
