$(function(){
    // menu
    $(".main>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".main>li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp();
    });

    $(".main>li").focusin(function(){
        $(".main>li").removeClass("on");
        $(this).addClass("on");
        $(this).find(".sub").stop().slideDown();
    });
    $(".sub>li:last-child").focusout(function(){
        $(".main>li").removeClass("on");
        $(".sub").stop().slideUp();
    });


    // slide
    setInterval(function(){
        $(".slideWrap").animate({"marginTop" : "-=300px"}, 600, function(){
            $(this).append($(this).children().first());
            $(this).css("margin-top", 0);
        })
    }, 3000);

    //popup
    $(".pop").click(function(){
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
    });


})