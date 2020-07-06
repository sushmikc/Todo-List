const addForm = document.querySelector('.add-form');
const list = document.querySelector('.list-group');
const search = document.querySelector('.search-form input')

//function to add to do in the list
const generateTemplate = input =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-item-center">
        <span>${input}</span>   
        <i class="fa fa-trash delete"></i>
    </li>
    `;
    list.innerHTML += html;
}
//to add todos
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = addForm.add.value.trim();
    if(input.length){
        generateTemplate(input);
        addForm.reset();
    }
});

//to remove todos
list.addEventListener('click', e => {
    e.preventDefault();
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
});

//function to filter list
const filterTodos = (term) => {
    Array.from(list.children)   //gets array of li tag
    //it gets every list items that doesnot match search input
    .filter((todo) => !todo.textContent.toLowerCase().includes(term)) 
    //assigns those list that does not match search input a filtered 
    //classList and make their display none so that only searched input is displayed
    .forEach((todo) => todo.classList.add('filtered')); 

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};
//to search for todo list
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});

