const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const box = document.querySelector('.keyboard-content');
const eKey = $('.card.keyboard-key p:last-child');
const eLocation = $('.card.keyboard-location p:last-child');
const eWhich = $('.card.keyboard-which p:last-child');
const eCode = $('.card.keyboard-code p:last-child');

document.addEventListener('keydown', (e) => {
  let keyName = e.keyCode === 32 ? 'Space' : e.key;

  $('.keyboard-result').innerText = e.which;

  eKey.innerText = keyName;
  eLocation.innerText = e.location;
  eWhich.innerText = e.which;
  eCode.innerText = e.code;
});