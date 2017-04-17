/**
 * Created by 旧梦 on 2017/4/17.
 */
var fs=require("fs");
var zlib=require('zlib');

//解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log("The file is decompressed!")