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
        $(this).addClass("on");
    })
    $(".sub>li:last-child").focusout(function(){
        $(".subBack").stop().slideUp();
        $(".main>li").removeClass("on");
    })

    // slide
    setInterval(function(){
        $(".slideWrap").animate({"margin-left" : "-=100%"}, 600, function(){
        $(this).append($(this).children().first());
        $(this).css("margin-left", 0);
        })
    }, 3000)
    

    // tab
    $(".box>ul>li:first-child").click(function(){
        $(".box>ul>li").removeClass("on");
        $(".box>div").removeClass("on");
        $(this).addClass("on");
        $(".notice").addClass("on");
        $(".notice").show();
        $(".gallery").hide();
    })
    $(".box>ul>li:last-child").click(function(){
        $(".box>ul>li").removeClass("on");
        $(".box>div").removeClass("on");
        $(this).addClass("on");
        $(".gallery").addClass("on");
        $(".gallery").show();
        $(".notice").hide();
    })
    

    //pop
    $(".notice .pop").click(function(){
        $(".popup").show();
    })
    $(".close").click(function(){
        $(".popup").hide();
    })

})