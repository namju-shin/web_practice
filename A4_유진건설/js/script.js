$(function(){
    // menu drop
    $(".main>li").mouseenter(function(){
        $(".subBack").stop().slideDown();
        $(".sub").stop().slideDown();
    });
    $(".main>li").mouseleave(function(){
        $(".subBack").stop().slideUp();
        $(".sub").stop().slideUp();
    });

    // 탭메뉴
    $(".main>li").focusin(function(){
        $(".subBack").stop().slideDown();
        $(".sub").stop().slideDown();
        $(this).addClass("on");

    });
    $(".main>li").focusout(function(){
        $(".subBack").stop().slideUp();
        $(".sub").stop().slideUp();
        $(this).removeClass("on");
    });


    // 슬라이드 fadein & fadeout
    let index = 0;
    setInterval(function(){
        $(".simg").eq(index).fadeOut(600);
        index = (index+1)%3;
        $(".simg").eq(index).fadeIn(600);
    }, 3000);

    //modal
    $(".pop").click(function(){
        $(".modal").show();
    });
    $("button").click(function(){
        $(".modal").hide();
    });
})