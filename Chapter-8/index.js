



// Object 


// Practice: 


// 1.
const teacher = {
    name: 'Abul',
    subject: 'Math',
    age: 35,
    address: 'Dhaka',
    school: 'Dhaka Collage' 
}


// 2.
const tree = {
    name: 'Banyan',
    heightsCM: 500,
    age: 100,
    fruitsName: 'fig'
}


// 3.
const humanPeople = {
    name: 'Kuddus',
    age: 25,
    heights: 50,
    address: 'Dhaka',
    fatherName: 'Ajgor',
    profession: 'Tela Teli'
}





// 4.
const father = {
    name: 'Father Name',
    profession: 'Father Profession',
    age: 50,
    child: 10
}



// 5.
const motorbike = {
    brand: 'Yemaha',
    whell: 2,
    color: 'Black',
    topSpeed: 150,
    price: 3000000
}


// 6.
const bird = {
    name: 'bird Name',
    color: 'yellow',
    food: 'Wheat'
}


// 7.
const laptop = {
    brand: 'Dell',
    prosesor: 'core i7',
    ram: '8gb',
    price: 60000,
    displaySize: 16    
}




//---------------------------------------------------------------------








// property and Key


// Practice: 

// 1. 
const player = {
    name: 'PlayerName',
    age: 28,
    sports: 'Football',
    team: 'Something'
}
console.log(player.team)




// 2.
const laptop2 = {
    brand: 'Dell',
    hardDisc: '500GB',
    ram: '8GB',
    price: 60000,
    screenSize: 16    
}
console.log(laptop2.screenSize)





// 3.
const favPlace = {
    name: "Cox's Bazar",
    distance: "400km",
    popularity: "high"
}
console.log(favPlace["popularity"])




// 4.
const phone = {
    brand: 'Nokia',
    color: 'black',
    price: 5000
}
console.log(phone['price'])




// 5.
const library = {
    name: 'Public Library',
    location: 'Dhaka',
    books: 5000
}
console.log(library.location)




// 6.
const movie = {
    title: 'Inception',
    director: 'Nolan',
    rating: 9
}
console.log(movie['rating']);



// 7.
const collage = {
    name: 'NDC',
    established: 1949,
    groups: ['Science', 'Arts', 'Commerce']
}
console.log(collage.groups[1])


// 8.
const family = {
    father: {
        name: 'FatherName',
        age: 50,
        profession: 'ProfessionName'
    },
    mother: {
        name: 'MotherName',
        age: 40,
        profession: 'MotherProfession'
    }
}
const ftrAge = family.father.age
const mtrAge = family.mother.age
const sumOfFtrAgeAndMtrAge = ftrAge + mtrAge
console.log(sumOfFtrAgeAndMtrAge);







//------------------------------------------------------------------------








// Practice: 


// 1.
const boi = {
    name: 'Marhaba JavaScript a maro thaba',
    author: 'Jhankar Mahbub',
    price: '680'
}
for (const key in boi) {
    const value = boi[key]
    console.log(key, value)
}





// 2.
const article = {
    title: 'Learning JS',
    category: 'Programming'
}
if ('author' in article) {
    console.log('Author exists');
} else {
    console.log('Author dose not exists');
}





// 3.
const laptop3  = {
    brand: 'Dell',
    model: 'Inspiron',
    price: 45000,
}
for (const key in laptop3) {
    const value = laptop3[key]
    console.log(key, value)
}




// 4.
const phone2= {
    brand: 'Samsung',
    model: 'Galaxy S21',
    price: 85000
}
const keysOfPhone2 = Object.keys(phone2)
for (const key of keysOfPhone2) {
    const value = phone2[key]

    console.log(key, value);
    
}



// 5.
const bike = {
    brand: 'Hero',
    price: 120000,
    model: 'Splendor'
}
const allValueOfBikeObj = Object.values(bike)
console.log(allValueOfBikeObj);






// 6.
const books = {
    book1: 'Harry Potter',
    book2: 'The Hobbit',
    book3: 'Game of Thrones'
}
for (const key in books) {
    console.log(books[key])
}





// 7.
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}
let sumOfAllNum = 0
for (const key in numbers) {
    const value =  numbers[key]
    sumOfAllNum += value
}
console.log(sumOfAllNum);





// 8.
const player2 = {
    name: 'Messi',
    team: 'Argentina',
    goals: 9
}
const allValuesOfPlayer2 = Object.values(player2)
console.log(allValuesOfPlayer2);





// 9.
const building = {
    floors: 10,
    address: {
        street: 'Main Road',
        city: 'Dhaka'
    },
    type: 'Commercial'
}
// Value
for (const key in building) {
    const value =  building[key]
    
    console.log(key, value);
    
}
// Nested Value
for (const key in building) {
    const value =  building[key]

    if ( typeof value === 'object') {

        for (const key in value) {
            const value2 =  value[key]
            console.log(key, value2);
        }

    } else {
        console.log(key, value);
    }
}










//-------------------------------------------------------------------



// Freeze and seal

// Practice: 

// 1.
const headPhone = {
    brand: 'Sony',
    price: 3000,
    color: 'red'
}
Object.freeze(headPhone)
headPhone.soundSys = 'Dolby'
console.log(headPhone);




// 2.
const player3 = {
    name: 'Messi',
    goals: 800,
    club: 'Inter Miami'
}
Object.freeze(player3)
player3.jerseyNumber = 10
console.log(player3);





// 3.
const book4 = {
    title: 'Harry Potter',
    author: 'JK Rowling',
    page: 500
}
Object.seal(book4)
book4.author = 'Jhankar Mahbub'
console.log(book4);



// 4.
const gadget = {
    name: 'iPhone',
    price: 120000,
    color: 'Black'
}
delete gadget.price
console.log(gadget);





// 5.
const animal = {
    name: 'Tiger',
    location: 'Sundarban'
}
Object.freeze(animal)



// 6.
const food = {
    name: 'Pizza',
    price: 500,
    size: 'Large'
}
Object.seal(food)
food.sldjsd = 'sldkfjs'
food.price = 200000
console.log(food);
