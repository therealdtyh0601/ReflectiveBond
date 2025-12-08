// script.js
// Lightweight, multilingual flow for "Think of a Person" webapp

let selectedLanguage = "en";
let currentStep = 1;

const translations = {
  en: {
    // General
    title: "Think of a person you know well.",
    instruction:
      "This short reflection helps you see both the difficult and the beautiful sides of this relationship.",
    labelPerson: "Who are you thinking of?",
    placeholderPerson: "e.g. my older sister, my colleague, my father",
    btnNext1: "Next",

    // Step 2: Challenges
    labelChallenges:
      "What are the things that make you feel frustrated or tired with this person?",
    placeholderChallenges:
      "Write 3–5 points, separated by commas or line breaks.",
    btnNext2: "Next",

    // Step 3: Appreciations
    labelAppreciations:
      "What are the things you genuinely appreciate or feel grateful for in this person?",
    placeholderAppreciations:
      "Write 3–5 points, separated by commas or line breaks.",
    btnNext3: "Continue",

    // CTA
    ctaInstruction:
      "Before we create your reflection card, would you like to include any of these gestures?",
    ctaLampText:
      "Dedicate a lamp offering for this person in front of the Buddha.",
    ctaFlowerText:
      "Send this card together with a flower as a gentle gesture of appreciation.",
    btnGenerate: "Generate Reflection Card",

    // Output card text
    fallbackName: "you",
    outputTitle: "Reflection for {person}",
    outputIntro:
      "This card is a gentle space to hold both the difficult and the tender sides of my connection with {person}.",
    outputChallengesTitle: "When I feel distant or upset…",
    outputAppreciationsTitle: "And yet, in my heart I know…",
    outputChallengesPrefix: "Sometimes I feel challenged because:",
    outputAppreciationsPrefix: "At the same time, I truly appreciate that you:",

    outputCTA_none: "",
    outputCTA_lamp:
      "As a quiet gesture of goodwill, I am dedicating a lamp offering for you in front of the Buddha.",
    outputCTA_flower:
      "Along with this card, I am sending you a flower in my heart as a symbol of appreciation.",
    outputCTA_both:
      "For you, I am both dedicating a lamp offering in front of the Buddha and sending a flower as a symbol of appreciation.",

    // Validation
    msgFillField: "Please complete this step before continuing."
  },

  zh: {
    // General
    title: "想起一个你很熟悉的人。",
    instruction: "这一小段自我整理，是为了帮你同时看见这段关系里的不容易与珍贵之处。",
    labelPerson: "你现在想到的是谁？",
    placeholderPerson: "例如：我的姐姐、同事、爸爸",
    btnNext1: "下一步",

    // Step 2: Challenges
    labelChallenges: "哪些地方，会让你对这个人感到生气、难受或疲累？",
    placeholderChallenges: "写下 3–5 点，可以用逗号或分行分开。",
    btnNext2: "下一步",

    // Step 3: Appreciations
    labelAppreciations: "哪些地方，是你真心欣赏、感激这个人的？",
    placeholderAppreciations: "写下 3–5 点，可以用逗号或分行分开。",
    btnNext3: "继续",

    // CTA
    ctaInstruction: "在生成这张关系卡片之前，你想不想加上一些心意？",
    ctaLampText: "为他／她在佛前点一盏灯，祈愿光明与善缘。",
    ctaFlowerText: "把这张卡片，连同一朵花，一并作为温柔的心意送出。",
    btnGenerate: "生成关系卡片",

    // Output card text
    fallbackName: "你",
    outputTitle: "写给 {person} 的一张心卡",
    outputIntro:
      "这张卡片，是我用来同时安放对 {person} 的不容易与心底那份在意。",
    outputChallengesTitle: "当我感到疏远或难受时……",
    outputAppreciationsTitle: "但在心里，我也很清楚……",
    outputChallengesPrefix: "有时候，我会因为这些而感到受伤或生气：",
    outputAppreciationsPrefix: "同时，我也真心感激你这些特质：",

    outputCTA_none: "",
    outputCTA_lamp: "作为一份安静的祝福，我已为你点上一盏灯，愿光明守护你。",
    outputCTA_flower:
      "随着这张卡片，我也在心里送上一朵花，把我的感谢轻轻交给你。",
    outputCTA_both:
      "为你，我既点了一盏灯，也送上一朵花，愿光明与温柔同时陪伴你。",

    // Validation
    msgFillField: "请先完成这一部分，再按下一步。"
  },

  ms: {
    // General
    title: "Fikirkan seseorang yang anda benar-benar kenali.",
    instruction:
      "Refleksi ringkas ini membantu anda melihat kedua-dua sisi yang sukar dan sisi yang indah dalam hubungan ini.",
    labelPerson: "Anda sedang memikirkan siapa?",
    placeholderPerson: "cth: kakak saya, rakan sekerja saya, ayah saya",
    btnNext1: "Seterusnya",

    // Step 2: Challenges
    labelChallenges:
      "Perkara apa yang membuat anda rasa letih, marah atau kecewa dengan orang ini?",
    placeholderChallenges:
      "Tulis 3–5 poin, dipisahkan dengan koma atau baris baharu.",
    btnNext2: "Seterusnya",

    // Step 3: Appreciations
    labelAppreciations:
      "Perkara apa yang anda benar-benar hargai atau syukuri tentang orang ini?",
    placeholderAppreciations:
      "Tulis 3–5 poin, dipisahkan dengan koma atau baris baharu.",
    btnNext3: "Teruskan",

    // CTA
    ctaInstruction:
      "Sebelum kita hasilkan kad refleksi, adakah anda mahu menambah apa-apa niat atau dedikasi?",
    ctaLampText:
      "Menitipkan dedikasi pelita untuk orang ini di hadapan Buddha sebagai satu doa yang baik.",
    ctaFlowerText:
      "Menghantar kad ini bersama satu jambangan bunga sebagai tanda lembut penghargaan.",
    btnGenerate: "Hasilkan Kad Refleksi",

    // Output card text
    fallbackName: "kamu",
    outputTitle: "Refleksi untuk {person}",
    outputIntro:
      "Kad ini ialah ruang lembut untuk menampung kedua-dua sisi yang sukar dan sisi yang lembut dalam hubungan saya dengan {person}.",
    outputChallengesTitle: "Apabila saya rasa jauh atau terluka…",
    outputAppreciationsTitle: "Namun jauh di hati, saya tahu…",
    outputChallengesPrefix: "Kadang-kadang saya rasa tercabar kerana:",
    outputAppreciationsPrefix:
      "Pada masa yang sama, saya benar-benar menghargai bahawa kamu:",

    outputCTA_none: "",
    outputCTA_lamp:
      "Sebagai satu niat yang senyap dan baik, saya menitipkan dedikasi pelita untuk kamu di hadapan Buddha.",
    outputCTA_flower:
      "Bersama kad ini, saya juga menghantar sekuntum bunga dalam hati saya sebagai simbol penghargaan.",
    outputCTA_both:
      "Untuk kamu, saya menyalakan pelita dan juga menghantar sekuntum bunga, sebagai tanda doa dan penghargaan sekaligus.",

    // Validation
    msgFillField: "Sila lengkapkan bahagian ini sebelum meneruskan."
  }
};

// Language selection
function setLanguage(lang) {
  selectedLanguage = lang;
  currentStep = 1;

  const t = translations[lang];

  // Set texts for Step 1
  document.getElementById("title").textContent = t.title;
  document.getElementById("instruction").textContent = t.instruction;
  document.getElementById("labelPerson").textContent = t.labelPerson;
  document.getElementById("person").placeholder = t.placeholderPerson;
  document.getElementById("btnNext1").textContent = t.btnNext1;

  // Set texts for Step 2
  document.getElementById("labelChallenges").textContent =
    t.labelChallenges;
  document.getElementById("challenges").placeholder =
    t.placeholderChallenges;
  document.getElementById("btnNext2").textContent = t.btnNext2;

  // Set texts for Step 3
  document.getElementById("labelAppreciations").textContent =
    t.labelAppreciations;
  document.getElementById("appreciations").placeholder =
    t.placeholderAppreciations;
  document.getElementById("btnNext3").textContent = t.btnNext3;

  // CTA texts
  document.getElementById("ctaInstruction").textContent =
    t.ctaInstruction;
  document.getElementById("ctaLampText").textContent = t.ctaLampText;
  document.getElementById("ctaFlowerText").textContent =
    t.ctaFlowerText;
  document.getElementById("btnGenerate").textContent = t.btnGenerate;

  // Reset form visibility
  document.getElementById("form").style.display = "block";
  document.getElementById("step1").style.display = "block";
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "none";
  document.getElementById("ctaSection").style.display = "none";
  document.getElementById("output").style.display = "none";

  // Clear fields & CTA
  document.getElementById("person").value = "";
  document.getElementById("challenges").value = "";
  document.getElementById("appreciations").value = "";
  document.getElementById("ctaLamp").checked = false;
  document.getElementById("ctaFlower").checked = false;
}

// Step 1 → Step 2
function nextStep() {
  const t = translations[selectedLanguage];
  const person = document.getElementById("person").value.trim();

  if (!person) {
    alert(t.msgFillField);
    return;
  }

  currentStep = 2;
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

// Step 2 → Step 3
function nextStep2() {
  const t = translations[selectedLanguage];
  const challenges = document
    .getElementById("challenges")
    .value.trim();

  if (!challenges) {
    alert(t.msgFillField);
    return;
  }

  currentStep = 3;
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
}

// Step 3 → CTA section
function goToCTA() {
  const t = translations[selectedLanguage];
  const appreciations = document
    .getElementById("appreciations")
    .value.trim();

  if (!appreciations) {
    alert(t.msgFillField);
    return;
  }

  document.getElementById("step3").style.display = "none";
  document.getElementById("ctaSection").style.display = "block";
}

// Generate final reflection card
function generateReflection() {
  const t = translations[selectedLanguage];

  const personRaw = document.getElementById("person").value.trim();
  const person =
    personRaw || t.fallbackName;

  const challengesRaw = document
    .getElementById("challenges")
    .value.trim();
  const appreciationsRaw = document
    .getElementById("appreciations")
    .value.trim();

  const lampChecked = document.getElementById("ctaLamp").checked;
  const flowerChecked = document.getElementById("ctaFlower").checked;

  // Build output card content
  const title = t.outputTitle.replace("{person}", person);
  const intro = t.outputIntro.replace("{person}", person);

  const challengesList = formatAsList(challengesRaw);
  const appreciationsList = formatAsList(appreciationsRaw);

  let ctaText = "";
  if (lampChecked && flowerChecked) {
    ctaText = t.outputCTA_both;
  } else if (lampChecked) {
    ctaText = t.outputCTA_lamp;
  } else if (flowerChecked) {
    ctaText = t.outputCTA_flower;
  } else {
    ctaText = t.outputCTA_none;
  }

  // Inject into DOM
  document.getElementById("outputTitle").textContent = title;
  document.getElementById("outputIntro").textContent = intro;

  document.getElementById("outputChallenges").innerHTML =
    "<strong>" +
    escapeHtml(t.outputChallengesTitle) +
    "</strong><br>" +
    "<span>" +
    escapeHtml(t.outputChallengesPrefix) +
    "</span>" +
    challengesList;

  document.getElementById("outputAppreciations").innerHTML =
    "<strong>" +
    escapeHtml(t.outputAppreciationsTitle) +
    "</strong><br>" +
    "<span>" +
    escapeHtml(t.outputAppreciationsPrefix) +
    "</span>" +
    appreciationsList;

  document.getElementById("outputCTA").textContent = ctaText;

  // Show output, hide CTA section
  document.getElementById("ctaSection").style.display = "none";
  document.getElementById("output").style.display = "block";

  // Optional: scroll to output
  document
    .getElementById("output")
    .scrollIntoView({ behavior: "smooth" });
}

// Helper: format a raw string as <ul><li>…</li></ul>
function formatAsList(raw) {
  if (!raw) return "";

  const items = raw
    .split(/[\n,]/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  if (!items.length) return "";

  let html = "<ul>";
  items.forEach((item) => {
    html += "<li>" + escapeHtml(item) + "</li>";
  });
  html += "</ul>";
  return html;
}

// Helper: basic HTML escaping
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
