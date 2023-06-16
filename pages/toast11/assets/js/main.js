const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnShow = $$('.toast button');
// console.log(btnShow);

btnShow.forEach(btn => {
    btn.addEventListener('click', (e) => {
      createToast(e.target.getAttribute('class'));
    });
});

const toasts = {
  success: {
    icon: '<i class="fas fa-check-circle"></i>',
    msg: 'This is a success message !',
  },
  error: {
    icon: '<i class="fas fa-exclamation-triangle"></i>',
    msg: 'This is a error message !',
  },
  warning: {
    icon: '<i class="fas fa-exclamation-circle"></i>',
    msg: 'This is a warning message !',
  },
};

function createToast(status) {
  let toast = document.createElement('div');
  toast.className = `toasts ${status}`;

  console.log(`${toasts[status].msg}`);
  toast.innerHTML = `
    ${toasts[status].icon}
    <span class="msg">${toasts[status].msg}</span>
    <span class="countdown"></span>
  `;

  $('#toast__notification').appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'hide_slide 1s ease forwards';
  }, 4000);

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
