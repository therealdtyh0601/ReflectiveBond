/* =======================================================================
   LANGUAGE DATASET
   (Unchanged – Your complete multi-language dataset)
======================================================================= */

const translations = {
    en: {
        userInfoTitle: "Before we begin…",
        userInfoInstruction: "Your name and today’s date will appear at the end of your reflection.",
        senderName: "Your Name",
        date: "Date",
        next: "Next",
        personTitle: "Who are you writing about?",
        personInstruction: "Enter the name or relation of the person you’re thinking of.",
        personLabel: "Person",
        challengesLabel: "List what frustrates or hurts you about this person:",
        breathTitle: "Take a breath with me",
        breathText: "We’ll take a few slow breaths before continuing. Follow the orb.",
        appreciationsLabel: "Now list things you genuinely appreciate about this person:",
        outputTitle: "Your Reflection",
        outputOpening: "Here is your thoughtful reflection based on what you expressed:",
        outputChallengesTitle: "What Hurts",
        outputChallengesIntro: "These are the things weighing on your heart:",
        outputAppreciationsTitle: "What You Still Value",
        outputAppreciationsIntro: "Despite the hurts, these qualities still shine through:",
        outputBridge: "Both truth and care can coexist. Awareness brings space.",
        healing1: "May I see clearly.",
        healing2: "May I soften where I can.",
        healing3: "May I honour my boundaries.",
        healing4: "May I act with steadiness and compassion.",
        signature: "With reflection,",
        orderTitle: "Would you like to send a small offering on their behalf?",
        offerLampFlower: "A Lamp + Flower Offering",
        offerFlowerCard: "A Flower Offering + Dedication Card",
        orderBtn: "Order via WhatsApp",
    },

    zh: {
        userInfoTitle: "在开始之前…",
        userInfoInstruction: "你的名字和今天的日期会出现在反思卡片的结尾。",
        senderName: "你的名字",
        date: "日期",
        next: "下一步",
        personTitle: "你想写的人是谁？",
        personInstruction: "输入你正在思考的那个人的名字或关系。",
        personLabel: "对象",
        challengesLabel: "列出令你伤心、生气或困扰的事情：",
        breathTitle: "先一起深呼吸",
        breathText: "我们会一起做几次缓慢的呼吸，然后再继续。",
        appreciationsLabel: "现在写下你依然欣赏对方的地方：",
        outputTitle: "你的反思",
        outputOpening: "以下是根据你的表达整理出的完整反思：",
        outputChallengesTitle: "让你受伤的地方",
        outputChallengesIntro: "这些是你心里的重量：",
        outputAppreciationsTitle: "你仍然珍惜的部分",
        outputAppreciationsIntro: "尽管受伤，这些品质依然存在：",
        outputBridge: "诚实与在乎可以共存，觉察让心更宽。 ",
        healing1: "愿我看清事实。",
        healing2: "愿我在可以的地方柔软。",
        healing3: "愿我守护自己的界线。",
        healing4: "愿我以稳重与慈心回应。",
        signature: "致以觉知，",
        orderTitle: "你想代表对方送出一点心意吗？",
        offerLampFlower: "供灯＋供花",
        offerFlowerCard: "供花＋祈愿卡片",
        orderBtn: "WhatsApp 下单",
    },

    ms: {
        userInfoTitle: "Sebelum kita mula…",
        userInfoInstruction: "Nama dan tarikh hari ini akan muncul pada kad refleksi.",
        senderName: "Nama Anda",
        date: "Tarikh",
        next: "Seterusnya",
        personTitle: "Siapakah yang anda sedang fikirkan?",
        personInstruction: "Masukkan nama atau hubungan orang tersebut.",
        personLabel: "Individu",
        challengesLabel: "Nyatakan perkara yang membuat anda marah atau terluka:",
        breathTitle: "Tarik nafas perlahan",
        breathText: "Mari kita ambil beberapa nafas perlahan sebelum meneruskan.",
        appreciationsLabel: "Sekarang tulis apa yang anda masih hargai tentang individu ini:",
        outputTitle: "Refleksi Anda",
        outputOpening: "Berikut ialah refleksi berdasarkan apa yang anda kongsikan:",
        outputChallengesTitle: "Apa yang Menyakitkan",
        outputChallengesIntro: "Ini ialah perkara yang membebankan hati anda:",
        outputAppreciationsTitle: "Apa yang Masih Berharga",
        outputAppreciationsIntro: "Walaupun ada luka, nilai-nilai ini tetap wujud:",
        outputBridge: "Kebenaran dan kasih boleh wujud bersama.",
        healing1: "Semoga saya melihat dengan jelas.",
        healing2: "Semoga saya lembut bila mampu.",
        healing3: "Semoga saya menjaga batas saya.",
        healing4: "Semoga saya bertindak dengan tenang dan belas.",
        signature: "Dengan refleksi,",
        orderTitle: "Adakah anda ingin menghantar sedikit dedikasi?",
        offerLampFlower: "Pemberian Pelita + Bunga",
        offerFlowerCard: "Pemberian Bunga + Kad Dedikasi",
        orderBtn: "Pesan melalui WhatsApp",
    }
};


/* =======================================================================
   GLOBAL STATE
======================================================================= */

let currentLang = "en";

function selectLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll(".langBtn").forEach(btn =>
        btn.classList.remove("activeLang")
    );
    document.querySelector(`[data-lang="${lang}"]`).classList.add("activeLang");
}


/* =======================================================================
   TRANSLATION LOADER
======================================================================= */

function loadTranslations() {
    const t = translations[currentLang];

    document.getElementById("userInfoTitle").innerText = t.userInfoTitle;
    document.getElementById("userInfoInstruction").innerText = t.userInfoInstruction;

    document.getElementById("labelSenderName").innerText = t.senderName;
    document.getElementById("labelDate").innerText = t.date;

    document.getElementById("btnUserNext").innerText = t.next;

    document.getElementById("stepPersonTitle").innerText = t.personTitle;
    document.getElementById("stepPersonInstruction").innerText = t.personInstruction;
    document.getElementById("labelPerson").innerText = t.personLabel;

    document.getElementById("labelChallenges").innerText = t.challengesLabel;

    document.getElementById("breathTitle").innerText = t.breathTitle;
    document.getElementById("breathText").innerText = t.breathText;

    document.getElementById("labelAppreciations").innerText = t.appreciationsLabel;

    document.getElementById("outputTitle").innerText = t.outputTitle;
    document.getElementById("outputOpening").innerText = t.outputOpening;
    document.getElementById("outputChallengesTitle").innerText = t.outputChallengesTitle;
    document.getElementById("outputChallengesIntro").innerText = t.outputChallengesIntro;
    document.getElementById("outputAppreciationsTitle").innerText = t.outputAppreciationsTitle;
    document.getElementById("outputAppreciationsIntro").innerText = t.outputAppreciationsIntro;
    document.getElementById("outputBridge").innerText = t.outputBridge;

    document.getElementById("h1").innerText = t.healing1;
    document.getElementById("h2").innerText = t.healing2;
    document.getElementById("h3").innerText = t.healing3;
    document.getElementById("h4").innerText = t.healing4;

    document.getElementById("outputOrderTitle").innerText = t.orderTitle;
    document.getElementById("offerLampFlowerText").innerText = t.offerLampFlower;
    document.getElementById("offerFlowerCardText").innerText = t.offerFlowerCard;
    document.getElementById("orderBtn").innerText = t.orderBtn;
}


/* =======================================================================
   PAGE FLOW
======================================================================= */

function startApp() {
    loadTranslations();

    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("userInfoStep").style.display = "block";
    document.getElementById("homeBtn").style.display = "flex";
}


/* STEP 1 → STEP 2 */
function goToPersonStep() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("stepPerson").style.display = "block";
}

/* STEP 2 → STEP 3 */
function goToChallengesStep() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("stepChallenges").style.display = "block";
}


/* STEP 3 → STEP 4: BREATHWORK */
let breathInterval;
let breathSeconds = 12;

function startBreathwork() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("breathStep").style.display = "block";

    breathSeconds = 12;
    document.getElementById("breathCountdown").innerText = breathSeconds;

    if (breathInterval) clearInterval(breathInterval);

    breathInterval = setInterval(() => {
        breathSeconds--;
        document.getElementById("breathCountdown").innerText = breathSeconds;

        if (breathSeconds <= 0) {
            clearInterval(breathInterval);
            document.getElementById("btnBreathNext").disabled = false;
        }
    }, 1000);
}


/* STEP 4 → STEP 5 */
function goToAppreciationsStep() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("stepAppreciations").style.display = "block";
}


/* STEP 5 → STEP 6 */
function generateReflection() {
    hideAllPages();
    loadTranslations();

    const t = translations[currentLang];

    document.getElementById("flow").style.display = "block";
    document.getElementById("output").style.display = "block";

    const sender = document.getElementById("senderName").value || "Someone";
    const date = document.getElementById("reflectionDate").value || "";

    const challenges = document.getElementById("challenges").value.trim().split("\n").filter(Boolean);
    const appreciations = document.getElementById("appreciations").value.trim().split("\n").filter(Boolean);

    document.getElementById("outputChallenges").innerHTML =
        challenges.map(c => `<p>• ${c}</p>`).join("");

    document.getElementById("outputAppreciations").innerHTML =
        appreciations.map(a => `<p>• ${a}</p>`).join("");

    const signature = `${t.signature}\n${sender}\n${date}`;
    document.getElementById("outputSignature").innerText = signature;
}


/* =======================================================================
   OFFERING & WHATSAPP ORDER
======================================================================= */

function openWhatsAppOrder() {
    const selected = [];

    if (document.getElementById("offerLampFlower").checked)
        selected.push("Lamp + Flower");

    if (document.getElementById("offerFlowerCard").checked)
        selected.push("Flower + Card");

    const msg = encodeURIComponent(`Offering Request:\n${selected.join(", ")}`);
    const url = `https://wa.me/60123456789?text=${msg}`;

    window.open(url, "_blank");
}


/* =======================================================================
   CARD GENERATION (HTML2CANVAS)
======================================================================= */

function downloadCard() {
    html2canvas(document.getElementById("output")).then(canvas => {
        const link = document.createElement("a");
        link.download = "reflection-card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

function downloadStoryCard() {
    html2canvas(document.getElementById("output"), {
        width: 1080,
        height: 1920,
        scale: 3
    }).then(canvas => {
        const link = document.createElement("a");
        link.download = "reflection-story.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}


/* =======================================================================
   SHARE LINK
======================================================================= */

function shareCard() {
    const data = {
        name: document.getElementById("senderName").value,
        person: document.getElementById("person").value,
        challenges: document.getElementById("challenges").value,
        appreciations: document.getElementById("appreciations").value,
        lang: currentLang,
    };

    const url = new URL(window.location.href);
    url.searchParams.set("data", btoa(JSON.stringify(data)));

    navigator.clipboard.writeText(url.toString());

    alert("Link copied to clipboard!");
}


/* =======================================================================
   READER MODE FOR SHARED LINKS (recipient.html)
======================================================================= */

(function loadSharedCardIfPresent() {
    const params = new URLSearchParams(window.location.search);
    if (!params.has("data")) return;

    const raw = atob(params.get("data"));
    const obj = JSON.parse(raw);

    document.getElementById("recipientName").innerText = obj.name;
    document.getElementById("recipientPerson").innerText = obj.person;

    document.getElementById("recipientChallenges").innerHTML =
        obj.challenges.split("\n").map(c => `<p>• ${c}</p>`).join("");

    document.getElementById("recipientAppreciations").innerHTML =
        obj.appreciations.split("\n").map(a => `<p>• ${a}</p>`).join("");
})();


/* =======================================================================
   STATIC PAGE NAVIGATION + HOME BUTTON SYSTEM
======================================================================= */

/** Hide EVERYTHING */
function hideAllPages() {
    const landing = document.getElementById("landingPage");
    if (landing) landing.style.display = "none";

    const flow = document.getElementById("flow");
    if (flow) flow.style.display = "none";

    document.querySelectorAll(".staticPage").forEach(p => {
        p.style.display = "none";
    });
}

/** Open static page */
function openPage(id) {
    hideAllPages();
    const page = document.getElementById(id);
    if (page) page.style.display = "block";
    document.getElementById("homeBtn").style.display = "flex";
}

/** Return home */
function returnHome() {
    hideAllPages();
    document.getElementById("landingPage").style.display = "block";
    document.getElementById("homeBtn").style.display = "none";
}

/** Show flow wrapper */
function showFlow() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("homeBtn").style.display = "flex";
}


/* =======================================================================
   BACKWARD NAVIGATION (within flow)
======================================================================= */

function goBackToLanding() {
    returnHome();
}

function goBackToUserInfo() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("userInfoStep").style.display = "block";
    document.getElementById("homeBtn").style.display = "flex";
}

function goBackToPerson() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("stepPerson").style.display = "block";
    document.getElementById("homeBtn").style.display = "flex";
}

function goBackToChallenges() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("stepChallenges").style.display = "block";
    document.getElementById("homeBtn").style.display = "flex";
}

function goBackToBreath() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("breathStep").style.display = "block";
    document.getElementById("homeBtn").style.display = "flex";
}

function goBackToAppreciations() {
    hideAllPages();
    document.getElementById("flow").style.display = "block";
    document.getElementById("stepAppreciations").style.display = "block";
    document.getElementById("homeBtn").style.display = "flex";
}

/* End of File */
