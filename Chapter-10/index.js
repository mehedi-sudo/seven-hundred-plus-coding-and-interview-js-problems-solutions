


// Logic Buildup Technique


// Practice:

// 1.
function mileToYard(mile) {
    return mile * 1760
}
const thirteenMileToYard = mileToYard(13)
console.log(thirteenMileToYard);



// 2.
function kilowattToKilocalorie(kw) {
    const kilocalorie = kw * 860
    return kilocalorie
}
const convertKwToKL = kilowattToKilocalorie(1)
console.log(convertKwToKL);




// 3.
function hoursToSec(h) {
    const sec = h * 60 * 60
    return sec
}
const oneHoursToSec = hoursToSec(1)
console.log(oneHoursToSec);



// 4.
function centimeterToMeters(centi) {
    const centimeter = centi / 100
    return centimeter
}
const oneCentiToM = centimeterToMeters(1)
const twoCentiToM = centimeterToMeters(2)
const threeCentiToM = centimeterToMeters(3)
const foreCentiToM = centimeterToMeters(400)
console.log(foreCentiToM);





// 5.
function inchToCentimeter(inc) {
    return inc * 2.54
}
const oneInchToCenti = inchToCentimeter(1)
console.log(oneInchToCenti);





// 6.
function poundToKG(p) {
    return p * 0.453
}
const onePoundToKG = poundToKG(1)
console.log(onePoundToKG);




// 7.
function yardToMeter(y) {
    return y * 0.91
}
const twoYardToMeter = yardToMeter(2)
console.log(twoYardToMeter);





//---------------------------------------------------------------------









// Practice: 

// 1.
function taxCal(amount) {
    if (amount <= 50000) {
        return 10
    } else if (amount >= 50001 && amount <= 100000) {
        return 20
    } else if (amount >= 100001 && amount <= 200000) {
        return 30
    } else if (amount > 200000) {
        return 40
    }
}
const incAmount = 10000
const taxOfIncAmount = taxCal(incAmount)
console.log(taxOfIncAmount);





// 2.
function deliveryCostCal(productW) {
    if (productW < 10) {
        return 100
    } else if (productW < 20) {
        return 300
    } else if (productW < 50) {
        return 1000
    } else {
        return productW * 100
    }
}
const proWeight = 50
const deliveryCostCalcu = deliveryCostCal(proWeight)
console.log(deliveryCostCalcu);





// 3.
function marks(mark) {
    if (mark >= 80) {
        return 'A'
    } else if (mark >= 70 && mark <= 79) {
        return 'B'
    } else if (mark >= 60 && mark <= 69) {
        return 'C'
    } else if (mark >= 50 && mark <= 59) {
        return 'D'
    } else if (mark < 50) {
        return 'F'
    }
}
const mark = 79
const markGrade = marks(mark)
console.log(markGrade);










//-----------------------------------------------------------------







// Practice:


// 1.
function evenAverage(arr) {
    const evenArr = []
    for (const element of arr) {
        if (element % 2 === 0) {
            evenArr.push(element)
        }
    }
    let sum = 0
    for (const ele of evenArr) {
        sum += ele
    }
    const ave = sum / evenArr.length
    return ave
}

const arr1 = [34, 78, 12, 56, 91, 23, 8, 65, 45, 87];
const arr2 = [512, 19, 37, 84, 3, 200, 65, 42, 8, 159];
const evenAve = evenAverage(arr)
console.log(evenAve);




// 2.
function newOddArray(arr) {
    const oddArr = []
    for (const element of arr) {
        if (element % 2 === 1) {
            oddArr.push(element * 2)
        }
    }
    
    return oddArr
}
const arr3 = [34, 78, 12, 56, 91, 23, 8, 65, 45, 87];
const newOddArr = newOddArray(arr3)
console.log(newOddArr);




// 3.
function findOddEvenNum(arr) {
    for (const element of arr) {
        if (element % 2 === 0) {
            return 'Odd number found!'
        } else {
            return 'No odd number found'
        }
    }
}
const arr4 = [512, 19, 37, 84, 3, 200, 65, 42, 8, 159];
const findOdd = findOddEvenNum(arr4)
console.log(findOdd);





// 4.
function oddAverage(arr) {
    const oddArr = []
    for (const element of arr) {
        if (element % 2 === 1) {
            oddArr.push(element)
        }
    }
    console.log(oddArr);
    
    let sum = 0
    for (const ele of oddArr) {
        sum += ele
    }
    const ave = (sum / oddArr.length).toFixed(2)
    // return parseFloat(ave)
    return ave
}

const arr5 = [91, 56, 23, 77, 8, 334, 65, 12, 89, 15, 11, 13]
const oddAve = oddAverage(arr5)
console.log(oddAve);





// 5.
function madeEvenArr(arr) {
    const newArr = []
    for (const ele of arr) {
        if (ele % 2 === 1) {
            newArr.push(ele - 1)
        }
    }
    return newArr
}
const arr6 = [1,2,3,4,5,6,7,8,9]
const madeNewArr = madeEvenArr(arr6)
console.log(madeNewArr);





//------------------------------------------------------------------------




// Check Duplicate


// Practice: 

// 1.
function removeDuplicate(arr) {
    const newArr = []
    for (const ele of arr) {
        if (newArr.includes(ele) === false) {
            newArr.push(ele)
        }
    }
    return newArr 
}
const dupArr = [1,5,61,5,87,7,5,81,61]
const newArray = removeDuplicate(dupArr)
console.log(newArray);
