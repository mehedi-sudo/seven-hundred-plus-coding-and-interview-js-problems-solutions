


// 1.
# export এবং import এর পার্থক্য কি ? উভয় কিভাবে কাজ করে ?

Export ব্যবহার করে কোড প্রকাশ করা হয় এবং Import ব্যবহার করে সেই প্রকাশিত কোড অন্য ফাইলে ব্যবহার করা হয়।

Export:
কিভাবে কাজ করে: export কিওয়ার্ড ব্যবহার করে একে অন্য ফাইল থেকে অ্যাক্সেস করা যায়।
//math.js
export const add = (a, b) => a + b


Import:
কিভাবে কাজ করে: import কিওয়ার্ড ব্যবহার করে একে ব্যবহার করা হয়।
//app.js
import { add } from './math.js'
console.log(add(2, 3))





// 2.
# default export কি ? এর মাধ্যমে import  করার সময় কি সুবিধা হয় ?

যখন একটি মডিউল বা ফাইলে শুধুমাত্র একটিই এক্সপোর্ট করতে চাই, তখন default export ব্যবহার করা হয়। এটি বিশেষভাবে কোন একটি একক ভ্যালু বা ফাংশন এক্সপোর্ট করে।
// file.js
export default greet = () => console.log("Hello!")
 

Import করার সময় সুবিধা-->
default export থেকে ডাটা বা ফাংশন Import করতে {} ব্যবহার করতে হয় না। সরাসরি ফাংশন বা ভ্যালুর নাম দিয়ে অথবা নিজের খুশি মতো নাম দিয়ে ইমপোর্ট করা যায় 
// app.js
import greet from './file.js'
<!-- import something from './file.js' -->
greet()
<!-- something() -->


ডিফল্ট এক্সপোর্টের মাধ্যমে কোড কমপ্লেক্সিটি কমে এবং import করতে বেশি সহজ হয়।
মডিউলে একটিই প্রধান export থাকলে default export এর মাধ্যমে সেটা সহজে import করা যায়।








// 3.

# as কিওয়ার্ড JavaScript-এ সাধারণত import/export এ ব্যবহৃত হয়। এটি একটি নির্দিষ্ট নামের সাথে অন্য একটি নামকে যুক্ত করতে সাহায্য করে।

যখন কোনো মডিউল থেকে কিছু ইম্পোর্ট করি, তখন as কিওয়ার্ড ব্যবহার করে একটি নতুন নাম দিতে পারি।

import { originalName as newName } from 'module';

এখানে originalName নামে যা ইম্পোর্ট করা হয়েছে, সেটি newName নামে ব্যবহার করা যাবে।






// 4.

# নাম দিয়ে export আর Default export - এর মধ্যে পার্থক্য কী?

name export:
*একাধিক এক্সপোর্ট করা যায়।
*এক্সপোর্ট করা প্রতিটি ভ্যালু বা ফাংশনের নাম দিতে হয়।
*যখন ইম্পোর্ট করা হয়, তখন এক্সপোর্ট করা নামের সাথে মিলে যেতে হবে।

এক্সপোর্ট
export const myFunction = () => { console.log('Hello')}
export const myValue = 42

ইম্পোর্ট
import { myFunction, myValue } from './module'


default export:
*একমাত্র একটি ডিফল্ট এক্সপোর্ট করা যায়।
*নাম ছাড়া কোনো কিছু এক্সপোর্ট করা হয়, অর্থাৎ আপনি যেটি এক্সপোর্ট করবেন, তা কোনো নাম ছাড়াই ডিফল্ট হিসেবে নির্ধারণ করা হয়।
*ইম্পোর্ট করার সময় নাম যেকোনো কিছু দেওয়া যেতে পারে।

এক্সপোর্ট
const myFunction = () => { console.log('Hello')}
export default myFunction

ইম্পোর্ট
import anyName from './module'


Named export-এ একাধিক এক্সপোর্ট করা যায়, এবং নাম সঠিকভাবে ব্যবহার করতে হয়।
Default export-এ শুধুমাত্র একটি এক্সপোর্ট থাকে এবং ইম্পোর্ট করার সময় যে কোন নাম ব্যবহার করা যায়।




// 5.

# এক ফাইল থেকে একাধিক default export কি সম্ভব ? কীভাবে সম্ভব ?
না, এক ফাইল থেকে একাধিক Default export সম্ভব নয়।