$(function(){
    // 메뉴 슬라이드 다운 & 업
    $(".main_menu").hover(
        function() {
            $(this).find(".sub_menu").stop().slideDown();
        },
        function() {
            $(this).find(".sub_menu").stop().slideUp();
        }
    );

    // 메뉴 키보드 이벤트
    $(".main_menu>li").focusin(function(){
        $(".sub_menu").slideDown();
        $(this).addClass('on');
    });
    $(".sub_menu>li:last-child").focusout(function(){
        $('.main_menu>li').removeClass('on');
    });
    $(".nav li:last-child li:last-child").focusout(function(){
        $(".sub_menu").slideUp();
    });


    
    //slide
    setInterval(function(){
        $(".slideWrap").animate({marginTop : "-=300px"}, 500, function(){
            $(this).append($(this).children().first());
            $(this).css('margin-top', 0);
        })
    }, 2500);

        
    //tab menu
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("active");
        $(this).addClass("active");
        
        var i = $(this).index();

        $(".tabcon").hide();
        $(".tabcon").eq(i).show();

        return false;
    });


    //popup
   $(".pop").click(function(){
        $(".popup").show();
        return false;
   });
   $("button").click(function(){
        $(".popup").hide();
        return false;
   });
});