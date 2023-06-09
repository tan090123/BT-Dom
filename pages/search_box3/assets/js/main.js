const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$('.search-btn').addEventListener('click', function () {
	this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus()
})