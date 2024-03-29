document.addEventListener("DOMContentLoaded", () => {

    updatePosts();

});

function updatePosts(){

    fetch("http://192.168.181.42:3000/api/all").then(res => {

        return res.json();

    }).then(json => {

        let postElements = "";

        let posts = JSON.parse(json);

        posts.forEach((post) => {
            
            let postElement = `
            <div id="${post.id}" class="card mb-2">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                </div>
            </div>`;
            postElements += postElement;
        });

        document.getElementById("posts").innerHTML = postElements;

    });

}

function newPost(){

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    let post = {title: title, description: description};

    const options = {

        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)

    };

    fetch("http://localhost:3000/api/new", options).then(res => {

        updatePosts();
        let title = document.getElementById("title").value = "";
        let description = document.getElementById("description").value = "";

    });


}
