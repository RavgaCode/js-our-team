// Imposto l'array ed inserisco l'object specifico per ogni singolo membro

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

// Imposto l'event listener al buttone per inserire un nuovo membro del team
const addMemberButton = document.getElementById("addMemberButton");
addMemberButton.addEventListener("click", addMember);

// Imposto la funzione per inserire un object member all'array dei team member
function addMember() {
  const memberName = document.getElementById("name").value;
  const memberRole = document.getElementById("role").value;
  const memberImage = document.getElementById("image").value;

  const newMember = {
    name: memberName,
    role: memberRole,
    image: memberImage,
  };
  teamMembersArray.push(newMember);

  // Dichiaro una nuova variabile che contiene il contenuto html da stampare
  const newMemberToPrint = `
  <div class="team-card">
          <div class="card-image">
            <img
              src="img/${newMember.image}.jpg"
              alt="${newMember.name}"
            />
          </div>
          <div class="card-text">
            <h3>${newMember.name}</h3>
            <p>${newMember.role}</p>
          </div>
        </div>`;
  // Aggiungo il div del nuovo membro al div container
  teamContainer.innerHTML += newMemberToPrint;
}
