



// map, forEach, Filter, Find, FindIndex


// Practice:

// 1.
const flax = [30,45,20,60,10]
const anotherFlax = flax.map(singeF => singeF + 13)
console.log(anotherFlax);


// 2.
const nameList = ['Messi', 'Maradona', 'Pele', 'Zidane', 'Ronaldo']
const nameListGtF = nameList.filter(name => name.length > 5)
console.log(nameListGtF);
 


// 3.
const number = [10,15,20,25,30,35]
const numFind = number.find(s => s > 20)
console.log(numFind);




// 4.
const height = [65, 70, 68, 72, 68, 73]
const heightF = height.filter(s => s > 69)
console.log(heightF);




// 5.
const someNum = [7, 10, 15, 20, 25, 30]
someNum.map(n => console.log(n / 3))



// 6.
const friendList = ['Leonardo', 'Brad Pitt', 'Kate Winslet', 'Audrey Hepburn', 'Johnny Depp']
friendList.map(s => console.log(s[2]))
const fr = friendList.map(s => s[2])
console.log(fr);





// 7.
const nameArr = ['Tom', 'Harry', 'Sam', 'Jack']
const hName = nameArr.find(n => n[0] === 'H')
console.log(hName);




// 8.
const anoArr = [1,2,3,4,5]
anoArr.forEach(n => console.log(n))



// 9.
const animaleName = ['cow', 'goat', 'sheep', 'horse']
animaleName.forEach(n => console.log(n))







//------------------------------------------------------------------





// Some, Every, Flat

// Practice:

// 1.
const numbers = [1,2,5,,55,81,2,54,48,55,858]
const singleOne = numbers.some(s => s > 100)
console.log(singleOne);



// 2.
const someArrOfFive = [55,26,58,95,8]
console.log(someArrOfFive.every(s => s / 5));



// 3.
const words = ['something', 'anotherSomething', 'words']
const a = words.some(s => s.length === 'hello'.length)
console.log(a);



// 4.
const ages = [20,44,68,25,35,36]
console.log(ages.every(s => s > 18));







//-----------------------------------------------------------------







// Reduce 

// Practice:

// 1.
const iHaveAnArray = [5,10,15,20,25]
const sumOfiHaveArr = iHaveAnArray.reduce((a, c) => a + c, 0)
console.log(sumOfiHaveArr);



// 2.
const iAmAOwnerOfAStore = [
    {name: 'shampoo', price: 100},
    {name: 'soap', price: 50},
    {name: 'toothpaste', price: 75},
]

const allPriceOfAllProduct = iAmAOwnerOfAStore.reduce((a, c) => a + c.price, 0)
console.log(allPriceOfAllProduct);




// 3.

const productList = [
    {name: 'Pen', price: 5},
    {name: 'Book', price: 50},
    {name: 'Bag', price: 100},
]
const allProductPrice = productList.reduce((a, c) => a + c.price, 0)
console.log(allProductPrice);





// 4.
const ar = [1,2,3,4,5]
const multi = ar.reduce((a, c) => a * c, 1)
console.log(multi);




// 5.
const arrrr = [10,20,30,40,50]
const maxOfArr = arrrr.reduce((a, c) => a < c ? a = c : a , 0)
console.log(maxOfArr);



// 6.
const madeAArr = [100,200,300,400]
const sumOfall = madeAArr.reduce((a, c) => a + c, 50)
console.log(sumOfall);






//----------------------------------------------------------------------






// Sort


// Practice: 


// 1.
const numberss = [50,12,25,8,15]
numberss.sort((a, b) => a - b)
console.log(numberss);



// 2.
const numberss2 = [13,2,45,9,6]
numberss2.sort((a, b) => b - a)
console.log(numberss2);




// 3.
const frindts = [
    {name: 'Ali', age: 29},
    {name: 'Sara', age: 22},
    {name: 'Tariq', age: 35},
]
frindts.sort((a, b) => a.age - b.age)
console.log(frindts);





// 4.
const names = ['nabil', 'zubayer', 'sarwar', 'delwar']
names.sort()
console.log(names);









//--------------------------------------------------------------






// reverse


// Practice: 


// 1.
const names2 = ['Zara', 'Tariq', 'Amir', 'Lina']
names2.reverse()
console.log(names2);



// 2.
const numbers3 = [1,4,9,7]
numbers3.reverse()
console.log(numbers3);



// 3.
const users = [
    {name: 'Ali', age: 30},
    {name: 'Sara', age: 25},
    {name: 'Tariq', age: 35},
]
users.reverse()
console.log(users);









//---------------------------------------------------------------------




// slice splice


// Practice: 


// 1.
const fruits = ['Apple', 'Banana', 'Cherry', 'Date']
const seletedFruits = fruits.slice(1, 3)
console.log(seletedFruits);



// 2.
const car = ['Tesla', 'BMW', 'Toyota', 'Ford']
const seletedCar = car.slice(0, 2)
console.log(seletedCar);




// 3.
const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar']
const modMovieList = movieList.splice(2, 2, 'Batman', 'Superman')
console.log(modMovieList);
console.log(movieList);




// 4.
const players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe']
const modPlayers = players.splice(2, 1, 'Halland')
console.log(modPlayers);
console.log(players);

