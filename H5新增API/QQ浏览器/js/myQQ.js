$(function(){
    // 页面一加载就添加
    setTimeout(function(){
        $(".section1").addClass('coming');
    },200)
    $("#fullpage").fullpage({
        navigation: true,
        loopBottom:true,
        onLeave:function(index,nextIndex,direction){
            // 当离开第一屏就移除coming
            $(".section1").removeClass('coming');
            if(nextIndex == 1) {
                setTimeout(function(){
        $(".section1").addClass('coming');
    },200)
            }
        if(nextIndex != 1) {
            // 旋转圆球背景
            $("#bg").addClass('rotate');
        } else {
            $("#bg").removeClass('rotate');
        }

        // 第2屏制作
        if(nextIndex == 2) {
            $(".p2").css("transform","translateX(-50%) translateY(-50%) translateZ(0px)");
        } else {
            $(".p2").css("transform","translateX(-50%) translateY(-50%) translateZ(2000px)");
        }

        // 第3屏幕制作
        if(nextIndex == 3) {
            $(".p3").css("transform","translateZ(30px) rotateX(30deg)");
            $(".title").css("transform","translateZ(0px) rotateY(0deg)");

        }

        //第4屏制作
        if(nextIndex == 4) {
            $(".p3").css("transform","translateZ(1200px) rotateZ(120deg) translateX(3000px)");
            $(".title").css("transform","translateZ(1200px) rotateY(-60deg)");

        }
    }
    })

})