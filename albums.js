function loadAlbums(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res =>res.json())
    .then(data =>displayAlbums(data))
}
loadAlbums()

function displayAlbums(albums){
    const albumMainDiv = document.getElementById('show-albums');
    for(const album of albums){
        const div = document.createElement('div');
        div.classList.add('albums-design');
        div.innerHTML = `
        <h3>${album.id}</h3>
        <h2>${album.title}</h2>
        `
        albumMainDiv.appendChild(div)
    }
}