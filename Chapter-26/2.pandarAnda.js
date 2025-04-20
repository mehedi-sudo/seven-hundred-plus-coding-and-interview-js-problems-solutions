

const restaurants = [
    {
        id: 1,
        name: 'Pizza Place',
        menu: [{name: 'Pepperoni Pizza', price: 12}]
    },
    {
        id: 2,
        name: 'Sushi House',
        menu: [{name: 'Salmon Sushi', price: 15 }]
    }
]


const orders = []
const reviews = []

// Discount in percentage
const discountCodes = {
    'SAVE10': 10,
    'WELCOME15': 15
}





// task 1.
const getFoodPrice = function(resName, resFoodName){
    for (const singleRes of restaurants) {
        if (singleRes.name.toLowerCase() === resName.toLowerCase()) {
            for (const singeFoodItem of singleRes.menu) {
                if (singeFoodItem.name.toLowerCase() === resFoodName.toLowerCase()) {
                    return singeFoodItem.price
                }
            }
            return 'Food Item not found.'
        }
    }
    return 'Restaurant not found.'
}

// console.log(getFoodPrice('Sushi House', 'Salmon Sushi'));










// task 2.
const placeOrder = function(customer, restaurantName, foodItem, discountCode) {
    const foodPrice = getFoodPrice(restaurantName, foodItem);

    if (typeof foodPrice === 'number') {
        let finalPrice = foodPrice;

        if (discountCodes.hasOwnProperty(discountCode)) {
            const discount = discountCodes[discountCode];
            finalPrice = foodPrice - (foodPrice * (discount / 100));
        } else if (discountCode) {
            return 'Coupon code invalid.';
        }

        const id = orders.length + 1;
        const orderObj = {
            id,
            customerName: customer,
            restaurantName,
            foodItem,
            foodPrice: finalPrice,
            status: 'Pending'
        };

        orders.push(orderObj);
        return `Your order has been successfully placed. Order ID: ${id}`
    }

    return foodPrice
};

// console.log(placeOrder( 'CustomerName', 'Pizza Place', 'Pepperoni Pizza', 'SAVE10'));
placeOrder( 'CustomerName', 'Pizza Place', 'Pepperoni Pizza', 'SAVE10')
placeOrder( 'CustomerName', 'Pizza Place', 'Pepperoni Pizza', 'WELCOME15')








// task 3.
const totalSell = function(restaurantName) {
    const AllOrders = orders.filter(orderObj => orderObj.restaurantName === restaurantName)

    const totalRevenue = AllOrders.reduce((sum, order) => sum + order.foodPrice, 0)

    return totalRevenue
}

// totalSell('Pizza Place')
// console.log(totalSell('Pizza Place'));








// task 4.
const submitReview = function(orderId, resName, ratings, reviewString) {
    const order = orders.find(order => order.id === orderId && order.restaurantName === resName);

    if (!order) {
        return 'না খেয়ে ভুল রিভিউ দিবেন না, প্লিজ ';
    }

    if (ratings < 0 || ratings > 5) {
        return new Error('রেটিংস 0 থেকে 5- এর মধ্যে হতে হবে');
    }

    if (reviewString.trim().length < 20) {
        return new Error('রিভিউ 20 ক্যারেক্টারের চাইতে বড়ো হতে হবে।');
    }

    const reviewId = reviews.length + 1;

    const reviewObj = {
        id: reviewId,
        customerName: order.customerName,
        foodName: order.foodItem,
        ratings,
        reviewString
    };

    reviews.push(reviewObj);

    return `রিভিউ ঠিক মতো যোগ হয়েছে এবং ${reviewId} তোমার রিভিউ আইডি`;
};

const revText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'

submitReview(1, 'Pizza Place', 5, revText)

