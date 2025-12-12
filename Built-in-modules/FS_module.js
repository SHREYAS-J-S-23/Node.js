//FS module : File System module
//sync methods

const {readFileSync,writeFileSync}=require('fs');
console.log('start');
const first=readFileSync('./Contents/first.txt','utf8');
const second=readFileSync('./Contents/second.txt','utf8');
console.log(first,second);

writeFileSync('./Contents/result.txt',`Here is the result : ${first},${second}`,{flag:'a'});//flag 'a' is for append
console.log('done with this task');
console.log('starting the next one');