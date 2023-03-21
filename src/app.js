
const doc = {
    tbody: null
};

const state = {
    todos: []
}

window.addEventListener('load', () => {
    init();
    getTodos();
});

function init() {
    doc.tbody = document.querySelector('#tbody');
};

function getTodos() {
    let host = 'http://localhost:8000/';
    let endpoint = 'todos'
    let url = host + endpoint;
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        state.todos = result;
    });
};

function render() {

}
