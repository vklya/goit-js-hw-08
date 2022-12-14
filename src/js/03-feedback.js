import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    message: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

const INPUT_DATA = 'feedback-form-state';
const getData = localStorage.getItem(INPUT_DATA);
const storageData = JSON.parse(getData);
const formData = getData ? storageData : {};

dataFromLocalStorage();

function onSubmit(e) {
    e.preventDefault();
    e.target.reset();
    localStorage.removeItem(INPUT_DATA);
}

function onInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(INPUT_DATA, JSON.stringify(formData));
}

function dataFromLocalStorage() {
    if (storageData === null) return;
    refs.message.value = storageData['message'] || '';
    refs.input.value = storageData['email'] || '';
}