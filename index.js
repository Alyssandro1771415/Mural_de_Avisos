const express = require("express");
const app = express();
const path = require("path");
const rotas = require("./Routes/api")

app.use("/api", rotas);
app.use("/", express.static(path.join(__dirname, "./Public")));

const port = 3000;
app.listen(port, () => {

    console.log("Server running on port: ", port);

});
