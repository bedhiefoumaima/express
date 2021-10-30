let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

const auth = require("./Middlware/auth");

app.get("/", (req, res) => {
  res.render("Home", { value: "Hello User !" });
});

app.get("/services", auth, (req, res) => {
  res.render("Services");
});

let PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("SERVER IS RUNNING", PORT);
});
