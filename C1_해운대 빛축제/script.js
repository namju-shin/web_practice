$(function(){
    //menu
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


    // slide
    let index = 0;
    setInterval(function(){
        $(".simg").eq(index).fadeOut(600);
        index = (index+1)%3;
        $(".simg").eq(index).fadeIn(600);
    }, 3000)


    // tab
    $(".title>a:nth-child(1)").click(function(){
        $(".title").children().removeClass("on");
        $(".con1").children().removeClass("on");
        $(this).addClass("on");
        $(".notice").addClass("on");
    })
    $(".title>a:nth-child(2)").click(function(){
        $(".title").children().removeClass("on");
        $(".con1").children().removeClass("on");
        $(this).addClass("on");
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