const products = [{
    image: 'product-images/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
        stars: 4.5,
        count: 87
    },
    priceCents: 1090
}, {
    image: 'product-images/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
        stars: 4,
        count: 127
    },
    priceCents: 2095
}, {
    image: 'product-images/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
        stars: 4.5,
        count: 56
    },
    priceCents: 799
}
]
let productsHTML = ''
products.forEach((product) => {
            productsHTML+= `
            <div class="product-container">
            <div class="product-image-container">
            <img class="product-image" src="${product.image}">
            </div>
            <div class="product-name">
                ${product.name}
            </div>
            <div class="product-rating-container">
                <img class="product-rating-stars" src="rating-images/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div>
            <div class="product-price">
                $${product.priceCents / 100}
            </div>
            <div class="product-quantity-container">
                <select name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="iicon-images/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary">
                Add to Cart
            </button>
        </div>
        `
})
console.log(productsHTML)
document.querySelector('.products-grid-js').innerHTML = productsHTML