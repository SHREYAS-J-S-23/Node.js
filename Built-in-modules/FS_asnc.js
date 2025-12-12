//asynchronous way of reading and writing files
const {readFile,writeFile}=require('fs');

readFile('./Contents/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    
    const first=result;
    readFile('./Contents/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        const second=result;
     writeFile('./Contents/result-async.txt',`Here is the result:${first},${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result)

        });
    });
});

