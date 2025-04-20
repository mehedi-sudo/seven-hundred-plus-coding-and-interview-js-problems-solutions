


// V8

// Practice: 

// 1.
/**
 * জাভাস্ক্রিপ্ট কোড কিভাবে চলে ?
 * 
 * 
 * Ans:
 * 
 * জাভাস্ক্রিপ্ট কোড যেভাবে চলে (Execution Process):
 * 1. Code Loading / Parsing:
 * ব্রাউজার বা JS ইঞ্জিন কোড লোড করে।
 * 
 * 2. Compilation (Creation Phase):
 * Scope তৈরি হয়
 * Variables ও Functions হোস্ট হয়
 * Lexical Environment তৈরি হয়
 * 
 * 3. Execution Phase:
 * কোড লাইন বাই লাইন রান হয়
 * ভ্যালু অ্যাসাইন হয়, ফাংশন কল হয়
 * 
 * 
 * 4. JS Engine (V8, SpiderMonkey) এই Execution চালায়
 * Call Stack
 * Heap
 * Event Loop
 * Web APIs
 * Callback Queue
 * 
 * 
 * সংক্ষেপে: JS ইঞ্জিন → কোড রিড করে → হোস্টিং করে → এক্সিকিউট করে → আউটপুট দেয় 
 */






// 2.
/**
 * V8 ইঞ্জিনের কাজ কী ?
 * 
 * 
 * Ans:
 * 
 * V8 Engine-এর কাজ:
 * 1.JavaScript কোডকে Machine Code-এ রূপান্তর করা
 * -->যাতে CPU সেটা সরাসরি রান করতে পারে (দ্রুত এক্সিকিউশন)
 * 
 * 2. Compilation & Execution Handle করা
 * --> V8 কোডকে প্রথমে Parse করে, তারপর Compile করে, তারপর Execute করে।
 * 
 * 3. Memory Management
 * --> V8 automatically Garbage Collection করে (অপ্রয়োজনীয় মেমোরি ক্লিন করে)
 * 
 * 4. Optimize করা
 * Repeated কোড বা হট-ফাংশনগুলোকে ফাস্ট করার জন্য JIT (Just-In-Time Compiler) ব্যবহার করে।
 * 
 */






// 3.
/**
 * JIT Compiler কীভাবে কাজ করে?
 * 
 * 
 * Ans
 * 
 * 1.JS কোড Parse হয় → AST তৈরি হয়
 * 2.Interpreter (Ignition) → Bytecode বানিয়ে কোড চালায়
 * 3.Profiler → দেখে কোন কোড বারবার চলছে (Hot code)
 * 4.Compiler (TurboFan) → Hot code কে optimized machine code-এ রূপান্তর করে
 * 5.De-optimization (প্রয়োজনে) → কোডে সমস্যা হলে আগের মতো করে ফেলে
 * 
 * উদ্দেশ্য: কোডকে দ্রুত এক্সিকিউট করা
 * Runtime-এ Machine Code বানায়
 */



