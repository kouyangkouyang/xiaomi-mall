$(function(){
	
	// 导航栏搜索框 
	for (var i = 0; i < select_list.length; i++) {
		$(`<li>${select_list[i]}</li>
		`).appendTo('.nav-mid .select .list');
	}
	$('.nav-mid .select .text').focus(function() { // 点击文本框
		$('.nav-mid .select .list').css('display', 'block');
		$('.nav-mid .select .text').css({
			'border': '1px solid #ff6700',
			'borderRight': 0
		});
		$('.nav-mid .select .icon').css({
			'border': '1px solid #ff6700',
		});
	})
	
	$('.nav-mid .select .text').blur(function() {
		$('.nav-mid .select .list').css('display', 'none');
		$('.nav-mid .select .text').css({
			'border': '1px solid #e0e0e0',
			'borderRight': 0
		});
		$('.nav-mid .select .icon').css({
			'border': '1px solid #e0e0e0',
		});
	})
	
	// 导航栏下拉列表数据导入
	for (var i = 0; i < children_phone.length; i++) {
		if (i == 0) {
			$(
				`
				<li class="first">
					<a href="">
						<div class="figure">
							<img src="${children_phone[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_phone[i].title}</div>
						<div class="price">${children_phone[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .phone')
		} else {
			$(
				`
				<li>
					<a href="">
						<div class="figure">
							<img src="${children_phone[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_phone[i].title}</div>
						<div class="price">${children_phone[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .phone')
		}
	}
	for (var i = 0; i < children_red.length; i++) {
		if (i == 0) {
			$(
				`
				<li class="first">
					<a href="">
						<div class="figure">
							<img src="${children_red[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_red[i].title}</div>
						<div class="price">${children_red[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .red')
		} else {
			$(
				`
				<li>
					<a href="">
						<div class="figure">
							<img src="${children_red[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_red[i].title}</div>
						<div class="price">${children_red[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .red')
		}
	}
	for (var i = 0; i < children_tel.length; i++) {
		if (i == 0) {
			$(
				`
				<li class="first">
					<a href="">
						<div class="figure">
							<img src="${children_tel[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_tel[i].title}</div>
						<div class="price">${children_tel[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .tel')
		} else {
			$(
				`
				<li>
					<a href="">
						<div class="figure">
							<img src="${children_tel[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_tel[i].title}</div>
						<div class="price">${children_tel[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .tel')
		}
	}
	for (var i = 0; i < children_note.length; i++) {
		if (i == 0) {
			$(
				`
				<li class="first">
					<a href="">
						<div class="figure">
							<img src="${children_note[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_note[i].title}</div>
						<div class="price">${children_note[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .note')
		} else {
			$(
				`
				<li>
					<a href="">
						<div class="figure">
							<img src="${children_note[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_note[i].title}</div>
						<div class="price">${children_note[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .note')
		}
	}
	for (var i = 0; i < children_elec.length; i++) {
		if (i == 0) {
			$(
				`
				<li class="first">
					<a href="">
						<div class="figure">
							<img src="${children_elec[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_elec[i].title}</div>
						<div class="price">${children_elec[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .elec')
		} else {
			$(
				`
				<li>
					<a href="">
						<div class="figure">
							<img src="${children_elec[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_elec[i].title}</div>
						<div class="price">${children_elec[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .elec')
		}
	}
	for (var i = 0; i < children_web.length; i++) {
		if (i == 0) {
			$(
				`
				<li class="first">
					<a href="">
						<div class="figure">
							<img src="${children_web[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_web[i].title}</div>
						<div class="price">${children_web[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .web')
		} else {
			$(
				`
				<li>
					<a href="">
						<div class="figure">
							<img src="${children_web[i].pic}" width="160" height="110">
						</div>
						<div class="tiltle">${children_web[i].title}</div>
						<div class="price">${children_web[i].price}</div>
					</a>
				</li>
			`
			).appendTo('.nav-mid .itemChildren .web')
		}
	}
	for (var i = 0; i < children_smart.length; i++) {
		if (i == 0) {
			$(
				`
					<li class="first">
						<a href="">
							<div class="figure">
								<img src="${children_smart[i].pic}" width="160" height="110">
							</div>
							<div class="tiltle">${children_smart[i].title}</div>
							<div class="price">${children_smart[i].price}</div>
						</a>
					</li>
				`
			).appendTo('.nav-mid .itemChildren .smart')
		} else {
			$(
				`
					<li>
						<a href="">
							<div class="figure">
								<img src="${children_smart[i].pic}" width="160" height="110">
							</div>
							<div class="tiltle">${children_smart[i].title}</div>
							<div class="price">${children_smart[i].price}</div>
						</a>
					</li>
				`
			).appendTo('.nav-mid .itemChildren .smart')
		}
	}
	
	
	// 侧边栏 回到顶部
	window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop >= 1000) {
			$('.sidebar .last').css('display', 'block')
		} else {
			$('.sidebar .last').css('display', 'none')
		}
	}
	$('.sidebar .last').click(function() {
		window.scrollTo(0, 0);
	})
	
	// 轮播区域列表 最外层div=slide-list
	// 一级 外层ul=list-stair  标题层li=stair-item  a  span/icon
	// 二级 与一级a同级 div   ul  li  a/span
	var Div = $('.nav-mid .perch .perch-item')[0];
	//console.log(Div)
	var mUl, mLi, mA, mSpan, mIcon;
	var subDiv, subUl, subLi, subA, subImg, subSpan;
	/* 过滤出一级标题 */
	var primary = slide_list.filter(function(item) {
		return item.subId == 0;
	});
	//console.log(primary)
	
	mUl = document.createElement('ul');
	mUl.className = 'list-stair';
	for (var i = 0; i < primary.length; i++) {
		mLi = document.createElement('li'); // 创建li
		mLi.className = 'stair-item';
	
		mA = document.createElement('a'); // 创建li里面的a
		mSpan = document.createElement('span');
		mIcon = document.createElement('i');
		mA.appendChild(mSpan);
		mA.appendChild(mIcon);
		mLi.appendChild(mA);
	
		mSpan.innerText = primary[i].name;
		mIcon.className = 'icon';
		mIcon.innerHTML = primary[i].icon;
		mA.href = '#';
	
		subDiv = document.createElement('div'); // 创建一级中的二级外框
		subDiv.className = 'list-sub';
		mLi.appendChild(subDiv);
	
		// 创建二级内容 先过滤出subId 与id相同的
		// 二级 与一级a同级 div   ul  li  a img/span
		var sub = slide_list.filter(function(item) {
			return item.subId == primary[i].id;
		});
		//console.log(sub)
		for (var j = 0; j < sub.length; j++) {
			if (j % 6 == 0) {
				subUl = document.createElement('ul'); // 每创建一个ul，subUl会变成新的
			}
			subLi = document.createElement('li');
			subA = document.createElement('a');
			subA.href = '#';
			
			subImg = document.createElement('img');
			subImg.src = sub[j].pic;
			subSpan = document.createElement('span');
			subSpan.innerText = sub[j].name;
			
			subA.appendChild(subImg);
			subA.appendChild(subSpan);
			subLi.appendChild(subA);
			subUl.appendChild(subLi);
			subDiv.appendChild(subUl)
		}
	
		mUl.appendChild(mLi);
	}
	Div.appendChild(mUl);
	
	// 全部商品分类下拉列表
	$('.nav-mid .perch').hover(function(){
		$('.nav-mid .perch .perch-item').css('display','block');
	},function(){
		$('.nav-mid .perch .perch-item').css('display','none');
	})
	

	//换图片
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
	
	
	// 分类列表插入数据
	// 最外层盒子，包裹一级标题和列表  div class="product_box"
	// 套层：一级标题：div i/span  div class="product_tit"  i class="icon"
	// 列表：ul class="product_lis" > li  a  img/span
	
	var total_box = $('.page .page-main')[0]; // 大外盒
	var total_main = total_list.filter(function(item){
		return item.subId == 0;
	})
	     // 创建大标题
	for(var i=0;i<total_main.length;i++){
		var main_box = document.createElement('div');
		main_box.className = "product_box"; // 标题和列表的盒
		
		var main_tit = document.createElement('div');
		var main_icon = document.createElement('i');
		var main_span = document.createElement('span');
		main_tit.className = "product_tit";
		main_icon.className = "icon";
		
		main_icon.innerHTML = total_main[i].icon;
		main_span.innerText = total_main[i].name;
		
		main_tit.appendChild(main_icon);
		main_tit.appendChild(main_span);
		main_box.appendChild(main_tit)
		
		var sub_ul = document.createElement('ul');
		sub_ul.className = 'product_lis';
		main_box.appendChild(sub_ul);
		
		// 过滤出subID等于id的
		var total_sub = total_list.filter(function(item){
			return item.subId == total_main[i].id;
		})
		     // 创建二级列表
		for(var j=0;j<total_sub.length;j++){
			var sub_li = document.createElement('li');
			var sub_a = document.createElement('a');
			var sub_img = document.createElement('img');
			var sub_span = document.createElement('span');
			
			sub_img.src = total_sub[j].pic;
			sub_span.innerText = total_sub[j].name;
			sub_a.href = './details.html';
			
			sub_a.appendChild(sub_img);
			sub_a.appendChild(sub_span);
			sub_li.appendChild(sub_a);
			sub_ul.appendChild(sub_li);
			
		}
		
		total_box.appendChild(main_box)
	}
	
	// 点击一级标题隐藏列表
	
	$('.product_tit').click(function(){
		
		// this.isStatus 为undefined 转为布尔值 = false  取反 = true
		// 点击不同的标题，this指向的对象会变，新对象this.isStatus的值是新的
		// 点击相同的标题，this.isStatus原先已赋值true，取反 =false
		
		this.isStatus = !this.isStatus;
		
		if(this.isStatus){
			$(this).siblings().css('display','none')
			$(this).find('.icon').css({
				'color':'#ff6700',
				'border-color':'#ff6700'
			})
			$(this).find('.icon').html('&#xe62f');
		}else{
			$(this).siblings().css('display','block')
			$(this).find('.icon').css({
				'color':'#B0B0B0',
				'border-color':'#B0B0B0'
			})
			$(this).find('.icon').html('&#xe858');
		}
	})
	
	//
	
	
	
})