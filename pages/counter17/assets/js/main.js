const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const facebook = $('.counter__facebook p');
const youtube = $('.counter__youtube p');
const tiktok = $('.counter__tiktok p');

function counterUp(el, to) {
  let speed = 20;0
  let from = 0;
  let step = to / speed;
  const counter = setInterval(function () {
    from += step;
    if (from > to) {
      clearInterval(counter);
      el.innerText = to;
    } else {
      el.innerText = Math.ceil(from);
    }
  }, 1);
}

counterUp(facebook, 3333);
counterUp(youtube, 1111);
counterUp(tiktok, 9999);