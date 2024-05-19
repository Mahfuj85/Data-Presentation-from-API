function loadTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res =>res.json())
    .then(data =>displayTodos(data))
}
loadTodos()

function displayTodos(todos){
    const todoMainDiv = document.getElementById('show-todos');
    for(const todo of todos){
        const div = document.createElement('div');
        div.classList.add('todo-design');
        div.innerHTML = `
        <h3>${todo.id}</h3>
        <h2>${todo.title}</h2>
        <p>${todo.completed}</p>
        `
        todoMainDiv.appendChild(div)
    }
}