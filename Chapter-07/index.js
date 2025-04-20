


// Loop





// Practice: 

// 1. 
const favSubject = ['Sub1', 'Sub2', 'Sub3', 'Sub4', 'Sub5']
for (const singeSub of favSubject) {
    console.log(singeSub)
}



// 2.
const favFood = ['Food1', 'Food2', 'Food3', 'Food4', 'Food5']
for (const singeFod of favFood) {
    console.log(singeFod)
}



// 3.
const birthYearOfFamilyMem = [2001, 2002, 2003, 2004, 2005]
for (const singleBirYer of birthYearOfFamilyMem) {
    console.log(singleBirYer)
}



// 4.
const favFootballPlayer = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6', 'Player7', 'Player8', 'Player9', 'Player10', 'Player11']
for (const favSinPly of favFootballPlayer) {
    console.log(favSinPly)
}



// 5. 
const examDate = [1, 3, 5, 8, 10, 15, 18, 20]
for (const examSinDate of examDate) {
    console.log(examSinDate)
}




//-------------------------------------------------------------------------






// While


// Practice: 


// 1.
let strNum = 1
while (strNum <= 10) {
    console.log('Ami protidin minimum 3 hors kore programming practice korbo')
    strNum += 1
}

// 2.
let strNum2 = 1
while (strNum2 <= 20) {
    console.log(strNum2)
    strNum2++
}



// 3.
let strNum3 = 50
while (strNum3 <= 100) {
    console.log(strNum3)
    strNum3++
}


// 4.
let strNum4 = 1
while (strNum4 <= 10) {
    console.log(strNum4 * 3)
    strNum4++
}



// 5.
let strNum5 = 111
while (strNum5 <= 110) {
    console.log(strNum5 / 2)
    strNum5++
}






//---------------------------------------------------------------------




// sum with loop


// Practice: 


// 1.
let strNum6 = 50
while (strNum6 <= 100) {
    console.log(strNum6)
    strNum6++
}


// 2.
let strNum7 = 5
let sum1 = 0
while (strNum7 <= 15) {
    console.log(strNum7)
    sum1 = sum1 + strNum7
    strNum7++
}
console.log('Sum ' + sum1)




// 3.
let strNum8 = 1
let sum2 = 0
while (strNum8 <= 50) {
    console.log(strNum8)
    sum2 = sum2 + strNum8
    strNum8++
}
console.log('Sum ' + sum2)



// 4.
let strNum9 = 21
let sum3 = 0
while (strNum9 <= 50) {
    sum3 = sum3 + strNum9
    console.log('Sum ' + sum3)
    strNum9++
}


// 5.
let strNum10 = 20
let sum4 = 0
while (strNum10 <= 40) {
    sum4 = sum4 + strNum10
    strNum10++
}
console.log('Sum ' + sum4)









//-----------------------------------------------------------------


// For loop

// Practice: 


// 1.
for (let i = 150; i <= 170; i++) {
    console.log(i)
}


// 2.
let sum5 = 0
for (let i = 31; i <= 58; i++) {
    sum5 = sum5 + i
}
console.log('Sum ' + sum5)



// 3.
let sum6 = 0
for (let i = 25; i <= 75; i++) {
    sum6 = sum6 + i
}
console.log('Sum ' + sum6)






//-----------------------------------------------------------------------





// even odd number condition


// Practice: 

// 1.
for (let i = 20; i <= 50; i++) {
    if (i % 7 == 0) {
        console.log(i)
    }
}



// 2.
for (let i = 40; i <= 80; i++) {
    if (i % 5 == 0 && i % 7 == 0) {
        console.log(i)
    }
}



// 3.
let sum7 = 0
for (let i = 1; i <= 40; i++) {
    if (i % 13 == 0) {
        sum7 = sum7 + i
    }
}
console.log(sum7)


// 4.
for (let i = 1; i <= 50; i = i + 4) {
    console.log(i)
}



// 5.
for (let i = 0; i <= 100; i++) {
    if (i % 9 == 0 && i % 6 == 0) {
        console.log(i)
    }
}




// 6.
let sum8 = 0
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 4 == 0) {
        sum8 = sum8 + i 
    }
}







//-----------------------------------------------------------------------






// Breck


// Practice: 


// 1.
for (let i = 1; i <= 30; i++) {
    console.log(i)
    if (i >= 15) {
        break;
    }
}




// 2.
for (let i = 1; i <= 40; i++) {
    if (i % 7 == 0) {
        continue;
    }
    console.log(i)
}



// 3.
for (let i = 1; i <= 15; i++) {
    if (i == 9) {
        continue;
    }
    console.log(i)
}


// 4.
for (let i = 1; i <= 20; i++) {
    if (i == 12) {
        continue;
    }
    console.log(i)
}



// 5.
for (let i = 1; i <= 25; i++) {
    if (i % 3 == 0) {
        continue;
    }
    console.log(i)
}



// 6.
for (let i = 91; i <= 120; i++) {
    if (i % 10 == 0) {
        break;
    }
    console.log(i)
}





