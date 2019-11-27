window.onload = function(){
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var tel = document.querySelector('#tel');
    var regqq = /^[1-9]\d{4,}$/
    var qq = document.querySelector('#qq');
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    var nc = document.querySelector('#nc');
    var regmsg = /^\d{6}$/;
    var msg = document.querySelector('#msg');
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(tel,regtel);
    regexp(qq,regqq);
    regexp(nc,regnc);
    regexp(msg,regmsg);
    regexp(pwd,regpwd);

    function regexp(ele,reg) {
        ele.onblur = function(){
        if(reg.test(this.value)) {
            // console.log('right');
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
        }  else {
            this.nextElementSibling.className = 'erroe';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>输入错误';
        }
    }
    }
    surepwd.onblur = function() {
        if(this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确';
        } else {
            this.nextElementSibling.className = 'erroe';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>输入错误';
        }
    }
}