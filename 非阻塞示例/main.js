/**
 * Created by ���� on 2017/3/4.
 */
//������ʵ��
var fs=require("fs");
fs.readFile('input.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log("����ִ�н�����");