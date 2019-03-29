$(function() {
  var exList = JSON.parse(sessionStorage.getItem('exList'));
  exList = exList.data;
  var id = getParams('id');
  var currentEx = null;
  var expert_c = $("#expert-c");
  var str = "";
  var li = "";
  $.each(exList, function(index, ex) {
    li += '<li>'+
      '<a href="javascript:"><img src="'+ex.img+'" alt=""></a>'+
    '</li>';
    if (ex.id == id) {
      currentEx = ex;
      var desp = "";
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
      '</div>'+
      '<div class="ex-list">'+
        '<ul class="clearfix">'+
          li+
        '</ul>'+
      '</div>'
      }
  })
  expert_c.html(str)
  console.log(currentEx.desp,'hjdhjehdj')
  console.log(getParams('id'), 'llllllllllllllllllll');
})