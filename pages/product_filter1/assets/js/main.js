const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const products = $('.product__list');
const filter = $('#filter');
console.log(filter);
const listItems = [];

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products');

    const results = await res.json();

    // Clear products
    products.innerHTML = '';

    results.forEach((product) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'product__list--item');
        listItems.push(div);

        div.innerHTML = `
			<img src="${product.image}" alt="${product.title}">
			<div class="product-detail">
				<h4>${product.title.slice(0, 30)}</h4>
				<p>$${product.price}</p>
			</div>
        `;

        products.appendChild(div);
    });
}

getData();

function filterData(search) {
    listItems.forEach((item) => {
        const title = item.querySelector('h4').innerText;
        if (title.toLowerCase().includes(search.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

filter.addEventListener('input', (e) => filterData(e.target.value));