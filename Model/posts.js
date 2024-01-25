module.exports = {


    posts: [],

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
