/**
 * Created by ���� on 2017/4/17.
 */
var fs=require("fs");
var zlib=require('zlib');

//ѹ�� input.txt �ļ�Ϊ input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("The file is compressed!");
