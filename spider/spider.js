/**
 * Created by liruifengv on 2017/6/22.
 */
var https = require('https');
var cheerio=require('cheerio');
var url='https://movie.douban.com/chart';

function filter(html) {
    var $ = cheerio.load(html);
    var lists = $('.indent').find('table');
    var movies = [];
    lists.each(function (item) {
        var movie = $(this);
        var movieName = movie.find('a').text().replace(/[\r\n]|(\+)/g,"");
        var star = movie.find('.rating_nums').text();
        var movieData = {
            movieName : movieName,
            star : star
        }
        console.log(movieData.movieName + movieData.star)
    })
}

https.get(url,function (res) {
    var html = '';
    res.on('data',function (data) {
        html += data;
    })
    res.on('end',function () {
        filter(html);
    })
})