const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage')
        retuen;
    }
    if(req.url === '/about'){
        res.end('Here is our about page')
        return;
    }
    res.end(`
    <h1>Ooops</h1>
    <p>We cant sem to find the page you are looking for.</p>
    <a href = "/"> Back Home</a>
    `)
})

server.listen(5000)