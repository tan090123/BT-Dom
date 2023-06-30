const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let elToShow = $$('.show-on-scroll');

let isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();
  let viewHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
    (rect.top >= 0 && rect.bottom <= viewHeight)
  );
};

function loop() {
  elToShow.forEach((item) => {
    if (isElInViewPort(item)) {
      item.classList.add('start');
    } else {
      item.classList.remove('start');
    }
  });
}

window.onscroll = loop;

loop();