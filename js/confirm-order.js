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
						<img src="${cart_data[i].pic}" >
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
					<p class="pri">${cart_list[i].price}</p>
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
	
	// 地址栏滚动事件
	$(window).scroll(function(){
		var minHeight = $('.delivery-box').offset().top;
		if( $(window).scrollTop() >= minHeight){
			$('.fix-nav').css({
				'display':'block'
			})
		}else{
			$('.fix-nav').css({
				'display':'none'
			})
		}
	})
	
	// 地址选中事件
	function selectAddress(){
		$('.addr-con .myAddr').click(function(){
			$('.addr-con .myAddr').css({
				'border':'1px solid #B0B0B0'
			})
			$('.addr-con .myAddr').attr('id','0')
			$('.btn-con .gopay').html('立即下单')
			$(this).css({
				'border':'1px solid #ff6700'
			})
			$(this).attr('id','select')
		})
	}
	selectAddress();
	
	// 添加地址事件弹窗事件,点击优惠券弹窗
	$('.other-left .sale-ticket').click(function(){
		$('.ticket-wind-box').css({
			'display':'block'
		})
		$('.ticket-wind-con').css({
			'display':'block'
		})
	})
	
	
	// 点击切换优惠券页面
	$('.ticket-wind-con .title p').click(function(){
		$('.ticket-wind-con .title p').removeClass('act')
		$(this).addClass('act')
		var index = $('.ticket-wind-con .title p').index(this);
		$('.ticket-wind-con .con-box .con-sel').attr('id','0')
		$('.ticket-wind-con .con-box .con-sel').eq(index).attr('id','act')
	})
	
	
	// 输入优惠券提示信息出现
	$('.ticket-wind-con .con-two .inpu-box input').focus(function(){
		$(this).css({
			'border': '1px solid #ff6700'
		})
		$(this).prev().css({
			'transform': 'translate3d(0,-120%,0)',
			'z-index': 1,
			'opacity': 1
		})
	})
	$('.ticket-wind-con .con-two .inpu-box input').blur(function(){
		$(this).css({
			'border': '1px solid #E0E0E0'
		})
		$(this).prev().css({
			'transform': 'translate3d(0,0,0)',
			'z-index': -1,
			'opacity': 0
		})
		$('.con-two .inpu-box .tipss').css({
			opacity: 0,
			transform: 'translate3d(0,0px,0)'
		})
		
	})
	
	
	// 点击立即使用按钮判断内容
	$('.con-two .con-btn .now').click(function(){
		if($('.con-two .inpu-box input').val() == ''){
			$('.con-two .inpu-box .tipss').css({
				opacity: 1,
				transform: 'translate3d(0,5px,0)'
			})
			$('.con-two .inpu-box input').css({
				'border': '1px solid #ff6700'
			})
			$('.con-two .inpu-box .tips').css({
				'transform': 'translate3d(0,-120%,0)',
				'z-index': 1,
				'opacity': 1
			})
		}else{
			$('.con-two .inpu-box .tipss').css({
				opacity: 0,
				transform: 'translate3d(0,0px,0)'
			})
			$('.con-two .inpu-box input').css({
				'border': '1px solid #E0E0E0'
			})
			$('.con-two .inpu-box .tips').css({
				'transform': 'translate3d(0,0,0)',
				'z-index': -1,
				'opacity': 0
			})
		}
	})
	
	// 点击不适用优惠券按钮关闭弹窗
	$('.con-two .con-btn .not').click(function(){
		$('.ticket-wind-box').css({
			'display':'none'
		})
		$('.ticket-wind-con').css({
			'display':'none'
		})
	})
	
	
	// 点击去结算判断是否选择了地址
	$('.btn-box .btn-con .gopay').click(function(){
		for(var i=0;i<$('.addr-con ul li').length;i++){
			if($('.addr-con ul li')[i].id != 'select'){
				$('.gopay-window-box').css({
					'display':'block'
				})
				$('.gopay-window-con').css({
					'display':'block'
				})
			}else{
				open('./pay-order.html')
			}
		}
	})
	
	
	// 点击关闭请选择关闭弹窗
	$('.gopay-window-close span').click(function(){
		$('.gopay-window-box').css({
			'display':'none'
		})
		$('.gopay-window-con').css({
			'display':'none'
		})
	})
	$('.gopay-window-con .gopay-window-sure').click(function(){
		$('.gopay-window-box').css({
			'display':'none'
		})
		$('.gopay-window-con').css({
			'display':'none'
		})
	})
	
	
	
	// 点击添加地址弹窗
	$('.add-adrs .adrs-box').click(function(){
		$('.address-window-box').css({
			'display':'block'
		})
		$('.address-window-con').css({
			'display':'block'
		})
	})
	// 点击关闭请选择关闭弹窗
	$('.address-window-close span').click(function(){
		$('.address-window-box').css({
			'display':'none'
		})
		$('.address-window-con').css({
			'display':'none'
		})
	})
	$('.address-window-con .address-window-cancel').click(function(){
		$('.address-window-box').css({
			'display':'none'
		})
		$('.address-window-con').css({
			'display':'none'
		})
	})
	
	// 姓名事件：
	$('.name-tel-box .name-box').click(function(){
			$('.name-tel-box .name-box').find('input').css({
				'border-color': '#e0e0e0'
			})
			$('.name-tel-box .name-box').find('p').css({
				'color': '#b0b0b0',
				'font-size': '14px',
				'transform': 'translate3d(35px,9px,0)'
			})
			$(this).find('input').css({
				'border-color': '#ff6700'
			})
			$(this).find('p').css({
				'color': '#ff6700',
				'font-size': '12px',
				'transform': 'translate3d(33px,-10px,0)'
			})
	})
	$('.name-tel-box .name-box input').blur(function(){
		$(this).css({
			'border-color': '#e0e0e0'
		})
		$(this).prev('p').css({
			'color': '#b0b0b0',
			'font-size': '14px',
			'transform': 'translate3d(35px,9px,0)'
		})
		if( this.value != '' ){
			$(this).css({
				'border-color': '#e0e0e0'
			})
			$(this).prev('p').css({
				'color': '#b0b0b0',
				'font-size': '12px',
				'transform': 'translate3d(33px,-10px,0)'
			})
		}
	})
	
	// 电话框事件：
	$('.name-tel-box .tel-box').click(function(){
			$('.name-tel-box .tel-box').find('input').css({
				'border-color': '#e0e0e0'
			})
			$('.name-tel-box .tel-box').find('p').css({
				'color': '#b0b0b0',
				'font-size': '14px',
				'transform': 'translate3d(35px,9px,0)'
			})
			$(this).find('input').css({
				'border-color': '#ff6700'
			})
			$(this).find('p').css({
				'color': '#ff6700',
				'font-size': '12px',
				'transform': 'translate3d(33px,-10px,0)'
			})
	})
	$('.name-tel-box .tel-box input').blur(function(){
		$(this).css({
			'border-color': '#e0e0e0'
		})
		$(this).prev('p').css({
			'color': '#b0b0b0',
			'font-size': '14px',
			'transform': 'translate3d(35px,9px,0)'
		})
		if( this.value != '' ){
			$(this).css({
				'border-color': '#e0e0e0'
			})
			$(this).prev('p').css({
				'color': '#b0b0b0',
				'font-size': '12px',
				'transform': 'translate3d(33px,-10px,0)'
			})
		}
	})
	
	// 详细地址
	$('.detailed-address-box').click(function(){
		$(this).find('textarea').css({
			'border-color': '#ff6700'
		})
		$(this).find('p').css({
			'color': '#ff6700',
			'font-size': '12px',
			'width': '50px',
			'transform': 'translate3d(33px,-10px,0)'
		})
	})
	$('.detailed-address-box textarea').blur(function(){
		$(this).css({
			'border-color': '#e0e0e0'
		})
		$(this).prev('p').css({
			'color': '#b0b0b0',
			'font-size': '14px',
			'width': '300px',
			'transform': 'translate3d(35px,9px,0)'
		})
		if( this.value != '' ){
			$(this).css({
				'border-color': '#e0e0e0'
			})
			$(this).prev('p').css({
				'color': '#b0b0b0',
				'font-size': '12px',
				'width': '50px',
				'transform': 'translate3d(33px,-10px,0)'
			})
		}
	})
	
	// 地址标签
	$('.address-labels-box').click(function(){
		$(this).find('input').css({
			'border-color': '#ff6700'
		})
		$(this).find('p').css({
			'color': '#ff6700',
			'font-size': '12px',
			'width': '50px',
			'transform': 'translate3d(33px,-8px,0)'
		})
	})
	$('.address-labels-box input').blur(function(){
		$(this).css({
			'border-color': '#e0e0e0'
		})
		$(this).prev('p').css({
			'color': '#b0b0b0',
			'font-size': '14px',
			'width': '300px',
			'transform': 'translate3d(35px,9px,0)'
		})
		if( this.value != '' ){
			$(this).css({
				'border-color': '#e0e0e0'
			})
			$(this).prev('p').css({
				'color': '#b0b0b0',
				'font-size': '12px',
				'width': '50px',
				'transform': 'translate3d(33px,-8px,0)'
			})
		}
	})
	
	
	// 选择市区街道
	   // 点击打开窗口
	$('.addre-box .addre-con').click(function(){
		var isAdd = true;
		$('.search-addre-box').css({
			'display':'block'
		})
	})
	   // 点击关闭窗口
	$('.search-addre-con .close-btn').click(function(){
		$('.search-addre-box').css({
			'display':'none'
		})
	})
	   //点击切换窗口
	$('.tab-control .search').click(function(){
		$('.select-box').css({
			'display':'none'
		})
		$('.search-con').css({
			'display':'block'
		})
		$(this).css({
			'display':'none'
		})
		$('.tab-control .sele').css({
			'display':'block'
		})
		
	})
	$('.tab-control .sele').click(function(){
		$('.select-box').css({
			'display':'block'
		})
		$('.search-con').css({
			'display':'none'
		})
		$(this).css({
			'display':'none'
		})
		$('.tab-control .search').css({
			'display':'block'
		})
	})
	
	// 插入省级数据
	for( var i in address_arr){
		$(`
			<li valu = '${i}'> ${i} </li>
		`).appendTo('.area .area-item')
	}
	// 套层
	// 省》市级  省赋值》切换市级
	for(var i=0;i<$('.area .area-item li').length;i++){
		$('.area .area-item li')[i].onclick = function(){
			$('.area-sele .province').html($(this).attr('valu'))
			$('.area-sele .province').css({
				color:'#ff6700'
			})
			$('.area .area-item li').empty();  // 清除节点中的元素
			var city_val = address_arr[$(this).attr('valu')];
			for( var i in city_val){
				$(`
					<li valu = '${city_val[i]}'> ${city_val[i]} </li>
				`).appendTo('.area .area-item')
			}
			// 市》区县  市级赋值》切换区县
			for(var j=0;j<$('.area .area-item li').length;j++){
				$('.area .area-item li')[j].onclick = function(){
					//console.log($(this).attr('valu'))
					$('.area-sele .city').html($(this).attr('valu'))
					$('.area-sele .city').css({
						color:'#ff6700'
					})
					$('.area .area-item li').empty();
					var county_val = address_arr[$(this).attr('valu')];
					for( var i in county_val){
						$(`
							<li valu = '${county_val[i]}'> ${county_val[i]} </li>
						`).appendTo('.area .area-item')
					}
					// 区县》配送地区  区县赋值》切换配送地区
					for(var k=0;k<$('.area .area-item li').length;k++){
						$('.area .area-item li')[k].onclick = function(){
							//、console.log($(this).attr('valu'))
							$('.area-sele .county').html($(this).attr('valu'))
							$('.area-sele .county').css({
								color:'#ff6700'
							})
							$('.area .area-item li').empty();
							var delivery_val = address_arr[$(this).attr('valu')];
							for( var i in delivery_val){
								$(`
									<li valu = '${delivery_val[i]}'> ${delivery_val[i]} </li>
								`).appendTo('.area .area-item')
							}
							// 配送地区赋值
							for(var n=0;n<$('.area .area-item li').length;n++){
								$('.area .area-item li')[n].onclick = function(){
									//console.log($(this).attr('valu'))
									$('.area-sele .delivery').html($(this).attr('valu'))
									$('.area-sele .delivery').css({
										color:'#ff6700'
									})
									var province_val = $('.area-sele .province').text();
									var city_val = $('.area-sele .city').text();
									var county_val = $('.area-sele .county').text();
									var delivery_val = $('.area-sele .delivery').text();
									$('.addre-box .addre-con span').html(province_val+' '+city_val+' '+county_val+' '+delivery_val)
									$('.search-addre-box').css({
										'display':'none'
									})
								}
							}
						}
					}
				}
			}
		}
	}
	
	// 验证信息
	$('.address-window-btn .address-window-sure').click(function(){
		
		var name_val = $('.name-tel-box .name-box input').val();
		var tel_val = $('.name-tel-box .tel-box input').val();
		var addre_val = $('.addre-box .addre-con span').html();
		var addrs_infor = addre_val.split(' ').slice(0,3).join(' ');
		var delivery_infor = addre_val.split(' ')[3];
		var detailed_val = $('.detailed-address-box textarea').val();
		var re = /^1\d{10}/;
		
		if( name_val == '' ){
			$('.name-tel-box .name-box .msg-error').css('display','block')
			$('.name-tel-box .name-box input').blur(function(){
				$('.name-tel-box .name-box .msg-error').css('display','none')
			})
		}else if( !re.test(tel_val) ){
			$('.name-tel-box .tel-box .msg-error').css('display','block')
			$('.name-tel-box .tel-box input').blur(function(){
				$('.name-tel-box .tel-box .msg-error').css('display','none')
			})
		}else if( detailed_val == '' || detailed_val.length <= 5 || detailed_val.length >= 32 ){
			$('.detailed-address-box .msg-error').css('display','block')
		}else{
			$('.address-window-con .msg-error').css('display','none')
			$(`
				<li class="myAddr">
					<h2 class="name">${ name_val }</h2>
					<span class="tel">${ tel_val }</span>
					<span class="addrs">${ addrs_infor }</span>
					<span class="delivery">${ delivery_infor }</span>
					<span class="deta">${ detailed_val }</span>
					<div class="btn-edit"><a href="#">修改</a></div>
				</li>
			`).prependTo('.address-box .addr-con ul')
			
			// 地址修改事件
			changeAddress();
			// 地址选中事件
			selectAddress();
		}	
	})
	
	
	// 地址修改事件
	function changeAddress(){
		for( var i=0;i<$('.address-box .myAddr .btn-edit').length;i++){
			$('.address-box .myAddr .btn-edit')[i].onclick = function(ev){
				var ev = event ||window.event;
				$('.address-window-box').css({
					'display':'block'
				})
				$('.address-window-con').css({
					'display':'block'
				})
				$('.address-window-btn .address-window-sure').click(function(){
					var name_val = $('.name-tel-box .name-box input').val();
					var tel_val = $('.name-tel-box .tel-box input').val();
					var addre_val = $('.addre-box .addre-con span').html();
					var addrs_infor = addre_val.split(' ').slice(0,3).join(' ');
					var delivery_infor = addre_val.split(' ')[3];
					var detailed_val = $('.detailed-address-box textarea').val();
					
					$(ev.target.parentNode).find('.name').text( name_val )
					$(ev.target.parentNode).find('.tel').text( tel_val )
					$(ev.target.parentNode).find('.addrs').text( addrs_infor )
					$(ev.target.parentNode).find('.delivery').text( delivery_infor )
					$(ev.target.parentNode).find('.deta').text( detailed_val )
					ev.target.parentNode.parentNode.remove();
					// 把旧的删除之后再添加修改后的新地址
				})
			}
		}
	}
	//调用
	changeAddress();
	
	// 链接
	$('.btn-box .btn-con .goback').click(function(){
		open('./buyCar.html')
	})
	
	
	
})