/**
 * 解析地址参数
 */

function getUrlParams(URL) {
  var reg = /(\w*).html/;
  var url = location.href;
  var keywords = reg.exec(url);
  var I = 0;
  // console.log($.cookie('i'), '-------------')
  I = $.cookie('i') ? $.cookie('i') : I;
  $.each(URL, function (index, item) {
    if (keywords && keywords[1] === item) {
      I = index;
    }
  })
  return I;
}

function getParams(x) {
  var search = location.search.substr(1).split("&");
  var obj = {}
  for (var i = 0; i < search.length; i++) {
    var temp = search[i].split('=');
    obj[temp[0]] = temp[1]
  }
  if (typeof x === "string") {
    return obj[x]
  }
  return obj
}

var URL = ['index', 'news', 'course', 'underCourse','internet', 'aboutus', 'love'];

var a = Number(getParams("a"))
if (isNaN(a)) {
  a = getUrlParams(URL);
}

$(".nav li p").removeClass("line");
$(".nav li").eq(a).children("p").addClass("line");
$(".nav li").eq(a).addClass("active");
