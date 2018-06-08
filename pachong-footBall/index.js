const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

let url = 'https://goss.vcg.com/html/creativeSub/world_cup_Sub.html'

request({
  url:url,
  method: 'GET',
  headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36'}
}, function (err, response, body) {
  if(err){
    console.log(err);
  } else {
    let $ = cheerio.load(body)
    const path = 'footBall'
    createPath(path)
    $(".img1").each(function() {
      let filename = $(this).siblings('span').find('div p').text()
      let src = 'http:' + $(this).attr("src")
      // console.log(name,src)
      if (filename === undefined) {
        filename = '未命名'
      }
      downloadImg(path, src, filename);
    })
  }
})
function createPath(path) {
  if (!fs.existsSync(path)) {//查看是否存在这个文件夹
    fs.mkdirSync(path);//不存在就建文件夹
    console.log(`${path}文件夹创建成功`);
  } else {
    console.log(`${path}文件夹已经存在`);
  }
}
function downloadImg(path, url, filename) {
  let name = ''
  if (!fs.existsSync(`${path}/${filename}.png`)) {
    name = filename
  } else {
    const timestamp = Math.floor(new Date().getTime()) // 生成时间戳
    console.log(`${filename}.png已存在`)
    name = `${filename}${timestamp}`
  }
  var stream = fs.createWriteStream(`./${path}/${name}.png`);
  request({url:url}).on('error',function(){
      console.log('done no');
  }).pipe(stream).on('close', function() {
    console.log(`${name}.png下载完成`);
  })
}
