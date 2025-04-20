


// Function


// Practice: 

// 1.
function juceKao() {
    console.log('Ei nao lebur juce')
}
juceKao()


// 2.
function myRoutine() {
    console.log('fresh hoye asa');
    console.log('sokale kaow');
    console.log('sitting on the front of computer');
    console.log('And so on...')
}
myRoutine()




// 3.
function allFamilyMembarName() {
    console.log('NameA');
    console.log('NameB');
    console.log('NameC');
    console.log('NameD');
    console.log('NameE');
}
allFamilyMembarName()



// 4.
function taskDone() {
    console.log('Work 1');
    console.log('Work 2');
    console.log('Work 3');
    console.log('Work 4');
    console.log('Work 5');   
}
taskDone()




// 5.
function greetMe() {
    console.log('Good Morning! Have a great day');
    
}
greetMe()



// 6.
function getFavFriends() {
    console.log('Friend Name');
    console.log('Friend Name');
    console.log('Friend Name');
    
}
getFavFriends()


// 7.
function introduceMyself() {
    console.log('My Name');
    console.log('My Age');
    console.log('Bangladesh');
    console.log('0171111111');
    console.log('5ft');
    console.log('favFood');  
}
introduceMyself()







//-----------------------------------------------------------







// parameter

// Practice: 


// 1.
function somosti(fAge, mAge) {
    const sum = fAge + mAge
    console.log(sum);
    
}
const fatherAge = 50
const myAge = 40
somosti(fatherAge, myAge)



// 2.
function gun(num1, num2) {
    const sqr = num1 * num2
    console.log(sqr);
}
gun(20, 15)




// 3.
function subSum(sub1, sub2, sub3) {
    const sumOfTreeSubMar = sub1 + sub2 + sub3
    console.log(sumOfTreeSubMar);
    
}
subSum(80, 85, 78)



// 4.
function ageCal(ageYear) {
    const age = 2025 - ageYear
    console.log('Your Age is ', age , ' Years');
    
}
ageCal(2008)





// 5.
function laoCalcu(totalMoney) {
    const sinlgeLaoPrice = 35
    const numberOfLaoUCanBuy = totalMoney / sinlgeLaoPrice
    console.log(numberOfLaoUCanBuy);
    
}
laoCalcu(140)




// 6.
function averageCal(a, b, c, d) {
    const sum = a + b + c + d 
    const average = sum / 4
    console.log(average);
    
}

averageCal(1, 2, 3, 4)





// 7.
function sellingPrice(price) {
    const profite = 250
    const sellingPrice = price + profite
    console.log(sellingPrice);
    
}
sellingPrice(500)





// 8.
function cal(year) {
    console.log(year + 100);
    
}
cal(2005)







// 9.
function phoneUsageTotalTime(dailyTime) {
    console.log(dailyTime * 30);
    
}
phoneUsageTotalTime(3)





//----------------------------------------------------------






// return


// Practice: 


// 1.
function isGreterThanTen(num) {
    if (num > 10) {
        return true
    }
    return false
}
console.log(isGreterThanTen(11));



// 2.
function isEvenlyDivisibleByThertin(num) {
    if (num % 13 == 0) {
        return true
    }
    return false
}
console.log(isEvenlyDivisibleByThertin(26));



// 3.
function sumSomeFood(rice, curry, drinks) {
    return rice + curry + drinks
}
console.log(sumSomeFood(80, 120, 60));




// 4.
function isEligibleForVot(num) {
    if (num > 18) {
        return 'Eligible for Voting'
    }
    return 'Not Eligible'
}
console.log(isEligibleForVot(19));





// 5.
function showLength(str) {
    return str.length
}
console.log(showLength('Something'));




// 6.
function gor(a, b, c) {
    const sum = a + b + c
    return sum / 3
}
console.log(gor(5, 10, 8));




// 7.
function isNegative(num) {
    if (num < 0) {
        return num * (-1)
    }
}
console.log(isNegative(-8));







//-------------------------------------------------






// Practice:


// 1.
function checkEvenOdd(err) {
    for (const element of err) {
        if (element % 2 === 0) {
            console.log( element, 'is Even Number',)
        } else {
            console.log( element, 'is ODD Number',)
        }
    }
}
checkEvenOdd([1,2,3,5,8,90,5])




// 2.
function firstLeterReturn(str) {
    return str[0]
}
const firstNameL = firstLeterReturn('Raju')
console.log(firstNameL);



// 3.
function takeNumber(num) {
    if (num > 10) {
        return num / 10
    } else {
        return num * 10
    }
}

const checkTNFucn = takeNumber(10)
console.log(checkTNFucn);




// 4.
function sumArr(arr) {
    return arr[0] + arr[1]
}
const checkSumArr = sumArr([2,2,3,4])
console.log(checkSumArr);






// 5.
function multi(n) {
    if (n > 0) {
        return n * 2
    } else {
        return n * 3
    }
}
const checkMulti = multi(-2)
console.log(checkMulti);





// 6.
function twoStr(fStr, sStr) {
    if (fStr.length > sStr.length) {
        return true
    } else {
        return false
    }
}
const checkTowStr = twoStr('FirstStirng', 'SndString')
console.log(checkTowStr);




// 7.
function multipl(num1, num2) {
    const result = num1 * num2
    if (result > 100) {
        return result / 2
    } else {
        return result
    }
}
const checkMultipl = multipl(20, 20)
console.log(checkMultipl);







//-----------------------------------------------------------------







// Practice: 

// 1.
function sumOfArr(arr) {
    let sum = 0
    for (const element of arr) {
        if (element % 2 === 1) {
            sum = sum + element
        }
    }
    return sum
}
const sumOfFrind = [5, 15, 8, 7]
const result = sumOfArr(sumOfFrind)
console.log(result);



// 2.
function smallNumOfArr(arr) {
    if (arr[0] < arr[1]) {
        return arr[0]
    } else {
        return arr[1]
    }
}
const arrOfSomeNum = [20, 45, 78]
const resultOfSmall = smallNumOfArr(arrOfSomeNum)
console.log(resultOfSmall);



// 3.
function ageCal(age) {
    if (age < 18) {
        return 18
    } else if (age > 45) {
        return 45
    } else {
        return age
    }
}
console.log(ageCal(20));





// 4.
function sumOfArr(arr) {
    let sum = 0
    for (const element of arr) {
        if (element % 4 === 0) {
            sum = sum + element
        }
    }
    return sum
}
const sumOfFrind1 = [2, 4, 5, 7, 8, 32, 45]
const result1 = sumOfArr(sumOfFrind1)
console.log(result1);






// 5.
function multiOrDiv(n) {
    if (n < 20) {
        return n * 2
    } else {
        return n / 20
    }
}
const checkMulti1 = multiOrDiv(20)
console.log(checkMulti1);






// 6.
function sumOfArr(arr) {
    let sum = 0
    for (const element of arr) {
        if (element < 0) {
            sum = sum + element
        }
    }
    return sum
}
const sumOfFrind2 = [2, -4, -5, 7, 8, -32, 45]
const result2 = sumOfArr(sumOfFrind2)
console.log(result2);






// 7.

function sumOfArr(arr) {
    let sum = 1
    for (const element of arr) {
        if (element % 3 === 0) {
            sum = sum * element
        }
    }
    return sum
}
const sumOfFrind3 = [3,6,9]
const result3 = sumOfArr(sumOfFrind3)
console.log(result3);






