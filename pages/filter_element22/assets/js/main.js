const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const foodBtns = $$(".food-menu button");
const foodList = $$(".food-item");

foodBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const type = e.target.getAttribute("type-food");

    document
      .querySelector(".food-menu button.active")
      .classList.remove("active");
    e.target.classList.add("active");

    console.log('FoodList', type);
    foodList.forEach((item) => {
      if (type == "all" || item.getAttribute("type-food") == type)
        item.classList.remove("hide");
      else item.classList.add("hide");
    })
  })
})