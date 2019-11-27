$(function() { 
    // 1.文本框输入内容按下回车就可以生成待办事项
    // 2.点击待办事项复选框，就可以把当前数据添加到已完成事项里面
    // 3.点击已完成事项复选框,就可以把当前数据添加到代办事项里面
    // 4.页面刷新内容不会丢失

    // 所有数据都要从本地存储获取
    // 数据用数组包含对象的形式保存
    load();
    $("#title").on("keydown",function(e){
        if(e.keyCode == 13 && $(this).val() !== '') {
            // 先读取本地存储原来的数据 
            var local = getDate();
            // local数组更新数据
            local.push({title:$(this).val(),done:false});
            // 把local存储到本地
            saveDate(local);
            // todolist渲染到页面中
            load();
            $(this).val('');
        }
    })

    // 读取本地数据函数
    function getDate(data) {
        var data = localStorage.getItem("todolist");
        if(data !== null) {
            // 转为对象格式
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    // 保存本地数据函数
    function saveDate(data) {
        localStorage.setItem("todolist",JSON.stringify(data));
    }
    // 渲染本地数据
    function load() {
        $("ol,ul").empty();
        // 读取本地数据
        var data = getDate();
        // 遍历数据
        $.each(data,function(i,n){
            // 通过对象中的done属性判断加在ul还是ol中
            if(n.done == false) {
                $("ol").prepend("<li><input type='checkbox' /><p>"+ n.title +"</p><a href='JavaScript:;' id="+ i +"></a></li>");
            } else {
                $("ul").prepend("<li><input type='checkbox' checked='checked' /><p>"+ n.title +"</p><a href='JavaScript:;' id="+ i +"></a></li>");
            }          
        })
        $("#todocount").text($('#todolist').children().length);
        $("#donecount").text($('#donelist').children().length);
    }

    // 删除操作
    $("ol,ul").on("click","a",function(){
        // 获取本地存储
        var data = getDate();
        // 修改数据
        var index = $(this).attr("id");
        data.splice(index,1);
        // 保存本地数据
        saveDate(data);
        // 重新渲染
        load();
    })

    // 正在进行和已完成选项操作
    $("ol,ul").on("click","input",function() {
        // 先获取
        var data = getDate();
        // 修改
        var index = $(this).siblings('a').attr("id");
        // console.log(index);
        data[index].done = !data[index].done;
        // 保存
        saveDate(data);
        // 重新渲染
        load();
    })

})