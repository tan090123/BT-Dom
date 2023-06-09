const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modal = $('.modal');
const btnModal = $('.btn-modal');
const iconCloseModal = $('.modal-header i');
const btnCloseModal = $('.modal-footer button');

function toggleModal() {
    modal.classList.toggle('hide');
}

btnModal.addEventListener('click', toggleModal);
iconCloseModal.addEventListener('click', toggleModal);
btnCloseModal.addEventListener('click', toggleModal);

modal.addEventListener('click', (e) => {
  if (e.target == e.currentTarget) toggleModal();
});