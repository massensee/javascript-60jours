const nom = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.querySelector(".formulaire");
const result = document.getElementById("list");

let contact = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const nameValue = formData.get("name");
  const emailValue = formData.get("email");
  const phoneValue = formData.get("phone");

  if (nameValue || emailValue || phoneValue === "") {
    alert("Veuillez remplir tout les champs !");
    return;
  }

  const nouveauContact = {
    nom: nameValue,
    email: emailValue,
    telephone: phoneValue,
  };

  contact.push(nouveauContact);

  const liEl = document.createElement("li");
  liEl.textContent = `${nouveauContact.nom} - ${nouveauContact.email} - ${nouveauContact.telephone}`;
  result.appendChild(liEl);

  console.log("Nouveau contact: ", nouveauContact);
});
