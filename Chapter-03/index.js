


//  Data Type


//  Practice: 

// 1. 
const price = 555
console.log(typeof price)   // number




// 2. 
const learning = true
console.log(typeof learning)  // boolean



// 3. 
const megaCity = "Dhaka"
console.log(typeof megaCity)    // string





// 4. 
const temperature = 102.5
console.log(typeof temperature) // number





// 5.
const isHungry = true
console.log(typeof isHungry)    // boolean




// 6.
const isRich = true
console.log(typeof isRich)  // boolean






//-------------------------------------------------------------------------




// let



// Practice: 



// 1. 
let age = 20
console.log(age)
age = 25
console.log(age)



// 2.
let pocketMoney = 500
pocketMoney = 150
console.log(pocketMoney)




// 3.
let studyTime = 4
studyTime = 2
console.log(studyTime)




// 4.
let friendsCount = 3
friendsCount = 1
console.log(friendsCount)



// 5.
let phonePrice = 25000
phonePrice = 12000
console.log(phonePrice)




// 6.
let chairsCount = 40
chairsCount = 38
chairsCount = 32
console.log(chairsCount)





// 7.
let playTime = 2
playTime = 0
console.log(playTime)







//---------------------------------------------------------------------




// Comment


// Practice:


// 1. 

// football score
const score = 5



// 2. 

// this is
// the radius of
// the circle
const radius = 3



// 3. 
// Something
// Something
// Something..
/**
 * Something 
 * Something...
 * 
 */
const dress = 3



// 4.

//For Books
const giftMoney = 100




// 5.

/**
 * I will study biology for 2 hours about cells.
 * I will study chemistry for 2 hours about atoms.
 * I will study physics for 1 hours about energy.
 * I will study mathematics for 1 hours about algebra.
 * I will study English  for 1 hours about grammar
 * 
 */
const studyTime2 = 7




// 6.
/**
 * recever will get 1000 BDT
 * service fee 18 BDT
 */
const sendMoney = 1018




// 7.
// Product price is 600 BDT and Delivery fee is 80 BDT
const pay = 680








//------------------------------------------------------------------------



// Name


// Practice: 


// 1.
const favFood = 'Apple'



// 2.
const city = 'Chittagong'
const City = 'Dhaka'
console.log(city);
console.log(City);



// 3.
const userName = 'Johan'
const uesrname = 'Jovan'
console.log(userName);
console.log(uesrname);




// 4.
const myHomeAddress = 'Bangladesh'



// 5.
// const super = 5
// console.log(super)  // Uncaught SyntaxError: Unexpected token 'super'




// 6.
// const class = 10  // Uncaught SyntaxError: Unexpected token 'class'





// 7.
/**
 * 2ndPosition There are no rules for writing variable names like this. Variable names cannot start with a number. You have to write the variable without the number in front of it.
 */
// const 2ndPosition = 'Kalam'  //Uncaught SyntaxError: Invalid or unexpected token








//-------------------------------------------------------------------



// parse and NaN



// Practice: 


// 1.
const num = '20'
const sum = parseInt(num) + 10
console.log(sum)




// 2.
const fractionNum = '3.14159'
console.log(parseInt(fractionNum))



// 3. 
const strToNum = 'premikBoy'
console.log(parseInt(strToNum))





// 4.
const firstFrNumber = 3.456
const secondFrNumber = 2.789
const summ = firstFrNumber + secondFrNumber
console.log(parseFloat(summ.toFixed(2)))




// 5.
const firstInt = '56.78'
const secondInt = '12.34'
const sumOfTowInt = parseFloat(firstInt + secondInt)
console.log(sumOfTowInt)






// 6.
const fStrNum = '10.5678'
const a = parseFloat(fStrNum)
const sSrtNum = '5.4321'
const b = parseFloat(sSrtNum)
console.log(parseFloat(a.toFixed(1)), parseFloat(b.toFixed(1)))




// 7.
const fStrNum2 = '42.45689754'
const a2 = parseFloat(fStrNum2)
const c3 = parseFloat(a2.toFixed(3))
console.log(c3)
console.log(Math.round(c3))