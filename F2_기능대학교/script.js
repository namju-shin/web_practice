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
        $(".main>li").removeClass("on");
        $(this).addClass("on");
    })
    $(".sub>li:last-child").focusout(function(){
        $(".sub").stop().slideUp();
        $(".main>li").removeClass("on");
    })

    // slide fade in&out
    var currentIndex = 0;
    setInterval(function(){
        $(".simg").eq(currentIndex).fadeOut();
        currentIndex = (currentIndex + 1) % 3;
        $(".simg").eq(currentIndex).fadeIn();
    }, 3000)

    // popup
    $(".pop").click(function(){
        $(".modalBack").show();
    })
    $(".close").click(function(){
        $(".modalBack").hide();
    })
})