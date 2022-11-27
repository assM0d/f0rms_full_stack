// document.querySelector("button").onclick = () => {
//   console.log(document.querySelector("#form").value);
// };
// const formData = require("./views/xhr");
// app.use("/contact", function (_, response) {
//   response.render("contact.hbs");
// });
// router.get("/about", (req, res) => {
//   res.render("about");
// });

// app.get("/hbs", (req, res) => {
//   res.render("home");
// });

// app.get("/hbs/about", (req, res) => {
//   res.render("about.hbs");
// });

// const postgres = require("pg");
// app.use("/index", index);
// app.use(formData);

const express = require("express");
const app = express();
const request = require("request");
const exphbs = require("express-handlebars");
const appealRoutes = require("./routes/routes");
const PORT = process.env.PORT || 3000;
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.get("/hbs", (req, res) => {
  request("http://localhost:3000/hbs/about", (err, response, body) => {
    if (err) return res.status(500).send({ message: err });

    return res.send(body);
  });
});

app.listen(PORT, () => {
  console.log("хули смотришь? И так работаю");
});
app.use(express.json());
app.use(appealRoutes);
app.use(express.urlencoded({ extended: true }));
app.use(express.static("xhr"));
