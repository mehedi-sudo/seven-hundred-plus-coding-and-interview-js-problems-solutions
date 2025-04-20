



// JSON, Fetch, Promise


// JSON


// 1.
/**
 * জাভাস্ক্রিপ্ট, অবজেক্ট ও JSON স্ট্রিংয়ের মধ্যে কি কি পার্থক্য ?
 * 
 * 
 * Ans: 
 * 
 * জাভাস্ক্রিপ্ট অবজেক্ট এবং JSON স্ট্রিংয়ের মধ্যে পার্থক্য:

1. **জাভাস্ক্রিপ্ট অবজেক্ট**:
   - এটি একটি ডাটা স্ট্রাকচার যা কীগুলোর মাধ্যমে মান সংরক্ষণ করে।
   - কীগুলি সাধারণত স্ট্রিং, এবং মান বিভিন্ন ধরনের হতে পারে (যেমন, স্ট্রিং, নম্বর, অবজেক্ট, অ্যারে ইত্যাদি)।
  const obj = { name: "Alice", age: 25 }

2. **JSON স্ট্রিং**:
   - এটি একটি ডাটা ফরম্যাট যা কেবলমাত্র স্ট্রিং রূপে সংরক্ষিত থাকে।
   - JSON কেবল স্ট্রিং, নম্বর, বুলিয়ান, অ্যারে, অবজেক্ট এবং `null` সমর্থন করে।
   - JSON স্ট্রিং কেবল টেক্সট ফরম্যাট, যা সঠিকভাবে পাঠ এবং পার্স করতে হবে।

  '{"name": "Alice", "age": 25}'

**মূল পার্থক্য**:
- জাভাস্ক্রিপ্ট অবজেক্ট কার্যকর ডাটা স্ট্রাকচার, যেখানে JSON স্ট্রিং কেবল ডাটা এক্সচেঞ্জের জন্য ব্যবহৃত ফরম্যাট। JSON স্ট্রিংটি প্যারস করে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করা যায়।
 */







// 2.
const user = {
  name: 'Abul',
  email: 'example@gmail.com',
  address: 'Dhaka, Bangladesh',
  orderHistory: ['Keybord', 'Monitor', 'Headphone']
}
const jsonUser = JSON.stringify(user)
console.log(jsonUser);




// 3.
const shoppingCart = {
  userDetails: {
    id: 28,
    name: 'Kalam',
    contact: 'k@gamil.com',
  },
  producths: ['product_A','product_B','product_C','product_D','product_E'],
  totalPrice: 5700
}
const shoppingCartJson = JSON.stringify(shoppingCart)
console.log(shoppingCartJson);





// 4.
const weather = {
  city: 'Dhaka',
  temperature: '28C',
  humidity: '',
  forecast: [25,26,28,29,30,35,31,24]
}
const weatherJson = JSON.stringify(weather)
console.log(weatherJson)





// 5.
const movie = {
  title: 'Movie_Name_A',
  releaseYear: 2025,
  actors: ['actor_Name_A','actor_Name_B','actor_Name_C','actor_Name_D','actor_Name_E',],
  ratings: 9.8
}
const movieToJson = JSON.stringify(movie)
console.log(movieToJson);

const jsonToMovie = JSON.parse(movieToJson)
console.log(jsonToMovie);




// 6.
const projectManagementSystem = [
  {
    projectName: 'Project_Name',
    projectDescription: 'Project_Description',
    teamMembers: ['Member_A','Member_B','Member_C','Member_D',],
    deadlines: '2025-05-12',
    task: {
      title: 'Task_Title',
      assignee: 'Assignee_Task',
      status: 'Status_Active'
    }
  },
  {
    projectName: 'Project_Name',
    projectDescription: 'Project_Description',
    teamMembers: ['Member_A','Member_B','Member_C','Member_D',],
    deadlines: '2025-05-12',
    task: {
      title: 'Task_Title',
      assignee: 'Assignee_Task',
      status: 'Status_Active'
    }
  },
  {
    projectName: 'Project_Name',
    projectDescription: 'Project_Description',
    teamMembers: ['Member_A','Member_B','Member_C','Member_D',],
    deadlines: '2025-05-12',
    task: {
      title: 'Task_Title',
      assignee: 'Assignee_Task',
      status: 'Status_Active'
    }
  },
]

const pmsToJson = JSON.stringify(projectManagementSystem)
console.log(pmsToJson);




// 7.
const courses = [
  {
    title: 'Web-Design',
    instructor: 'Jobbar',
    duration: '30hours',
    lessons: [
      {
        lessonName: 'Lesson_Name_A',
        lessonDuration: '2hours',
        difficultyLevel: 'Beginner' 
      },
      {
        lessonName: 'Lesson_Name_B',
        lessonDuration: '1hours',
        difficultyLevel: 'Intermediate' 
      },
      {
        lessonName: 'Lesson_Name_C',
        lessonDuration: '3hours',
        difficultyLevel: 'Advanced' 
      },
    ]
  },
  {
    title: 'Web-Develop',
    instructor: 'Rohim',
    duration: '40hours',
    lessons: [
      {
        lessonName: 'Lesson_Name_A',
        lessonDuration: '3hours',
        difficultyLevel: 'Beginner' 
      },
      {
        lessonName: 'Lesson_Name_B',
        lessonDuration: '2.5hours',
        difficultyLevel: 'Intermediate' 
      },
      {
        lessonName: 'Lesson_Name_C',
        lessonDuration: '5hours',
        difficultyLevel: 'Advanced' 
      },
    ]
  },
  {
    title: 'Backend',
    instructor: 'Rofik',
    duration: '50hours',
    lessons: [
      {
        lessonName: 'Lesson_Name_A',
        lessonDuration: '1.5hours',
        difficultyLevel: 'Beginner' 
      },
      {
        lessonName: 'Lesson_Name_B',
        lessonDuration: '4hours',
        difficultyLevel: 'Intermediate' 
      },
      {
        lessonName: 'Lesson_Name_C',
        lessonDuration: '7hours',
        difficultyLevel: 'Advanced' 
      },
    ]
  },
]

const coursesJson = JSON.stringify(courses)
console.log(coursesJson);







// 8.
const productReview = [
  {
    productName: 'Product_Name_A',
    reviewerDetails: {
      rName: 'A',
      rEmail: 'a@gmail.com'
    },
    rating: 'fiveStar',
    reviewText: 'Some text about Omuk Product'
  },
  {
    productName: 'Product_Name_B',
    reviewerDetails: {
      rName: 'B',
      rEmail: 'b@gmail.com'
    },
    rating: 'threeStat',
    reviewText: 'Some text about Omuk Product'
  },
  {
    productName: 'Product_Name_C',
    reviewerDetails: {
      rName: 'C',
      rEmail: 'c@gmail.com'
    },
    rating: 'fiveStar',
    reviewText: 'Some text about Omuk Product'
  },
]

const productReviewToJson = JSON.stringify(productReview)
console.log(productReviewToJson);
const jsonToProductReview = JSON.parse(productReviewToJson)
console.log(jsonToProductReview);









//------------------------------------------------------------------------------






// Promise


// Practice: 


// 1.
const haveUser = new Promise((resolve, reject) => {
  const userName = ['User_A','User_B','User_C','User_D','User_E',]
  if (userName) {
    resolve(userName)
  } else {
    reject('User not found!')
  }
})

haveUser.then((user) => console.log(user)).catch((error) => console.log(error))





// 2.
const paymentProcess = new Promise((resolve, reject) => {
  const amount = 1
  if (amount >= 1) {
    resolve('Payment Processing')
  } else {
    reject('Not able to process')
  }
})

paymentProcess.then((mess) => console.log(mess)).catch((err) => console.log(err))






// 3.
function sendEmail(email) {
  
  const validEmail = ['nigerianprince@gmail.com']

  return new Promise((resolve, reject) => {
    if (validEmail.includes(email)) {
      resolve('Email from Nigerian prince')
    } else {
      reject('Lets Dance in the spam folder')
    }
  })
}
sendEmail('nigerianprince@gmail.com').then(mes => console.log(mes)).catch(e => console.log(e))





//------------------------------------------------------------------------





// fetch


// Practice: 

// 1.
/**
 * fetch ফাঙ্কশন থেকে রিটার্ন করা প্রোমিজের মাধ্যমে respons.josn() কল করে ডাটা কনভার্ট কেন করা হয় ?
 * 
 * 
 * Ans:
 * 
 * `fetch` ফাঙ্কশন থেকে রিটার্ন হওয়া প্রোমিজের মাধ্যমে `response.json()` কল করা হয় কারণ:

1. **`fetch()`** ফাঙ্কশন HTTP রিকোয়েস্ট পাঠায় এবং একটি `Response` অবজেক্ট রিটার্ন করে।
2. এই `Response` অবজেক্টটি নিজে ডাটা নয়, বরং রিসপন্সের মেটাডেটা এবং বডি ধারণ করে। বডি থেকে ডাটা পাওয়ার জন্য আলাদাভাবে কনভার্ট করতে হয়।
3. `response.json()` ফাঙ্কশনটি JSON ডাটা হিসেবে রিসপন্সের বডি কনভার্ট করে। এটি একটি প্রোমিজ রিটার্ন করে, যার মাধ্যমে আসল ডাটাটি পাওয়া যায়।

এখানে, প্রথমে `response.json()` কল করে রিসপন্সের বডিকে JSON আকারে কনভার্ট করা হয়, যাতে সেটি পরবর্তীতে ব্যবহার করা যায়।
 */








// 2.
/**
 * fetch কেন ইউজ করা হয় ?
 * 
 * 
 * Ans: 
 * 
 * fetch ব্যবহৃত হয় HTTP রিকোয়েস্ট পাঠানোর জন্য, যা প্রোমিজ রিটার্ন করে এবং সহজ, আধুনিক, অ্যাসিনক্রোনাস উপায়ে ডাটা অ্যাক্সেস করতে সাহায্য করে।
 */






// 3.
/**
 * fetch আর প্রমিজের মধ্যে ডিফারেন্স কি ?
 * 
 * 
 * Ans:
 * 
 * fetch: HTTP রিকোয়েস্ট পাঠাতে ব্যবহৃত, যা একটি প্রোমিজ রিটার্ন করে।
 * প্রমিজ: অ্যাসিনক্রোনাস অপারেশন পরিচালনা করার জন্য একটি সাধারণ JavaScript অবজেক্ট।
 */




// 4.
// Go to the index.html File;
fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())  
        .then(data => console.log(data))    
        .catch(error => console.error('Error:', error));



// 5.
// Go to the index.html File;
fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())  
        .then(data => console.log(data))    
        .catch(error => console.error('Error:', error));






//-----------------------------------------------------------------------



// CRUD

// Practice: 


// 1.
/**
 * প্রোফাইল সিঙ্গেল নাকি মেরিড , এই টিপের ডাটা চেঞ্জ করলে PUT নাকি PATCH হবে ?
 * 
 * 
 * Ans: 
 * 
 * PATCH
 */




// 2.
/**
 * ডেটাবেজে নতুন ইনফরমেশন যোগ করার জন্য কোন HTTP মেথড ব্যবহৃত হয় ?
 * 
 * 
 * Ans: 
 * 
 * POST 
 */





// 3.
/**
 * একটা ওয়েবসাইটে যখন ভিডিও দেখতে জাবি , তখন কি ধরনের অপারেশন হয় ?
 * 
 * 
 * Ans:
 * 
 * Read ---> GET Operation
 */





// 4.
/**
 * CRUD কী জিনিস ?
 * 
 * 
 * Ans: 
 * 
 * CRUD হলো চারটি মৌলিক অপারেশন:
 * 
 * Create: নতুন ডাটা তৈরি করা (যেমন, নতুন রেকর্ড যোগ করা)
 * Read: ডাটা পড়া (যেমন, ডেটাবেজ থেকে ডাটা দেখতে পাওয়া)
 * Update: বিদ্যমান ডাটা আপডেট করা (যেমন, ডাটা পরিবর্তন বা সংশোধন করা)
 * Delete: ডাটা মুছে ফেলা (যেমন, রেকর্ড ডিলিট করা)
 */





// 5.
/**
 * HTTP এর মেথড বা verb কী কী আছে ? কোনটা কি কাজ করে ?
 * 
 * 
 * Ans:
 * 
 * প্রধান HTTP মেথড:

GET: সার্ভার থেকে ডাটা পড়তে ব্যবহৃত হয়।

POST: সার্ভারে নতুন ডাটা তৈরি করতে ব্যবহৃত হয়।

PUT: সার্ভারে বিদ্যমান ডাটা আপডেট করতে ব্যবহৃত হয়।

PATCH: সার্ভারে কিছু নির্দিষ্ট অংশ আপডেট করতে ব্যবহৃত হয়।

DELETE: সার্ভার থেকে ডাটা মুছে ফেলার জন্য ব্যবহৃত হয়।

HEAD: GET মেথডের মতো, কিন্তু ডাটা রিটার্ন না করে শুধু হেডার রিটার্ন করে।

OPTIONS: সার্ভারে কোন HTTP মেথডগুলো সমর্থিত তা জানতে ব্যবহৃত হয়।

TRACE: সার্ভারে প্রেরিত রিকোয়েস্টের ট্রেস (যাত্রাপথ) দেখানোর জন্য ব্যবহৃত হয়।

CONNECT: সার্ভারকে একটি টানেল তৈরি করতে নির্দেশ দেয়, সাধারণত HTTPS প্রোটোকল ব্যবহৃত হয়।
 */







//-------------------------------------------------------------------------



// try-catch


// Practice: 


// 1.
try {
  const jObj = {product: 'Date', price: 450}
  const wStr = 'Data corrupted'
  console.log(JSON.parse(jObj))
} catch (e) {
  console.log('Invalid JSON format')
}




// 2.
function validateInput(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  try {
    if (!regex.test(email)) {
      throw new Error('Input must be an Email');
    } else {
      console.log(email)
    }
  } catch (error) {
    console.log('Custom Error:',error.message)
  }
}

validateInput('test@gmail.com')







// 3.
try {
  const obj = {role: 'CEO', weeklyHours: 1000}

  console.log(JSON.parse(obj))

} catch (error) {
  console.log(error.message);
} finally {
  console.log('Week is over')
}




// 4.
function stringOnlyParser(str) {
  if (str === null || str === '' || str === undefined) {
    console.log('Input must be a String!')
  }
}

stringOnlyParser(null)




// 5.
try {
  console.log('Deleting account')
} catch (error) {
  console.log('Failed to delete account');
} finally {
  console.log('Account deletion attempt finished');
}








//-----------------------------------------------------------------------




// Async and Await

// Practice: 



// 1.
/**
 * async-await কেন ব্যবহার করা হয় ?
 * 
 * 
 * Ans:
 * 
 *async-await ব্যবহার করা হয় asynchronous কোড লেখা সহজ ও ক্লিন করার জন্য। 

- async: ফাংশনকে asynchronous ঘোষণা করে।
- await: Promise শেষ হওয়া পর্যন্ত অপেক্ষা করে, এর ফলে কোড সিঙ্ক্রোনাস মনে হয়, যদিও আসলে asynchronous থাকে।

এতে কোডের readability বাড়ে এবং callback hell থেকে মুক্তি পাওয়া যায়।
 */




// 2.
// Go to the index.html File;
async function featchUser() {
  try {
    const resUser = await fetch('https://jsonplaceholder.typicode.com/users/2')
    const data = await resUser.json()
    console.log(data);
    
  } catch (e) {
    console.log(e.message)
  }
}
featchUser()





// 3.
/**
 * Callback hell বা Pyramid of Doom কী জিনিস ? এটা কখন হয়, আর এর সমাধান কী ?
 * 
 * 
 * Ans: 
 * 
 * Callback hell বা Pyramid of Doom তখন ঘটে যখন অনেক nested callback functions ব্যবহার করা হয়, যার ফলে কোড জটিল এবং পড়তে কষ্টকর হয়ে ওঠে।

  এটি হয় যখন একের পর এক callback function কল করা হয়, যা কোডকে এক ধাপ নিচে নিয়ে গিয়ে পিরামিড আকার বানায়।

  সমাধান:
  1. Promises ব্যবহার করা
  2. async-await ব্যবহার করা
  3. Modularization বা ফাংশনকে ছোট ছোট অংশে ভাগ করা
 */





// 4.

const url = 'https://jsonplaceholder.typicode.com'

// 1. callback hell:
fetch(url)
  .then(response => response.json())
  .then(user => {
    fetch(`${url}/posts?userId=${user.id}`)
      .then(response => response.json())
      .then(posts => console.log(posts))
      .catch(err => console.log('Error in posts', err));
  })
  .catch(err => console.log('Error in user', err));



// 2. Async-Await 

async function fetchUserData() {
  try {
    const userResponse = await fetch(`${url}/users/1`)
    const user = await userResponse.json()
    
    const postsResponse = await fetch(`${url}/posts?userId=${user.id}`)
    const posts = await postsResponse.json()
    console.log(posts)

  } catch (error) {
    console.log('Error:', error.message);
  }
}

fetchUserData();






// 5.
async function loadComments() {
  try {
    
    const commRes = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await commRes.json()
    console.log(data)

  } catch (e) {
    console.log(e.message)
  } finally {
    console.log('Request completed')
  }
}
loadComments()





// 6.
async function getUser(uId) {
  try {
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${uId}`)
    const data = await userRes.json()
    console.log(data);
    
  } catch (e) {
    console.log(e.message)
  }
}

getUser(5)