/* ============================================================
   GLOBAL STATE
============================================================ */
let selectedLanguage = "en";
let generatedCardData = null;


/* ============================================================
   HEALING MANTRA LINES
============================================================ */
const healingLines = {
    en: ["I'm Sorry", "Please Forgive Me", "Thank You", "I Love You"],
    zh: ["对不起", "请原谅我", "谢谢你", "我爱你"],
    ms: ["Maafkan saya", "Ampunkan saya", "Terima kasih", "Saya sayangkan anda"]
};


/* ============================================================
   TRANSLATIONS (EN / ZH / MS)
============================================================ */
const translations = {
    en: {
        userInfo_title: "Before We Begin",
        userInfo_instruction:
            "Take a moment to ground yourself. Your name will appear gently at the end of the card as the sender.",
        labelSenderName: "Your name",
        labelDate: "Date of reflection",
        userNext: "Continue",

        step1_title: "Think of a Person",
        step1_instruction:
            "Choose someone you know personally — a friend, family member, partner or colleague. This will be the person you reflect on today.",
        label_person: "Who is this person? (Name or relationship)",
        next: "Next",

        step2_label:
            "Write 3–5 things that currently trigger you or create emotional tension with this person. Let the difficult feelings speak freely.",

        breath_title: "Pause and Breathe",
        breath_text:
            "You’ve allowed your frustration, hurt, or anger to be spoken. Now take a slow breath in… and a slow breath out. Place one hand on your heart. Notice that you are safe and present. This moment is for clarity, not self-blame.",
        breath_next: "I’m ready to continue",

        step3_label:
            "Now, write 3–5 things you appreciate, admire, or still value about this person.",
        generate: "Generate Reflection Card",

        opening:
            "This reflection is written with honesty and care. Relationships are rarely only one thing — they are a mix of difficulty, learning, warmth, and complexity. Today, I allowed myself to express what has been heavy on my heart.",

        challengesTitle: "The Difficult Parts",
        appreciationsTitle: "The Parts I Still Cherish",

        challengesIntro:
            "Here are the moments or behaviours that have challenged me recently:",
        appreciationsIntro:
            "And here are the qualities in you that I still see, value, or quietly hold appreciation for:",

        bridgeSentence:
            "Both sets of truths can exist at the same time — the parts that hurt and the parts that matter. Seeing both helps me understand this connection with more clarity and humanity.",

        senderSignature(name, date) {
            if (!name && !date) return "";
            if (name && date) return `With warmth, <strong>${name}</strong><br>${date}`;
            if (name) return `With warmth, <strong>${name}</strong>`;
            return `${date}`;
        },

        orderTitle: "Optional Offering & Delivery",
        offerLampFlower:
            "Lamp + Flower offering at the Buddha altar (Klang Valley, 24h SLA)",
        offerFlowerCard:
            "Card + Flower delivery to the recipient (Klang Valley only)",
        orderBtn: "Order via WhatsApp",

        whatsappTemplate({ senderName, date, person, lampFlower, flowerCard }) {
            return (
                "Hi Lumi Studio,%0A%0A" +
                "I would like to place an offering order through the Reflective Bond webapp.%0A%0A" +
                `Sender Name: ${senderName || "-"}%0A` +
                `Reflection Date: ${date || "-"}%0A` +
                `Recipient (person reflected on): ${person || "-"}%0A%0A` +
                "I would like to request:%0A" +
                (lampFlower ? "- Lamp + Flower offering at Buddha altar%0A" : "") +
                (flowerCard ? "- Card + Flower delivery to the recipient%0A" : "") +
                "%0AThank you."
            );
        }
    },

    zh: {
        userInfo_title: "在开始之前",
        userInfo_instruction:
            "先让自己稳定下来。你的名字将会以温柔的方式出现在卡片末尾。",
        labelSenderName: "你的名字（或称呼）",
        labelDate: "写卡日期",
        userNext: "继续",

        step1_title: "想起一个人",
        step1_instruction:
            "选择一位你熟悉的人——朋友、家人、伴侣或同事。今天的反思将围绕这一位。",
        label_person: "这个人是谁？（名字或关系）",
        next: "下一步",

        step2_label:
            "写下 3–5 件最近让你对 TA 感到生气、受伤或压力的事情。让情绪自由地被看见。",

        breath_title: "先停一下，跟自己呼吸",
        breath_text:
            "刚才，你已经让负面的情绪有机会说话了。现在，请慢慢吸气……再慢慢吐气。把一只手放在心口，感受此刻的安全、稳定与清晰。这个步骤不是责备，而是让自己更看得明白。",
        breath_next: "我准备好了，继续",

        step3_label:
            "现在，写下 3–5 件你仍然欣赏、感激或肯定 TA 的地方。",
        generate: "生成疗愈卡片",

        opening:
            "这段反思是带着诚实与关怀写下的。关系从来不是单一的，它包含困难、温暖、学习与复杂。今天，我允许自己把心里压着的部分说出来。",

        challengesTitle: "那些让我感到很辛苦的部分",
        appreciationsTitle: "那些我仍然珍惜的部分",

        challengesIntro:
            "以下，是最近让我感到压力、受伤或不舒服的地方：",
        appreciationsIntro:
            "而下面，是我依然看到、仍然珍惜、或默默感激你的一些部分：",

        bridgeSentence:
            "这些感受可以同时存在——不好的部分与温暖的部分并不互相抵触。愿我在看见两者的同时，也能以更清晰、更成熟的方式面对这段关系。",

        senderSignature(name, date) {
            if (!name && !date) return "";
            if (name && date) return `致上温暖，<strong>${name}</strong><br>${date}`;
            if (name) return `致上温暖，<strong>${name}</strong>`;
            return `${date}`;
        },

        orderTitle: "可选：供灯与卡片寄送服务",
        offerLampFlower: "佛前供灯＋鲜花（仅限巴生谷，24 小时内完成）",
        offerFlowerCard: "鲜花＋卡片寄送（仅限巴生谷）",
        orderBtn: "通过 WhatsApp 下单",

        whatsappTemplate({ senderName, date, person, lampFlower, flowerCard }) {
            return (
                "Hi Lumi Studio,%0A%0A" +
                "我想通过 Reflective Bond 网页预约供灯 / 鲜花服务。%0A%0A" +
                `写卡者：${senderName || "-"}%0A` +
                `写卡日期：${date || "-"}%0A` +
                `反思对象：${person || "-"}%0A%0A` +
                "我想预约：%0A" +
                (lampFlower ? "- 佛前供灯＋鲜花%0A" : "") +
                (flowerCard ? "- 鲜花＋卡片寄给对方%0A" : "") +
                "%0A谢谢。"
            );
        }
    },

    ms: {
        userInfo_title: "Sebelum Kita Bermula",
        userInfo_instruction:
            "Luangkan masa seketika untuk menstabilkan diri. Nama anda akan muncul secara lembut di hujung kad.",
        labelSenderName: "Nama anda",
        labelDate: "Tarikh refleksi",
        userNext: "Teruskan",

        step1_title: "Fikirkan Seseorang",
        step1_instruction:
            "Pilih seseorang yang anda kenali — rakan, ahli keluarga, pasangan atau rakan kerja. Refleksi hari ini tertumpu kepada individu ini.",
        label_person: "Siapakah orang ini? (Nama atau hubungan)",
        next: "Seterusnya",

        step2_label:
            "Tulis 3–5 perkara yang mencetuskan tekanan, kemarahan atau ketegangan emosi terhadap orang ini. Biarkan perasaan sukar itu bersuara.",

        breath_title: "Berhenti & Bernafas",
        breath_text:
            "Tadi, anda sudah memberi ruang kepada emosi marah atau terluka untuk bersuara. Sekarang tarik nafas perlahan… dan hembuskan perlahan. Letakkan satu tangan di dada, dan sedari bahawa ketika ini anda selamat, stabil dan hadir. Ini bukan untuk menyalahkan diri, tetapi untuk melihat hubungan ini dengan lebih jelas.",
        breath_next: "Saya sedia untuk teruskan",

        step3_label:
            "Sekarang, tulis 3–5 perkara tentang orang ini yang anda hargai, kagumi atau masih anggap bermakna.",
        generate: "Jana Kad Refleksi",

        opening:
            "Refleksi ini ditulis dengan kejujuran dan niat yang baik. Sesebuah hubungan jarang sekali bersifat satu dimensi — ia mengandungi cabaran, pembelajaran, kehangatan dan juga kerumitan. Hari ini, saya memberi ruang kepada diri untuk meluahkan apa yang selama ini terasa berat di hati.",

        challengesTitle: "Bahagian yang sukar untuk saya",
        appreciationsTitle: "Bahagian yang saya masih hargai",

        challengesIntro:
            "Berikut ialah perkara yang telah mencetuskan tekanan atau kesulitan dalam diri saya baru-baru ini:",
        appreciationsIntro:
            "Dan berikut ialah perkara tentang diri anda yang saya masih lihat, hargai, atau pegang sebagai sesuatu yang bermakna:",

        bridgeSentence:
            "Kedua-dua sisi ini boleh wujud serentak — bahagian yang sukar dan bahagian yang masih penting. Dengan mengakui kedua-duanya, saya dapat melihat hubungan ini dengan lebih jelas dan lebih berperikemanusiaan.",

        senderSignature(name, date) {
            if (!name && !date) return "";
            if (name && date) return `Dengan tulus, <strong>${name}</strong><br>${date}`;
            if (name) return `Dengan tulus, <strong>${name}</strong>`;
            return `${date}`;
        },

        orderTitle: "Pilihan Tambahan: Persembahan & Penghantaran",
        offerLampFlower:
            "Persembahan Lampu + Bunga di hadapan Buddha (Klang Valley, SLA 24 jam)",
        offerFlowerCard:
            "Penghantaran kad + bunga kepada penerima (Klang Valley sahaja)",
        orderBtn: "Pesan melalui WhatsApp",

        whatsappTemplate({ senderName, date, person, lampFlower, flowerCard }) {
            return (
                "Hi Lumi Studio,%0A%0A" +
                "Saya ingin membuat pesanan persembahan melalui webapp Reflective Bond.%0A%0A" +
                `Nama pengirim: ${senderName || "-"}%0A` +
                `Tarikh refleksi: ${date || "-"}%0A` +
                `Penerima (orang yang difikirkan): ${person || "-"}%0A%0A` +
                "Saya ingin memohon:%0A" +
                (lampFlower ? "- Persembahan Lampu + Bunga di altar Buddha%0A" : "") +
                (flowerCard ? "- Penghantaran kad + bunga kepada penerima%0A" : "") +
                "%0ATerima kasih."
            );
        }
    }
};


/* ============================================================
   LANGUAGE SELECTION
============================================================ */
function selectLanguage(lang) {
    selectedLanguage = lang;
    const buttons = document.querySelectorAll(".langBtn");
    buttons.forEach(btn => {
        const btnLang = btn.getAttribute("data-lang");
        if (btnLang === lang) {
            btn.classList.add("activeThemePreview");
        } else {
            btn.classList.remove("activeThemePreview");
        }
    });
    // Use activeLang for visual; keep existing class for styling
    buttons.forEach(btn => {
        const btnLang = btn.getAttribute("data-lang");
        if (btnLang === lang) {
            btn.classList.add("activeLang");
        } else {
            btn.classList.remove("activeLang");
        }
    });
}


/* ============================================================
   FLOW NAVIGATION
============================================================ */
function showStep(stepId) {
    const steps = [
        "userInfoStep",
        "stepPerson",
        "stepChallenges",
        "breathStep",
        "stepAppreciations",
        "output"
    ];
    steps.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === stepId) ? "block" : "none";
    });
}

function startApp() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("flow").style.display = "block";
    loadUserInfoStep();
}

function loadUserInfoStep() {
    const t = translations[selectedLanguage];
    document.getElementById("userInfoTitle").innerHTML = t.userInfo_title;
    document.getElementById("userInfoInstruction").innerHTML = t.userInfo_instruction;
    document.getElementById("labelSenderName").innerHTML = t.labelSenderName;
    document.getElementById("labelDate").innerHTML = t.labelDate;
    document.getElementById("btnUserNext").innerHTML = t.userNext;

    // Default date is today
    const today = new Date().toISOString().slice(0, 10);
    const dateInput = document.getElementById("reflectionDate");
    if (!dateInput.value) dateInput.value = today;

    showStep("userInfoStep");
}

function goToPersonStep() {
    const t = translations[selectedLanguage];
    document.getElementById("stepPersonTitle").innerHTML = t.step1_title;
    document.getElementById("stepPersonInstruction").innerHTML = t.step1_instruction;
    document.getElementById("labelPerson").innerHTML = t.label_person;
    document.getElementById("btnNext1").innerHTML = t.next;
    showStep("stepPerson");
}

function goToChallengesStep() {
    const t = translations[selectedLanguage];
    document.getElementById("labelChallenges").innerHTML = t.step2_label;
    document.getElementById("btnNext2").innerHTML = t.next;
    showStep("stepChallenges");
}

function startBreathwork() {
    const t = translations[selectedLanguage];
    document.getElementById("breathTitle").innerHTML = t.breath_title;
    document.getElementById("breathText").innerHTML = t.breath_text;
    document.getElementById("btnBreathNext").innerHTML = t.breath_next;
    document.getElementById("btnBreathNext").disabled = true;

    let remaining = 10;
    const countdownEl = document.getElementById("breathCountdown");
    countdownEl.innerHTML = `${remaining}s`;

    const timer = setInterval(() => {
        remaining--;
        countdownEl.innerHTML = `${remaining}s`;
        if (remaining <= 0) {
            clearInterval(timer);
            countdownEl.innerHTML = "";
            document.getElementById("btnBreathNext").disabled = false;
        }
    }, 1000);

    showStep("breathStep");
}

function goToAppreciationsStep() {
    const t = translations[selectedLanguage];
    document.getElementById("labelAppreciations").innerHTML = t.step3_label;
    document.getElementById("btnNext3").innerHTML = t.generate;
    showStep("stepAppreciations");
}


/* Back buttons */
function goBackToLanding() {
    document.getElementById("flow").style.display = "none";
    document.getElementById("landingPage").style.display = "block";
}

function goBackToUserInfo() {
    showStep("userInfoStep");
}

function goBackToPerson() {
    showStep("stepPerson");
}

function goBackToChallenges() {
    showStep("stepChallenges");
}

function goBackToBreath() {
    showStep("breathStep");
}

function goBackToAppreciations() {
    showStep("stepAppreciations");
}


/* ============================================================
   UTILS: LIST HANDLING
============================================================ */
function parseList(text) {
    return text
        .split("\n")
        .map(t => t.trim())
        .filter(Boolean);
}

function formatListHTMLFromArray(arr) {
    if (!arr || arr.length === 0) return "<ul><li>—</li></ul>";
    let html = "<ul>";
    arr.forEach(item => {
        html += `<li>${item}</li>`;
    });
    html += "</ul>";
    return html;
}


/* ============================================================
   GENERATE FINAL REFLECTION CARD
============================================================ */
function generateReflection() {
    const t = translations[selectedLanguage];

    const senderName = document.getElementById("senderName").value.trim();
    const reflectionDate = document.getElementById("reflectionDate").value;
    const person = document.getElementById("person").value.trim();

    const challengesText = document.getElementById("challenges").value.trim();
    const appreciationsText = document.getElementById("appreciations").value.trim();

    const challengesArr = parseList(challengesText);
    const appreciationsArr = parseList(appreciationsText);

    const challengesHTML = formatListHTMLFromArray(challengesArr);
    const appreciationsHTML = formatListHTMLFromArray(appreciationsArr);

    // Title
    document.getElementById("outputTitle").innerHTML = person || "";

    // Opening
    document.getElementById("outputOpening").innerHTML = t.opening;

    // Challenges section
    document.getElementById("outputChallengesTitle").innerHTML = t.challengesTitle;
    document.getElementById("outputChallengesIntro").innerHTML = t.challengesIntro;
    document.getElementById("outputChallenges").innerHTML = challengesHTML;

    // Appreciations section
    document.getElementById("outputAppreciationsTitle").innerHTML = t.appreciationsTitle;
    document.getElementById("outputAppreciationsIntro").innerHTML = t.appreciationsIntro;
    document.getElementById("outputAppreciations").innerHTML = appreciationsHTML;

    // Bridge sentence
    document.getElementById("outputBridge").innerHTML = t.bridgeSentence;

    // Signature
    document.getElementById("outputSignature").innerHTML =
        t.senderSignature(senderName, reflectionDate);

    // Order / offering texts
    document.getElementById("outputOrderTitle").innerHTML = t.orderTitle;
    document.getElementById("offerLampFlowerText").innerHTML = t.offerLampFlower;
    document.getElementById("offerFlowerCardText").innerHTML = t.offerFlowerCard;
    document.getElementById("orderBtn").innerHTML = t.orderBtn;

    // Animate healing mantra
    animateHealingLines(selectedLanguage);

    // Save data for sharing / IG story
    generatedCardData = {
        lang: selectedLanguage,
        person,
        senderName,
        reflectionDate,
        opening: t.opening,
        challenges: challengesHTML,
        appreciations: appreciationsHTML,
        bridgeSentence: t.bridgeSentence
    };

    showStep("output");
}


/* ============================================================
   HEALING MANTRA TYPEWRITER
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
function downloadCard() {
    const card = document.getElementById("output");
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
   IG STORY SAFE GENERATOR
============================================================ */
function convertListHTML(htmlList) {
    const matches = htmlList.match(/<li>(.*?)<\/li>/g);
    if (!matches) return "";
    return matches.join("");
}

function generateStorySafeCard(data) {
    const {
        person,
        opening,
        challenges,
        appreciations,
        bridgeSentence,
        senderName,
        reflectionDate,
        lang
    } = data;

    const t = translations[lang];

    const lines = healingLines[lang] || healingLines.en;
    const mantraHTML = lines.join("<br>");

    return `
        <div class="storyCardSafe">

            <div class="storyTitle">${person || ""}</div>

            <p class="storyText">${opening}</p>

            <div class="storySectionTitle">
                ${t.challengesTitle}
            </div>
            <p class="storyText">${t.challengesIntro}</p>
            <ul class="storyList">${convertListHTML(challenges)}</ul>

            <div class="storySectionTitle">
                ${t.appreciationsTitle}
            </div>
            <p class="storyText">${t.appreciationsIntro}</p>
            <ul class="storyList">${convertListHTML(appreciations)}</ul>

            <p class="storyText">${bridgeSentence}</p>

            <div class="storyMantra">
                ${mantraHTML}
            </div>

            <div class="storySignature">
                ${t.senderSignature(senderName, reflectionDate)}
            </div>

        </div>
    `;
}


/* Adjust fonts for language in Story */
function adjustStoryFontForLanguage(wrapper, lang) {
    if (lang === "zh") {
        wrapper.style.fontFamily = "'Noto Sans SC', 'Noto Sans', sans-serif";
        wrapper.querySelectorAll(".storyText").forEach(el => {
            el.style.fontSize = "1.05rem";
        });
        wrapper.querySelectorAll(".storyList li").forEach(el => {
            el.style.fontSize = "1.0rem";
        });
    } else if (lang === "ms") {
        wrapper.querySelectorAll(".storyText").forEach(el => {
            el.style.fontSize = "1.08rem";
        });
    }
}

/* Dark / light Story card depending on theme */
function adjustStoryCardForTheme(wrapper, theme) {
    const card = wrapper.querySelector(".storyCardSafe");
    if (!card) return;
    card.classList.remove("storyCardSafe-dark", "storyCardSafe-light");

    if (theme === "lumi" || theme === "cosmic") {
        card.classList.add("storyCardSafe-dark");
    } else {
        card.classList.add("storyCardSafe-light");
    }
}


/* Theme helpers */
function getSelectedTheme() {
    const el = document.getElementById("storyTheme");
    return el ? el.value || "lumi" : "lumi";
}

function getThemeClass(theme) {
    switch (theme) {
        case "lumi": return "theme-lumi";
        case "dawn": return "theme-dawn";
        case "sand": return "theme-sand";
        case "cosmic": return "theme-cosmic";
        case "clean": return "theme-clean";
        default: return "theme-lumi";
    }
}


/* ============================================================
   DOWNLOAD IG STORY
============================================================ */
function downloadStoryCard() {
    const data = generatedCardData;
    if (!data) return;

    const theme = getSelectedTheme();
    const themeClass = getThemeClass(theme);

    const storyHTML = generateStorySafeCard(data);

    const wrapper = document.createElement("div");
    wrapper.className = `storyWrapper ${themeClass}`;
    wrapper.innerHTML = storyHTML;

    document.body.appendChild(wrapper);

    adjustStoryCardForTheme(wrapper, theme);
    adjustStoryFontForLanguage(wrapper, data.lang);

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


/* ============================================================
   SHARE CARD (LINK TO RECIPIENT VIEW)
============================================================ */
function shareCard() {
    if (!generatedCardData) return;

    const senderName = document.getElementById("senderName").value.trim();
    const reflectionDate = document.getElementById("reflectionDate").value;
    const person = document.getElementById("person").value.trim();

    const lang = selectedLanguage;
    const t = translations[lang];

    const cardData = {
        lang,
        title: person || "",
        intro: t.opening,
        challenges: document.getElementById("outputChallenges").innerHTML,
        appreciations: document.getElementById("outputAppreciations").innerHTML,
        bridgeSentence: t.bridgeSentence,
        cta: "",
        senderName,
        reflectionDate,
        person,
        healing: healingLines[lang] || healingLines.en
    };

    const encoded = btoa(JSON.stringify(cardData));
    // Adjust path if repo name differs
    const shareURL = `${window.location.origin}${window.location.pathname.replace(/index\.html?$/,"")}recipient.html?card=${encoded}`;

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


/* ============================================================
   WHATSAPP ORDER CTA
============================================================ */
function openWhatsAppOrder() {
    const t = translations[selectedLanguage];

    const senderName = document.getElementById("senderName").value.trim();
    const reflectionDate = document.getElementById("reflectionDate").value;
    const person = document.getElementById("person").value.trim();

    const lampFlower = document.getElementById("offerLampFlower").checked;
    const flowerCard = document.getElementById("offerFlowerCard").checked;

    if (!lampFlower && !flowerCard) {
        alert("Please select at least one option before ordering.");
        return;
    }

    const msg = t.whatsappTemplate({
        senderName,
        date: reflectionDate,
        person,
        lampFlower,
        flowerCard
    });

    const url = "https://wa.me/60146205893?text=" + msg;
    window.open(url, "_blank");
}


/* ============================================================
   THEME SELECTOR INIT
============================================================ */
function initThemeSelector() {
    const select = document.getElementById("storyTheme");
    const previews = document.querySelectorAll(".themePreview");
    if (!select || !previews.length) return;

    select.addEventListener("change", () => {
        const theme = select.value || "lumi";
        updateThemePreviewSelection(theme);
    });

    previews.forEach(preview => {
        preview.addEventListener("click", () => {
            const theme = preview.getAttribute("data-theme");
            if (!theme) return;
            select.value = theme;
            updateThemePreviewSelection(theme);
        });
    });

    updateThemePreviewSelection(select.value || "lumi");
}

function updateThemePreviewSelection(theme) {
    const previews = document.querySelectorAll(".themePreview");
    previews.forEach(p => {
        if (p.getAttribute("data-theme") === theme) {
            p.classList.add("activeThemePreview");
        } else {
            p.classList.remove("activeThemePreview");
        }
    });
}


/* ============================================================
   DOM READY
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    initThemeSelector();
});
