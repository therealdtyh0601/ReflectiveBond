/* ============================================================
   LANGUAGE TRANSLATIONS
============================================================ */
let selectedLanguage = "en";

const translations = {
    en: {
        step1_title: "Think of a Person",
        step1_instruction: "Think of someone you know personally — a friend, family member, partner, colleague.",
        label_person: "Who is this person? (Name or relationship)",
        next: "Next",

        step2_label: "What are 3–5 things that challenge you about this person?",
        step3_label: "What are 3–5 things you appreciate about this person?",

        cta_instruction: "Select what you would like to include:",
        cta_lamp: "Dedicate a Lamp Offering to the Buddha",
        cta_flower: "Send this card + flowers to the person",

        generate: "Generate Reflection Card",
        download: "Download Card",
        share: "Share Card"
    },

    zh: {
        step1_title: "想起一个人",
        step1_instruction: "想一位你熟悉的人——朋友、家人、伴侣、同事。",
        label_person: "这个人是谁？（名字或关系）",
        next: "下一步",

        step2_label: "写下 3–5 件关于TA让你感到困难的事情。",
        step3_label: "写下 3–5 件你感激或欣赏TA的地方。",

        cta_instruction: "请选择你想附加的内容：",
        cta_lamp: "为佛前供灯（功德回向）",
        cta_flower: "寄出卡片＋鲜花给对方",

        generate: "生成卡片",
        download: "下载卡片",
        share: "分享卡片"
    },

    ms: {
        step1_title: "Fikirkan Seseorang",
        step1_instruction: "Fikirkan seorang yang anda kenali — rakan, keluarga, pasangan, atau rakan kerja.",
        label_person: "Siapakah orang ini? (Nama atau hubungan)",
        next: "Seterusnya",

        step2_label: "Tulis 3–5 perkara yang mencabar tentang diri orang ini.",
        step3_label: "Tulis 3–5 perkara yang anda hargai tentang orang ini.",

        cta_instruction: "Pilih apa yang ingin anda sertakan:",
        cta_lamp: "Dedikasi Pencahayaan Lampu kepada Buddha",
        cta_flower: "Hantar kad ini + bunga kepada penerima",

        generate: "Hasilkan Kad",
        download: "Muat Turun Kad",
        share: "Kongsi Kad"
    }
};


/* ============================================================
   HEALING MANTRA (MULTILINGUAL)
============================================================ */
const healingLines = {
    en: ["I'm Sorry", "Please Forgive Me", "Thank You", "I Love You"],
    zh: ["对不起", "请原谅我", "谢谢你", "我爱你"],
    ms: ["Maafkan saya", "Ampunkan saya", "Terima kasih", "Saya sayangkan anda"]
};


/* ============================================================
   LANGUAGE SELECTION
============================================================ */
function selectLanguage(lang) {
    selectedLanguage = lang;
}


/* ============================================================
   SCREEN FLOW
============================================================ */
function startApp() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("form").style.display = "block";
    loadStep1();
}

function loadStep1() {
    const t = translations[selectedLanguage];
    document.getElementById("step1").style.display = "block";

    document.getElementById("title").innerHTML = t.step1_title;
    document.getElementById("instruction").innerHTML = t.step1_instruction;
    document.getElementById("labelPerson").innerHTML = t.label_person;
    document.getElementById("btnNext1").innerHTML = t.next;
}

function nextStep() {
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";

    const t = translations[selectedLanguage];
    document.getElementById("labelChallenges").innerHTML = t.step2_label;
    document.getElementById("btnNext2").innerHTML = t.next;
}

function nextStep2() {
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "block";

    const t = translations[selectedLanguage];
    document.getElementById("labelAppreciations").innerHTML = t.step3_label;
    document.getElementById("btnNext3").innerHTML = t.next;
}

function goToCTA() {
    document.getElementById("step3").style.display = "none";
    document.getElementById("ctaSection").style.display = "block";

    const t = translations[selectedLanguage];
    document.getElementById("ctaInstruction").innerHTML = t.cta_instruction;
    document.getElementById("ctaLampText").innerHTML = t.cta_lamp;
    document.getElementById("ctaFlowerText").innerHTML = t.cta_flower;
    document.getElementById("btnGenerate").innerHTML = t.generate;
}


/* ============================================================
   BACK BUTTONS
============================================================ */
function goBackToStep1() {
    document.getElementById("step2").style.display = "none";
    document.getElementById("step1").style.display = "block";
}

function goBackToStep2() {
    document.getElementById("step3").style.display = "none";
    document.getElementById("step2").style.display = "block";
}

function goBackToCTA() {
    document.getElementById("output").style.display = "none";
    document.getElementById("ctaSection").style.display = "block";
}

function goBackToStep3() {
    document.getElementById("ctaSection").style.display = "none";
    document.getElementById("step3").style.display = "block";
}


/* ============================================================
   GENERATE REFLECTION CARD
============================================================ */
function generateReflection() {
    const person = document.getElementById("person").value.trim();
    const challenges = document.getElementById("challenges").value.trim();
    const appreciations = document.getElementById("appreciations").value.trim();

    document.getElementById("ctaSection").style.display = "none";
    document.getElementById("output").style.display = "block";

    // Build card content
    document.getElementById("outputTitle").innerHTML = person;
    document.getElementById("outputIntro").innerHTML =
        `This message is written with sincerity.`;

    document.getElementById("outputChallenges").innerHTML =
        `<strong>Challenges:</strong><br>${formatList(challenges)}`;

    document.getElementById("outputAppreciations").innerHTML =
        `<strong>Appreciations:</strong><br>${formatList(appreciations)}`;

    document.getElementById("outputCTA").innerHTML =
        buildOfferingSummary();

    // Activate Healing Mantra Typewriter
    animateHealingLines(selectedLanguage);
}


/* Format bullet-style list from input */
function formatList(text) {
    return text
        .split("\n")
        .filter(t => t.trim() !== "")
        .map(t => "• " + t.trim())
        .join("<br>");
}


/* Offering summary */
function buildOfferingSummary() {
    let summary = "";
    if (document.getElementById("ctaLamp").checked)
        summary += "• Lamp offering included.<br>";
    if (document.getElementById("ctaFlower").checked)
        summary += "• Flowers included.<br>";
    return summary;
}


/* ============================================================
   TYPEWRITER MANTRA (SENDER SIDE)
============================================================ */
function animateHealingLines(lang) {
    const lines = healingLines[lang] || healingLines.en;
    const ids = ["h1", "h2", "h3", "h4"];

    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = "";
    });

    let lineIndex = 0;

    function typeLine() {
        if (lineIndex >= lines.length) return;
        const text = lines[lineIndex];
        const el = document.getElementById(ids[lineIndex]);
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
   DOWNLOAD CARD (WITH WATERMARK MODE)
============================================================ */
function downloadCard() {
    const card = document.querySelector("#output");
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
   SHARE CARD (ENCODED URL)
============================================================ */
function shareCard() {
    const cardData = {
        title: document.getElementById("outputTitle").innerHTML,
        intro: document.getElementById("outputIntro").innerHTML,
        challenges: document.getElementById("outputChallenges").innerHTML,
        appreciations: document.getElementById("outputAppreciations").innerHTML,
        cta: document.getElementById("outputCTA").innerHTML,
        lang: selectedLanguage,
        healing: healingLines[selectedLanguage]
    };

    const encoded = btoa(JSON.stringify(cardData));
    const shareURL = 
        "https://therealdtyh0601.github.io/ReflectiveBond/recipient.html?card=" + encoded;

    if (navigator.share) {
        navigator.share({
            title: "A Reflection for You",
            text: "Someone shared a Lumi Studio reflection card with you.",
            url: shareURL
        });
    } else {
        prompt("Copy this link to share:", shareURL);
    }
}
