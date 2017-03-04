/**
 * Created by 旧梦 on 2017/3/4.
 */
var fs=require("fs");
var data=fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");
//阻塞代码