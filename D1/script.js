$(function(){
    // menu
    $(".main>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $(".main>li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp();
    })
    $(".main>li").focusin(function(){
        $(this).find(".sub").stop().slideDown();
        $(this).addClass("on");
    })
    $(".sub>li:last-child").focusout(function(){
        $(".main>li").removeClass("on");
        $(".sub").stop().slideUp();
    })

    // slide
    setInterval(function(){
        $(".slideWrap").animate({"marginTop" : "-=400px"}, 600, function(){
            $(this).append($(this).children().first());
            $(this).css("margin-top", 0);
        })
    }, 3000)

    // tab
    $(".title li:first-child a").click(function(){
        $(".title a").removeClass("on");
        $(this).addClass("on");
        $(".ng>div").removeClass("on");
        $(".notice").addClass("on");
    })
    
    $(".title li:last-child a").click(function(){
        $(".title a").removeClass("on");
        $(this).addClass("on");
        $(".ng>div").removeClass("on");
        $(".gallery").addClass("on");
    })

    //popup
    $(".pop").click(function(){
        $(".popup").show();
    })
    $(".close").click(function(){
        $(".popup").hide();
    })

})