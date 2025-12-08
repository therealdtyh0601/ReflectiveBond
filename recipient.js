// -----------------------------
// Healing Mantra (Multilingual)
// -----------------------------
const healingLines = {
    en: ["I'm Sorry", "Please Forgive Me", "Thank You", "I Love You"],
    zh: ["对不起", "请原谅我", "谢谢你", "我爱你"],
    ms: ["Maafkan saya", "Ampunkan saya", "Terima kasih", "Saya sayangkan anda"]
};

// -----------------------------
// Parse Encoded Card Data
// -----------------------------
const urlParams = new URLSearchParams(window.location.search);
const encoded = urlParams.get("card");

let json = null;

if (!encoded) {
    document.getElementById("recipientCard").innerHTML =
        "<p>This reflection card is unavailable or the link may be incomplete.</p>";
} else {
    try {
        json = JSON.parse(atob(encoded));

        // Inject reflection data
        document.getElementById("r_title").innerHTML = json.title || "";
        document.getElementById("r_intro").innerHTML = json.intro || "";
        document.getElementById("r_challenges").innerHTML = json.challenges || "";
        document.getElementById("r_appreciations").innerHTML = json.appreciations || "";
        document.getElementById("r_cta").innerHTML = json.cta || "";

        // Trigger healing mantra animation
        const lang = json.lang || "en";
        const customLines = json.healing || null;

        animateRecipientHealingLines(lang, customLines);

    } catch (e) {
        document.getElementById("recipientCard").innerHTML =
            "<p>The shared link seems corrupted or incomplete.</p>";
    }
}

// -----------------------------
// Typewriter Animation for Recipient Mantra
// -----------------------------
function animateRecipientHealingLines(lang, customLines) {
    const baseLines = healingLines[lang] || healingLines.en;
    const lines = Array.isArray(customLines) && customLines.length === 4 ? customLines : baseLines;

    const ids = ["r_h1", "r_h2", "r_h3", "r_h4"];

    // Clear all lines before animation
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

// -----------------------------
// Download Card with Lumi Watermark
// -----------------------------
function downloadRecipientCard() {
    const card = document.querySelector("#recipientCard");
    if (!card) return;

    // Add watermark background before capture
    card.classList.add("watermarkedCard");

    html2canvas(card).then(canvas => {
        const link = document.createElement("a");
        link.download = "reflection-card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();

        // Remove watermark after export
        card.classList.remove("watermarkedCard");
    });
}
