    $(function(){
    
    //选项卡
    $(".tab-c li").click(function(){
        $(".tab-c li").eq($(this).index()).addClass("tab_on").siblings().removeClass('tab_on');
        $(".tab-list>div").hide().eq($(this).index()).show();
    });

    //锚点跳转
    $('#a1').click(function () {
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top-30
        }, 500);
        return false;
    });
    $('#a2').click(function () {
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top-70
        }, 500);
        return false;
    });
    $('#a3').click(function () {
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top-70
        }, 500);
        return false;
    });

$("#submit").on("click",function(){
    var Name = $('#name').val();
    var Age = $('#age').val();
    var City = $('#city').val();
    var Phone = $('#phone').val();
    var Mailbox = $('#mailbox').val();
    var WeChat = $('#weChat').val();
    var Culture = $('#culture').val();
    var Speciality = $('#speciality').val();
    var Occupation = $('#occupation').val();
    var Scholl = $('#scholl').val();
    var Project = $('#project').val();
    var Experience = $('#experience').val();

    var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
    // var contac = /^1[345789]\d{9}$/g;
        if((Mailbox == "")){
            alert("邮箱不能为空！！");
            return false;
        }else if((Age == "")){
            alert("年龄不能为空！！");
            return false;
        }else if((Project == "")){
            alert("志愿项目不能为空！！");
            return false;
        }else if(!re.exec(Mailbox)){
            alert("输入邮箱不合法");
              return;
        }else{
            alert("提交成功");
        }
     
        // $.ajax({
        //         url:'',
        //         data:{},
        //         dataType:'html',
        //         type:'post',
        //         success:function(mydata){
        //             alert("提交成功");
        //             $('#name').val("");
        //             $('#age').val("");
        //             $('#city').val("");
        //             $('#phone').val("");
        //             $('#mailbox').val("");
        //             $('#weChat').val("");
        //             $('#culture').val("");
        //             $('#speciality').val("");
        //             $('#occupation').val("");
        //             $('#scholl').val("");
        //             $('#project').val("");
        //             $('#experience').val("");
                    
                    
        //         }
        //     })
    })
})