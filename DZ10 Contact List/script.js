"use strict";

const DELETE_BTN = "delete-contact-button";
const CONTACT_ITEM = ".contact-item";

const nameElem = document.querySelector("#name");
const surnameElem = document.querySelector("#surname");
const phoneElem = document.querySelector("#phone");
const addBtnElem = document.querySelector("#add-contact-button");
const listElem = document.querySelector("#contact-list");
const contactItemTemplate = document.querySelector(
  "#contactItemTemplate"
).innerHTML;
const errorContainerElem = document.querySelector("#errorContainer");

addBtnElem.addEventListener("click", onAddBtnClick);
listElem.addEventListener("click", onlistElemClick);

nameElem.addEventListener("input", onValidate);
surnameElem.addEventListener("input", onValidate);
phoneElem.addEventListener("input", onValidate);

function onAddBtnClick() {
  if (!validateValues()) return;

  const { name, surname, phone } = getValues();
  // generateContactElement();
  const newContact = getContactElement({ name, surname, phone });
  generateContactElem(newContact);
  resetForm();
}

function getValues() {
  let name = nameElem.value;
  let surname = surnameElem.value;
  let phone = phoneElem.value;

  return { name, surname, phone };
}

function getContactElement({ name, surname, phone }) {
  return contactItemTemplate
    .replaceAll("{{name}}", name)
    .replaceAll("{{surname}}", surname)
    .replaceAll("{{phone}}", phone);
}

function onValidate(e) {
  let input = e.target;
  validateValue(input.value);
}

function generateContactElem(value) {
  listElem.insertAdjacentHTML("beforeend", value);
}

function resetForm() {
  nameElem.value = "";
  surnameElem.value = "";
  phoneElem.value = "";
}

function onlistElemClick(e) {
  if (e.target.classList.contains(DELETE_BTN)) {
    const tr = e.target.closest(CONTACT_ITEM);
    tr.remove();
  }
}

function validateValues() {
  if (!validateValue(nameElem.value)) {
    return false;
  }

  if (!validateValue(surnameElem.value)) {
    return false;
  }

  if (!validateValue(phoneElem.value)) {
    return false;
  }

  return true;
}

function validateValue(value) {
  if (value === "") {
    errorContainerElem.textContent = "Please fill out all fields";
    addBtnElem.disabled = true;
    return false;
  } else {
    errorContainerElem.textContent = "";
    addBtnElem.disabled = false;
    return true;
  }
}
