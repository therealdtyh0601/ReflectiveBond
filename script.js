/* ============================================================
   REFLECTIVE BOND — FULL PRODUCTION SCRIPT (SAFE / VALIDATED)
   Lumi Studio — 2025 Release
   ============================================================ */

/* --------------------------------------------
   GLOBAL STATE
--------------------------------------------- */
let currentLanguage = "en";
let breathTimer = null;
let breathRemaining = 30;
let orbAnimating = false;

/* --------------------------------------------
   ERROR BAR
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
   PAGE NAV
--------------------------------------------- */
function returnHome() {
    hideAllPages();
    document.getElementById("landingPage").style.display = "block";
}

function openPage(pageId) {
    hideAllPages();
    document.getElementById(pageId).style.display = "block";
}

function hideAllPages() {
    document.querySelectorAll(".staticPage").forEach(p => p.style.display = "none");
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("flow").style.display = "none";
}

/* --------------------------------------------
   LANGUAGE HANDLING
--------------------------------------------- */
function selectLanguage(lang) {
    currentLanguage = lang;

    document.querySelectorAll(".langBtn").forEach(btn => btn.classList.remove("activeLang"));
    document.querySelector(`.langBtn[data-lang=${lang}]`).classList.add("activeLang");
}

/* --------------------------------------------
   START FLOW
--------------------------------------------- */
function startApp() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("userInfoStep").style.display = "block";

    // Auto-fill date with device locale
    document.getElementById("reflectionDate").value = new Date().toISOString().split("T")[0];
}

/* --------------------------------------------
   STEP NAVIGATION
--------------------------------------------- */
function goToPersonStep() {
    const senderName = document.getElementById("senderName").value.trim();
    if (!isMeaningful(senderName)) {
        showError("Please enter your name.");
        return;
    }

    document.getElementById("userInfoStep").style.display = "none";
    document.getElementById("stepPerson").style.display = "block";
}

function goBackToUserInfo() {
    document.getElementById("stepPerson").style.display = "none";
    document.getElementById("userInfoStep").style.display = "block";
}

function goToChallengesStep() {
    const person = document.getElementById("person").value.trim();
    if (!isMeaningful(person)) {
        showError("Please enter the recipient’s name.");
        return;
    }

    document.getElementById("stepPerson").style.display = "none";
    document.getElementById("stepChallenges").style.display = "block";
}

function goBackToPerson() {
    document.getElementById("stepChallenges").style.display = "none";
    document.getElementById("stepPerson").style.display = "block";
}

function startBreathwork() {
    let vents = collectVents();
    if (vents.length < 1) {
        showError("Please enter at least one difficulty.");
        return;
    }

    document.getElementById("stepChallenges").style.display = "none";
    document.getElementById("breathStep").style.display = "block";

    startBreathingCountdown();
}

function goBackToChallenges() {
    stopBreathingCountdown();
    document.getElementById("breathStep").style.display = "none";
    document.getElementById("stepChallenges").style.display = "block";
}

function goToAppreciationsStep() {
    document.getElementById("breathStep").style.display = "none";
    document.getElementById("stepAppreciations").style.display = "block";
}

function goBackToBreath() {
    document.getElementById("stepAppreciations").style.display = "none";
    document.getElementById("breathStep").style.display = "block";
}

function goBackToAppreciations() {
    document.getElementById("output").style.display = "none";
    document.getElementById("stepAppreciations").style.display = "block";
}

/* --------------------------------------------
   INPUT VALIDATION HELPERS
--------------------------------------------- */
function isMeaningful(text) {
    // Checks for letters, numbers, or CJK characters
    return /[A-Za-z0-9\u4e00-\u9fa5]/.test(text);
}

function enforceLimit(input) {
    if (input.value.length > 120) {
        input.value = input.value.substring(0, 120);
        showError("Each item must be under 120 characters.");
    }
}

/* --------------------------------------------
   COLLECTORS
--------------------------------------------- */
function collectVents() {
    let list = [];
    for (let i = 1; i <= 5; i++) {
        let val = document.getElementById(`vent${i}`).value.trim();
        if (isMeaningful(val)) list.push(val.substring(0, 120));
    }
    return list;
}

function collectApps() {
    let list = [];
    for (let i = 1; i <= 5; i++) {
        let val = document.getElementById(`app${i}`).value.trim();
        if (isMeaningful(val)) list.push(val.substring(0, 120));
    }
    return list;
}

/* --------------------------------------------
   BREATHING MODULE
--------------------------------------------- */
function startBreathingCountdown() {
    if (breathTimer) clearInterval(breathTimer);
    breathRemaining = 30;

    const orb = document.querySelector(".breathOrb");
    orbAnimating = true;

    let inhale = true;

    breathTimer = setInterval(() => {
        document.getElementById("breathCountdown").innerText = breathRemaining;

        if (breathRemaining % 6 === 0) {
            inhale = !inhale;
            orb.style.transform = inhale ? "scale(1.2)" : "scale(0.8)";
        }

        breathRemaining--;

        if (breathRemaining <= 0) {
            stopBreathingCountdown();
            document.getElementById("btnBreathNext").disabled = false;
        }
    }, 1000);
}

function stopBreathingCountdown() {
    if (breathTimer) clearInterval(breathTimer);
    orbAnimating = false;
}

/* --------------------------------------------
   FINAL REFLECTION GENERATION
--------------------------------------------- */
function generateReflection() {
    let vents = collectVents();
    let apps = collectApps();

    if (apps.length < 1) {
        showError("Please enter at least one appreciation.");
        return;
    }

    const person = document.getElementById("person").value.trim();
    const sender = document.getElementById("senderName").value.trim();
    const date = document.getElementById("reflectionDate").value;

    if (!isMeaningful(sender)) {
        showError("Please enter your name.");
        return;
    }

    document.getElementById("stepAppreciations").style.display = "none";
    document.getElementById("output").style.display = "block";

    /* Populate card */
    document.getElementById("outputRecipientName").innerText = person;
    document.getElementById("outputSignature").innerText = `${sender} — ${date}`;

    document.getElementById("outputChallenges").innerHTML =
        vents.map(i => `• ${i}`).join("<br>");

    document.getElementById("outputAppreciations").innerHTML =
        apps.map(i => `• ${i}`).join("<br>");
}

/* --------------------------------------------
   THEME SELECTOR
--------------------------------------------- */
function setTheme(theme) {
    const card = document.getElementById("outputCard");
    card.className = ""; // reset classes
    card.classList.add(theme);
}

/* --------------------------------------------
   SHAREABLE LINK CREATOR
--------------------------------------------- */
function shareCard() {
    const base = window.location.origin + window.location.pathname + "recipient.html";
    const person = encodeURIComponent(document.getElementById("person").value);
    const vents = encodeURIComponent(collectVents().join("||"));
    const apps = encodeURIComponent(collectApps().join("||"));
    const sender = encodeURIComponent(document.getElementById("senderName").value);
    const date = encodeURIComponent(document.getElementById("reflectionDate").value);

    const link = `${base}?p=${person}&v=${vents}&a=${apps}&s=${sender}&d=${date}`;
    navigator.clipboard.writeText(link);

    showError("Shareable link copied to clipboard.");
}

/* --------------------------------------------
   OFFERING HANDLER
--------------------------------------------- */
function openWhatsAppOrder() {
    const offer1 = document.getElementById("offerLampFlower").checked;
    const offer2 = document.getElementById("offerFlowerCard").checked;

    if (!offer1 && !offer2) {
        showError("Please select at least one offering.");
        return;
    }

    let message = "Hi, I would like to offer:\n";
    if (offer1) message += "- Lamp + Flower Offering\n";
    if (offer2) message += "- Flower Offering + Dedication Card\n";

    window.open(`https://wa.me/60123456789?text=${encodeURIComponent(message)}`);
}

/* --------------------------------------------
   DOWNLOAD (with iPhone fallback)
--------------------------------------------- */
function downloadCard() {
    const node = document.getElementById("outputCard");

    html2canvas(node, {scale: 2}).then(canvas => {
        const dataURL = canvas.toDataURL("image/png");

        // Safari / iPhone fallback
        if (navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")) {
            const newTab = window.open();
            newTab.document.write(`<img src="${dataURL}" style="width:100%">`);
            showError("Long-press the image to save.");
            return;
        }

        const link = document.createElement("a");
        link.download = "ReflectiveBondCard.png";
        link.href = dataURL.replace("image/png", "image/octet-stream");
        link.click();
    });
}

/* --------------------------------------------
   STORY CARD DOWNLOAD (1080x1920)
--------------------------------------------- */
function downloadStoryCard() {
    const node = document.getElementById("outputCard");
    node.classList.add("storyMode");

    html2canvas(node, {scale: 2}).then(canvas => {
        const dataURL = canvas.toDataURL("image/png");

        if (navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")) {
            const newTab = window.open();
            newTab.document.write(`<img src="${dataURL}" style="width:100%">`);
            showError("Long-press the image to save.");
            node.classList.remove("storyMode");
            return;
        }

        const link = document.createElement("a");
        link.download = "ReflectiveBond_StoryCard.png";
        link.href = dataURL.replace("image/png", "image/octet-stream");
        link.click();

        node.classList.remove("storyMode");
    });
}

/* --------------------------------------------
   BACK BUTTON PROTECTION
--------------------------------------------- */
history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.pushState(null, null, location.href);
    showError("Use the in-app Back button to navigate.");
};

/* --------------------------------------------
   REFRESH WARNING
--------------------------------------------- */
window.onbeforeunload = function () {
    return "Your reflection will be lost if you leave this page.";
};
