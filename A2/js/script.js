$(function(){
    // menu
    $(".main>li").mouseenter(function(){
        $(".subBack").stop().slideDown();
        $(".sub").stop().slideDown();
    });
    $(".main>li").mouseleave(function(){
        $(".subBack").stop().slideUp();
        $(".sub").stop().slideUp();
    });

    // 키보드 메뉴
    $(".main>li").focusin(function(){
        $(".subBack").stop().slideDown();
        $(".sub").stop().slideDown();
        $(this).addClass("on");
    });
    $(".sub>li:last-child").focusout(function(){
        $(".main>li").removeClass("on");
    });
    $(".main>li:last-child .sub>li:last-child").focusout(function(){
        $(".subBack").stop().slideUp();
        $(".sub").stop().slideUp();
    });


    // slide
    setInterval(function(){
        $(".slideWrap").animate({marginLeft : "-=1200px"}, 500, function(){
            $(this).append($(this).children().first());
            $(this).css('margin-left', 0);
    
        });
    }, 3000);

    //popup
    $(".pop").click(function(){
        $(".popup").show();
        return false;
    });
    $(".popup>button").click(function(){
        $(".popup").hide();
        return false;
    });
})