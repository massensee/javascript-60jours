const btn = document.getElementById("changer-couleur");
const menuBurger = document.getElementById("menu-burger");
const nav = document.querySelector("nav");
const btnToggle = document.getElementById("toggle-apropos");
const textApropos = document.getElementById("texte-apropos");
const form = document.querySelector("form");

function toggleMenu() {
  menuBurger.addEventListener("click", () => {
    nav.classList.toggle("visible");
  });
}

toggleMenu();

function changerTheme() {
  btn.addEventListener("click", function () {
    document.body.classList.toggle("lightBlue");
  });
}

changerTheme();

function toggleTexteApropos() {
  btnToggle.addEventListener("click", () => {
    textApropos.classList.toggle("cacher");

    const estCacher = textApropos.classList.contains("cacher");

    btnToggle.textContent = estCacher ? "Voir plus" : "Voir moins";
  });
}

toggleTexteApropos();

function afficherMessage(confirmMessage, message, couleur) {
  confirmMessage.textContent = message;
  confirmMessage.style.color = couleur;
  confirmMessage.classList.remove("invalid");
  confirmMessage.classList.remove("fade-in");
  void confirmMessage.offsetWidth;
  confirmMessage.classList.add("fade-in");

  confirmMessage.addEventListener(
    "animationend",
    () => {
      confirmMessage.classList.remove("fade-in");
    },
    { once: true }
  );
}

function emailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validerFormulaire(e) {
  e.preventDefault();

  const prenom = document.getElementById("prenom").value.trim();
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message").value.trim();
  const confirmMessage = document.getElementById("message-confirmation");
  const button = document.querySelector("button[type='submit']");

  button.disabled = true;

  // Toujours enlever la classe "invalid" pour afficher le message
  confirmMessage.classList.remove("invalid");

  setTimeout(() => {
    button.disabled = false;
  }, 2000);

  if (
    !prenom ||
    !nom ||
    !emailValid(email) ||
    !password ||
    message.length < 10
  ) {
    afficherMessage(
      confirmMessage,
      "Veuillez remplir tous les champs correctement (min. 10 caractères pour le message).",
      "red"
    );
    return;
  }

  afficherMessage(
    confirmMessage,
    `Merci ${prenom}, votre message a bien été envoyé.`,
    "green"
  );

  form.reset();
}

form.addEventListener("submit", validerFormulaire);
