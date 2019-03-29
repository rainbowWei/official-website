$(function(){
   $(".faculty-list li").hover(function(){
    //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
    var _index = $(this).index();
    $(this).addClass("show-f").siblings().removeClass('show-f');
    $(".faculty-c>div").eq(_index).addClass("show-c").siblings().removeClass('show-c');
    }, function () {
        $(this).addClass("show-f").siblings().removeClass('show-f');
    }); 
})

