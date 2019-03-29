//家长感言 
   
if($(window).width()>1024){

  var i1;
  function move1() {
      $("#bigul2").animate({ "margin-left": "-302px" }, function () {
          $("#bigul2").css("margin-left", "0px");
          $("#bigul2").append($("#bigul2>li").eq(0));
      })
  }
  i1 = setInterval(move1, 4000);
  /*鼠标悬浮事件*/
  $(".m1-list").hover(function () {
      clearInterval(i1);
  }, function () {
      i1 = setInterval(move1, 4000);
  });
  /*按钮 下一个*/
  $("#r-btn").on("click", move1);
  /*按钮 上一个*/
  $("#l-btn").on("click", function () {
      $("#bigul2").prepend($("#bigul>li:last"));
      $("#bigul2").css("margin-left", "-302px");
      $("#bigul2").animate({ "margin-left": "0px" }, function () {
      })
  })
}
  else{
      //移动端
      var i1;
      function move1() {
          $("#bigul2").animate({ "margin-left": "-2.14rem" }, function () {
              $("#bigul2").css("margin-left", "0px");
              $("#bigul2").append($("#bigul2>li").eq(0));
          })
      }
      i1 = setInterval(move1, 4000);
      /*鼠标悬浮事件*/
      $(".m1-list").hover(function () {
          clearInterval(i1);
      }, function () {
          i1 = setInterval(move1, 4000);
      });
      /*按钮 下一个*/
      $("#r-btn").on("click", move1);
      /*按钮 上一个*/
      $("#l-btn").on("click", function () {
          $("#bigul2").prepend($("#bigul>li:last"));
          $("#bigul2").css("margin-left", "-233px");
          $("#bigul2").animate({ "margin-left": "0px" }, function () {
          })
      })
}