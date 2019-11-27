$(function(){
    var flag = true;
    // 窗口滚动到推荐模块时电梯模块淡入
    function toggle() {
        var toolTop = $(".recommend").offset().top;
        if($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    // 页面一加载判断电梯是否要显示
    toggle();
    // 每次滚动时都判断电梯是否要显示
    $(window).scroll(function(){
      toggle();
      if(flag) {
        $(".floor .w").each(function(i,ele) {
        if($(document).scrollTop() >= $(ele).offset().top) {
            $(".fixedtool li").eq(i).addClass('current').siblings().removeClass('current');
        }
      })       
      }     
    })
    // 给每个li遍历添加事件，包括类名添加和动画滚动
    $(".fixedtool li").click(function(){ 
        flag = false;
        // 点击之后添加类名，改变颜色   
        $(this).addClass('current').siblings().removeClass('current');
        // 获取当前模块的距离顶部的值
        var current = $(".floor .w").eq($(this).index()).offset().top;
        // 给html标签添加滚动动画
        $("html").stop().animate({scrollTop:current},function(){
            flag = true;
        });
    })
})  