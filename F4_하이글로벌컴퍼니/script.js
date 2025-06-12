$(function(){
    // menu
    $(".main>li").mouseenter(function(){
        $(".subBack").stop().slideDown();
        $(".sub").stop().slideDown();
    })
    $(".main>li").mouseleave(function(){
        $(".subBack").stop().slideUp();
        $(".sub").stop().slideUp();
    })
    $(".main>li").focusin(function(){
        $(".subBack").stop().slideDown();
        $(".sub").stop().slideDown();
        $(".main>li").removeClass("on");
        $(this).addClass("on");
    })
    $(".main>li:last-child .sub>li:last-child").focusout(function(){
        $(".subBack").stop().slideUp();
        $(".sub").stop().slideUp();
        $(".main>li").removeClass("on");
    })


    // slide
    setInterval(function(){
        $(".slideWrap").animate({"marginTop" : "-=350px"}, 600, function(){
            $(this).append($(this).children().first());
            $(this).css("margin-top", 0);
        })
    }, 3000)


    // modal
    $(".pop").click(function(){
        $(".modal_back").show();
    })
    $(".close").click(function(){
        $(".modal_back").hide();
    })
    
})