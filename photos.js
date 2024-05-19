function loadPhotos(){
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res =>res.json())
    .then(data =>displayPhotos(data))
}
loadPhotos()

function displayPhotos(photos){
    const photoMainDiv = document.getElementById('show-photos');
    for(const photo of photos){
        const div = document.createElement('div');
        div.classList.add('photo-design');
        div.innerHTML = `
        <h3>${photo.id}</h3>
        <h2>${photo.title}</h2>
        <p>${photo.url}</p>
        `
        photoMainDiv.appendChild(div)
    }
}