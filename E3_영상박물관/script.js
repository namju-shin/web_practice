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
    let height = $(".simg1").height();
        setInterval(function(){
            $(".slideWrap").animate({"marginTop" : "-="+height+"px"}, 600, function(){
            $(this).append($(this).children().first());
            $(this).css("margin-top", 0);
        })
    }, 3000)

    // popup
    $(".pop").click(function(){
        $(".popup").show();
    })
    $(".close").click(function(){
        $(".popup").hide();
    })
    

})