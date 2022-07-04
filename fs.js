const fs=require('fs');

fs.readFile('output1.txt',(error,file)=>{
    console.log(file.toString());
});