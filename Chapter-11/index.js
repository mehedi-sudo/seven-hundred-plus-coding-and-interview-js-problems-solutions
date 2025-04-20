


// ES6 and Mordan JavaScript


// Practice:

// 1.
function someNumSum(num1 = 0, num2 = 0, num3 = 0) {
    const sum = num1 + num2 + num3
    return sum 
}
const sumThreeNum = someNumSum(1,2,3)
console.log(sumThreeNum);





// 2.
function depMoney(money = 50) {
    return money
}
const deposit = depMoney()
console.log(deposit);




// 3.
function takeNameAndIncome(name = 'anonymous', amount = 0) {
    const id = 'Name ' + name + ' And amount ' + amount
    return id
}
const genarateId = takeNameAndIncome()
console.log(genarateId);



// 4.
function square(num = 1) {
    return num * num
}
const threeSquare = square(10)
console.log(threeSquare);






// 5.
function productNameAndPrice(name = 'Unknown product', price = 1) {
    const id = 'Product Name ' + name + ', And price ' + price
    return id
}
const product1 = productNameAndPrice()
console.log(product1);






// 6.
function bookArray(bookArr = ['JS book']) {
    return bookArr
}
const book = bookArray(['something', 'and also another something'])
const book2 = bookArray()
console.log(book2);






// 7.
function takeObj(pObj = {price: 10, quantity: 1}) {
    return 'Total Price ' + pObj.price
}
const totalProcuctPrice = takeObj({price: 100, quantity: 5})
const totalProcuctPrice2 = takeObj()
console.log(totalProcuctPrice2);





// 8.
function multiArr(arr = [5,10,15]) {
    const newArrXTow = []
    for (const ele of arr) {
        newArrXTow.push(ele * 2)
    }
    return newArrXTow
}
const arrayMulti = multiArr([5])
const arrayMulti2 = multiArr()
console.log(arrayMulti2);






// 9.
function calInterest(obj = {principal: 1000, rate: 5}) {
    return 'Simple interest ' + (obj.principal * obj.rate / 100)
}
const calculateInterest = calInterest()
const calculateInterest2 = calInterest({principal: 5000, rate: 10})
console.log(calculateInterest);





// 10.
function taxCal(obj = {salary: 50000, tax: 10}) {
    const taxAmount = obj.salary * (obj.tax / 100)
    const amountAfterTax = obj.salary - taxAmount
    return amountAfterTax
}
const taxAndSalaryObj = taxCal()
console.log(taxAndSalaryObj);








//------------------------------------------------------------









// Template Stirng

// Practice: 

// 1.
const a = 100
const b = 20
const diff = `The difference between ${a} and ${b} is ${a - b}`
console.log(diff);



// 2.
const employee = {
    name: 'Abul',
    age: 28,
    salary: 50000
}
const empDetails = `Name ${employee.name} age ${employee.age} and salary is ${employee.salary} BDT`
console.log(empDetails);




// 3.
const fruits = ['Apple', 'Banan', 'Mango']
const favFru = `My favorite fruits are ${fruits[2]}`
console.log(favFru);





// 4.
const a2 = 50
const b2 = 10
const sen = `The division of a and b is ${a2 / b2}`
console.log(sen);






// 5.
const person = {
    firstName: 'Amit',
    lastName: 'Kumar'
}
const fName = `Full Name: ${person.firstName} ${person.lastName}`
console.log(fName);



// 6.
const animals = ['Cat', 'Dog', 'Elephant']
const fSen = `My favorite animals are ${animals.join(', ')}`
console.log(fSen);




// 7.
const student = {
    name: 'Kalam',
    age: 18,
    results: [75, 80, 90]
}
let sumOfMarks = 0
for (const element of student.results) {
    sumOfMarks += element
}
const studentSentence = `Name ${student.name} and Average marks of three subject is ${sumOfMarks / student.results.length}`
console.log(studentSentence);






// ---------------------------------------------------------








// Arrow Function

// Practice:

// 1.
const getFirstIndexValue = arr => arr[0]
const fIndValue = getFirstIndexValue([1,2,3,4,5,6])
console.log(fIndValue);




// 2.
const getThreeMultiValue = (a, b, c) => a * b * c
const multValue = getThreeMultiValue(1, 2, 3)
console.log(multValue);
 




// 3.
const justReturn = () => 'Unknown'
console.log(justReturn());




// 4.
const divideWithFive = obj => obj.poketMoney / 5

const obj = {
    name: 'Jobbar',
    poketMoney: 500
}
const callDivide = divideWithFive(obj)
console.log(callDivide);




// 5.
const sumOfTowInd = arr => arr[0] + arr[arr.length - 1]
const arr3 = [1,2,3,4,5,6,8,9,4,5]
const callSum = sumOfTowInd(arr3)
console.log(callSum);



// 6.
const sumOfTowNumWithDef = (a = 10, b = 5) => a + b 
const callSumOfTowNum = sumOfTowNumWithDef(10,20)
const callSumOfTowNum2 = sumOfTowNumWithDef()
console.log(callSumOfTowNum2);
