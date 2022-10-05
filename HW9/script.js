const LIST_ITEM_CLASS = 'list-item';
const LIST_ITEM_CLASS2 = 'list-item-padding';
const TASK_DONE = 'task-done';

const listEl = document.querySelector('#list');
const createEl = document.querySelector('#button');
const inputEl = document.querySelector('#input');


createEl.addEventListener('click', onBtnClick);

function onBtnClick() {
    if (!validateItemsData()) {
        return;
    };

    const newItem = getItemsData();

    addTodo(newItem);
    resertForm();
};

function validateItemsData() {
    if (inputEl.value.trim() === '') {
        return false
    }
    return true
};

function getItemsData() {
    return {
        title: inputEl.value
    }
};

function addTodo(todo) {
    const todoEl = generateNewItem(todo);
    listEl.append(liEl);
};

function generateNewItem(todo) {
    const liEl = document.createElement('li');
    
    liEl.textContent = todo.title;
    liEl.classList.add(LIST_ITEM_CLASS, LIST_ITEM_CLASS2);
    liEl.addEventListener('click', () => toggleTodo(liEl));

    return liEl;
};

function resertForm() {
    inputEl.value = '';
};

function toggleTodo(liEl) {
    liEl.classList.toggle(TASK_DONE)
}