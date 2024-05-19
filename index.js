function loadUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>res.json())
    .then(data =>displayUser(data))
}
loadUser()

function displayUser(users){
    const userMainDiv = document.getElementById('show-users');
    for(const user of users){
        const div = document.createElement('div');
        div.classList.add('my-design');
        div.innerHTML = `
        <h3>${user.id}</h3>
        <h2>${user.name}</h2>
        <p>${user.email}</p>
        <p>${user.company.name}</p>
        `
        userMainDiv.appendChild(div)
    }
}