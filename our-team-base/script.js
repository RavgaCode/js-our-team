// Imposto l'object ed inserisco l'array per ogni singolo membro

const teamMembersArray = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer",
  },
];

const teamContainer = document.querySelector(".team-container");

// Imposto il ciclo for per ciclare tutti gli array all'interno dell'object
for (let i = 0; i < teamMembersArray.length; i++) {
  const thisMember = teamMembersArray[i];
  console.log(thisMember);
  // Dichiaro una variabile che racchiude il template da stampare

  const memberToDraw = `
    <div class="team-card">
            <div class="card-image">
              <img
                src="img/${thisMember.image}.jpg"
                alt="${thisMember.name}"
              />
            </div>
            <div class="card-text">
              <h3>${thisMember.name}</h3>
              <p>${thisMember.role}</p>
            </div>
          </div>`;
  // Concateno il template al div container
  teamContainer.innerHTML += memberToDraw;
}
