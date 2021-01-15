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

	// 购物车列表数据
	for(var i=0;i<cart_data.length;i++){
		$(`
			<div class="item-box">
				<div class="cart-list">
					<div class="check">
						<i class="icon">√</i>
					</div>
					<div class="pic">
						<img src="${cart_data[i].pic}" width ='80px'>
					</div>
					<div class="shop-name">${cart_data[i].tit}</div>
					<div class="unit-price">${cart_data[i].price}元</div>
					<div class="num">
						<div class="num-box">
							<i class="icon icon-remov">-</i>
							<input class='goodsNum' type="text"  value="1" />
							<i class="icon icon-add">+</i>
						</div>
					</div>
					<div class="subtotal">${cart_data[i].price}元</div>
					<div class="del">
						<span>×</span>
					</div>
				</div>
			</div>
		`).appendTo('.cart-con .list-box')
	}
	
	
	// 购物车下方列表数据
	
	for(var i=0;i<cart_list.length;i++){
		$(`
			<li>
				<a href="">
					<img src="${cart_list[i].pic}" alt="">
					<p class="tit">${cart_list[i].tit}</p>
					<p class="pri">${cart_list[i].price}元</p>
					<p class="tips">${cart_list[i].tips}</p>
				</a>
				<div class="recom-action">
					<span>加入购物车</span>
				</div>
				<div class="recom-notice">
					<span>成功加入购物车</span>
				</div>
			</li>
		`).appendTo('.recomment-box .recomment-list')
	}
	
	// 点击加入购物车,插入数据的代码要放在上边，不然会找不到节点
	$('.recomment-list>li>.recom-action').click(function(){
		$(this).next().css({
			'height':'38px'
		})
	})
	
	// 结算栏滚动事件
	     // 打开网页时的状态
	$('.cart-total').css({
		'position':'fixed',
		'bottom':'-7px',
		'z-index':'3',
		'box-shadow':'-5px -5px 5px -4px #b0b0b0,5px -5px 5px -4px #b0b0b0'
	})
	     // 滚动高度低于140 时的状态
	$(window).scroll(function(){
		
		if($(window).scrollTop() <= 140){
			$('.cart-total').css({
				'position':'fixed',
				'bottom':'-7px',
				'z-index':'3',
				'box-shadow':'-5px -5px 5px -4px #b0b0b0,5px -5px 5px -4px #b0b0b0'
			})
		}else{
			$('.cart-total').css({
				'position':'relative',
				'box-shadow':'none'
			})
		}
	})
	
	
	
	// 点击单个复选框选中当前物品,已选中多少件,没有选择时的提示，总价变化,全选变化
	// 声明一个数组记录选中的物品
	var googsSelect = [];
	var isStats;
	$('.cart-list .check i').attr('title','0'); // 添加初始状态：未被选中
	$('.cart-list .check i').click(function(){
		
		// 获取在$('.cart-list .check i')中当前点击的这个的下标
		var index = $('.cart-list .check i').index(this);
		// 获取当前被选中的件数
		var selCou = $('.total-box .left .sel').html();
		isStats = $(this).attr('title');
		
		if( isStats == false){
			// 添加一个类名，辨别是否有选中物品
			$(this).addClass('pickOn')
			$(this).attr('title','1');
			isStats = $(this).attr('title');
			// 改变按钮状态
			$(this).css({
			'color':'white',
			'background-color':'#ff6700',
			'border-color':'#ff6700'
			})
			// 选中多少件增加
			var sel = 0;
			     // 获取处于选中状态的复选框对应的数量框里的值
			for(var i=0;i<$('.cart-list .check i').length;i++){
				if($('.cart-list .check i')[i].title == 1){
					var midDate = $($('.cart-list .check i')[i]).parent().parent().find('.goodsNum').val();
					sel += Number(midDate);
				}
			}
			$('.total-box .left .sel').html(sel);
			// 把在物品数组中对应下标的元素添加到记录数组中
			googsSelect.push(cart_data[index]);
			
		}else{
			
			// 删除类名
			$(this).removeClass('pickOn')
			$(this).attr('title','0');
			isStats = $(this).attr('title');
			$('.cart-head .check-all .icon').attr('title','0')
			// 改变按钮状态
			$(this).css({
				'color':'white',
				'background-color':'white',
				'border-color':'#e0e0e0'
			})
			// 选中多少件减少
			var sel = 0;
			     // 获取处于选中状态的复选框对应的数量框里的值
			for(var i=0;i<$('.cart-list .check i').length;i++){
				if($('.cart-list .check i')[i].title == 1){
					var midDate = $($('.cart-list .check i')[i]).parent().parent().find('.goodsNum').val();
					sel += Number(midDate);
				}
			}
			if( sel <= 0){
				$('.total-box .left .sel').html(0);
			}else{
				$('.total-box .left .sel').html(sel);
			}
			// 找到当前点击的复选框对应的元素在记录数组中第一次出现的下标
			var i = googsSelect.indexOf(cart_data[index]);
			     // 把该元素从记录数组中删除
			googsSelect.splice(i,1);
			
		}
		// 没有选择物品时的提示
		noSelectTip();
		
		// 全选变化   如果被选中的按钮的数量等于购物车里数据的数量勾选全选
		var checkCou = 0;
		for(var i=0;i<$('.cart-list .check i').length;i++){
			if($('.cart-list .check i')[i].title == 1){
				checkCou++;
			}
			if( checkCou>=cart_data.length ){
				$('.cart-head .check-all .icon').addClass('pickOn')
				$('.check-all .icon').css({
				'color':'white',
				'background-color':'#ff6700',
				'border-color':'#ff6700'
				})
			}else{
				$('.cart-head .check-all .icon').removeClass('pickOn')
				$('.check-all .icon').css({
				'color':'white',
				'background-color':'white',
				'border-color':'#e0e0e0'
				})
			}
		}
		
		// 合计总价变化
		changeTotalPrice();
		
	})
	
	// 点击icon-add 数量增加，单个商品总价增加，合计总价增加
	var pri;
	
	$('.icon-add').click(function(){
		
		// 获取当前增加数量的物品的坐标
		var index = $(this).parent().parent().parent().parent().index();
		// 获取在数据数组中该坐标里的价格、计数
		pri = cart_data[index].price;
		var cou = ++cart_data[index].count;
		// 增加数量
		$(this).prev().val(cou) 
		// 计算单间商品总价
		var totalPrice = pri*cou;
		// 赋值
		$(this).parent().parent().next().html(totalPrice+'元')
		
		// 已选择多少件变化
		var selCou = Number($('.total-box .left .sel').html());
		// 选中商品数量变化
		var selNum = 0;
		var goodsNum = $('.goodsNum');
		for(var i=0;i<goodsNum.length;i++){
			selNum += Number(goodsNum[i].value);
		}
		$('.total-box .left .tot').html(++selNum-1);
		
		// 合计总价变化
			 // 获取复选框当前是否被选中的状态
		var iconTit = $(this).parent().parent().parent().find('.check .icon')[0];
		if(iconTit.title == 1){
			changeTotalPrice();
			$('.total-box .left .sel').html(++selCou);
		}
		
		
	})
	
	
	// 点击icon-remov 数量减少，价格降低
	$('.icon-remov').click(function(){
		
		// 获取当前减少数量的物品的坐标
		var index = $(this).parent().parent().parent().parent().index();
		// 获取在数据数组中该坐标里的价格
		pri = cart_data[index].price;
		// 减少数量，不能低于1
		if( cart_data[index].count <= 1 ){
			cart_data[index].count = 1;
		}else if( cart_data[index].count>1 ){
			var cou = --cart_data[index].count;
			$(this).next().val(cou)
			// 计算单个商品总价
			var totalPrice = pri*cart_data[index].count;
			// 赋值
			$(this).parent().parent().next().html(totalPrice+'元') 
			// 合计价格变化
				 // 获取复选框个是否被选中的状态
			var iconTit = $(this).parent().parent().parent().find('.check .icon')[0];
			changeTotalPrice()
			
			// 选中商品数量变化
			var selCou = Number($('.total-box .left .sel').html());
			var selNum = 0;
			var goodsNum = $('.goodsNum');
			for(var i=0;i<goodsNum.length;i++){
				selNum += Number(goodsNum[i].value);
			}
			var num = --selCou
			if( num<=0 ){
				$('.total-box .left .tot').html(cart_data.length);
			}else{
				$('.total-box .left .tot').html(selNum);
			}
			// 已选择多少件变化
			if(iconTit.title == 1){
				$('.total-box .left .sel').html(num);
			}
			
		}
		
	})
	
	
	// 点击全选  复选框全部选中，总价变化
	$('.cart-head .check-all .icon').click(function(){
		
		isStats = $(this).attr('title');
		if( isStats == false ){
			$(this).css({
			'color':'white',
			'background-color':'#ff6700',
			'border-color':'#ff6700'
			})
			$('.check .icon').css({
			'color':'white',
			'background-color':'#ff6700',
			'border-color':'#ff6700'
			})
			// 所有的icon添加类名
			$('.check .icon').addClass('pickOn')
			// 给所有复选框添加被选中状态
			$('.cart-list .check i').attr('title','1');
			$(this).attr('title','1');
			// 选中商品数量变化
			var selNum = 0;
			var goodsNum = $('.goodsNum');
			for(var i=0;i<goodsNum.length;i++){
				selNum += Number(goodsNum[i].value);
			}
			$('.total-box .left .sel').html(selNum);
			googsSelect = cart_data.concat();
			
		}else{
			
			$(this).css({
			'color':'white',
			'background-color':'white',
			'border-color':'#e0e0e0'
			})
			$('.check .icon').css({
			'color':'white',
			'background-color':'white',
			'border-color':'#e0e0e0'
			})
			// 所有的icon删除类名
			$('.check .icon').removeClass('pickOn')
			$('.cart-list .check i').attr('title','0');
			$(this).attr('title','0');
			
			$('.total-box .left .sel').html(0);
			googsSelect = [];
		}
		// 计算总价
		changeTotalPrice();
		
		// 没有选择物品时的提示
		noSelectTip();
		
	})
	
	
	// 点击删除按钮删除物品
	$('.cart-list .del').click(function(){
		
		// 获取当前点击的删除按钮在全部删除按钮中的下标
		var index = $('.cart-list .del').index(this);
		// 找到当前删除按钮的父节点删除
		$('.item-box')[index].remove();
		// 在原数组和记录数组中删除该按钮对应的元素
		var i = googsSelect.indexOf(cart_data[index]);
		cart_data.splice(index,1);
		     // 如果删除记录数据中不存在的物品，不需要操作记录数组，i的下标为-1，
		if( i != -1){
			googsSelect.splice(i,1);
		}
		// 共有几件商品数量变化
		$('.total-box .left .tot').html(cart_data.length);
		// 选中商品数量变化
		var sel = $('.total-box .left .sel').html();
		if(sel != 0){
			$('.total-box .left .sel').html(--sel);
		}
		// 删除后全选按钮的变化、提示信息的变化
		if(sel == 0){
			$('.cart-head .check-all .icon').css({
				'color':'white',
				'background-color':'white',
				'border-color':'#e0e0e0'
			})
			$('.no-sel-tip').css('display','block')
			$('.total-box>.right>a').css({
				'color': '#B0B0B0',
				'background-color': '#E0E0E0',
				'border': '1px solid #E0E0E0'
			})
		}
		// 合计总价变化
		changeTotalPrice();
	})
	
	// 购物车中物品的数量
	var toNum = 0;
	var shoppingNum = $('.goodsNum');
	for(var i=0;i<shoppingNum.length;i++){
		toNum += Number(shoppingNum[i].value);
	}
	$('.total-box .left .tot').html(toNum);
	
	
	// 计算合计总价  把记录选中的物品数组中的价格加起来
	function changeTotalPrice(){
		var totalPrice = 0;
		for(var i = 0;i<googsSelect.length;i++){
			totalPrice += googsSelect[i].price*googsSelect[i].count;
		}
		$('.right .tot_pri').html(totalPrice);
	}
	
	// 没有选择物品时的提示封装函数
	function noSelectTip(){
		if(!$('.check .pickOn')[0]){
			$('.no-sel-tip').css('display','block')
			$('.total-box>.right>a').css({
				'color': '#B0B0B0',
				'background-color': '#E0E0E0',
				'border': '1px solid #E0E0E0'
			})
			$('.right .go_payment')[0].href = '#';
			$('.right .go_payment')[0].target = '_self';
		}else{
			$('.no-sel-tip').css('display','none')
			$('.total-box>.right>a').css({
				'color': 'white',
				'background-color': '#ff6700',
				'border': '1px solid #ff6700'
			})
			$('.right .go_payment')[0].href = './confirm-order.html';
			$('.right .go_payment')[0].target = '_blank';
		}
	}
	
	
	//
	$('.cart-recomment .recomment-list a').attr('href','./details.html')
	
})