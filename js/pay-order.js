$(function(){
	
	// 换图片
	var cou = 0;
	setInterval(function(){
		cou++;
		// 偶数时绿色图，奇数时黄色图
		if(cou%2==0){
			$('.copy .pic .footer_log').html('<img src="./img/ad.png" >')
		}else if(cou%2!=0){
			$('.copy .pic .footer_log').html('<img src="./img/ss.png" >')
		}
	},3000)
	
	
	
	// 点击订单详情展开信息
	$('.submit-top-rgt .select').click(function(){
		this.isStats = !this.isStats;
		if(this.isStats){
			$('.order-submit-box .order-submit-con').css({
				height: '285px',
			})
			$('.submit-top-lft .take-infor').css({
				display:'none'
			})
		}else{
			$('.order-submit-box .order-submit-con').css({
				height: '100px',
			})
			$('.submit-top-lft .take-infor').css({
				display:'block'
			})
		}
		
	})
	
	// 插入信用卡数据
	for(var i=0;i<card_type.length;i++){
		if(i<card_type.length-1){
			$(`
				<li><img src="${card_type[i].pic}"></li>
			`).appendTo('.pay-mold-con ul')
		}else{
			$(`
				<li>${card_type[i].pic}</li>
			`).appendTo('.pay-mold-con ul')
		}
	}
	
	// 插入快捷支付数据
	for(var i=0;i<fast_payment.length;i++){
		$(`
			<li><img src="${fast_payment[i].pic}"></li>
		`).appendTo('.pay-fast-con ul')
	}
	
	// 倒计时事件
	var deadline_sec = 48*3600;
	var timer = setInterval(function(){
		
		hour = doubleTime(parseInt(deadline_sec/3600));
		min = doubleTime(parseInt((deadline_sec - hour*3600)/60));
		sec = doubleTime(parseInt((deadline_sec - hour*3600 - min*60)));
		--deadline_sec;
		if( deadline_sec <0 ){
			clearInterval(timer);
		}
		$('.countdown').html(hour+' '+'小时'+' '+min+' '+'分'+' '+sec+' '+'秒')
		
	},1000)
	
	// 点击事件
	$('.pay-type-con ul li').click(function(){
		$('.pay-type-con ul li').css('border','1px solid #E0E0E0')
		$(this).css('border','1px solid #FF6700')
	})
	
	
	
})