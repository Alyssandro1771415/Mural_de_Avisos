const express = require("express");
const bodyParser = require("body-parser");
const app = express();

let posts = [

    {
        id: 0,
        title: "Teste do mural",
        Description: "Descrição do post"
    }, 
    {
        id: 1, 
        title: "Teste do mural",
        Description: "Descrição do post"
    }, 
    {
        id: 2,
        title: "Teste do mural",
        Description: "Descrição do post"
    }

];

function generateID(){

    return Math.random().toString(36).substring(2, 9);

}

app.get("/all", (req, res) => {

    res.json(JSON.stringify(posts));

});

app.post("/new", bodyParser.json(), (req, res) => {

    let id = generateID();
    let title = req.body.title;
    let Description = req.body.Description;

    posts.push(id, title, Description);

    res.send("Post adicionado");

});


const port = 3000;
app.listen(port, () => {

    console.log("Server running on port: ", port);

});
