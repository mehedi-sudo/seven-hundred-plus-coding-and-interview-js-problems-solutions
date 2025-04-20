




// Class

// Practice: 


// 1.
/**
 * ক্লাস আর অবজেক্টের মধ্যে ডিফারেন্স কী ?
 * 
 * 
 * Ans: 
 * 
 * ক্লাস এবং অবজেক্ট এর মধ্যে প্রধান পার্থক্য:
 * ক্লাস:
 * ক্লাস একটি টেমপ্লেট বা ব্লুপ্রিন্ট, যা অবজেক্ট তৈরির জন্য ব্যবহৃত হয়।
 * এটি ডিফাইন করে কীভাবে একটি অবজেক্টের এট্রিবিউট (গুণ) এবং মেথড (অ্যাকশন) কাজ করবে।
 * ক্লাসে কোন ডেটা বা আচরণ নির্দিষ্ট করা হয়, তবে এটি নিজে কোন একক ইনস্ট্যান্স নয়।
 * 
 * অবজেক্ট:
 * অবজেক্ট হলো ক্লাসের একটি ইনস্ট্যান্স, যা ক্লাসের ব্লুপ্রিন্ট অনুযায়ী তৈরি হয়।
 * এটি ক্লাসের মাধ্যমে নির্দিষ্ট বৈশিষ্ট্য এবং আচরণ ধারণ করে, এবং প্রতিটি অবজেক্টের নিজস্ব অবস্থা (state) থাকতে পারে।
 * 
 * ক্লাস হলো ব্লুপ্রিন্ট, আর অবজেক্ট হলো তৈরি হওয়া বস্তু।
 */






// 2.
/**
 * ক্লাস ইনস্ট্যান্স বলতে কী বোঝায় ?
 * 
 * 
 * Ans:
 * 
 * ক্লাস ইনস্ট্যান্স বলতে বোঝায় ক্লাসের একটি নির্দিষ্ট অবজেক্ট যা সেই ক্লাসের মাধ্যমে তৈরি করা হয়। এটি ক্লাসের ব্লুপ্রিন্ট অনুসরণ করে একটি কনক্রিট (specific) অবজেক্ট, যার নিজস্ব ডেটা এবং অবস্থান থাকে।
 * 
 * যখন একটি ক্লাস থেকে নতুন অবজেক্ট তৈরি করা হয়, তখন সেই অবজেক্টটি ওই ক্লাসের ইনস্ট্যান্স হয়।
 */







// 3.
class Vehicle {
    constructor(brand, model, price){
        this.brand = brand
        this.model = model
        this.price = price
    }
}
const vehicle1 = new Vehicle('BMW', 'X5', 10000000)
const vehicle2 = new Vehicle('Tesla', 'Model3', 40000)



// 4.
class Worker {
    constructor(id, name, hoursWorked) {
        this.id = id
        this.name = name
        this.hoursWorker = hoursWorked
    }
}
const worker = new Worker(101, 'Tom Cruise', 40)





// 5.
class Library {
    constructor(name, books, location) {
        this.name = name
        this.books = books
        this.location = location
    }
}
const library = new Library('Central Library', 10000, 'Dhaka')
console.log(library instanceof Library);




// 6.
class Classroom {
    constructor(section, teacher) {
        this.students = []
        this.section = section
        this.teacher = teacher
    }
}
const classRoom = new Classroom('A', 'Mr. Plumber')
console.log(classRoom);




// 7.
class Product {
    constructor(name, category, stock) {
        this.name = name
        this.category = category
        this.stock = stock
    }
}

const product = new Product('Mobile', 'Electronics', 50)
console.log(product);




// 8.
class Product {
    constructor(name, category, stock=0) {
        this.name = name
        this.category = category
        this.stock = stock
    }
}

const product2 = new Product('Mobile', 'Electronics')
console.log(product2);







//-------------------------------------------------------------------







// Method


// Practice:

// 1.
class Hotel {
    constructor(name, totalRoom, costPN) {
        this.name = name
        this.totalRoom = totalRoom
        this.costPN = costPN
    }

    getName() {
        return this.name
    }
}

const hotel = new Hotel('Dhaka Hotel', 28, 5000)
console.log(hotel.getName());




// 2.
class Employee {
    constructor(workerName, position, salary) {
        this.workerName = workerName
        this.position = position
        this.salary = salary
    }

    getSalary() {
        return this.salary
    }
}
const employee = new Employee('Jobbar', 'Executive', 50000)
console.log(employee.getSalary());





// 3.
class Library2 {
    constructor() {
        this.books = []
    }

    addBook(book){
        this.books.push(book)
    }

    hasBook(book){
        return this.books.includes(book)
    }
}

const newLibrary = new Library2()
newLibrary.addBook('Introduction to Algorithms')
newLibrary.addBook('Data Structures and Algorithms Made Easy')
newLibrary.addBook('The Algorithm Design Manual')

console.log(newLibrary.hasBook('The Algorithm Design Manual'));






// 4.
class ShoppingCart {
    constructor() {
        this.products = []
        this.totalPrice = 0
    }

    addToCart(productName, productPrice) {
        this.products.push(productName)
        this.totalPrice += productPrice
    }

    getTotalPrice() {
        return this.totalPrice
    }
}

const shoppingCart = new ShoppingCart()
shoppingCart.addToCart('Mackbook', 80000)
shoppingCart.addToCart('iPhone', 120000)

console.log(shoppingCart.getTotalPrice());







//--------------------------------------------------------------------






// Inheritance


// Practice: 


// 1.
/**
 * ইনহেরিটেন্স কি জিনিস ? এইটা কেন দরকার ?
 * 
 * 
 * Ans: 
 * 
 * ইনহেরিটেন্স Inheritance হলো অবজেক্ট-অরিয়েন্টেড প্রোগ্রামিংয়ের (OOP) একটি বৈশিষ্ট্য, যা পূর্ববর্তী ক্লাস Parent Class থেকে নতুন ক্লাস Child Class এর Properties Methods উত্তরাধিকারস্বরূপ গ্রহণ করার প্রক্রিয়া।
 * 
 * 
 * এটা দরকার কারণ:
 * কোড পুনরায় ব্যবহারযোগ্যতা: পূর্ববর্তী ক্লাসের কোড পুনরায় ব্যবহার করতে পারা যায়, নতুন কোড লেখার প্রয়োজন কমে যায়।
 * 
 * কোডের সরলতা: কোডের পুনরাবৃত্তি কমে, সহজ ও পরিষ্কার হয়।
 * 
 * সম্প্রসারণযোগ্যতা: নতুন ক্লাস তৈরি করতে গিয়ে পুরনো কোডের পরিবর্তন করার প্রয়োজন পড়ে না, সিস্টেমকে আরও সম্প্রসারণ করা যায়।
 * 
 */





// 2.
/**
 * প্যারেন্টস আর চাইল্ড ক্লাসের মধ্যে সম্পর্ক কিভাবে তৈরি হয় ?
 * 
 * 
 * Ans:
 * 
 * প্যারেন্ট Parent এবং চাইল্ড Child ক্লাসের মধ্যে সম্পর্ক তৈরি হয় ইনহেরিটেন্স এর মাধ্যমে।
 */




// 3.
// Parent Class
class ParentVehicle {
    constructor(brand, fuelType, maxSpeed, price) {
        this.brand = brand
        this.fuelType = fuelType
        this.maxSpeed = maxSpeed
        this.price = price
    }
}


// Child Class: Bus
class Bus extends ParentVehicle {
    constructor(brand, fuelType, maxSpeed, price, passengerCapacity, numOfDoors) {
        super(brand, fuelType, maxSpeed, price)
        this.passengerCapacity = passengerCapacity
        this.numOfDoors = numOfDoors
    }
}

const bus = new Bus('Volvo', 'Octane', '180kph', '1.50 crore', 150, 1)
console.log(bus);




// Child Class: Truck
class Truck extends ParentVehicle {
    constructor(brand, fuelType, maxSpeed, price, licenseRequired, numOfAxles, loadType) {
        super(brand, fuelType, maxSpeed, price)
        this.licenseRequired = licenseRequired
        this.numOfAxles = numOfAxles
        this.loadType = loadType
    }
}
const truck = new Truck('Scania', 'Nutural Gas', '100kph', '1.20 crore', true, 6, 'dump')
console.log(truck);



// Child Class: Bike
class Bike extends ParentVehicle {
    constructor(brand, fuelType, maxSpeed, price, engineCapacity, bikeType, hasKickStart) {
        super(brand, fuelType, maxSpeed, price)
        this.engineCapacity = engineCapacity
        this.bikeType = bikeType
        this.hasKickStart = hasKickStart
    }
}
const bike = new Bike('Kawasaki', 'Petrol', '400kph', '8000000Lakh', '998cc', 'Sports', false)
console.log(bike);









// 4.
// Parent Class: 
class ParentAnimal {
    constructor(name, age, habitat) {
        this.name = name
        this.age = age
        this.habitat = habitat
    }
}


// Child Class: Bird
class Bird extends ParentAnimal {
    constructor(name, age, habitat, canFly, color) {
        super(name, age, habitat)
        this.canFly = canFly
        this.color = color
    }
}
const bird = new Bird('Parrot', '3years', 'forest', true, 'Green')
console.log(bird);



// Child Class: Fish
class Fish extends ParentAnimal {
    constructor(name, age, habitat, waterType, hasScales) {
        super(name, age, habitat)
        this.waterType = waterType
        this.hasScales = hasScales
    }
}
const fish = new Fish('Hilsa', '6month', 'Ocean', 'Fresh water', true)
console.log(fish);




// Child Class: Animal
class Animal extends ParentAnimal {
    constructor(name, age, habitat, numOfLegs, sound) {
        super(name, age, habitat)
        this.numOfLegs = numOfLegs
        this.sound = sound
    }
}
const animal = new Animal('Cat', '3years', 'Wild/Homes/Apartments', 4, 'meow')
console.log(animal);








// 5.
// Parent Class: Furniture
class Furniture {
    constructor(material, color, height, width, price) {
      this.material = material // Wood, Plastic, Metal, etc.
      this.color = color
      this.height = height
      this.width = width
      this.price = price
    }
}
  


// Child Class: Chair
class Chair extends Furniture {
    constructor(material, color, height, width, price, hasArmRest, isFoldable) {
      super(material, color, height, width, price);
      this.hasArmRest = hasArmRest;
      this.isFoldable = isFoldable;
    }
  
    recline() {
      if (this.hasArmRest) {
        console.log("This chair can be reclined.")
      } else {
        console.log("This chair cannot be reclined.")
      }
    }
}
const chair = new Chair("Wood", "Brown", 90, 50, 1200, true, false)
console.log(chair)
chair.recline()
  



// Child Class: Table
class Table extends Furniture {
    constructor(material, color, height, width, price, numberOfLegs, isExtendable) {
      super(material, color, height, width, price)
      this.numberOfLegs = numberOfLegs
      this.isExtendable = isExtendable
    }
  
    extendTable() {
      if (this.isExtendable) {
        console.log("The table has been extended.")
      } else {
        console.log("This table is not extendable.")
      }
    }
}
const table = new Table("Metal", "Black", 75, 120, 3000, 4, true)
console.log(table)
table.extendTable();  








// 6.
// Parent Class: Animal
class Animal {
    constructor(name, age, color, breed, isDomestic) {
      this.name = name
      this.age = age
      this.color = color
      this.breed = breed
      this.isDomestic = isDomestic
    }
}
  


// Child Class: Dog
class Dog extends Animal {
    constructor(name, age, color, breed, isDomestic, isTrained, barkVolume) {
      super(name, age, color, breed, isDomestic)
      this.isTrained = isTrained
      this.barkVolume = barkVolume // loud, medium, soft
    }
}
const dog = new Dog("Buddy", 3, "Brown", "Labrador", true, true, "loud")
console.log(dog);




// Child Class: Cat
class Cat extends Animal {
    constructor(name, age, color, breed, isDomestic, isIndoor, favoriteFood) {
      super(name, age, color, breed, isDomestic)
      this.isIndoor = isIndoor
      this.favoriteFood = favoriteFood
    }
}
const cat = new Cat("Cat....", 2, "White", "Persian", true, true, "Fish")
console.log(cat);




// Child Class: Parrot
class Parrot extends Animal {
    constructor(name, age, color, breed, isDomestic, canTalk, wingSpan) {
      super(name, age, color, breed, isDomestic)
      this.canTalk = canTalk
      this.wingSpan = wingSpan // in cm
    }
}
const parrot = new Parrot("Parrot", 1, "Green", "Macaw", true, true, 40) 
console.log(parrot);







// 7.
// DRY প্রিন্সিপাল উদাহরণ সহ ব্যাখ্যা কর ?

/**
 * DRY (Don't Repeat Yourself) প্রিন্সিপাল মানে:
 * একই কোড বারবার না লেখা, বরং ফাংশন বা মডিউলে রিইউজ করা।
 * 
 * 
 * Repeating Code:
    let area1 = 3.14 * 5 * 5;
    let area2 = 3.14 * 10 * 10;


 * DRY:
    function getCircleArea(radius) {
        return 3.14 * radius * radius;
    }

    let area1 = getCircleArea(5);
    let area2 = getCircleArea(10);
*/









//------------------------------------------------------------------------



// 1.
/**
 * জাভাস্ক্রিপ্ট এ ইনহেরিটেন্স কিভাবে কাজ করে ?
 * 
 * 
 * Ans:
 * 
 * জাভাস্ক্রিপ্টে ইনহেরিটেন্স প্রোটোটাইপ ভিত্তিক prototype-based হয়। এর মানে, একটি অবজেক্ট অন্য অবজেক্টের বৈশিষ্ট্য ও মেথডগুলি উত্তরাধিকারস্বরূপ পায়, যেখানে প্রোটোটাইপ চেইন ব্যবহৃত হয়।

 * কীভাবে কাজ করে:
 - জাভাস্ক্রিপ্টে ক্লাসের মাধ্যমে ইনহেরিটেন্স তৈরি করা সম্ভব (ES6 ক্লাস সিনট্যাক্স), তবে আন্ডার দ্য হুড, এটি প্রোটোটাইপ চেইনেই কাজ করে।

 * প্রোটোটাইপ চেইন:
 - যখন একটি মেথড কল করা হয়, জাভাস্ক্রিপ্ট প্রথমে সেই অবজেক্টে খোঁজে, যদি না পায় তবে প্রোটোটাইপ চেইনের মাধ্যমে প্যারেন্ট অবজেক্টে খোঁজে। 
 */







// 2.
/**
 * প্রোটোটাইপিক্যাল ইনহেরিটেন্স কি জিনিস ?
 * 
 * 
 * Ans: 
 * 
 * প্রোটোটাইপিক্যাল ইনহেরিটেন্স (Prototype-based Inheritance) জাভাস্ক্রিপ্টের একটি মূল বৈশিষ্ট্য, যেখানে অবজেক্টগুলি অন্য অবজেক্টের বৈশিষ্ট্য এবং মেথড সরাসরি উত্তরাধিকারসূত্রে পায়। এটি প্রোটোটাইপ চেইন (Prototype Chain) ব্যবহার করে কাজ করে।

 * কীভাবে কাজ করে:
  জাভাস্ক্রিপ্টে, প্রতিটি অবজেক্টের একটি **প্রোটোটাইপ** থাকে (যা আরেকটি অবজেক্ট)। যখনই আপনি কোনও অবজেক্টের প্রপার্টি বা মেথড অ্যাক্সেস করতে যান, জাভাস্ক্রিপ্ট প্রথমে সেই অবজেক্টে খোঁজে। যদি সেখানে না পায়, তবে সেটি তার প্রোটোটাইপে খোঁজে। এই প্রক্রিয়া চলতে থাকে যতক্ষণ না অবজেক্টের প্রোটোটাইপ চেইন শেষ হয় (অথবা প্রয়োজনীয় প্রপার্টি পাওয়া যায়)।

 */








// 3.
const obj = {
    name: 'Something'
}
console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__);
console.log(obj.toString()); //[object Object]



// 4.
// তুই students নামে একটা অবজেক্ট বানাইলি। এই অবজেক্টের মধ্যে কোনো toString নামে মেথড লিখলি না। তাহলে তুই কি student.toString() ইউজ করতে পারবি ? কেন পারবি ?

/**
 * Ans: 
 * 
 * হ্যাঁ, পারবো।
 * কারণ:
 * toString() মেথডটা Object ক্লাসের একটা ডিফল্ট মেথড —
   সব জাভাস্ক্রিপ্ট অবজেক্ট এই Object থেকে ইনহেরিট করে।

    const student = {}

    console.log(student.toString()); // [object Object]


  student.toString() কাজ করে কারণ এটা উপরের লেভেল থেকে inherited হয়।    
 */
