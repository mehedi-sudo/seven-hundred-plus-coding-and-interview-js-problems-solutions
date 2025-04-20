


// this

// Practice: 

// 1.
/**
 * ব্রাউজারে window অবজেক্ট জিনিসটা কী ?
 * 
 * 
 * Ans:
 * 
 * window ব্রাউজারে একটি global object, যেটা পুরো ব্রাউজার উইন্ডোকে রিপ্রেজেন্ট করে।
 * সব global variables এবং functions আসলে window অবজেক্টের প্রপার্টি।
 */




// 2.
/**
 * ব্রাউজারে console.log(this) রান করলে this -এর ভ্যালু কী হবে ?
 * 
 * 
 * Ans: 
 * 
 * ব্রাউজারে global scope-এ console.log(this) রান করলে,
 * this এর ভ্যালু হবে window object
 */






// 3.
/**
 * অবজেক্টের মেথড নরমাল ফাঙ্কশন আর arrow ফাঙ্কশন দিয়ে ডিকলের করলে this -এর কোনো কিছু কি ডিফারেন্ট হবে ?
 * 
 * 
 * Ans:
 * 
 * ডিফারেন্ট হবে:
 * 
 * নরমাল ফাংশন:
 * this- যে অবজেক্ট থেকে কল করা হয়, তাকে refer করে।
 * 
 * Arrow ফাংশন:
 * this- নিজের context তৈরি করে না, বরং parent scope থেকে this নেয়।
 */





//-------------------------------------------------------------------------








// Simple this

// Practice: 

// 1.
const laptop = {
    brand: 'dell',
    getBrand() {
        console.log(this.brand)
    }
}
laptop.getBrand()



const mobile = {
    brand: 'Apple'
}

mobile.getBrand = laptop.getBrand
mobile.getBrand()





// 2.
/**
 * this কীভাবে নির্ধারিত হয় ? কী কী context -এ এটা পরিবর্তন হয় ?
 * 
 * 
 * Ans:
 * 
 * this কীভাবে নির্ধারিত হয়, সেটা নির্ভর করে function call context এর উপর। অর্থাৎ, কোন জায়গা থেকে function বা method কল হচ্ছে, তার উপর this এর মান পরিবর্তিত হয়।
 * 
 * 
 * this নির্ধারণের প্রাথমিক নিয়ম:
 * 
 * 1. Global context (outside any function):
 * this = global object (ব্রাউজারে window, Node.js-এ global)।
 * 
 * 2. Object method context:
 * this = object যেটা method call করছে।
 * 
 * 3. Constructor function context:
 * this = newly created object যেটি constructor function থেকে তৈরি হয়েছে।
 * 
 * 4. Arrow functions context:
 * this = lexical context (parent scope-এ যে this ছিল তা নেয়)। Arrow function-এর নিজস্ব this থাকে না।
 * 
 * 5. Explicit binding (call, apply, bind):
 * this = explicitly set using call(), apply(), or bind() methods।
 * 
 * 6. Event handlers (DOM events):
 * this = DOM element যেটি event listener-এ ট্রিগার হয়েছে।
 * 
 * 
 * Arrow function-এ this কখনও পরিবর্তিত হয় না; তা lexical scope থেকে ইনহেরিট করা হয়।
 * 
 * Normal function-এ this call context এর উপর নির্ভর করে।
 */







// 3.
const manager = {
    task: [],

    //এই মেথড এর ভিতরে this বলতে manager অবজেক্ট কে বুঝায়। 
    assingWork(sTask) {
        this.task.push(sTask)
    }
}

manager.assingWork('Design')
manager.assingWork('Development')
manager.assingWork('Security testing')

console.log(manager.task);














//-----------------------------------------------------------------------------




// this, call, bind, apply

// Practice: 

// 1.

const team = {
    name: 'football',
    players: 10,
    play() {
        console.log(`${this.name} players ${this.players}`)
    } 
}
team.play()

const tournament = {
    name: 'something',
    players: 15
}

const tournmntInfo = team.play.bind(tournament)
tournmntInfo()










// 2.
const car = {
    speed: '200kph',
    price: 50000000,
    drive(){
        console.log(`Price ${this.price} and speed ${this.speed}`)
    }
}
car.drive()


const bike = {
    speed: '400kph',
    price: 8000000
}
car.drive.call(bike)



const truck = {
    speed: '150kph',
    price: 80000000
}
car.drive.call(truck)










// 3.
const employee = {
    name: 'Mr.X',
    role: 'President',
    details() {
        console.log(`${this.name} is ${this.role}`)
    }
}
employee.details()


const manager2 = {
    name: 'Abul',
    role: 'Manager'
}
employee.details.apply(manager2)







// 4.
const classroom = {
    name: 'Class Ten',
    students: ['A', 'B', 'C', 'D', 'E', 'F'],
    attendance() {
        console.log(`${this.name} Students: ${this.students.join(', ')}`)
    }
}
classroom.attendance()



const lab = {
    name: 'Lab Class',
    students: ['A', 'B', 'C', 'D', 'E']
}

const labInfo = classroom.attendance.bind(lab)
labInfo()






//---------------------------------------------------------------------------





// Closure

// Practice: 

// 1.
/**
 * ক্লোজার কি জিনিস ?
 * 
 * 
 * Ans: 
 * 
 * যখন কোনো inner function তার outer function-এর scope-এর ভেতরের ভেরিয়েবল অ্যাক্সেস করতে পারে—even after the outer function has returned—তখন এটাকে closure বলে।
 */





// 2.
function fridgeTracker() {
    let counter = 0

    return function () {
        counter++
        return counter
    }
}

const mrA = fridgeTracker()
mrA()
mrA()
mrA()
console.log(mrA());


const mrB = fridgeTracker()
mrB()
mrB()
console.log(mrB());


const mrC = fridgeTracker()
mrC()
console.log(mrC());


const mrD = fridgeTracker()
mrD()
mrD()
mrD()
mrD()
console.log(mrD());


const mrE = fridgeTracker()
mrE()
mrE()
mrE()
mrE()
console.log(mrE());











// 3.
function taskTracker() {
    let counter = 0

    return function () {
        counter++
        return counter
    }
}

const mrX = taskTracker()
const mrY = taskTracker()


















//-------------------------------------------------------------------------








// Hoisting


// Practice: 

// 1.

commentsNum++
const commentsNum = 12

console.log(commentsNum); //ReferenceError: Cannot access 'commentsNum' before initialization




// 2.
views / 2
const views = 10
console.log(views); //ReferenceError: Cannot access 'views' before initialization




// 3.
/**
 * Temporal Dead Zone (TDZ) কাকে বলে এবং এটি কেন গুরুত্বপূর্ণ ?
 * 
 * 
 * Ans:
 * 
 * Temporal Dead Zone (TDZ):
 * TDZ হলো সেই সময়কাল, যখন কোনো let বা const variable ডিক্লেয়ার হবার আগে তাকে অ্যাক্সেস করলে রেফারেন্স এরর (ReferenceError) হয়।
 * 
 * 
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 5;
 *এখানে a এর জন্য memory allocate হয়েছে, কিন্তু initialization হয়নি। এই সময়টাকেই বলা হয় TDZ।
 *
 * TDZ কখন শুরু হয়:
 * Scope শুরু হওয়ার মুহূর্তে (যেমন ব্লক, ফাংশন, বা স্ক্রিপ্ট)
 * শেষ হয় variable initialization হলে
 * 
 * 
 * TDZ গুরুত্বপূর্ণ কারণ:
 * Bug ধরতে সাহায্য করে:
 * TDZ ভুল variable access ঠেকায়, যেমন use-before-declare।
 * 
 * let/const এর behavior বোঝা যায়:
 * এগুলো hoisting হয়, কিন্তু TDZ-এর কারণে access করা যায় না ডিক্লেয়ারেশনের আগে।
 * 
 * Code কে predictable রাখে:
 * অস্পষ্ট variable value (যেমন undefined) পাওয়া বন্ধ হয়।
 */








// 4.
/**
 * Function Expression দিয়ে লেখা ফাঙ্কশন কে hoisting করলে কেন initialization -এর আগে কল করা যায় না ?
 * 
 * 
 * Ans: 
 * 
 * Function Expression দিয়ে লেখা ফাংশন hoisting হয়, কিন্তু শুধু variable declaration পর্যন্ত, না যে actual function টা মেমোরিতে উঠে গেছে।
 তাই initialization (মানে assignment) এর আগে কল করলে TypeError/undefined error হয়।
 */






// 5.
/**
 * var দিয়ে ডিক্লেয়ার করা ভেরিয়েবলের hoisting behavior কেমন ? উদাহরণসহ ব্যাখ্যা কর ?
 * 
 * 
 * Ans: 
 * 
 * var দিয়ে ডিক্লেয়ার করা ভেরিয়েবল hoist হয় পুরোপুরি,
 * তবে এর মান undefined হয় যতক্ষণ না তাকে initialize করা হয়।
 * 
 * উদাহরণ:
 * 
 * console.log(a); // Output: undefined
   var a = 10;
   console.log(a); // Output: 10

 * 
 * 
 *  Important Point:
 * var-এর hoisting শুধু declaration-টা করে, value assign করে না।
 * তাই use-before-declare করলে undefined পাওয়া যায়, ReferenceError না (যেটা let/const এ হয়)।
 */






// 6.
/**
 * let এবং var -এর hoisting behavior কি  একই ?
 * 
 * 
 * Ans:
 * 
 * না, let এবং var এর hoisting behavior এক নয়:
 * 
 * var: hoist হয় with initialization as undefined।
 * let: hoist হয় কিন্তু initialized হয় না; temporal dead zone (TDZ) থাকে।
 */





// 7.
/**
 * ফাংশন declaration ব্যবহার করলে সেটা hoist হয়, তাই ডিক্লেয়ার করার আগে ফাংশন ব্যবহার করা যায়।
 * function declaration → hoisted
 * আর 
 * function greaterThanNum হল ফাঙ্কশন declaration 
 */
console.log(greaterThanNum(87, 12));

function greaterThanNum(a, b) {
    if (a > b) {
        return a 
    } else {
        return b
    }
}











//---------------------------------------------------------------------------





// Execution context 

// Practice: 

// 1.
/**
 * Execution context কী জিনিস ? এইটা কিভাবে কাজ করে ?
 * 
 * 
 * Ans:
 * 
 * Execution context হল JavaScript-এর একটি পরিবেশ যেখানে কোড এক্সিকিউট হয়। এটি কোডের execution-এর সময় তথ্য সংরক্ষণ করে এবং কোড চালানোর প্রক্রিয়া নিয়ন্ত্রণ করে। এটি প্রধানত তিন ধরনের হয়:
 * 
 * 1. Global Execution Context: যখন কোন কোড global scope-এ চলে, তখন এটি global execution context তৈরি করে।
 * 
 * 2. Function Execution Context: যখন কোন function call করা হয়, তখন তা একটি নতুন execution context তৈরি করে।
 * 
 * 3. Eval Execution Context: eval() ফাংশনের মাধ্যমে তৈরি হয়, তবে এটি সাধারণত ব্যবহৃত হয় না।
 * 
 * 
 * কিভাবে কাজ করে:
 * * Creation phase: Execution context শুরু হওয়ার সময়, সব ভেরিয়েবল, ফাংশন declaration-গুলি মেমোরিতে রাখা হয়।
 * 
 * * Execution phase: কোড এক্সিকিউট হতে শুরু করে, এবং ভেরিয়েবল ও ফাংশনের মান নির্ধারিত হয়।
 * 
 * 
 * এই context-গুলোর মধ্যে call stack এ stack অনুযায়ী context push এবং pop হয়।
 * 
 */






// 2.
/**
 * গ্লোবাল কন্টেক্সটের কাজ কী ? এইটা কেন দরকার পরে ?
 * 
 * 
 * Ans:
 * 
 * গ্লোবাল কন্টেক্সট হল JavaScript-এর এক ধরনের execution context যা কোডের বাইরে থেকে যে কোনো কোড চালানোর সময় তৈরি হয়। এটি মূলত global scope প্রতিনিধিত্ব করে এবং সিস্টেমের সর্বোচ্চ স্তরের context হিসেবে কাজ করে।
 * 
 * গ্লোবাল কন্টেক্সটের কাজ:
 * Global Variables & Functions: গ্লোবাল কন্টেক্সট থেকে সব ভেরিয়েবল ও ফাংশন ঘোষণা করা হয়। এগুলো পরবর্তীতে যে কোনো জায়গা থেকে অ্যাক্সেস করা যায়।
 * 
 * 
 * কেন দরকার পরে:
 * গ্লোবাল কন্টেক্সট কোডের execution-এর জন্য বেসিক পরিবেশ তৈরি করে।
 * যখনই JavaScript কোড চালানো হয়, গ্লোবাল কন্টেক্সট প্রথমে তৈরি হয়, যা সমস্ত ভেরিয়েবল, ফাংশন, এবং অন্যান্য গ্লোবাল অবজেক্টগুলি সংরক্ষণ করে।
 * এর মাধ্যমে প্রোগ্রামটি জানে কোন ভেরিয়েবল বা ফাংশন কোথায় অ্যাক্সেস করা যাবে এবং কোথায় কাজ করবে।
 * 
 * 
 * এটি প্রয়োজনীয় কারণ, এর মাধ্যমে JavaScript পরিবেশের বেসিক কাঠামো তৈরি হয় এবং কোডের execution সুসংগঠিত হয়।
 */