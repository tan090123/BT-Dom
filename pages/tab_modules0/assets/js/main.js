const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const tabItems = $$('.tab-list__item');
const tabContentItems = $$('.tab-content__item');


function activateTab(tab) {
  
  tabItems.forEach(item => item.classList.remove('active'));
  tabContentItems.forEach(item => item.classList.remove('active'));

  
  tab.classList.add('active');
  const index = Array.from(tabItems).indexOf(tab);
  tabContentItems[index].classList.add('active');
}

tabItems.forEach(item => {
  item.addEventListener('click', () => {
    activateTab(item);
  });
});
