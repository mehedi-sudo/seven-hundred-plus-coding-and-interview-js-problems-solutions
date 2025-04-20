
// Comparison



// Practice: 
// Without variable 

// 1.
console.log(7 > 5)



// 2.
console.log(45 > 50)




// 3.
console.log(75 == 75)



// 4.
console.log(100 <= 95)



// 5.
console.log(10 != 7)



// 6.
console.log(20 <= 15)


// 7.
console.log(45 > 97)





//---------------------------------------------------------------






// Practice: 
// With variable


// 1. 
const myLitleBroAge = 10;
const myAge = 15;
const isMyAgeGreaterThanMyLittleBroAge = myLitleBroAge <= myAge;
console.log(isMyAgeGreaterThanMyLittleBroAge);





// 2.
const passMakr = 33
const subMark = 45
const isIamPassed = passMakr <= subMark
console.log(isIamPassed)




// 3.
const jamburaPrice = 50;
const kodbelPrice = 80;
const isKodbelPriceLessThenJamburaPrice = jamburaPrice > kodbelPrice;
console.log(isKodbelPriceLessThenJamburaPrice);




// 4.
const iReadBooks = 10
const myFriendReadBooks = 10
const meAndMyFriendReadSameNumOfBooks = iReadBooks == myFriendReadBooks
console.log(meAndMyFriendReadSameNumOfBooks)




// 5.
const myBiscotti = 15;
const myFriendBiscotti = 20;
const isSameBiscottiBothOfThem = myBiscotti < myFriendBiscotti;
console.log(isSameBiscottiBothOfThem);




// 6.
const realmaddrid = 2;
const barsa = 3;
const isRealmaddridLessThenBarsa = realmaddrid < barsa;
console.log(isRealmaddridLessThenBarsa);



// 7. 
const myName = 'Rahim';
const myFriendName = 'karim';
const isMyNameAndMyFriendNameSame = myName == myFriendName;
console.log(isMyNameAndMyFriendNameSame);



// 8.
const myStudy = true;
const myFriendStudy = false;
const isMeAndMyFriendDoseSameThing = myStudy == myFriendStudy;
console.log(isMeAndMyFriendDoseSameThing);







//-----------------------------------------------------------





// Ttriple Equal


// Practice: 



// 1. 
const myMoney = 50
const myFriendMoney = '50'
console.log(myMoney == myFriendMoney)
console.log(myMoney === myFriendMoney)



// 2.
/**
 * Both == and === compare the values of the two strings, and since "JavaScript" and 'JavaScript' are exactly the same (same value and same type), they both return true.
 */
const noteBook = "JavaScript"
console.log("JavaScript" == 'JavaScript')
console.log("JavaScript" === 'JavaScript')





// 3.
/**
 * 25 == "25": This checks for value equality, and because == performs type coercion, the string "25" is automatically converted to the number 25, so it returns true.
 * 
 * 25 === "25": This checks for both value and type equality without type coercion. Since 25 is a number and "25" is a string, they are not strictly equal, so it returns false.
 */
console.log(25 == "25")
console.log(25 === "25")




// 4.
// Both of them return true
console.log("apple" == "apple")
console.log("apple" === "apple")



// 5.
console.log("test" == "TEST") // false
console.log("test" === "TEST") // false





// 6.
const variableX = 15
const variableY = "20"
console.log(variableX != variableY)     // true
console.log(variableX !== variableY)    // true




// 7.
const variableA = hello
const variableB = "Hello"
console.log(variableA == variableB)
console.log(variableA === variableB)
 


