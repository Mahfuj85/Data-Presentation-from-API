function loadComments(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res =>res.json())
    .then(data =>displayComments(data))
}
loadComments()

function displayComments(comments){
    const commentMainDiv = document.getElementById('show-comments');
    for(const comment of comments){
        const div = document.createElement('div');
        div.classList.add('comment-design');
        div.innerHTML = `
        <h3>${comment.id}</h3>
        <h2>${comment.name}</h2>
        <p>${comment.email}</p>
        <p>${comment.body}</p>
        `
        commentMainDiv.appendChild(div)
    }
}