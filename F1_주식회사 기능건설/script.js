$(function(){
    // menu
    $(".main>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $(".main>li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp();
    })
    $(".main>li").focusin(function(){
        $(".main>li").removeClass("on");
        $(this).addClass("on");
        $(this).find(".sub").stop().slideDown();
    })
    $(".sub>li:last-child").focusout(function(){
        $(".main>li").removeClass("on");
        $(".sub").stop().slideUp();
    })

    // slide
    var currentIndex = 0;
    setInterval(function(){
        $(".simg").eq(currentIndex).fadeOut();
        currentIndex = (currentIndex + 1) % 3;
        $(".simg").eq(currentIndex).fadeIn();
    }, 3000)

    // tab
    $(".title>a").eq(0).click(function(){
        $(".title>a").removeClass("selected");
        $(this).addClass("selected");
        $(".box>div").removeClass("on");
        $(".notice").addClass("on");
    })
    $(".title>a").eq(1).click(function(){
        $(".title>a").removeClass("selected");
        $(this).addClass("selected");
        $(".box>div").removeClass("on");
        $(".gallery").addClass("on");
    })

    // pop
    $(".pop").click(function(){
        $(".popup").show();
    })
    $(".close").click(function(){
        $(".popup").hide();
    })

})