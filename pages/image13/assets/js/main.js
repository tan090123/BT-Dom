const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const inputImg = $('#input-img');

inputImg.addEventListener('change', (e) => {
  let file = e.target.files[0];

  if (!file) return;

  let img = document.createElement('img');
  img.src = URL.createObjectURL(file);

  document.querySelector('.preview').appendChild(img);
});