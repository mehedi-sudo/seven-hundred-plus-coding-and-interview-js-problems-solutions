

// Array












// Practice:

// 1.
const numbersOfsomeNum = [71, 72, 73, 74, 75, 76, 77, 78, 79]




// 2.
const somefruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Guava']



// 3.
const someFoods = ['alu', 'peyaj', 'begun', 'mula', 'gajor', 'tometo', 'deros', 'laou', 'sosa', 'potol']
const sizeOfSomeFoods = someFoods.length
console.log(sizeOfSomeFoods)



// 4.
const nameOfMovies = ['Movie1', 'Movie2', 'Movie3', 'Movie4', 'Movie5', ]



// 5.
const arrOfElavenToTherty = [11, 13, 15, 17, 19, 21, 23, 25, 27, 29]



// 6.
const someColorAroundMe = ['Black', 'White', 'Red', 'Gray', 'yellow', 'Green']
const totalSizeOfColor = someColorAroundMe.length
console.log(totalSizeOfColor)




// 7.
const capitalOfSomeCountry = ['Dhaka', 'Kabul', 'Andorra Ia Vella', 'Tirana', 'Moscow', 'Berlin', 'Paris', 'Cairo']
const lengthOfCapital = capitalOfSomeCountry.length
console.log(lengthOfCapital)







//---------------------------------------------------------------------








// Practice: 


// 1. 
const friendsNameArr = ['FriendA', 'FriendB', 'FriendC', 'FriendD', 'FriendE', 'FriendF', 'FriendG']

console.log(friendsNameArr[3])


// 2.
const sevenbooksNameArr = ['biology','chemistry','math','physics','higher math','astronomy', 'philosophy']

console.log(sevenbooksNameArr[5])



// 3.
const oneToTenArr = [1,2,3,4,5,6,7,8,9,10]
oneToTenArr[6] = 30
console.log(oneToTenArr)



// 4.
const arrOfSomeGame = ['Free Fire', 'PUBG', 'Candy Crush', 'Temple Run']
arrOfSomeGame[2] = 'Subway Surfers'
console.log(arrOfSomeGame)



// 5.
const arrOfFamilyNam = ['NameA', 'NameB', 'NameC', 'NameD', 'NameE', 'NameF']
console.log(arrOfFamilyNam[2])




// 6.
const arrOfSevenCountryNam = ['Italy', 'Switzerland', 'France', 'Greece', 'Germany', 'Iceland', 'Turkey']

console.log(arrOfSevenCountryNam[3])





// 7.
const somethingInTopOfTable = ['Pen', 'Headphone', 'Keybord', 'Monitor']
console.log(somethingInTopOfTable[6])






//----------------------------------------------------------------------------









// push-pop




// Practice: 

// 1.
const arrOfTenToFif = [10, 20, 30, 40, 50]
arrOfTenToFif.push(60)
console.log(arrOfTenToFif)


// 2.
const arrOfSomeFriends = ['Sojib', 'Sagor', 'Sakib', 'Shohel']
arrOfSomeFriends.push('Sumon')
console.log(arrOfSomeFriends)


// 3. 
const arrOfInstalledGame = ['Free Fire', 'PUBG', 'Candy Crush', 'Temple Run']
arrOfInstalledGame.pop()
console.log(arrOfInstalledGame)




// 4. 
const arrOfSomePreDefNum = [24, 36, 48, 60]
arrOfSomePreDefNum.unshift(12)
console.log(arrOfSomePreDefNum)


// 5.
const fivebooksNameArr = ['biology','chemistry','math','physics', 'philosophy']
fivebooksNameArr.shift()
console.log(fivebooksNameArr)





//--------------------------------------------------------------------------






//  include


// Practice: 


// 1. 
const arrOfForeFruits = ['Apple', 'Banana', 'Mango', 'Lychee']
if (arrOfForeFruits.includes('Mango')) {
    console.log('There are mangoes')
} else {
    console.log('There are no mangoes, climb the tree.')
}



// 2.
const nameOfSome = ['Babul', 'Alif', 'Choton']
const indexOfBabul = nameOfSome.indexOf('Babul')
console.log(indexOfBabul)




// 3.
const nameOfSomefrn = ['Rimon', 'Rifath', 'Rajib']
const indexOfRifath = nameOfSomefrn.indexOf('Rifath')
console.log(indexOfRifath)



// 4.
const someNameOfBdCity = ['Dkaha', 'Chittagong', 'Sylhet']
someNameOfBdCity.push('rajshahi')

console.log(someNameOfBdCity.includes('RajShahi'))




// 5.
const nameOfSomeSeason = ['Dighi', 'Megh', 'Bristy', 'Borsha']
if (nameOfSomeSeason.includes('Bristy')) {
    console.log('I need umberalla')
} else {
    console.log('No rain no pain')
}




// 6.
const favGame = ['Footboll', 'Cricate', 'voliboll']
console.log(favGame.includes('Badminton'))