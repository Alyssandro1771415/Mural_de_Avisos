module.exports = {


    posts: [

        {
            id: 0,
            title: "Teste do mural",
            description: "Descrição do post"
        }, 
        {
            id: 1, 
            title: "Teste do mural",
            description: "Descrição do post"
        }, 
        {
            id: 2,
            title: "Teste do mural",
            description: "Descrição do post"
        }
    
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){

        this.posts.push({id: generateID(), title, description});

    },

    deletePost(id){
     
        this.posts = this.posts.filter((post) => post.id != id);

    }    

}

function generateID(){

    return Math.random().toString(36).substring(2, 9);

}
