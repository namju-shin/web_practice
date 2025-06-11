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
        $(this).addClass("on")
    })
    $(".sub>li:last-child").focusout(function(){
        $(".sub").stop().slideUp();
        $(".main>li").removeClass("on");
    })

    // slide
    var width = $(".simg1").width();
    setInterval(function(){
        $(".slideWrap").animate({"marginLeft" : "-="+width+"px"}, 600, function(){
            $(this).append($(this).children().first());
            $(this).css("margin-left", 0);
        });
        
    }, 3000)
    
    // popup
    $(".pop").click(function(){
        $(".modalBack").show();
    })
    $(".close").click(function(){
        $(".modalBack").hide();
    })
})