const express = require("express");
const router = express.Router();
const posts = require("../Model/posts");
const bodyParser = require("body-parser");

router.get("/all", (req, res) => {

    res.json(JSON.stringify(posts.getAll()));

});

router.post("/new", bodyParser.json(), (req, res) => {

    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado");

});

router.delete("/remove/:id", (req, res) => {
    const postId = req.params.id;

    posts.deletePost(postId);

    res.send("Removido com sucesso");
});

module.exports = router;