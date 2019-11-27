$(function(){
	// 全选功能 将全选按钮的状态赋予三个小的按钮
	getSum();
	$(".checkall").change(function(){
		$(".j-checkbox,.checkall").prop("checked",$(this).prop("checked"));
		// 改变颜色
		if($(this).prop("checked")) {
			$(".cart-item").addClass("check-cart-item");
		} else {
			$(".cart-item").removeClass("check-cart-item");
		}
	})
	// 如果复选框被选中的个数等于3，就应该把全选按钮选上，否则全选按钮不选 可以利用：checked 选择器确定被选中的表单
	$(".j-checkbox").change(function(){
		if($(".j-checkbox:checked").length === $(".j-checkbox").length) {
			$(".checkall").prop("checked",true);
		} else {
			$(".checkall").prop("checked",false);
		}
		if($(this).prop("checked")) {
			$(this).parents(".cart-item").addClass("check-cart-item");
		} else {
			$(this).parents(".cart-item").removeClass("check-cart-item");	
		}
	})
	// 增减商品数量模块 声明变量 点击加号则加一并赋予表单
	$(".increment").click(function() {
		var n = $(this).siblings('.itxt').val();
		n++;
		$(this).siblings('.itxt').val(n);
		// 总价修改模块
		var p = $(this).parents(".p-num").siblings('.p-price').html();
		p = p.substr(1);
		$(this).parents(".p-num").siblings('.p-sum').html("￥" + (p * n).toFixed(2));
		getSum();

	})
	$(".decrement").click(function() {
		var n = $(this).siblings('.itxt').val();
		if(n>1) {
			n--;
		$(this).siblings('.itxt').val(n);
		}
		var p = $(this).parents(".p-num").siblings('.p-price').html();
		p = p.substr(1);
		$(this).parents(".p-num").siblings('.p-sum').html("￥" + (p * n).toFixed(2));
		getSum();

	})
	// 修改文本框 改变价格模块
	$(".itxt").blur(function(){
		var n = $(this).val();
		var p = $(this).parents(".p-num").siblings('.p-price').html();
		p = p.substr(1);
		$(this).parents(".p-num").siblings('.p-sum').html("￥" + (p * n).toFixed(2));
		getSum();
	})
	// 计算总计和总额模块
	function getSum (){
		var count = 0;
		var money = 0;
		$(".itxt").each(function(i,ele) {
			count += parseInt($(ele).val());
		})
		$(".amount-sum em").text(count);
		$(".p-sum").each(function(i,ele) {
			money += parseFloat($(ele).text().substr(1));
		})
		$(".price-sum em").text("￥" + money.toFixed(2));
	}
	// 删除商品模块
	// 1.商品后面的删除按钮
	$(".p-action a").click(function() {
		$(this).parents(".cart-item").remove();
		getSum();
	})
	// 2.删除选中的商品
	$(".remove-batch").click(function() {
		$(".j-checkbox:checked").parents(".cart-item").remove();
		getSum();

	})
	// 3.清理购物车
	$(".clear-all").click(function() {
		$(".cart-item").remove();
		getSum();
	})
})	