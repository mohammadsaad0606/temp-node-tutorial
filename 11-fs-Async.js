// const fs = require('fs')
// fs.readFileSync();

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8', (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
        const second = result;

        writeFile('./content/resultAsync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'}
        ,(err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})




