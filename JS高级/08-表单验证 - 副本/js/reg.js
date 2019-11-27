window.onload = function(){
    var tel = document.querySelector('#tel');
    var telreg = /^1[3|4|5|8]\d{9}$/;
    check(tel,telreg);

    var qq = document.querySelector('#qq');
    var qqreg = /^[1-9]\d{4,}$/;
    check(qq,qqreg);

    var nc = document.querySelector('#nc');
    var ncreg =/^[\u4e00-\u9fa5]{2,8}$/;
    check(nc,ncreg);

    var msg = document.querySelector('#msg');
    var msgreg =/^\d{6}$/;
    check(msg,msgreg);

    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    surepwd.onblur  = function(){
        if(surepwd.value === pwd.value) {
             surepwd.nextElementSibling.className = 'success';
                surepwd.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
        } else {
            surepwd.nextElementSibling.className = 'error';
            surepwd.nextElementSibling.innerHTML = '<i class="error_icon"></i>输入错误';
        }
    }
    function check(obj,objreg) {
        obj.onblur = function () {
            if(objreg.test(obj.value)) {
            obj.nextElementSibling.className = 'success';
            obj.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
        } else {
            obj.nextElementSibling.className = 'error';
            obj.nextElementSibling.innerHTML = '<i class="error_icon"></i>输入错误';
        }
    }        
    }
}