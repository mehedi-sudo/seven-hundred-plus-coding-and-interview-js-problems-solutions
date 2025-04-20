


// Shopping cart 



let products = [
    {
        id: 1, 
        name: 'Smartphone',
        price: 200,
        stock: 10
    },
    {
        id: 2,
        name: 'Laptop',
        price: 800,
        stock: 5
    }
]

let cart = []
let orders = []

// Task. 1:
const addToCart = function(productId, productQuantity) {
    for (const sObj of products) {
        if (sObj.id === productId) {
            if (sObj.stock >= productQuantity) {
                sObj.stock -= productQuantity
                const cartObj = {
                    productId,
                    productQuantity,
                    price: sObj.price
                }
                cart.push(cartObj)
                return `${sObj.name} added to cart. Quantity: ${productQuantity}`
            } else {
                return `Not enough stock for ${sObj.name}. Only ${sObj.stock} left.`
            }
        }
    }
    return new Error('Product not found.')
}

addToCart(1, 6)






// task: 2.
function viewCart(cart) {
    for (const sle of cart) {
        console.log(sle)
    }
}
// viewCart(cart)






// task: 3.
const placeOrder = function(cart) {
    if (cart.length > 0) {
        let sumOfAllProductPrice = 0
        for (const singleCart of cart) {
            sumOfAllProductPrice += singleCart.productQuantity * singleCart.price;
        }
        const obj = {
            totalPrice: sumOfAllProductPrice
        }
        orders.push(obj)
        cart.length = 0
        return 'Order placed';
    }

    return 'Your cart is empty'
}


placeOrder(cart)

console.log(orders);


