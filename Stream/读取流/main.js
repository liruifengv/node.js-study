/**
 * Created by 旧梦 on 2017/4/17.
 */
var fs=require("fs");
var data='';

//创建可读流
var readerStream=fs.createReadStream('input.txt');

//设置编码为 utf8
readerStream.setEncoding('UTF8');

//处理事件流 --> data , end , and error
readerStream.on('data',function(chunk){
    data+=chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error',function(err){
    console.log(err.stack);
});

console.log("The program is finished!")
