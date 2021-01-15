$(function(){
	// 隐藏国家
	var isClick = false;
	$('.listwrap_cry .listtit').click(function(){
		if(!isClick){
			$('.listwrap_cry .country-container-box').css('display','block')
			$('.listwrap_tel .country-container-box').css('display','none')
			isClick = true;
		}else{
			$('.listwrap_cry .country-container-box').css('display','none')
			$('.listwrap_tel .country-container-box').css('display','none')
			isClick = false;
		}
	})
	$('.listwrap_cry .country-code .record').click(function(){
		$('.listtit .result-select').text($(this).text());
		$('.listwrap_cry .country-container-box').css('display','none')
	})
	
	// 隐藏号码
	var isClickT = false;
	$('.listwrap_tel .reg-phone').click(function(){
		if(!isClickT){
			$('.listwrap_cry .country-container-box').css('display','none')
			$('.listwrap_tel .country-container-box').css('display','block')
			isClickT = true;
		}else{
			$('.listwrap_cry .country-container-box').css('display','none')
			$('.listwrap_tel .country-container-box').css('display','none')
			isClickT = false;
		}
	})
	
	// 手机号码判断
	var oBtn = $('.fixed_bot .btnSub')[0];
	var Phone = $('.listwrap_tel .labelbox input')[0];
	var errTip = $('.listwrap_tel .err_tip')[0];
	var errCon = $('.listwrap_tel .err_tip .con_err')[0];
	var box = $('.listwrap_tel .labelbox')[0];
	var telInput = $('.listwrap_tel .labelbox input')[0];
	var re=/^1\d{10}/;
	oBtn.onclick = function(){
		if(Phone.value == ''){
			errTip.style.display = 'block';
			errCon.innerText = '请输入手机号';
			box.style.border = '1px solid #f66';
		}else if(!re.test(Phone.value)){
			errTip.style.display = 'block';
			errCon.innerText = '手机号码格式不正确';
			box.style.border = '1px solid #f66';
		}else{
			errTip.style.display = 'none';
			errCon.innerText = '';
			box.style.border = '1px solid #e8e8e8';
			location.assign('./person_center.html')
		}
		
	}
	
	// 输入框失去焦点判断手机号
	telInput.onblur = function(){
		if(Phone.value == ''){
			errTip.style.display = 'block';
			errCon.innerText = '请输入手机号';
			box.style.border = '1px solid #f66';
		}else if(!re.test(Phone.value)){
			errTip.style.display = 'block';
			errCon.innerText = '手机号码格式不正确';
			box.style.border = '1px solid #f66';
		}else{
			errTip.style.display = 'none';
			errCon.innerText = '';
			box.style.border = '1px solid #e8e8e8';
		}
	}
	
	
	
})