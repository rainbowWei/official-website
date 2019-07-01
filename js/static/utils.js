// /**
//  * 解析地址参数
//  */

// function getUrlParams(URL) {
//   var reg = /(\w*).html/;
//   var url = location.href;
//   var keywords = reg.exec(url);
//   var I = 0;
//   // console.log($.cookie('i'), '-------------')
//   I = $.cookie('i') ? $.cookie('i') : I;
//   $.each(URL, function (index, item) {
//     if (keywords && keywords[1] === item) {
//       I = index;
//     }
//   })
//   return I;
// }

// /**
//  * 地址栏加参数的函数  专家详情
//  */

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

// var a = Number(localStorage.getItem('remark'));
// if (isNaN(a)) {
//   a = getUrlParams(URL);
// }

// $(".nav li p").removeClass("line");
// $(".nav li").eq(a).children("p").addClass("line");
// $(".nav li").eq(a).addClass("active");

var _index = 0;
$('.header-c .test').eq(_index).addClass('active');
function isOk (URL) {
  var url = window.location.href;
  url = url.split('/')[5];
  for (var i in URL) {
    if(url.indexOf(URL[i]) >=0 ) {
      _index = i;
      return true;
    }
  }
  return false;
}

if (isOk(URL)) {
  $('.header-c .test').eq(_index).addClass('active').siblings().removeClass('active');
}

// // 导航点击事件
// $("[ href]").on('click', function (e) {
//   // var remark = $(this).attr('data-remark');
//   // localStorage.setItem('remark',remark);
//   if($(this).attr('target')){
//     window.open($(this).attr(' href'),"_blank");   
//   } else {
//     window.location.href = $(this).attr(' href');
//   }
// })
