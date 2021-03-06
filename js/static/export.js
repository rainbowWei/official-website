$(function() {
  var exList = JSON.parse(sessionStorage.getItem('exList'));
  exList = exList.data;
  var id = getParams('id');
  var currentEx = null;

  var listLi = "";
  $.each(exList, function(index, ex) {
    listLi += '<li class="list-item">'+
      '<a href="javascript:"><img src="'+ex.img+'" alt=""></a>'+
    '</li>';
    currentLiIndex = ex;
    if (ex.id == id) {
      currentEx = ex;
      strToDoms(despFunc(ex));
    }
  })
  
  // 渲染底部 tab
  var exList_Li = "";
  exList_Li += listLi;
  $("#ex-list").html(exList_Li);

  /*
  * 拼接当前讲师信息
  * currentEx [object]
  */
  function despFunc (currentEx) {
    var desp = "";
    var str = "";
    $.each(currentEx.desp,function( index, d){
      desp += "<p>"+ d +"</p>"
    })
    str += '<div class="ex-img fl">'+
    '<img src="'+ currentEx.img +'" alt="">'+
    '</div>'+
    '<div class="ex-text fl">'+
        '<div class="ex-name">'+ currentEx.name +'</div>'+
        '<div class="ex-txt">'+
          desp+
        '</div>'+
    '</div>';
    return str;
  }

  // 将当前拼接好的专家信息字符串渲染到对应容器
  function strToDoms (str) {
    $("#expert-c").html(str);
  }

  //点击专家列表切换每个专家所对应的内容
  $('#ex-list').on('click', '.list-item', function (e) {
    var currentLiIndex = $(this).index();
    strToDoms(despFunc(exList[currentLiIndex]));
  })
})