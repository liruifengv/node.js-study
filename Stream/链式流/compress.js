/**
 * Created by ¾ÉÃÎ on 2017/4/17.
 */
var fs=require("fs");
var zlib=require('zlib');

//Ñ¹Ëõ input.txt ÎÄ¼şÎª input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("The file is compressed!");
