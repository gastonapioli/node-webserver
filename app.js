var hbs = require("hbs");
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estatico
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Gastón",
    titulo: "Curso de Node",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "Gastón",
    titulo: "Curso de Node",
  });
});
app.get("/elements", function (req, res) {
  res.render("home", {
    nombre: "Gastón",
    titulo: "Curso de Node",
  });
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
