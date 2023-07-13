const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const inputToggle = $('#toggleMode');

inputToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})