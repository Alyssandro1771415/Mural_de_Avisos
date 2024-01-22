const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const posts = require("./Model/posts");

app.get("/all", (req, res) => {

    res.json(JSON.stringify(posts.getAll()));

});

app.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado");

});

app.delete("/remove/:id", (req, res) => {
    const postId = req.params.id;

    posts.deletePost(postId);

    res.send("Removido com sucesso");
});


const port = 3000;
app.listen(port, () => {

    console.log("Server running on port: ", port);

});
