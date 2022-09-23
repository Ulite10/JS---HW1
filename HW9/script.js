'use strict'


const listEl = document.querySelector('#list');
const createEl = document.querySelector('#button');
const inputEl = document.querySelector('#input');


createEl.addEventListener('click', onBtnClick);

function onBtnClick() {
    if (!validateItemsData()) {
        return;
    };
    const newItem = getItemsData();
    const liEl = document.createElement('li');

    liEl.textContent = newItem;
    liEl.classList.add('list-item', 'list-item-padding')
    listEl.append(liEl);
    inputEl.value = '';

    liEl.addEventListener('click', () => liEl.classList.toggle('task-done'));
};

function getItemsData() {
    return inputEl.value
};

function validateItemsData() {
    if (inputEl.value.trim() === '') {
        return false
    }
    return true
}