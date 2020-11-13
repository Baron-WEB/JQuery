//JQuery入口函数
$(function(){
	var flag = true
	let toolTop = $(".recommend").offset().top
	toggleTool()
	
	//滑动出现电梯导航栏
	function toggleTool(){
		if($(document).scrollTop() >= toolTop){
			$(".fixedtool").fadeIn()
		}else {
			$(".fixedtool").fadeOut()
		}
	}
	
	$(window).scroll( function(){
		toggleTool()
		
		if(flag){
		$(".floor .w").each(function(index,ele){
			if($(document).scrollTop() >= $(ele).offset().top){
				$(".fixedtool li").eq(index).addClass("current").siblings().removeClass();
			}
		})
		}
	})
	
	
	//电梯导航栏点击事件
	$(".fixedtool li").click(function(){
		flag = false
		var current = $(".floor .w").eq($(this).index()).offset().top
		$("body, html").stop().animate({
			scrollTop: current
		},function(){
			flag = true
		})
		$(this).addClass("current").siblings().removeClass()
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})