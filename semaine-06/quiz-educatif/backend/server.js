const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenue sur le serveur du quiz !");
});

const questions = [
  {
    question: "Quel est le plus grand océan du monde ?",
    reponses: ["Océan Pacifique", "Océan Atlantique", "Océan Indien"],
    bonneReponse: 0,
  },
  {
    question: "Qui a peint la Joconde ?",
    reponses: ["Michel-Ange", "Léonard de Vinci", "Raphaël"],
    bonneReponse: 1,
  },
  {
    question: "En quelle année l’homme a-t-il marché sur la Lune ?",
    reponses: ["1969", "1975", "1959"],
    bonneReponse: 0,
  },
  {
    question: "Combien de continents existe-t-il ?",
    reponses: ["5", "6", "7"],
    bonneReponse: 2,
  },
  {
    question: "Quel est l’élément chimique dont le symbole est O ?",
    reponses: ["Oxygène", "Or", "Osmium"],
    bonneReponse: 0,
  },
  {
    question: "Quelle est la capitale du Canada ?",
    reponses: ["Toronto", "Ottawa", "Vancouver"],
    bonneReponse: 1,
  },
  {
    question: "Combien de joueurs y a-t-il dans une équipe de football ?",
    reponses: ["11", "9", "7"],
    bonneReponse: 0,
  },
  {
    question: "Quel est le pays d’origine du yoga ?",
    reponses: ["Chine", "Inde", "Japon"],
    bonneReponse: 1,
  },
  {
    question: "Quel est le plus long fleuve du monde ?",
    reponses: ["Nil", "Amazone", "Yangtsé"],
    bonneReponse: 1,
  },
  {
    question: "Quel instrument a 88 touches ?",
    reponses: ["Violoncelle", "Guitare", "Piano"],
    bonneReponse: 2,
  },
  {
    question: "Dans quel pays se trouve la Tour de Pise ?",
    reponses: ["Espagne", "Italie", "Grèce"],
    bonneReponse: 1,
  },
  {
    question: "Quel est le métal utilisé principalement pour les canettes ?",
    reponses: ["Aluminium", "Cuivre", "Fer"],
    bonneReponse: 0,
  },
  {
    question: "Quel est l’auteur de *1984* ?",
    reponses: ["George Orwell", "Aldous Huxley", "J.K. Rowling"],
    bonneReponse: 0,
  },
  {
    question: "Quelle planète est la plus proche du Soleil ?",
    reponses: ["Mercure", "Vénus", "Mars"],
    bonneReponse: 0,
  },
  {
    question: "Quel est le plus petit pays du monde ?",
    reponses: ["Monaco", "Vatican", "Luxembourg"],
    bonneReponse: 1,
  },
  {
    question: "Quel animal est le plus rapide sur terre ?",
    reponses: ["Lion", "Antilope", "Guépard"],
    bonneReponse: 2,
  },
  {
    question: "Qui a inventé l’ampoule électrique ?",
    reponses: ["Thomas Edison", "Benjamin Franklin", "Nikola Tesla"],
    bonneReponse: 0,
  },
  {
    question: "Combien de dents a un adulte normalement ?",
    reponses: ["32", "28", "36"],
    bonneReponse: 0,
  },
  {
    question: "Dans quel pays est né le fromage Roquefort ?",
    reponses: ["Suisse", "France", "Belgique"],
    bonneReponse: 1,
  },
  {
    question: "Quel est le symbole chimique du fer ?",
    reponses: ["Fe", "Fr", "Ir"],
    bonneReponse: 0,
  },
  {
    question: "Quel est le plus haut sommet du monde ?",
    reponses: ["Mont Blanc", "Everest", "K2"],
    bonneReponse: 1,
  },
  {
    question: "Quelle est la langue la plus parlée au monde ?",
    reponses: ["Anglais", "Espagnol", "Mandarin"],
    bonneReponse: 2,
  },
  {
    question: "Quel est l’auteur de *Les Misérables* ?",
    reponses: ["Victor Hugo", "Émile Zola", "Molière"],
    bonneReponse: 0,
  },
  {
    question: "Combien de couleurs comporte un arc-en-ciel ?",
    reponses: ["5", "6", "7"],
    bonneReponse: 2,
  },
  {
    question: "Quel pays a remporté la Coupe du Monde 2018 ?",
    reponses: ["Allemagne", "France", "Brésil"],
    bonneReponse: 1,
  },
  {
    question: "Dans quelle ville se trouve la statue de la Liberté ?",
    reponses: ["Paris", "New York", "Londres"],
    bonneReponse: 1,
  },
  {
    question: "Que mesure un sismographe ?",
    reponses: ["La température", "La pluie", "Les tremblements de terre"],
    bonneReponse: 2,
  },
  {
    question: "Quel est l’ingrédient principal du guacamole ?",
    reponses: ["Courgette", "Avocat", "Concombre"],
    bonneReponse: 1,
  },
  {
    question: "Qui a peint *Les Nymphéas* ?",
    reponses: ["Monet", "Van Gogh", "Manet"],
    bonneReponse: 0,
  },
  {
    question: "Combien de pattes a une araignée ?",
    reponses: ["6", "8", "10"],
    bonneReponse: 1,
  },
  {
    question: "Qui a découvert la gravité ?",
    reponses: ["Albert Einstein", "Galilée", "Isaac Newton"],
    bonneReponse: 2,
  },
  {
    question: "Quel est le pays le plus peuplé du monde ?",
    reponses: ["Chine", "Inde", "États-Unis"],
    bonneReponse: 1,
  },
  {
    question: "Quel est le nom de la mer entre l’Europe et l’Afrique ?",
    reponses: ["Mer Rouge", "Mer Noire", "Méditerranée"],
    bonneReponse: 2,
  },
  {
    question: "Quel est le nombre de côtés d’un hexagone ?",
    reponses: ["6", "5", "8"],
    bonneReponse: 0,
  },
  {
    question: "Qui a écrit *Le Petit Prince* ?",
    reponses: ["Antoine de Saint-Exupéry", "Jules Verne", "Alphonse Daudet"],
    bonneReponse: 0,
  },
  {
    question: "Quel est l’aliment préféré des pandas ?",
    reponses: ["Bambou", "Riz", "Miel"],
    bonneReponse: 0,
  },
  {
    question: "Que boit-on traditionnellement en Angleterre à 17h ?",
    reponses: ["Café", "Lait", "Thé"],
    bonneReponse: 2,
  },
  {
    question: "Quel est l’organe qui pompe le sang ?",
    reponses: ["Foie", "Cœur", "Rein"],
    bonneReponse: 1,
  },
  {
    question: "Quelle ville italienne est célèbre pour ses canaux ?",
    reponses: ["Florence", "Venise", "Rome"],
    bonneReponse: 1,
  },
  {
    question: "Quel est l’état solide de l’eau ?",
    reponses: ["Glace", "Vapeur", "Pluie"],
    bonneReponse: 0,
  },
  {
    question: "Quel sport se joue avec un ballon ovale ?",
    reponses: ["Rugby", "Football", "Basketball"],
    bonneReponse: 0,
  },
  {
    question: "Quelle est la capitale du Japon ?",
    reponses: ["Kyoto", "Tokyo", "Osaka"],
    bonneReponse: 1,
  },
  {
    question: "Combien de zéros dans un milliard ?",
    reponses: ["6", "9", "12"],
    bonneReponse: 1,
  },
  {
    question: "Quelle est la formule chimique de l’eau ?",
    reponses: ["CO2", "H2O", "NaCl"],
    bonneReponse: 1,
  },
  {
    question: "Quel est le sens du mot 'bilingue' ?",
    reponses: ["Qui parle deux langues", "Qui lit vite", "Qui est sourd"],
    bonneReponse: 0,
  },
  {
    question: "Dans quel pays se trouve le Taj Mahal ?",
    reponses: ["Pakistan", "Inde", "Bangladesh"],
    bonneReponse: 1,
  },
  {
    question: "Quel est le synonyme de 'rapide' ?",
    reponses: ["Lent", "Vite", "Heureux"],
    bonneReponse: 1,
  },
  {
    question: "Qui est l’auteur de *Roméo et Juliette* ?",
    reponses: ["Shakespeare", "Molière", "Corneille"],
    bonneReponse: 0,
  },
  {
    question: "Quelle couleur obtient-on en mélangeant bleu et jaune ?",
    reponses: ["Vert", "Orange", "Violet"],
    bonneReponse: 0,
  },
];

app.post("/repondre", (req, res) => {
  const { questionIndex, reponseIndex } = req.body;
  console.log(req.body);

  const question = questions[questionIndex];
  const estCorrect = reponseIndex === question.bonneReponse;

  if (estCorrect) {
    res.json({ message: "Bonne réponse !" });
  } else {
    res.json({
      message: `Mauvaise réponse. La bonne reponse était : ${
        question.reponses[question.bonneReponse]
      }`,
    });
  }
});

app.get("/questions", (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
