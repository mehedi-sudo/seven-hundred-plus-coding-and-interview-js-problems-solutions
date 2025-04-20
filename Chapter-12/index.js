




// Broken JavaScript



// Destructuring

// Practice:

// 1.
const product = {
    name: 'Laptop',
    price: 50000,
    brand: 'Dell'
}
const {brand} = product
console.log(brand);




// 2.
const item = {
    name: 'Mobail',
    price: 20000,
    phone: 'Samsung'
}
const {phone, price} = item
console.log(phone,  price);





// 3.
const color = ['red', 'blue', 'green', 'yellow']
const [first, second] = color
console.log(first, second);




// 4.
const numbers = [1,2,3]
const [, second2] = numbers
console.log(second2);




// 5.
const digits = [2,4,6,8]
const [two, , , eight] = digits
console.log(two, eight);




// 6.
function multiply(a, b) {
    return [a * 2, b * 2]
}
const [first3, second3] = multiply(2, 4)
console.log(first3, second3);





// 7.
const person = {
    name: 'Rahim',
    city: 'Dhaka'
}
const {name, city, phone2 = 'N/A'} = person
console.log(name, city, phone2);




// 8.
const teacher = {
    name3: 'Maria',
    profession: 'Teacher'
}
const {name3, profession: job} = teacher
console.log(name3, job);






//----------------------------------------------------------------------







// Rest Operator

// Practice: 

// 1.
const product2  = {
    name4: 'Laptop',
    price: 50000,
    brand: 'Dell'
}
const {name4, ...rest} = product2
console.log(name4, rest);



// 2.
const project = {
    id: 101,
    title: 'Web App',
    budget: 3000,
    client: 'Tech Corp',
}
const {title, ...rest2} = project
console.log(title, rest2);



// 3.
const programmer = {
    name5: 'Sophin',
    language: 'JavaScript',
    experience: 5,
    specialty: 'Frontend',
    tools: 'React'
}
const {language, specialty, ...details} = programmer
console.log(language, specialty, details);





// 4.
const arr = [10,20,3,30,300,3000]
const [fir, sec, ...anotherArr] = arr
console.log(fir, sec, anotherArr);




// 5.
function sumFun(a, b, ...c) {
    let sum = 0
    for (const ele of c) {
        sum += ele
    }
    return sum
}
const sumOfArr = sumFun(10,20,30,40,50,60)
console.log(sumOfArr);





// 6.
function calAverage(...arr) {
    let sum = 0
    for (const ele of arr) {
        sum += ele
    }

    const average = sum / arr.length
    return average
}
const returnAveResult = calAverage(1,2,3,4,5,6,8,7,5,85,9)
console.log(returnAveResult);






//----------------------------------------------------------------------





// Spread Operator


// Practice:

// 1.
const technologies = ['Condition', 'array', 'loop']
const sTechnologies = ['Variable', ...technologies]
console.log(sTechnologies);



// 2.
const fruits = ['Apple', 'Banana', 'Mango']
const myFruits = [...fruits, 'papaya', 'orange']
console.log(myFruits);




// 3.
const frontEnd = ['JavaScript']
const backEnd = ['Node.js']
const database = ['MongoDB']
const allTech = [...frontEnd, ...backEnd, ...database]
console.log(allTech);




// 4.
const website = {name: 'MySite', type: 'e-commerce', status: 'active'}
const newWebsite = {...website, theme: 'dark'}
console.log(newWebsite);




// 5.
const young = {name: 'Arif', age: 30, country: 'B Bariya'}
const { country, ...modYoung } = young
console.log(modYoung);




// 6.
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
}
const newCar = {...car, year: 2032}
console.log(newCar);
