
const userDatabase = (function(){
    const users = []
    const transactionHistory = []
    let processingFee = 0

    return {

        // task 1.
        registerUser: function(name, pin) {

            if (name.trim().length < 1) {
                return new Error('You have to fill up name field')
            }

            if (typeof pin !== 'number' || pin.toString().length < 4) {
                return new Error('You have to set at least four digit number') 
            }
            const newUser = {
                id: users.length + 1,
                name,
                pin,
                balance: 0
            }
            users.push(newUser)
            return true
        },

        // task 2.
        loginUser: function (name, pin) {
            const usr = users.find(user => user.name === name && user.pin === pin)
            if (usr) {
                return true
            } else {
                return false
            }
        },

        // task 3.
        addMoney: function(name, pin, amount) {
            const isLogin = this.loginUser(name, pin)
            if (typeof amount !== 'number' || amount <= 0) {
                return 'Invalid amount';
            } 
            if (isLogin) {
                const usr = users.find(user => user.name === name && user.pin === pin)
                usr.balance += amount

                const transctionObj = {
                    transctionType: 'addMoney',
                    receiverId: usr.id,
                    receiverName: usr.name,
                    receiveAmount: amount,
                    receivingTime: new Date()
                }
                transactionHistory.push(transctionObj)

                return `${usr.name} একাউন্টে ${amount} টাকা অ্যাড করা হয়েছে। বর্তমান ব্যালেন্স ${usr.balance}`
            } else {
                return 'সরি, টাকা একাউন্ট এ যোগ করতে পারি নাই। তোমার টাকা রিফান্ড করা হয়েছে। '
            }
        },

        // task 4.
        checkBalance: function(name, pin){
            const isLogin = this.loginUser(name, pin)

            if (isLogin) {
                const usr = users.find(user => user.name === name && user.pin === pin)
                return usr.balance
            } else {
                return 'তোমার এক্সেস নাই , এই একাউন্ট এর ব্যালেন্স জানার'
            }


        },

        // task 5.
        sendMoney: function(senderName, senderPin, receiverName, receiverAmount){
            const checkSender = this.loginUser(senderName, senderPin)
            if (!checkSender) {
                return 'তোমার টাকা পাঠানোর এক্সেস নাই '
            }

            const usr = users.find(user => user.name === senderName && user.pin === senderPin)

            if (usr.balance < receiverAmount + 15) {
                return 'তোমার একাউন্ট এ যথেষ্ট টাকা নাই '    
            }

            const receiverUser = users.find(user => user.name === receiverName)

            if (!receiverUser) {
                return 'টাকা রিসিভার কে পাওয়া যায় নাই '
            }

            const transctionObj = {
                transctionType: 'sendMoney',
                senderId: usr.id,
                senderName: usr.name,
                receiverId: receiverUser.id,
                receiverName: receiverUser.name,
                receiveAmount: receiverAmount,
                receivingTime: new Date()
            }
            transactionHistory.push(transctionObj)

            processingFee += 15
            usr.balance -= receiverAmount + 15
            receiverUser.balance += receiverAmount

            return 'টাকা ভালোভাবে সেন্ড করে দিয়েছি '
        },
    }
})()

// console.log(userDatabase.registerUser('ABCD', 1234));
// console.log(userDatabase.registerUser('', 1234));      
// console.log(userDatabase.registerUser('ABC', 123));   




console.log(userDatabase.registerUser('ABC', 1234));
console.log(userDatabase.registerUser('ABCD', 12345));
// console.log(userDatabase.loginUser('ABCD', 1234)); 
console.log(userDatabase.addMoney('ABC', 1234, 2000)); 
console.log(userDatabase.addMoney('ABC', 1234, 2015)); 

console.log(userDatabase.checkBalance('ABC', 1234)); 
console.log(userDatabase.checkBalance('ABCD', 12345)); 

console.log(userDatabase.sendMoney('ABC', 1234, 'ABCD', 4000)); 
console.log(userDatabase.checkBalance('ABCD', 12345)); 
console.log(userDatabase.checkBalance('ABC', 1234)); 

