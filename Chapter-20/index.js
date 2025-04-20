



// Data Access


// Data



// Practice: 


// 1.
const arrUs = [{id: 1, name: 'mukta', address: 'mirpur'}]
const add = arrUs[0].address
console.log(add);



// 2.
const library = {
    name: 'city library', 
    books: [
        {
            id: 1,
            title: 'JavaScript Basic',
            price: 300
        },
        {
            id: 2,
            title: 'Python Essentials',
            price: 500
        }
    ]
}

const secondBookPrice = library.books[1].price
console.log(secondBookPrice);






// 3.
const school = {
    name: 'Green High', 
    students: [
        {
            id: 1,
            name: 'Samiha'
        },
        {
            id: 2,
            name: 'Kamal'
        }
    ]
}

const firstStudentName = school.students[0].name
console.log(firstStudentName);




// 4.
const shop = {
    items: [
        {
            name: 'pen',
            stock: 100
        },
        {
            name: 'notebook',
            stock: 50
        }
    ]
}
const notebookStock = shop.items[1].stock
console.log(notebookStock);




// 5.
const movie = {
    title: 'Inception',
    director: {
        name: 'Nolan',
        age: 50
    },
    rating: 8.8
}
const directorName = movie.director.name
console.log(directorName);




// 6.
const game = {
    name: 'football',
    players: [
        {
            id: 1,
            name: 'Lionel Messi'
        },
        {
            id: 2,
            name: 'Cristiano Ronaldo'
        },
    ]
}
const firstPlayerName = game.players[0].name
console.log(firstPlayerName);




// 7.
const vehicle = {
    type: 'car',
    features: {
        color: 'red',
        brand: {
            name: 'Toyota',
            model: 'Corolla'
        }
    }
}
const carBrandName = vehicle.features.brand.name
console.log(carBrandName);












//--------------------------------------------------------------------





// Nullish Coalescing
// Optional Chaining
// Nullish Coalescing (??)

// Practice: 


// 1.
let x = null
x ??= 75
console.log(x);



// 2.
const product = {}
const stock = product.stock ?? 0
console.log(stock);




// 3.
const productDetails = {
    discount: 0
}

const disValue = productDetails.discount || 10
console.log(disValue);



// 4.
const vehicle2 = {} 
const engi = vehicle2?.engine ?? 'Engine info missing'
console.log(engi);



// 5.
const restaurant = {}
const menu = restaurant?.menu ?? 'Menu not available'
console.log(menu);



// 6.
const profile = {
    social: {

    }
}
const tw = profile?.social?.twitter ?? 'Twitter handle not available'
console.log(tw);







//-----------------------------------------------------------------------





// Practice: 


// 1.
let a = 59
const postInre = a++
console.log(postInre);

let aa = 59
const preIncre = ++aa
console.log(preIncre);



// 2.
let oranges = 100
oranges /= 15
console.log(oranges);



// 3.
let mango = 20
mango &&= 10
console.log(mango);
/**
 * &&= Logical AND Assignment Operator. &&= এর পূর্বে বসা ভ্যারিয়েবল যদি সত্য (Truthy)হয় তাহলে &&= এর পরবর্তী দেওয়া ভ্যালু দিয়ে চেঞ্জ করে দিবে। 
 */




// 4.
let bananas = 50
bananas *= 4
console.log(bananas);




// 5.
let grapes = 10
grapes ||= 19
console.log(grapes);
/**
 * ||= Logical OR Assignment Operator. ||= এর পূর্বে বসা ভ্যারিয়েবল এর মান যদি মিথ্যা (Falsy ) হয় তাহলে ভ্যারিয়েবল এর মন চেঞ্জ করে দিবে। 
 */




// 6.
// apples = apples - 10
// short form
apples -= 10



// 7.
let price = undefined
price ||= 90
console.log(price);
/**
 * ||= Logical OR Assignment Operator. ||= এর পূর্বে বসা ভ্যারিয়েবল এর মান যদি মিথ্যা (Falsy ) হয় তাহলে ভ্যারিয়েবল এর মন চেঞ্জ করে দিবে। 
 * undefined একটি falsy ভ্যালু 
 */



// 8.
let tomato = 0
mango &&= 5
/**
 * আউটপুট কিছুই হবে না কারণ বা যা আছে তাই হবে কারণ দুইটা ভিন্ন ভ্যারিয়েবল 
 */



// 9.
let apple = 15
apple %= 6
console.log(apple);
//কারণ ১৫ কে ৬ দিয়ে ভাগ করার পর ভাগশেষ ৩ থাকে