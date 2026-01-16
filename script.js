function hideAllSections() {
  document.querySelectorAll('.td-section, .content-section').forEach(sec => sec.style.display = 'none');
}

function showTD(tdId) {
  hideAllSections();
  const tdSection = document.getElementById(tdId);
  tdSection.style.display = 'block';
  const lang = document.getElementById('lang').value;
  tdSection.querySelector('h2').innerHTML = tdSection.querySelector('h2').getAttribute('data-' + lang);
}

function showContent(contentId) {
  hideAllSections();
  const section = document.getElementById(contentId);
  section.style.display = 'block';
  const lang = document.getElementById('lang').value;
  section.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
}

function changeLanguage(lang) {
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
  document.body.style.direction = (lang === 'ar') ? 'rtl' : 'ltr';
}

// افتراضي: إظهار TD1 عند التحميل
showTD('td1');
function toggleSolutionTD1() {
  const box = document.getElementById("solution-td1");
  const btn = event.target;

  if (box.style.display === "none") {
    box.style.display = "block";
    btn.textContent = "❌ Masquer la solution détaillée";
    box.scrollIntoView({ behavior: "smooth" });
  } else {
    box.style.display = "none";
    btn.textContent = "📘 Afficher la solution détaillée";
  }
}
