let fs=require('fs');
let file=fs.readFileSync("input.txt");
let str=file.toString()
fs.writeFileSync("prt.txt",str)
console.log('파일 쓰기를 완료했습니다.');