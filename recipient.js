/* ============================================================
   HEALING MANTRA (Multilingual)
============================================================ */
const healingLines = {
    en: ["I'm Sorry", "Please Forgive Me", "Thank You", "I Love You"],
    zh: ["对不起", "请原谅我", "谢谢你", "我爱你"],
    ms: ["Maafkan saya", "Ampunkan saya", "Terima kasih", "Saya sayangkan anda"]
};


/* ============================================================
   PARSE ENCODED CARD DATA
============================================================ */
const urlParams = new URLSearchParams(window.location.search);
const encoded = urlParams.get("card");

let cardData = null;

if (!encoded) {
    document.querySelector("#recipientCard").innerHTML =
        "<p>The reflection card cannot be loaded. The link may be incomplete or expired.</p>";
} else {
    try {
        cardData = JSON.parse(atob(encoded));

        renderRecipientCard(cardData);
        animateRecipientHealingLines(cardData.lang || "en", cardData.healing);

    } catch (e) {
        document.querySelector("#recipientCard").innerHTML =
            "<p>The shared card cannot be displayed due to invalid data.</p>";
    }
}



/* ============================================================
   RENDER THE CARD (Recipient Side)
============================================================ */
function renderRecipientCard(data) {
    const {
        title,
        intro,
        challenges,
        appreciations,
        cta,
        lang,
        senderName,
        reflectionDate,
        person
    } = data;

    // Title
    document.getElementById("r_title").innerHTML = title || person || "Reflection";

    // Intro text
    document.getElementById("r_intro").innerHTML = intro || "";

    // Challenges + Appreciations already formatted as HTML
    document.getElementById("r_challenges").innerHTML = challenges || "";
    document.getElementById("r_appreciations").innerHTML = appreciations || "";

    // CTA text (usually empty)
    document.getElementById("r_cta").innerHTML = cta || "";

    // Signature
    let signature = "";
    if (senderName && reflectionDate) {
        signature = `With warmth, <strong>${senderName}</strong><br>${reflectionDate}`;
    } else if (senderName) {
        signature = `With warmth, <strong>${senderName}</strong>`;
    } else if (reflectionDate) {
        signature = reflectionDate;
    }

    const sigEl = document.getElementById("r_signature");
    if (sigEl) sigEl.innerHTML = signature;
}



/* ============================================================
   TYPEWRITER MANTRA (Recipient View)
============================================================ */
function animateRecipientHealingLines(lang, customLines) {
    const lines = customLines && customLines.length === 4
        ? customLines
        : healingLines[lang] || healingLines.en;

    const ids = ["r_h1", "r_h2", "r_h3", "r_h4"];

    // Clear lines before animation
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
                setTimeout(typeChar, 50); // typing speed
            } else {
                lineIndex++;
                setTimeout(typeLine, 250); // delay before next line
            }
        }

        typeChar();
    }

    typeLine();
}



/* ============================================================
   DOWNLOAD NORMAL CARD
============================================================ */
function downloadRecipientCard() {
    const card = document.querySelector("#recipientCard");
    if (!card) return;

    // Apply watermark
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
   DOWNLOAD IG STORY (1080 × 1920)
============================================================ */
function downloadRecipientStoryCard() {
    const source = document.querySelector("#recipientCard");
    if (!source) return;

    const wrapper = document.createElement("div");
    wrapper.className = "storyWrapper watermarkedCard";

    const clone = source.cloneNode(true);
    clone.style.margin = "0";
    clone.style.boxShadow = "none";
    clone.style.background = "rgba(255,255,255,0.97)";
    wrapper.appendChild(clone);

    document.body.appendChild(wrapper);

    html2canvas(wrapper, { width: 1080, height: 1920 }).then(canvas => {
        const link = document.createElement("a");
        link.download = "reflection-story.png";
        link.href = canvas.toDataURL("image/png");
        link.click();

        document.body.removeChild(wrapper);
    });
}
