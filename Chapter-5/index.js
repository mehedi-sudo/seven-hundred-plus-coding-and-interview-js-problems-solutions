

// condition








// If Else
// Practice: 


// 1.
const timeToBackHome = 2
if(timeToBackHome < 6) {
  console.log('Ei ne tor Nastah')
} else {
  console.log('Ei ne jarur bari')
}



// 2.
const isLogin = true
if(isLogin === true) {
  console.log('Welcome!')
} else {
  console.log('Get Lost!')
}





// 3.
const isRuning = '5km'
if(isRuning == '5km') {
  console.log('Ei ne Chocolate')
} else {
  console.log('You will have a fat belly.')
}




// 4.
const examMark = 85
if(examMark > 80) {
  console.log('Ei ne tor Bike')
} else {
  console.log('You are not eable to get Bike.')
}




// 5.
const movieShowTime = 7
if(movieShowTime < 9) {
  console.log('Watch the movie.')
} else {
  console.log('Sleep with oil in your nose.')
}





// 6.
const weatherTemperature = 30
if(weatherTemperature >= 30) {
  console.log('Turn on AC.')
} else {
  console.log('Sleeping with a blanket wrapped around you.')
}








//---------------------------------------------------------------------------





// Practice: 
// And(&&), OR (||)

// 1. 
const age = 30
const height = 72
if(age > 18 && height > 60) {
  console.log('Gari thalo sona.')
} else {
  console.log('Garite bose thak.')
}




// 2. 
const mathScore = 30
const englishScore = 90
if(mathScore >80 || englishScore > 85) {
  console.log('you can get admitted.')
} else {
  console.log('Toke biye diye dibo.')
}





// 3.
const gpa = 5
const monthlyIncome = 8000
if(gpa == 5 && monthlyIncome < 10000) {
  console.log('You will get a scholarship.')
} else {
  console.log('You have to pay to study.')
}







// 4.
const jobHolderAge = 28
const workExperience = 3
if(jobHolderAge < 30 && workExperience > 2) {
  console.log('You can take the job test.')
} else {
  console.log('You can not take the job test.')
}






// 5.
const numberOfEgg = 11
const isChicken = false
if(numberOfEgg < 12 || isChicken == false) {
  console.log('Egg Korma.')
} else {
  console.log('Bread and banana.')
}






// 6.
const bodyTemperature = 110
const isCough = true
if(bodyTemperature > 100 || isCough == true) {
  console.log('Go to the Doctor.')
} else {
  console.log('Khata muri diye suye poro.')
}







// 7.
const attendance = 85
const isHomeworkDone = true
if(attendance > 80 && isHomeworkDone == true) {
  console.log('You can take the test.')
} else {
  console.log('Auto fail.')
}





// 8.
const isElectric = false;
const isPhoneCharged = false;
if (isElectric == false && isPhoneCharged == false) {
  console.log('Sit down to read.');
} else {
  console.log('Play video games.');
}






// 9.
const shirtPrice = 1100;
const isCoupon = true;
if (shirtPrice > 1000 && isCoupon == true) {
  console.log('You will get 20% discount.');
}








//------------------------------------------------------------------------








// else-if

// Practice: 

// 1. 
const productPrice = 4500
if( productPrice > 6000) {
  const discoutn = productPrice / 100 * 15
  const pay = productPrice - discoutn
  console.log(pay)
} else if(productPrice > 3000) {
  const discount = productPrice / 100 * 5
  const pay = productPrice - discount
  console.log(pay)
} 





// 2.
const foodPrice = 1500
const customerAge = 30;
if (customerAge < 12) {
  console.log('You will get free food');
} else if (customerAge > 60) {
  const discount = (foodPrice / 100) * 50;
  const pay = foodPrice - discount;
  console.log(pay);
} else {
  console.log(foodPrice);
}





// 3.
const accountBalance = 4000;
if (accountBalance < 1000) {
  console.log('Make a deposit');
} else if (accountBalance <= 5000) {
  console.log('Enjoy Bindas Life');
} else {
  console.log('You are rich.');
}





// 4.
const mark = 85
if (mark < 50) {
  console.log('Fail')
} else if (mark <= 80) {
  console.log('Pass')
} else {
  console.log('A+')
}



// 5. 
const bookPageNum = 450
if (bookPageNum < 100) {
  console.log('Small book')
} else if(bookPageNum <= 500) {
  console.log('Mid-size book')
} else {
  console.log('heart-attack size book')
}





// 6. 
const temperature = 25
if (temperature < 0) {
  console.log('Ice')
} else if(temperature <= 20) {
  console.log('Cool Cool')
} else {
  console.log('Hot Hot')
}





// 7.
const playerLevel = 50
if (playerLevel < 10) {
  console.log('novice')
} else if (playerLevel <= 50) {
  console.log('Expert')
} else {
  console.log('Pro Gamer')
}








//------------------------------------------------------------------------






// Nested If-else




// Practice: 

// 1.
const isInvited = true
const poketMoney = 1500

if (isInvited) {
  if (poketMoney > 1000) {
    console.log('Go to Friend Birtday Party with Gift')
  } else {
    console.log('Ami ichi tai to besi abar gift')
  }
} else {
  console.log('Remove from Friend list')
}



// 2.
const isGuestInHome = true

if (isGuestInHome) {
  const haveTea = true
  if (haveTea) {
    const eatBisuits = false
    if (eatBisuits == false) {
      console.log('Just Tea is ready')
    }
  } else {
    console.log('bose bose stat jolsha dekhun')
  }
}





// 3. 
const isUserAccountActive = true
const isSubscriptionPremiune = true
if (isUserAccountActive) {
  if (isSubscriptionPremiune) {
    console.log('Watch premium version. ')
  } else {
    console.log('Watch free version.')
  }
}



// 4.
const isFoodInFreezer = true
const isFoodDeliveryAppWorking = true
if (isFoodInFreezer) {
  console.log('Heat the food.')
} else {
  if (isFoodDeliveryAppWorking) {
    console.log('Place a new food order')
  } else {
    console.log('Ajke ami roja')
  }
}





// 5.
const partyGuestNumber = 120
const isEveryoneComeWithGift = false

if (partyGuestNumber > 100) {
  if (isEveryoneComeWithGift) {
    console.log('Lets party all night.')
  } else {
    console.log('I will party with myself')
  }
}







//----------------------------------------------------------------------







// Logical Not (!)


// Practice; 


// 1.
const totalPurchases = 3500
const cashback = totalPurchases > 3000 ? 500 : 0
console.log(cashback) 




// 2.
const myAge = 16
const whoImI = myAge > 15 ? 'Teenager' : 'Child'
console.log(whoImI)




// 3.
const isLoggedIn = true
const message = isLoggedIn ? 'Welcome back' : 'Please Login'
console.log(message)




// 4.
const isFuelTankFull = true
if (isFuelTankFull) {
  console.log('Ready for a long drive')
} else {
  console.log('Fill the tank')
}






// 5.
const isPassInExam = true
const somethingFor = isPassInExam ? 'Party time' : 'Next semester e serious study korbo'
console.log(somethingFor)





// 6.
const sunny = false
if (!sunny) {
  console.log('Stay home')
}




// 7.
const expensive = false
if (!expensive) {
  console.log('I will buy this item')
}