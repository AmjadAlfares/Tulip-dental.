function setLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("title").textContent = data.title;
      document.getElementById("about").textContent = data.about;
      document.getElementById("contact").textContent = data.contact;
    });
}
