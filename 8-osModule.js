const os = require('os')


//info about curent user

const user = os.userInfo()
// console.log(user);

//method returns uptime of system in seconds

// const time = os.uptime()
// console.log(time)

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);