


// Immutable

// Practice:

// 1.
const city = 'Chattogram'
console.log(city.indexOf('g'));



// 2.
const division = 'Sylhet'
console.log(division.includes('y'));



// 3.
const name = 'Rifat'
console.log(name[name.length - 1]);



// 4.
const language = 'javascript'
console.log(language.indexOf('rip'));



// 5.
const text = 'Immutable'
console.log(text.length);
// it is immutable
text[0] = 'M'
console.log(text);





//----------------------------------------------------------------





// Lower - Upper

// Practice: 

// 1.
const email = 'User@Example.Com'
const lowerCaseEmail = email.toLowerCase()
console.log(lowerCaseEmail);



// 2.
const greeting = 'hELlo WoRLd'
const upperCaseGree = greeting.toUpperCase()
const lowerCaseGree = greeting.toLowerCase()
console.log(upperCaseGree);
console.log(lowerCaseGree);




// 3.
const language2 = 'JavaScript'
console.log(language2.toLowerCase().includes('script'));




// 4.
const text = 'NodeJs'
if (text[0] === 'N') {
    console.log('Yes, First letter is Upper Case');
} else {
    console.log('No, First letter is Lower Case');

}






//--------------------------------------------------------------------




// trim, slice, split, join, concat, substring


// Practice: 


// 1.
const frindsStr = 'Raju, Rana, Hasan, Kabir, Mahi'
const frinArr = frindsStr.split(',')
console.log(frinArr);




// 2.
const fA = [ 'Raju', ' Rana', ' Hasan', ' Kabir', ' Mahi' ]
const strF = fA.join(',')
console.log(strF);



// 3.
const someStr = 'function if else while'
const someStrArr = someStr.split(' ')
console.log(someStrArr);



// 4.
const languages = ['JavaScript', 'Python', 'Java']
const strLanguages = languages.join('; ')
console.log(strLanguages);




// 5.
const haveStr = 'for,while,for-in,for-of,do-while'
const strArr = haveStr.split(',')
console.log(strArr);




// 6.
const st = ' console log debug '
console.log(st.trim());



// 7.
const str1 = 'push'
const str2 = 'pop'
const str3 = 'shift'
const str4 = 'unshift'
const fullStr = str1.concat(' ', str2, ' ' , ' ', str3, ' ' , str4 )
console.log(fullStr);



// 8.
const fStr = 'Hello JavaScript Developers'
const findOutStr = fStr.split(' ')[1]
const findOutStr2 = fStr.slice(6, 16)
console.log(findOutStr2);




// 9.
const ahareString = 'Code more learn more'
const learnString = ahareString.substring(10, 15)
console.log(learnString);






//---------------------------------------------------------------------







// repeat, toStirng, replace, replaceAll, 


// Practice: 


// 1.
const rStrin = 'Hi '
console.log(rStrin.repeat(10));


// 2.
const stringBana = 'I am learning JavaScript. javaScript is amazing!'
const repStri = stringBana.replace('JavaScript', 'JS')
console.log(repStri);



// 3.
const anotherString = 'I love apples and apples are tasty!'
const changeString = anotherString.replaceAll('apples', 'mangoes')
console.log(changeString);



//----------------------------------------------------------------------


// reverse