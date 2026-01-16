// ================== Show / Hide Sections ==================
function hideAllSections() {
  document.querySelectorAll('.td-section, .content-section').forEach(sec => sec.style.display = 'none');
}

function showSection(id) {
  hideAllSections();
  const sec = document.getElementById(id);
  if (sec) sec.style.display = 'block';
}

// ================== Toggle Semestre ==================
function toggleSemestre(id) {
  const div = document.getElementById(id);
  if(div.style.display === "block") div.style.display = "none";
  else div.style.display = "block";
}

// ================== Language ==================
function changeLanguage(lang) {
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
  document.body.style.direction = (lang === 'ar') ? 'rtl' : 'ltr';
}

// ================== TD Buttons ==================
function showTD(tdId) {
  showSection(tdId);
  const tdSection = document.getElementById(tdId);
  const lang = document.getElementById('lang').value;
  tdSection.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
}

// ================== Content Menu ==================
function showContent(contentId) {
  showSection(contentId);
  const section = document.getElementById(contentId);
  const lang = document.getElementById('lang').value;
  section.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
}

// ================== Videos YouTube ==================
const videoLinks = [
  "https://youtube.com/playlist?list=PLAh__9lJn0k8HewWhb4ytEIhlV4BbV3GV&si=Ak6CZj38zsHAUF5B",
  "https://youtube.com/playlist?list=PLvkDaCOYDNUgV-S7TIw8S8YRr3dtkObjK&si=OQMXKh2JGAQwxhBc",
  "https://youtube.com/playlist?list=PLuiq6f5IZQpzUcrWBSbVY_mKv492o_e0u&si=69kr6IWCRbnEVpgg",
  "https://youtu.be/CFbH3hHYPv8?si=HJtHoROfKWGdPLwR",
  "https://youtube.com/playlist?list=PLt3QatnkHdqVIzvab255l-fxvl-6gO3v4&si=5IjZpVXefdofWnVY",
  "https://youtu.be/NIP8Xa4LSJY?si=cKKwC3IVE_EtS2E4",
  "https://youtube.com/playlist?list=PLyEdcAhX-ePNliBYLzQTLR3mOVm_FtYjR&si=vOkmhsAuntGmlkPn",
  "https://youtu.be/zIbOQsnVhZk?si=vKfPoFOFPgsxSaqi",
  "https://youtube.com/playlist?list=PLZNPNYdaCPm8dEehbIpuQZiVioQBnDPZZ&si=lzd9I9er08Q_2ImK",
  "https://youtu.be/ub7M0qo6zek?si=ApJXd_sn-bDi94B",
  "https://youtu.be/oHWq2ls4aLc?si=EPU7WgeRAoS01uyF",
  "https://youtu.be/XkIL3fvLKsM?si=gkThjHhMb7pmy7nh",
  "https://youtu.be/gTZvyS3Pxa8?si=eExqtFuD2IQ-Xb4D",
  "https://youtu.be/D2fsBKSkGp4?si=mzaI0fGBnUWkT4yR",
  "https://youtu.be/DKbiOEhJgJc?si=K6gYV7yMnmB18sWp",
  "https://youtu.be/Os6XL15--BI?si=zwr_yzdfR7e3r-I",
  "https://youtu.be/Ob9R8WYbneQ?si=8mvrjiim26rmgM8"
];

const videosDiv = document.getElementById('videos');
videosDiv.classList.add('videos-list');

videoLinks.forEach(link => {
  const a = document.createElement('a');
  a.href = link;
  a.target = "_blank";
  a.innerHTML = `<i class="fab fa-youtube"></i> Vidéo`;
  videosDiv.appendChild(a);
});

// ================== Attendance ==================
const g07Students = [
  "Allouche Mohammed Abdellah","Belaid Mail","Ben Amor Lokmane","Benabderrahmane Tahhil Fadjer",
  "Benkaddour Abdelkader Mahieddine","Berziga Mohamed","Boughara Achraf","Bousba Aymen",
  "Chellali Abdessalam","Dib Nesrine","Guadi Zahra","Kadri Mourad","Khettar Azouaou",
  "Lidi Moussa Mohamed Yacine","Maouche Abdelhak","Messaoudene Chouaib","Necibdia Abdelmouay",
  "Ouzenati Khokha","Sari Aymen","Smail Ziad","Yahiaoui Hamza","Yahi Hadda Lyna","Zerrouga Younes"
];

const g08Students = [
  "Abderrezek Akram","Ameziane Sid-Ali","Belaidi Abdellatif","Benadjiel Wissam",
  "Benali Abdallah Merouane","Benguessoum Mohamed Arezki","BENKEZIM Sofiane","Biou Mohamed Amine",
  "Bouhealouane Faiz","Bouska Chokri","Bouzar Dilmi Djihad","Chendri Zakaria","Dilmi Anes",
  "Guehaz Sifeddine","Hamzaoui Dina","Khattab Ilyes Abdelaziz","Khiat Sarra","Larbi Maria","Mazouzi Hadil",
  "Mezghrani Dalia","Rachidi Zakaria","Seddiki Khouloud","Smail Ziad","Yahiaoui Hamza","Ziouar Khaoula"
];

function toggleGroup(groupId) {
  const div = document.getElementById(groupId);
  div.style.display = (div.style.display === "block") ? "none" : "block";
  if(groupId === 'group-g07') createDates('dates-g07', g07Students);
  if(groupId === 'group-g08') createDates('dates-g08', g08Students);
}

function createDates(containerId, students) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  const start = new Date(2025, 9, 28);
  const end = new Date(2026, 0, 13);
  let date = new Date(start);
  while(date <= end){
    if(date.getDay() === 2){ // Tuesday
      const btn = document.createElement('button');
      btn.innerText = date.toLocaleDateString('fr-FR');
      btn.style.margin = "5px";
      btn.onclick = () => createAttendanceTable(students, date.toLocaleDateString('fr-FR'), containerId === 'dates-g07' ? 'g07-students' : 'g08-students');
      container.appendChild(btn);
    }
    date.setDate(date.getDate() +1);
  }
}

function createAttendanceTable(students, dateStr, tableContainerId){
  const div = document.getElementById(tableContainerId);
  div.innerHTML = `<h4>Liste des étudiants pour ${dateStr}</h4>`;
  const table = document.createElement('table');
  table.classList.add('attendance-table');
  const thead = document.createElement('thead');
  thead.innerHTML = `<tr>
    <th>N°</th>
    <th>Nom complet</th>
    <th>État</th>
  </tr>`;
  table.appendChild(thead);
  const tbody = document.createElement('tbody');
  students.forEach((student, idx)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${idx+1}</td>
                    <td>${student}</td>
                    <td>
                      <select>
                        <option value="present">حاضر</option>
                        <option value="absent">غائب</option>
                        <option value="justified">غياب مبرر</option>
                      </select>
                    </td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  div.appendChild(table);
}

// ================== Default ==================
showSection('td1');