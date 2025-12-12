const http=require('http');

const server =http.createServer((req,res)=>{
// //    console.log(req);
if(req.url==='/'){
    res.end('Welcome to our home page');
}
if(req.url==='/about')
{
    res.end('Here is the about page')
}
res.end(`<h1>Error: Page not found</h1>
    <p>Sorry the page you are looking for does not exist</p>
    <a href="/">back to home</a>`);
// res.write('Welcome to our home page');
// res.end();    
})

server.listen(5000);
