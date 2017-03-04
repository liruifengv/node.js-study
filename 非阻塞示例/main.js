/**
 * Created by 旧梦 on 2017/3/4.
 */
//非阻塞实例
var fs=require("fs");
fs.readFile('input.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束！");