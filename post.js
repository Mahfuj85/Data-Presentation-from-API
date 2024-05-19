function loadPost(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res =>res.json())
    .then(data =>displayPost(data))
}
loadPost()

function displayPost(posts){
    const postMainDiv = document.getElementById('show-posts');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post-design');
        div.innerHTML = `
        <h3>${post.id}</h3>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `
        postMainDiv.appendChild(div)
    }
}