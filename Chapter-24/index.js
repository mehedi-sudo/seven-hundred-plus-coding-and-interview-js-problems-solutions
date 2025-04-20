


// DOM & Event


// Practice: 


// 1.
/**
 * লোকাল স্টোরেজ আর সেশন স্টোরেজের মধ্যে ডিফারেন্স কী কী?
 * 
 * 
 * Ans:
 * লোকাল স্টোরেজ ও সেশন স্টোরেজের মধ্যে মূল পার্থক্যগুলো:
 * 1. ডাটা স্টোরেজ টাইম:
 * Local Storage: ব্রাউজারে পার্মানেন্ট, ম্যানুয়ালি ডিলিট না করা পর্যন্ত
 * Session Storage: ট্যাব বন্ধ করলেই ডাটা মুছে যায়
 * 
 * 2. ডাটা অ্যাক্সেস স্কোপ:
 * Local Storage: সব ট্যাব ও উইন্ডো থেকে অ্যাক্সেস করা যায়
 * Session Storage: শুধুমাত্র সেই ট্যাবেই অ্যাক্সেসযোগ্য
 * 
 * 3. স্টোরেজ সাইজ:
 * Local Storage: 5–10MB পর্যন্ত
 * Session Storage: সাধারণত 5MB
 * 
 * 4. ব্যবহার উদ্দেশ্য:
 * Local Storage: লং-টার্ম ডাটা (যেমন: থিম, টোকেন)
 * Session Storage: শর্ট-টার্ম ডাটা (যেমন: ফর্ম ড্রাফট, টেম্প ফ্ল্যাগ)
 * 
 */







// 2.
// set dark mode
localStorage.setItem('mode', 'dark')

// set light mode
localStorage.setItem('mode', 'light')






// 3.
// add data in session storage
sessionStorage.setItem('userToken', 'abcd1234')

// get data from session storage
const userToken = sessionStorage.getItem('userToken')
console.log(userToken)






// 4.
// set user name in local storage 
localStorage.setItem('userName', 'Alex')


// remove data from local storage
localStorage.removeItem('userName')






// 5.
history.go(-2);





