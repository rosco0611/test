const fs=require('fs');

fs.writeFile('output1.txt','Welcome Web Programming',(error)=>{
    console.log('파일 쓰기를 완료했습니다.');
});