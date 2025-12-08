/* ============================================================
   HEALING LINES (same set as main app)
============================================================ */
const healingLinesRecipient = {
    en: ["I'm Sorry", "Please Forgive Me", "Thank You", "I Love You"],
    zh: ["对不起", "请原谅我", "谢谢你", "我爱你"],
    ms: ["Maafkan saya", "Ampunkan saya", "Terima kasih", "Saya sayangkan anda"]
};


/* ============================================================
   PARSE ENCODED DATA
============================================================ */
const urlParams = new URLSearchParams(window.location.search);
const encoded = urlParams.get("card");
let cardData = null;

if (!encoded) {
    document.getElementById("recipientCard").innerHTML =
        "<p>The reflection card cannot be loaded. The link may be incomplete or expired.</p>";
} else {
    try {
        cardData = JSON.parse(atob(encoded));
        renderRecipientCard(cardData);
        animateRecipientHealingLines(cardData.lang || "en", cardData.healing);
    } catch (e) {
        document.getElementById("recipientCard").innerHTML =
            "<p>The shared card cannot be displayed due to invalid data.</p>";
    }
}


/* ============================================================
   RENDER CARD
============================================================ */
function renderRecipientCard(data) {
    const {
        title,
        intro,
        challenges,
        appreciations,
        bridgeSentence,
        cta,
        lang,
        senderName,
        reflectionDate,
        person
    } = data;

    document.getElementById("r_title").innerHTML = title || person || "Reflection";

    document.getElementById("r_intro").innerHTML = intro || "";

    document.getElementById("r_challenges").innerHTML = challenges || "";
    document.getElementById("r_appreciations").innerHTML = appreciations || "";

    const bridgeEl = document.getElementById("r_bridge");
    if (bridgeSentence && bridgeEl) {
        bridgeEl.innerHTML = bridgeSentence;
    }

    if (cta) {
        // If you ever want a CTA message, place here
    }

    let signature = "";
    if (senderName && reflectionDate) {
        signature = `With warmth, <strong>${senderName}</strong><br>${reflectionDate}`;
    } else if (senderName) {
        signature = `With warmth, <strong>${senderName}</strong>`;
    } else if (reflectionDate) {
        signature = reflectionDate;
    }

    document.getElementById("r_signature").innerHTML = signature;
}


/* ============================================================
   TYPEWRITER MANTRA (RECIPIENT SIDE)
============================================================ */
function animateRecipientHealingLines(lang, customLines) {
    const lines = (customLines && customLines.length === 4)
        ? customLines
        : (healingLinesRecipient[lang] || healingLinesRecipient.en);

    const ids = ["r_h1", "r_h2", "r_h3", "r_h4"];

    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = "";
    });

    let lineIndex = 0;

    function typeLine() {
        if (lineIndex >= lines.length) return;
        const el = document.getElementById(ids[lineIndex]);
        const text = lines[lineIndex];
        if (!el) return;

        let charIndex = 0;
        function typeChar() {
            if (charIndex <= text.length) {
                el.textContent = text.slice(0, charIndex);
                charIndex++;
                setTimeout(typeChar, 50);
            } else {
                lineIndex++;
                setTimeout(typeLine, 250);
            }
        }
        typeChar();
    }

    typeLine();
}


/* ============================================================
   DOWNLOAD CARD (STATIC)
============================================================ */
function downloadRecipientCard() {
    const card = document.getElementById("recipientCard");
    if (!card) return;

    card.classList.add("watermarkedCard");

    html2canvas(card).then(canvas => {
        const link = document.createElement("a");
        link.download = "reflection-card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        card.classList.remove("watermarkedCard");
    });
}


/* ============================================================
   DOWNLOAD IG STORY (DEFAULT THEME)
============================================================ */
function downloadRecipientStoryCard() {
    if (!cardData) return;

    const themeClass = "theme-lumi"; // default theme
    const wrapper = document.createElement("div");
    wrapper.className = `storyWrapper ${themeClass}`;

    const {
        lang,
        person,
        title,
        intro,
        challenges,
        appreciations,
        bridgeSentence,
        senderName,
        reflectionDate
    } = cardData;

    const lines = healingLinesRecipient[lang] || healingLinesRecipient.en;
    const mantraHTML = lines.join("<br>");

    const storyHTML = `
        <div class="storyCardSafe storyCardSafe-dark">
            <div class="storyTitle">${title || person || ""}</div>
            <p class="storyText">${intro || ""}</p>
            <div class="storyText">${challenges || ""}</div>
            <div class="storyText">${appreciations || ""}</div>
            <p class="storyText">${bridgeSentence || ""}</p>
            <div class="storyMantra">${mantraHTML}</div>
            <div class="storySignature">
                ${senderName || reflectionDate
                    ? `With warmth, <strong>${senderName || ""}</strong><br>${reflectionDate || ""}`
                    : ""}
            </div>
        </div>
    `;
    wrapper.innerHTML = storyHTML;
    document.body.appendChild(wrapper);

    html2canvas(wrapper, {
        width: 1080,
        height: 1920,
        scale: 2
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = "reflection-story.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
        document.body.removeChild(wrapper);
    });
}
