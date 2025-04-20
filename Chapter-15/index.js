


// JS Core Concept


// Dynamic, primitive, non-primitive, reference-types, pass-by-value, pass-by-reference


// 1.
let num = 15
let copy = num
copy = 25
console.log(num, copy)



// 2.
let arr = [1,2,3]
let arr2 = arr
arr2.push(88)
console.log(arr);
console.log(arr2);




// 3.
let language = {
    name: 'JS',
    age: 30
}
let newVersion = language
newVersion.location = 'Browser'
// console.log(person, newPerson);
console.log(language);
console.log(newVersion);







//-------------------------------------------------------------------------








// Undifined, null vs undifined



// Prictice: 

// 1.
let a 
console.log(a);


// 2.
function justt(a, b) {
    let sum = a + b 
}
console.log(justt());


// 3.
const arr3 = [10,20,30,40,50]
delete arr3[2]
console.log(arr3[2]);


// 4.
function sum(a, b, c) {
    console.log(c);
}
sum(5,10)
/**
 * Although the 3rd parameter is declared, the value is not given when calling the function, so the default value is showing as undefined.
 */





// 5.
const student = {name: 'serious sojib', roll: 1, marks: 99}
console.log(student.marks);
/**
 * I am getting 99 because the value of Marks is 99 when declaring the Marks property of the object.
 */







//---------------------------------------------------------------------------



// logical not (!), double not (!!), Truthy value, Falsy value


// Practice: 


// 1.
if ('false') {
    console.log('Truthy');
} else {
    console.log('Falsey')
}






// 2.
if ({}) {
    console.log('truthy');
} else {
    console.log('falsey')
}





// 3.
if ([]) {
    console.log('Truthy')
} else {
    console.log('Falsey')
}





// 4.
console.log(!![]);






//------------------------------------------------------------------------






// type coercion
// Double equal (==), triple equal (===)


// Practice: 

// 1.
if (true == 1) {
    console.log('same')
} else {
    console.log('different')
}


// 2.
const obj1 = {}
const obj2 = {}
if (obj1 === obj2) {
    console.log(true)
} else {
    console.log(false)
}




// 3.
const arr4 = [1,2,3,4,5,6]
const arr5 = arr4
console.log(arr4 === arr5);



// 4.
function check(num, bol) {
    console.log(num == bol ? true : false)
}
check(1, true)





// 5.
console.log('' == false);




// 6.
console.log(null === undefined);



// 7.
console.log(1 == '1');


/**
 * জাভাস্ক্রিপ্ট কিভাবে টাইপ কনভার্সন করে, তা ব্যাখ্যা কর ?
 * 
 * 
 * Ans:
 * 
 * জাভাস্ক্রিপ্টে টাইপ কনভার্সন দুইভাবে হয়:
 * 
 *  1. Implicit Type Conversion (Type Coercion)
 * জাভাস্ক্রিপ্ট নিজে থেকে ভ্যালুর টাইপ পরিবর্তন করে যখন অপারেশন করে incompatible টাইপের সাথে।
 * উদাহরণ:
    '5' + 2  // '52' (2 কে string এ রূপান্তর করে)
    '5' - 2  // 3   ('5' কে number এ রূপান্তর করে)
    true + 1 // 2   (true কে 1 এ রূপান্তর করে)
    false + '5' // 'false5' (false কে string এ রূপান্তর করে)
 * এখানে জাভাস্ক্রিপ্ট অপারেশন বুঝে টাইপ কনভার্ট করে।
 *
 * 
 * 
 * 2. Explicit Type Conversion (Manual)
 * নিজে ফাংশন বা মেথড ব্যবহার করে টাইপ পরিবর্তন করা যায়।
 * 
 * Common methods:
 * Number() → string বা boolean কে number বানাতে
 * String() → number বা boolean কে string বানাতে
 * Boolean() → string, number, null, undefined ইত্যাদি থেকে boolean বানাতে
 * উদাহরণ:
    Number("123")    // 123
    String(456)      // "456"
    Boolean(0)       // false
    Boolean("hello") // true
 * এখানে কনভার্সন এক্সপ্লিসিটভাবে করা হচ্ছে।
 *
 * 
 * Implicit: জাভাস্ক্রিপ্ট নিজে করে
 * Explicit:  নিজ থেকে ফাংশন দিয়ে করা হয়। 
 * 
 * 
 */







//----------------------------------------------------------------



// callback


// Practice: 


// 1.
function fun(f) {
    f('Ha Ha Ha...')
}

function resu(valu) {
    console.log(valu);
}
fun(resu)



// 2.
const obj = {name: 'Kalam', age: 20, gender: 'male', profession: 'P'}

function takeObj(obj, callback) {
        for (const key in obj) {
            callback(key)
        }
}

takeObj(obj, (key) => {
    console.log(key);
    
})




// 3.
function numberProcessor(oneNum, callback) {
    callback(oneNum / 5)
}
numberProcessor(50, (v) => {
    console.log(v);
})



// 4.
function greeting(greetingHandler) {
    greetingHandler()
}
greeting(() => console.log('Hello Hello Hello'))








//----------------------------------------------------------------








// Scope 


// Practice: 


// 1.
const taxRate = 15
function takeIncome(totalMoney) {
    return totalMoney * (taxRate / 100)
}
const income = 50000
const tax = takeIncome(income)
console.log("Tax to be paid:", tax)




// 2.
function secr() {
    let insideSecret = 'internal secret hiding place'
}
console.log(insideSecret);





// 3.
if (true) {
    let temperature
}
console.log(temperature);





// 4.
function schoolDetails() {
    const schoolName = 'FULLBANU SECONDARY SCHOOL'
    function displaySchoolName() {
        console.log(schoolName);
    }
    displaySchoolName()
}
schoolDetails()

