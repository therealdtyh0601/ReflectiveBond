/* =======================================================================
   STATIC PAGE NAVIGATION + HOME BUTTON INTEGRATION
   ======================================================================= */

/**
 * Hide EVERY page (landing, flow, static pages)
 */
function hideAllPages() {
    // Landing
    const landing = document.getElementById("landingPage");
    if (landing) landing.style.display = "none";

    // Flow container
    const flow = document.getElementById("flow");
    if (flow) flow.style.display = "none";

    // Static pages
    document.querySelectorAll(".staticPage").forEach(p => {
        p.style.display = "none";
    });
}

/**
 * Entry point for static pages (Terms, Privacy, Disclaimer, Lumi Studio)
 * @param {string} id - The DOM ID of the static page to show
 */
function openPage(id) {
    hideAllPages();

    const page = document.getElementById(id);
    if (page) page.style.display = "block";

    // Show Home button
    const homeBtn = document.getElementById("homeBtn");
    if (homeBtn) homeBtn.style.display = "flex";
}

/**
 * Return to Landing Page (Home)
 */
function returnHome() {
    hideAllPages();

    const landing = document.getElementById("landingPage");
    if (landing) landing.style.display = "block";

    const homeBtn = document.getElementById("homeBtn");
    if (homeBtn) homeBtn.style.display = "none";
}

/**
 * When the user taps "Begin" and enters the actual FLOW
 * we must hide static pages and show the core reflection steps
 */
function showFlow() {
    hideAllPages();

    const flow = document.getElementById("flow");
    if (flow) flow.style.display = "block";

    const homeBtn = document.getElementById("homeBtn");
    if (homeBtn) homeBtn.style.display = "flex";
}

/* =======================================================================
   MODIFY EXISTING STARTER TO USE showFlow()
   ======================================================================= */

// If you already have startApp(), keep it. Just ensure it calls showFlow() eventually.
// If not, this is a safe enhancement:

if (typeof startApp === "function") {
    const originalStartApp = startApp;
    startApp = function () {
        originalStartApp();
        showFlow(); // ensures legal pages are hidden when flow begins
    };
}


/* =======================================================================
   INSIDE THE FLOW — make sure existing next/back buttons remain functional
   THESE DO NOT override your functions such as goToPersonStep(),
   goToChallengesStep(), startBreathwork(), generateReflection(), etc.
   ======================================================================= */

// When entering Step 1 manually from any other context
function goBackToLanding() {
    returnHome();
}

function goBackToUserInfo() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("userInfoStep").style.display = "block";

    const homeBtn = document.getElementById("homeBtn");
    if (homeBtn) homeBtn.style.display = "flex";
}

function goBackToPerson() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("stepPerson").style.display = "block";

    const homeBtn = document.getElementById("homeBtn");
    if (homeBtn) homeBtn.style.display = "flex";
}

function goBackToChallenges() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("stepChallenges").style.display = "block";

    const homeBtn = document.getElementById("homeBtn");
    if (homeBtn) homeBtn.style.display = "flex";
}

function goBackToBreath() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("breathStep").style.display = "block";

    const homeBtn = document.getElementById("homeBtn");
    if (homeBtn) homeBtn.style.display = "flex";
}

function goBackToAppreciations() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("stepAppreciations").style.display = "block";

    const homeBtn = document.getElementById("homeBtn");
    if (homeBtn) homeBtn.style.display = "flex";
}

