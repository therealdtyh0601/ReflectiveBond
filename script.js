const translations = {
  en: {
    title: "Think of a Person",
    instruction: "Reflect on someone in your life...",
    labelPerson: "Person:",
    placeholderPerson: "Enter a name..."
    // Add more translations for other steps and output
  },
  zh: {
    title: "想起一个人",
    instruction: "回想你生活中的某个人...",
    labelPerson: "人：",
    placeholderPerson: "输入一个名字..."
    // Chinese translations here
  },
  ms: {
    title: "Fikirkan Seseorang",
    instruction: "Renungkan seseorang dalam hidup anda...",
    labelPerson: "Orang:",
    placeholderPerson: "Masukkan nama..."
    // Malay translations here
  }
};

function setLanguage(lang) {
  document.getElementById('title').textContent = translations[lang].title;
  document.getElementById('instruction').textContent = translations[lang].instruction;
  document.getElementById('labelPerson').textContent = translations[lang].labelPerson;
  document.getElementById('person').placeholder = translations[lang].placeholderPerson;
  
  // Show the form after language is selected
  document.getElementById('form').style.display = 'block';
}
