let productsGridEL = document.querySelector('.products-grid-js')
let cartQuantityEL = document.querySelector('.cart-quantity-js')

let searchBarEL = document.querySelector('.search-bar-js')
let searchButtonEL = document.querySelector('.search-button-js')

let productsHTML = ''
products.forEach((product) => {
    productsHTML += `
            <div class="product-container">
            <div class="product-image-container">
            <img class="product-image" src="${product.image}">
            </div>
            <div class="product-name product-name-js">
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
                <select name="" id="" class = "js-selected-quantity">
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
             data-product-id = "${product.id}"
             >
                Add to Cart
            </button>
        </div>
        `
})
productsGridEL.innerHTML = productsHTML

//interacting with the products
document.querySelectorAll('.add-to-cart-js').forEach((button) => {
    button.addEventListener("click", () => {
        //retrieving the product's data
        let productId = button.dataset.productId

        let matchedProduct = cart.filter((item) => {
            item.productId === productId
        })

        let selectedQuantity = button.parentElement.querySelector('.js-selected-quantity')
        let quantitySelected = Number(selectedQuantity.value)

        if (matchedProduct.length > 0) {
            matchedProduct[0].quantity += quantitySelected
        } else {
            cart.push({
                productId: productId,
                quantity: quantitySelected
            })
        }
        //looping through the array to update the cartQuantity
        let cartQuantity = 0
        cart.forEach((item) => {
            if (typeof item.quantity === "number" && !isNaN(item.quantity)) {
                cartQuantity += item.quantity
            }
        })

        //adding the added message to the DOM when the cart is added
        cartQuantityEL.innerHTML = cartQuantity

        let addedMessage = document.querySelector(`.added-to-cart-js-${productId}`)

        addedMessage.classList.add('added-to-cart-visible')

        setTimeout(() => {
            addedMessage.classList.remove('added-to-cart-visible')
        }, 2000);
    })
})

//searching the product in the search-bar
const getSearchedProducts = (searchedProduct) => {
    products.forEach((product, index) => {
        let productContainer = productsGridEL.children[index]

        if(product.name.toLowerCase().includes(searchedProduct.toLowerCase())){
            productContainer.style.display = 'block'
        }else{
            productContainer.style.display = 'none'
        }
    })
}

searchButtonEL.addEventListener('click', () => {
   getSearchedProducts(searchBarEL.value)
})








