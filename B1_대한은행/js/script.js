$(function(){
    // sub menu dropdown
    $(".main>li").mouseenter(function(){
        $(".subBack").stop().slideDown();
        $(".sub").stop().slideDown();
    });
    $(".main>li").mouseleave(function(){
        $(".subBack").stop().slideUp();
        $(".sub").stop().slideUp();
    });

    $(".main>li").focusin(function(){
        $(".subBack").stop().slideDown();
        $(".sub").stop().slideDown();
        $(this).addClass("on");
    });
    $(".sub>li:last-child").focusout(function(){
        $(".main>li").removeClass("on");
    });
    $(".main>li:last-child .sub>li:last-child").focusout(function(){
        $(".subBack").stop().slideUp();
        $(".sub").stop().slideUp();
    });

    //slide
    setInterval(function(){
        $(".slideWrap").animate({"marginLeft" : "-=1200px"}, 600, function(){
            $wrap = $(this);
            $first = $wrap.children().first();
            $wrap.append($first);
            $wrap.css("margin-left", 0);
        });
    }, 3000);


    // tab
    $(".title li:nth-child(1)").click(function(){
        $(".title li").removeClass("on");
        $(this).addClass("on");
        $(".con1").children().removeClass("on");
        $(".notice").addClass("on");
    });
    $(".title li:nth-child(2)").click(function(){
        $(".title li").removeClass("on");
        $(this).addClass("on");
        $(".con1").children().removeClass("on");
        $(".gallery").addClass("on");
    });


    //modal
    $(".pop").click(function(){
        $(".modal").show();
    });
    $(".modal button").click(function(){
        $(".modal").hide();
    });



})