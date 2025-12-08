/* ============================================================
   GLOBAL STATE
============================================================ */
let selectedLanguage = "en";

/* ============================================================
   TRANSLATIONS (Full Multilingual Block)
============================================================ */
const translations = {
  en: {
    /* --- User Info --- */
    userInfo_title: "Before We Begin",
    userInfo_instruction:
      "Take a moment to ground yourself. Your name will appear gently at the end of the card as the sender.",
    labelSenderName: "Your name",
    labelDate: "Date of reflection",
    userNext: "Continue",

    /* --- Step 1: Person --- */
    step1_title: "Think of a Person",
    step1_instruction:
      "Choose someone you know personally — a friend, family member, partner or colleague. This will be the person you reflect on today.",
    label_person: "Who is this person? (Name or relationship)",
    next: "Next",

    /* --- Step 2: Challenges (Hate / Vent) --- */
    step2_label:
      "Write 3–5 things that currently trigger you or create emotional tension with this person. Let the difficult feelings speak freely.",
    
    /* --- Step 3: Breathwork --- */
    breath_title: "Pause and Breathe",
    breath_text:
      "You’ve allowed your frustration, hurt, or anger to be spoken. Now take a slow breath in… and a slow breath out. Place one hand on your heart. Notice that you are safe and present. This moment is for clarity, not self-blame.",
    breath_next: "I’m ready to continue",

    /* --- Step 4: Appreciations --- */
    step3_label:
      "Now, write 3–5 things you appreciate, admire, or still value about this person.",
    generate: "Generate Reflection Card",

    /* --- Opening (EN) --- */
    opening:
      "This reflection is written with honesty and care. Relationships are rarely only one thing — they are a mix of difficulty, learning, warmth, and complexity. Today, I allowed myself to express what has been heavy on my heart.",

    /* --- Section Titles --- */
    challengesTitle: "The Difficult Parts",
    appreciationsTitle: "The Parts I Still Cherish",

    /* --- Section Intros --- */
    challengesIntro:
      "Here are the moments or behaviours that have challenged me recently:",
    appreciationsIntro:
      "And here are the qualities in you that I still see, value, or quietly hold appreciation for:",

    /* --- Bridge Sentence --- */
    bridgeSentence:
      "Both sets of truths can exist at the same time — the parts that hurt and the parts that matter. Seeing both helps me understand this connection with more clarity and humanity.",

    /* --- Signature --- */
    senderSignature(name, date) {
      if (!name && !date) return "";
      if (name && date) return `With warmth, <strong>${name}</strong><br>${date}`;
      if (name) return `With warmth, <strong>${name}</strong>`;
      return `${date}`;
    },

    /* --- Order Section --- */
    orderTitle: "Optional Offering & Delivery",
    offerLampFlower:
      "Lamp + Flower offering at the Buddha altar (Klang Valley, 24h SLA)",
    offerFlowerCard:
      "Card + Flower delivery to the recipient (Klang Valley only)",
    orderBtn: "Order via WhatsApp",

    /* --- WhatsApp CTA --- */
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

  /* ================================================================== */
  /* ========================= CHINESE ================================ */
  /* ================================================================== */

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

  /* ================================================================== */
  /* ========================= MALAY ================================ */
  /* ================================================================== */

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
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("activeLang");
    } else {
      btn.classList.remove("activeLang");
    }
  });
}


/* ============================================================
   FLOW CONTROL
============================================================ */
function startApp() {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("form").style.display = "block";
  loadUserInfoStep();
}

function loadUserInfoStep() {
  const t = translations[selectedLanguage];
  document.getElementById("userInfoStep").style.display = "block";

  document.getElementById("userInfoTitle").innerHTML = t.userInfo_title;
  document.getElementById("userInfoInstruction").innerHTML = t.userInfo_instruction;
  document.getElementById("labelSenderName").innerHTML = t.labelSenderName;
  document.getElementById("labelDate").innerHTML = t.labelDate;
  document.getElementById("btnUserNext").innerHTML = t.userNext;

  // default date = today
  const today = new Date().toISOString().slice(0, 10);
  document.getElementById("reflectionDate").value ||= today;
}

function goToPersonStep() {
  document.getElementById("userInfoStep").style.display = "none";
  document.getElementById("step1").style.display = "block";

  const t = translations[selectedLanguage];
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
  document.getElementById("breathStep").style.display = "block";

  const t = translations[selectedLanguage];
  document.getElementById("breathTitle").innerHTML = t.breath_title;
  document.getElementById("breathText").innerHTML = t.breath_text;
  document.getElementById("btnBreathNext").innerHTML = t.breath_next;
}

function goToAppreciations() {
  document.getElementById("breathStep").style.display = "none";
  document.getElementById("step3").style.display = "block";

  const t = translations[selectedLanguage];
  document.getElementById("labelAppreciations").innerHTML = t.step3_label;
  document.getElementById("btnNext3").innerHTML = t.generate;
}

function goToOutput() {
  document.getElementById("step3").style.display = "none";
  generateReflection();
}


/* Back buttons */
function goBackToLanding() {
  document.getElementById("form").style.display = "none";
  document.getElementById("landingPage").style.display = "block";
}

function goBackToUserInfo() {
  document.getElementById("step1").style.display = "none";
  document.getElementById("userInfoStep").style.display = "block";
}

function goBackToPerson() {
  document.getElementById("step2").style.display = "none";
  document.getElementById("step1").style.display = "block";
}

function goBackToChallenges() {
  document.getElementById("breathStep").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

function goBackToBreath() {
  document.getElementById("step3").style.display = "none";
  document.getElementById("breathStep").style.display = "block";
}

function goBackToAppreciations() {
  document.getElementById("output").style.display = "none";
  document.getElementById("step3").style.display = "block";
}


/* ============================================================
   GENERATE CARD
============================================================ */
function generateReflection() {
  const t = translations[selectedLanguage];

  const senderName = document.getElementById("senderName").value.trim();
  const reflectionDate = document.getElementById("reflectionDate").value;
  const person = document.getElementById("person").value.trim();
  const challenges = document.getElementById("challenges").value.trim();
  const appreciations = document.getElementById("appreciations").value.trim();

  document.getElementById("output").style.display = "block";

  document.getElementById("outputTitle").innerHTML = person || "";
  document.getElementById("outputIntro").innerHTML = t.introTemplate(person || "this person");

  document.getElementById("outputChallenges").innerHTML =
    `<strong>${t.challengesTitle}</strong><br>` + formatList(challenges);

  document.getElementById("outputAppreciations").innerHTML =
    `<strong>${t.appreciationsTitle}</strong><br>` + formatList(appreciations);

  document.getElementById("senderSignature").innerHTML =
    t.senderSignature(senderName, reflectionDate);

  // set offering texts
  document.getElementById("orderTitle").innerHTML = t.orderTitle;
  document.getElementById("offerLampFlowerText").innerHTML = t.offerLampFlower;
  document.getElementById("offerFlowerCardText").innerHTML = t.offerFlowerCard;
  document.getElementById("orderBtn").innerHTML = t.orderBtn;

  // animate mantra
  animateHealingLines(selectedLanguage);
}

function formatList(text) {
  return text
    .split("\n")
    .filter(x => x.trim() !== "")
    .map(x => "• " + x.trim())
    .join("<br>");
}


/* ============================================================
   TYPEWRITER MANTRA (SENDER VIEW)
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
   DOWNLOAD (NORMAL) + IG STORY 1080×1920
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

function downloadStoryCard() {
  const source = document.querySelector("#output");
  if (!source) return;

  const wrapper = document.createElement("div");
  wrapper.className = "storyWrapper watermarkedCard";

  const clone = source.cloneNode(true);
  clone.style.margin = "0";
  clone.style.boxShadow = "none";
  clone.style.background = "rgba(255,255,255,0.96)";
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


/* ============================================================
   SHARE LINK (Recipient View)
============================================================ */
function shareCard() {
  const senderName = document.getElementById("senderName").value.trim();
  const reflectionDate = document.getElementById("reflectionDate").value;
  const person = document.getElementById("person").value.trim();

  const cardData = {
    title: document.getElementById("outputTitle").innerHTML,
    intro: document.getElementById("outputIntro").innerHTML,
    challenges: document.getElementById("outputChallenges").innerHTML,
    appreciations: document.getElementById("outputAppreciations").innerHTML,
    cta: "",
    lang: selectedLanguage,
    healing: healingLines[selectedLanguage],
    senderName,
    reflectionDate,
    person
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


/* ============================================================
   WHATSAPP ORDER CTA (Back of Card)
============================================================ */
function openWhatsAppOrder() {
  const t = translations[selectedLanguage];
  const senderName = document.getElementById("senderName").value.trim();
  const reflectionDate = document.getElementById("reflectionDate").value;
  const person = document.getElementById("person").value.trim();

  const lampFlower = document.getElementById("offerLampFlower").checked;
  const flowerCard = document.getElementById("offerFlowerCard").checked;

  if (!lampFlower && !flowerCard) {
    alert("Please select at least one option (offering or delivery) before ordering.");
    return;
  }

  const msg = t.whatsappTemplate({ senderName, date: reflectionDate, person, lampFlower, flowerCard });
  const url = "https://wa.me/60146205893?text=" + msg;
  window.open(url, "_blank");
}
