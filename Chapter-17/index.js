


// Error Validation


// Type Validation


// 1.
function returnFirstL(str) {
    if (typeof str !== 'string') {
        return 'Please provide a Stirng'
    }
    return str[0]
}
console.log(returnFirstL('Something'));



// 2.
function retuArrL(arr) {
    if (Array.isArray(arr) == false) {
        return 'Please provide an Array'
    }
    return arr[arr.length - 1]
}
console.log(retuArrL([1,2,3,5,4,8,6,5,8]));




// 3.
function getArea(len, wid) {
    if (typeof len !== 'number') {
        return 'Length is not a Number. Please provide a number'
    } else if (typeof wid !== 'number') {
        return 'Width is not a Number. Please provide a number'
    }
    return len * wid
}
console.log(getArea(5, 2));







//--------------------------------------------------------------------------








// JS Error


// SyntaxError, TypeError, ReferenceError, LogicalError. RangeError


// Practice: 

// 1.
/**
 * যদি কোনো লাইন শেষে সেমিকোলন না দিস তাহলে কি এরর দিবে জাভাস্ক্রিপ্ট এ ?
 * 
 * 
 * Ans:
 * 
 * না, জাভাস্ক্রিপ্টে সেমিকোলন দেওয়া আবশ্যক নয়,
 * তবে কিছু ক্ষেত্রে সেমিকোলন না দিলে Error হতে পারে
 */





// 2.
/**
 * Reference Error কখন দিবে ?
 * 
 * 
 * Ans: 
 * 
 * যখন কোনো অজানা বা অপরিচিত ভ্যারিয়েবল বা ফাংশন অ্যাক্সেস করার চেষ্টা করা হবে 
 */




// 3.
/**
 * Syntax Error আর Type Error-এর ডিফারেন্স কী ?
 * 
 * 
 * Ans:
 * 
 * Syntax Error
 * যখন কোডের গঠন বা ভাষার নিয়ম সঠিক না থাকবে 
 * 
 * Type Error
 * যখন একটি ভুল ডেটা টাইপ নিয়ে কাজ করার চেষ্টা করা হবে
 */


