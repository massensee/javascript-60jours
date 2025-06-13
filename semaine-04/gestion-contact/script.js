const form = document.querySelector(".contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const result = document.getElementById("list");

const inputSearch = document.getElementById("search");

let list = JSON.parse(localStorage.getItem("contacts")) || [];

list.forEach((contact) => {
  afficherContact(contact);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  ajouterContact(formData);
});

function afficherContact(contact) {
  const li = document.createElement("li");
  li.textContent = `${contact.nom} - ${contact.email} - ${contact.telephone}`;
  result.appendChild(li);
}

function ajouterContact(formData) {
  const nameValue = formData.get("name");
  const emailValue = formData.get("email");
  const phoneValue = formData.get("phone");

  if (!nameValue || !emailValue || !phoneValue) {
    alert("Veuillez remplir les champs.");
    return;
  }

  const nouveauContact = {
    nom: nameValue,
    email: emailValue,
    telephone: phoneValue,
  };

  list.push(nouveauContact);

  localStorage.setItem("contacts", JSON.stringify(list));

  afficherContact(nouveauContact);

  form.reset();
}
