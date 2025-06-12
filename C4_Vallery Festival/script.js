$(function(){
    // 메뉴
    $(".main>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $(".main>li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp();
    })


    // 슬라이드
    setInterval(function(){
        $(".slideWrap").animate({"marginLeft" : "-=800px"}, 600, function(){
            $(this).append($(this).children().first());
            $(this).css("margin-left", 0);
        })
    }, 3000)

    // modal
    $(".pop").click(function(){
        $(".modal_back").show();
    })
    $(".close").click(function(){
        $(".modal_back").hide();
    })
})