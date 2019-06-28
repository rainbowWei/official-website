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

/**
 * 地址栏加参数的函数  —— 目前没有用到了
 */

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

var URL = ['index','news', 'course', 'underCourse','internet', 'aboutus', 'love'];

var a = Number(localStorage.getItem('remark'));
if (isNaN(a)) {
  a = getUrlParams(URL);
}

$(".nav li p").removeClass("line");
$(".nav li").eq(a).children("p").addClass("line");
$(".nav li").eq(a).addClass("active");

// 导航点击事件
$("[data-href]").on('click', function (e) {
  var remark = $(this).attr('data-remark');
  localStorage.setItem('remark',remark);
  window.location.href = $(this).attr('data-href');
})

//链接在新窗口打开
$("a").on('click', function (e) {
  if(($(this).attr('target'))){
    window.open("data-href","_blank"); 
  }
})