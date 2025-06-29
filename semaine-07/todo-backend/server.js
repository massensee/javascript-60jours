const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, texte: "Apprendre Javascript", fait: false },
  { id: 2, texte: "Faire les courses", fait: true },
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { texte } = req.body;

  if (!texte || texte.trim() === "") {
    return res.status(400).json({ message: "Le texte est requis." });
  }

  const nouvelleTache = {
    id: Date.now(),
    texte,
    fait: false,
  };

  todos.push(nouvelleTache);

  res.status(201).json(nouvelleTache);
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Tâche non trouvée." });
  }

  todos.splice(index, 1);
  res.json({ message: `Tâche avec id ${id} supprimée.` });
});

app.listen(PORT, (req, res) => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
