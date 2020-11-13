$(function(){
	
	$(".checkall").change(function(){
		//console.log($(this).prop("checked"))
		$(".j-checkbox,.checkall").prop("checked",$(this).prop("checked"))
		if($(this).prop("checked")){
			$(".cart-item").addClass("check-cart-item")
		}else{
			$(".cart-item").removeClass("check-cart-item")
		}
	})
	
	
	$(".j-checkbox").change(function(){
		if($(".j-checkbox:checked").length === $(".j-checkbox").length) {
			$(".checkall").prop("checked",true)
			console.log($(".j-checkbox").length)
		}else {
			$(".checkall").prop("checked",false)
		}
		if($(this).prop("checked")){
			$(this).parents(".cart-item").addClass("check-cart-item")
		}else{
			$(this).parents(".cart-item").removeClass("check-cart-item")
		}
	})
	
	$(".increment").click(function(){
		var n = $(this).siblings(".itxt").val()
		n++
		$(this).siblings(".itxt").val(n)
		var p = $(this).parent().parent().siblings(".p-price").html()
		p = p.substr(1)
		//$(this).parent().parent().siblings(".p-sum").html("￥"+parseFloat(p*n));
		$(this).parents(".p-num").siblings(".p-sum").html("￥"+(p*n).toFixed(2));
    getSum()		
	})
	$(".decrement").click(function(){
		var n = $(this).siblings(".itxt").val()
		if(n==0){
			return false
		}
		n--
		$(this).siblings(".itxt").val(n)
		var p = $(this).parent().parent().siblings(".p-price").html()
		p = p.substr(1)	
		$(this).parent().parent().siblings(".p-sum").html("￥"+(p*n).toFixed(2));
		getSum()
	})
	$(".itxt").change(function(){
		var n = $(this).val()
		var p = $(this).parent().parent().siblings(".p-price").html()
		p = p.substr(1)	
		$(this).parent().parent().siblings(".p-sum").html("￥"+(p*n).toFixed(2));
		getSum()
	})
	//计算总计和总额的模块
	getSum()
	function getSum(){
		let count = 0;
		let money = 0;
		$(".itxt").each(function(index,ele){
			count += parseInt($(ele).val())
		})
		$(".amount-sum em").text(count);
		$(".p-sum").each(function(index,ele){
			money += parseFloat($(ele).text().substr(1))
		})
		$(".price-sum em").text(money.toFixed(2))
	}
	//删除商品模块
	$(".p-action a").click(function(){
		$(this).parents(".cart-item").remove()
		getSum()
	})
	$(".remove-batch").click(function(){
		$(".j-checkbox:checked").parents(".cart-item").remove()
		getSum()
	})
	$(".clear-all").click(function(){
		$(".cart-item").remove()
		getSum()
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})