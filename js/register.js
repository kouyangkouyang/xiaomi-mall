$(function(){
	
	// 点击标题换账号、扫码登录
	$('.tabs-nav .navtab-link').click(function(){
	
		$('.tabs-nav .navtab-link').removeClass('now');
		$(this).addClass('now');
		
		if($(this).html()=='帐号登录'){
			$('.tabs-con').css('display','block');
			$('.ercode_area').css('display','none');
		}else if($(this).html()=='扫码登录'){
			$('.tabs-con').css('display','none');
			$('.ercode_area').css('display','block');
		}
	})
	
	// 点击手机短信登录换表单,以及相反,以及更新表单
	$('.loginbox .sms_link').click(function(){
		
		if($('.loginbox .sms_link p').html()=='手机短信登录/注册'){
			
			$('.loginbox .sms_link p').html('用户名密码登录');
			$('.pwdLogin').css('display','none');
			$('.textLogin').css('display','block');
			$('.reg_login').css('display','none');
			$('.sms_login').css('display','block');
			errTip.style.display = 'none';
			User.style.border = '1px solid #e0e0e0';
			Pwd.style.border = '1px solid #e0e0e0';
			User.value = '';
			Pwd.value = '';
			$('.pwdBtn').css('display','none');
			$('.textBtn').css('display','block');
			
		}else if($('.loginbox .sms_link p').html()=='用户名密码登录'){
			
			$('.loginbox .sms_link p').html('手机短信登录/注册');
			$('.pwdLogin').css('display','block');
			$('.textLogin').css('display','none');
			$('.reg_login').css('display','block');
			$('.sms_login').css('display','none');
			errTip.style.display = 'none';
			User.style.border = '1px solid #e0e0e0';
			Pwd.style.border = '1px solid #e0e0e0';
			Tel.value = '';
			Code.value = '';
			$('.pwdBtn').css('display','block');
			$('.textBtn').css('display','none');
			
		}
	})
	
	// 密码登录：表单验证
	var oBtn = $('.lgn_btn')[0];
	var User = $('.login_user input')[0];
	var Pwd = $('.login_pwd input')[0];
	var errTip = $('.err_tip')[0];
	var errCon = $('.err_tip .err-con')[0];
	
	oBtn.onclick = function(){
		   // 用户名 密码
		if(User.value == ''){
			errTip.style.display = 'block';
			errCon.innerHTML = '请输入账号'
			User.style.border = '1px solid #FF6700';
			Pwd.style.border = '1px solid #e0e0e0';
		}else if(Pwd.value == '' && User.value != ''){
			errTip.style.display = 'block';
			errCon.innerHTML = '请输入密码'
			Pwd.style.border = '1px solid #FF6700';
			User.style.border = '1px solid #e0e0e0';
		}else if(Pwd.value == '' && User.value == ''){
			errTip.style.display = 'block';
			errCon.innerHTML = '请输入账号'
			User.style.border = '1px solid #FF6700';
			Pwd.style.border = '1px solid #e0e0e0';
		}else{
			if(User.value == '15092327421' && Pwd.value == '123456'){
				errTip.style.display = 'none';
				User.style.border = '1px solid #e0e0e0';
				$('.btns .pwdBtn').click(function(){
					open('./person_center.html');
				})
			}else{
				errTip.style.display = 'block';
				errCon.innerHTML = '用户名或密码不正确'
				User.style.border = '1px solid #FF6700';
				Pwd.style.border = '1px solid #e0e0e0';
			}
		}
	}
	
	// 短信登录：表单验证
	var oBtnNow = $('.textBtn')[0];
	var Tel = $('.login_phone input')[0];
	var Code = $('.login_code input')[0];
	var codeBtn = $('#getSMSCode')[0];
	var labelPhone= $('.login_phone')[0];
	var labelCode= $('.login_code')[0];
	var re=/^1\d{10}/;
	
	oBtnNow.onclick = function(){
		// 短信登录验证：电话，验证码
		if(Tel.value == ''){
			errTip.style.display = 'block';
			errCon.innerHTML = '请输入手机号'
			labelPhone.style.border = '1px solid #FF6700';
			labelCode.style.border = '1px solid #e0e0e0';
			
		}else if(!re.test(Tel.value)){
			errTip.style.display = 'block';
			errCon.innerHTML = '手机号码格式不正确'
			labelPhone.style.border = '1px solid #FF6700';
			labelCode.style.border = '1px solid #e0e0e0';
		}else if(Code.value == ''){
			errTip.style.display = 'block';
			errCon.innerHTML = '请输入验证码'
			labelCode.style.border = '1px solid #FF6700';
			labelPhone.style.border = '1px solid #e0e0e0';
		}else{
			errTip.style.display = 'none';
			labelPhone.style.border = '1px solid #e0e0e0';
			labelCode.style.border = '1px solid #e0e0e0';
		}
		
	}
	
	codeBtn.onclick = function(){
		if(Tel.value == ''){
			errTip.style.display = 'block';
			errCon.innerHTML = '请输入手机号'
			labelPhone.style.border = '1px solid #FF6700';
			labelCode.style.border = '1px solid #e0e0e0';
		}else{
			errTip.style.display = 'none';
			labelPhone.style.border = '1px solid #e0e0e0';
			labelCode.style.border = '1px solid #e0e0e0';
		}
	}
	
	
	
	
	
})