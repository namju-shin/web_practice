$(function(){
    // 서브메뉴 드랍
    $(".main>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".main>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    });

    // 탭메뉴
    $(".main>li").focusin(function(){
        $(this).find(".sub").stop().slideDown();
        $(this).addClass("on");
    });
    $(".sub>li:last-child").focusout(function(){
        $(".main>li").removeClass("on");
        $(".sub").stop().slideUp();
    });

    $(".title>a:first-child").click(function(){
        $(".title").children().removeClass("on");
        $(".con1").children().removeClass("on");
        $(this).addClass("on");
        $(".notice").addClass("on");
        $(".gallery").hide();
        $(".notice").show();
    });
    $(".title>a:last-child").click(function(){
        $(".title").children().removeClass("on");
        $(".con1").children().removeClass("on");
        $(this).addClass("on");
        $(".gallery").addClass("on");
        $(".notice").hide();
        $(".gallery").show();
    });

   //slide - facein&out
   let currentIndex = 0;
   setInterval(function(){
        let nextIndex = (currentIndex + 1) %3;
        $(".simg").eq(currentIndex).fadeOut(600);
        $(".simg").eq(nextIndex).fadeIn(600);

        currentIndex = nextIndex;
   }, 3000);
    
    $(".click").click(function(){
        $(".modal").show();
    });
    $("button").click(function(){
        $(".modal").hide();
    });

    

})