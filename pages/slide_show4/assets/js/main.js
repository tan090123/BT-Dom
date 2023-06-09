const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let listDivImg = $$('.slide__list--item')
let prev = $('.arrow-left')
let next = $('.arrow-right')
let imgWrap = $('.img-wrap img')

let currentIndex = 0


function setCurrent(index) {
	currentIndex = index
	imgWrap.src = listDivImg[currentIndex].querySelector('img').src

	listDivImg.forEach((item) => {
        item.classList.remove('active')
	})
    
	listDivImg[currentIndex].classList.add('active')
}

setCurrent(currentIndex);
listDivImg.forEach((img, index) => {
	img.addEventListener('click', (e) => {
		setCurrent(index)
	})
})

next.addEventListener('click', () => {
	if (currentIndex == listDivImg.length - 1) {
		currentIndex = 0
	} else currentIndex++;

	setCurrent(currentIndex)
})

prev.addEventListener('click', () => {
	if (currentIndex == 0) currentIndex = listDivImg.length - 1
	else currentIndex--;

	setCurrent(currentIndex)
})