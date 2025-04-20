



// do ...while

// Practice:

// 1.
let items = 3
do {
    console.log(items);
    items++
} while (items > 5);





// 2.
let attempts = 12
if (attempts < 10) {
    do {
        attempts++
    } while (true);
}



// 3.
let name = 'Jhon'

do {
    name += 'n'
    console.log(name);
    
} while (name.length < 10);













// Switch

// Practice: 

// 1.
const mobile = 'Samsung'

switch (mobile) {
    case 'Apple':
        console.log('USA');
        break;
    case 'Samsung':
        console.log('Korea');
        break;
    case 'Xiaomi':
        console.log('Chaina');
        break;
    default:
        console.log('Unknown Source');
        break;
}




// 2.
const browser = 'Safari'

if (browser === 'Chrome') {
    console.log('Best for developer')
} else if (browser === 'Brave') {
    console.log('Privacy focused')
} else if (browser === 'Safari') {
    console.log('Apple users choice')
} else {
    console.log('Unsupported browser')
}



switch (browser) {
    case 'Chrome':
        console.log('Best for developer');
        break;
    case 'Brave':
        console.log('Privacy focused');
        break;
    case 'Safari':
        console.log('Apple users choice');
        break;
    default:
        console.log('Unsupported browser');
        break;
}








// 3.
const paymentMethod = 'debit'

switch (paymentMethod) {
    case 'cash':
        console.log('Pay with cash');
        break;
    case 'credit':
        console.log('Pay with credit card');
        break;
    case 'debit':
        console.log('Pay with debit card');
        break;
    default:
        console.log('Invalid payment method');
        break;
}






// 4.
const membership = 'free'

if (membership === 'free') {
    console.log('Access limited content');
} else if (membership === 'silver') {
    console.log('Access most content');
} else if (membership === 'gold') {
    console.log('Access premium content');
} else if (membership === 'platinum') {
    console.log('Full access');
}






// 5.
const orderStatus = 'pending'

switch (orderStatus) {
    case 'pending':
        console.log('Your order is being processed');
        break;
    case 'shipped':
        console.log('Your order is on the way');
        break;
    case 'delivered':
        console.log('Your order has been delivered');
        break;
    case 'cancelled':
        console.log('Your order was cancelled');
    break;
}






// 6.
const grade = 'A'

switch (grade) {
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    case 'C':
        console.log('Average');
        break;
    case 'D':
        console.log('Poor');
        break;
    case 'F':
        console.log('Fail');
        break;
}










//--------------------------------------------------------------------------




// eval, with

// Practice: 

// 1.
/**
 * with কী ? এইটা কী কাজ করে ?
 * 
 * 
 * Ans:
 * 
 * with হলো JavaScript-এর একটি স্টেটমেন্ট, যা একটি অবজেক্টকে scoping object হিসেবে ব্যবহার করে, যাতে তার প্রপার্টিগুলো সরাসরি ব্যবহার করা যায়।
 * 
 * এইটা কী কাজ করে:
 * with স্টেটমেন্ট একটি অবজেক্টের context তৈরি করে। এরপর সেই অবজেক্টের property-গুলো সরাসরি access করা যায়, dot notation ছাড়াই।
 */




// 2.
/**
 * eval() কী জিনিস ? এইটা কেন ইউজ করা উচিত না ?
 * 
 * 
 * Ans:
 * 
 * eval() হলো JavaScript-এর একটি ফাংশন, যা string হিসেবে দেওয়া কোডকে execute করে।
 * যে কোনো string যদি valid JavaScript কোড হয়, eval() তা রান করে।
 * 
 * 
 * কেন eval() ব্যবহার করা উচিত না:
 * Security risk – যদি user input দিয়ে eval() চালানো হয়, তাহলে malicious code রান করতে পারে।
 * Performance কমায় – eval() interpreter-কে stop করে নতুন করে compile করতে বাধ্য করে।
 * Debug করা কঠিন – কোড ট্র্যাক করা ও বুঝা কঠিন হয়ে যায়।
 * Strict mode-এ কিছু কাজ ঠিকমতো করে না।
 */











//---------------------------------------------------------------------------



// IIFE

// Practice: 


// 1.
/**
 * IIFE কী জিনিস? এইটা কেন ইউজ করা হয়?
 * 
 * 
 * Ans:
 * 
 * IIFE (Immediately Invoked Function Expression) হচ্ছে এমন একটা ফাংশন যেটা ডিফাইন করার সাথেসাথেই এক্সিকিউট হয়।
 * 
 * কেন ইউজ করা হয়:
 * Private scope তৈরি করতে (ভ্যারিয়েবল লিক আটকাতে)
 * Global namespace পরিষ্কার রাখতে
 * একবারই রান করানোর জন্য
 */






// 2.
(function() {
    console.log('I am isolated from outer scope!');
})()






// 3.
(() => {
    console.log('borrow from arrow')
})()





// 4.
(function(kelvin) {
    const celsius = kelvin - 273.15
    console.log(celsius)
})(300)











//---------------------------------------------------------------------------





// use strict

// Practice: 


// 1.
/**
 * স্ট্রিক্ট মুড কেন ইউজ করা হয় ?
 * 
 * 
 * Ans:
 * 
 * Strict mode ইউজ করা হয় কোডকে সেইফ ও পরিষ্কারভাবে লিখতে।

 * কেন ইউজ করা হয়:
 *
 * ভুলভাল ভ্যারিয়েবল ডিক্লেয়ার রোধ করতে
 * রিজার্ভড কিওয়ার্ড ব্যবহার আটকাতে
 * this এর অজানা বিহেভিয়ার কমাতে
 * সাইলেন্ট ভুলগুলোকে এক্সেপশন বানিয়ে ধরিয়ে দিতে
 */