/**
 * Created by 旧梦 on 2017/4/17.
 */
var fs=require("fs");

//创建一个可读流
var readerStream=fs.createReadStream('input.txt');

//创建一个可写流
var writerStream=fs.createWriteStream('output.txt');

//管道读写操作
//读取 input.txt 文件内容，并将内容写入到 output.txt 中
readerStream.pipe(writerStream);

console.log("The program is finished.");