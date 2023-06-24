let productsHTML = ''
products.forEach((product) => {
    productsHTML += `
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

            <div class="added-to-cart added-to-cart-js-${product.id}">
                <img src="icon-images/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary add-to-cart-js"
             data-product-Id = "${product.id}"
             >
                Add to Cart
            </button>
        </div>
        `
})
document.querySelector(".products-grid-js").innerHTML = productsHTML

document.querySelectorAll(".add-to-cart-js").forEach((button) => {
    button.addEventListener("click", () => {

        let productId = button.dataset.productId
        // console.log(productId)

        let matchedProduct;

        cart.forEach((item) => {
            if (productId === item.productId) {
                matchedProduct = item
            }
        })
        if (matchedProduct) {
            matchedProduct.quantity += 1
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            })
        }
        let cartQuantity = 0
        cart.forEach((item) => {
            if (typeof item.quantity === "number" && !isNaN(item.quantity)) {
                cartQuantity += item.quantity
            }
        })
        document.querySelector(".js-cart-quantity").innerHTML = cartQuantity
        console.log(cart)

        let addedMessage = document.querySelector(`.added-to-cart-js-${productId}`)
        addedMessage.classList.add('added-to-cart-visible')

        setTimeout(() => {
            addedMessage.classList.remove('added-to-cart-visible')
        }, 2000);

    })
})


