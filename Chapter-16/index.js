



// Built-in Objects and Methods



// Type Constructor

// Number Constructor, String Constructor, Boolean Constructor, Function Constructor, Object Constructor,


// Practice: 

// 1.
const start = '786'
console.log(Number(start));



// 2.
const willAttend = 0
console.log(Boolean(willAttend));




// 3.
const obj = new Object()
obj.city = 'Dhaka'
obj.country = 'Bangladesh'
console.log(obj);



// 4.
const total = 1970
console.log(String(total))







//-------------------------------------------------------------------




// Math

// Practice: 

// 1.
console.log(Math.min(45,11,89,23,56,-12,-56));



// 2.
console.log(Math.max(21,35,67));



// 3.
console.log(Math.round(7.6));
console.log(Math.round(7.2));



// 4.
console.log(Math.floor(9.8));
console.log(Math.floor(5.3));



// 5.
console.log(Math.ceil(3.1));
console.log(Math.ceil(6.9));



// 6.
console.log(Math.abs(-34));



// 7.
function blan(fltPot) {
    const round = Math.round(fltPot)
    const floor = Math.floor(fltPot)
    const ceil = Math.ceil(fltPot)

    console.log(`Round of ${fltPot} is ${round}, Floor of ${fltPot} is ${floor} and Ceil of ${fltPot} is ${ceil}`)
}
blan(44.55)





//-------------------------------------------------------------------------






// Date

// Practice: 

// 1.
const nowDt = new Date()
console.log(nowDt);


// 2.
const modDate = new Date(2035, 6, 15, 14, 45, 30)
console.log(modDate);



// 3.
const d = new Date()
console.log(d.getFullYear());



// 4.
const setD = new Date()
setD.setFullYear(2040)
console.log(setD);



// 5.
const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const prvDate = new Date("2029-2-16")
console.log(prvDate.getDay());
console.log(day[prvDate.getDay()]);






//---------------------------------------------------------------------------





// Regular Expression



// Practice: 


// 1.
const sen = 'I bought an orange'
const newSen = sen.replace(/orange/, 'grape')
console.log(newSen);




// 2.
const anoSen = 'I like to have apple and banana'
const che = /ana/
console.log(che.test(anoSen));




// 3.
const longSen = 'I am eating apple. apple is good. apple helps me a lot'
const newLongSen = longSen.replace(/apple/g, 'JavaScript')
console.log(newLongSen);








//---------------------------------------------------------------







// Map Set


// Practice: 


// 1.
const ar  = [1,2,2,3,4,4,5]
const newSet = new Set(ar)
console.log(newSet);



// 2.
const builtSet = new Set()
builtSet.add(10)
builtSet.add(20)
builtSet.add(10)
builtSet.add(30)
console.log(builtSet);



// 3.
builtSet.delete(10)
console.log(builtSet);



// 4.
const arrrr = [1,2,3,4,2,1,5,5]
const arrrSet = new Set(arrrr)
const nerArrr = [...arrrSet]
console.log(arrrSet);
console.log(nerArrr);
