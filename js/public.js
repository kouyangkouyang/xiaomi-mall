//数组去重
function qc(arr) {
	var obj1 = {};
	for (var i = 0; i < arr.length; i++) {
		if ( ! obj1[arr[i]]) {
			obj1[arr[i]] = arr[i];
		}
	}
	return Object.values(obj1);  // 返回去重后的数组
}


//封装一个判断数据类型的方法
function Sclass(sj){
	//return typeof(sj);
	return Object.prototype.toString.call(sj)
}


//写一个方法可以获取范围内的随机数
function ran(num1, num2) {
	var max = Math.max(num1, num2);
	var min = Math.min(num1, num2);
	var ran = parseInt(Math.random() * (max - min + 1)) + min;  // 本身随机就包括15，+1包括29
	return ran;
}


// 获取随机颜色
function getColor() {
  var str = "#";
  //定义一个十六进制的值的数组
  var lzp = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  // 遍历循环产生 6 个数
  for (var i = 0; i < 6; i++) {
	//随机产生 0~15 的个索引数,然后根据该索引找到数组中对应的值,拼接到一起
	var lut = parseInt(Math.random() * 16);
	str += lzp[lut];
  }
  return str;
}


//获取随机验证码
function ranTeam(n) {
	var arr = [];
	for (var i = 1; i <= n; i++) {
		var num = ran(48,122); // 每循环一次随机一次
		// var num = parseInt(Math.random() * 123);
		if (num >= 48 && num <= 57 || num >= 97 && num <= 122 || num >= 65 && num <= 90) {
			arr.push(String.fromCharCode(num));
		} else {
			i--;
		}
	}
	return arr.join('');
}


//获取键值对
function Addres(arr){
	var arr1=arr.split('?')[1];
	var arr2=arr1.split('&');
	var obj={};
	arr2.map(function(item){
		var arr3=item.split('=');
		obj[arr3[0]]=arr3[1];
	})
	return obj;
}


//日期对象：自定义显示当前时间
function showTime() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1; // 0~11
	var day = d.getDate();
	var week = d.getDay(); // 0~6 0是周日
		week = numOfChinese(week);  // 调用函数 var week = numOfChinese(d.getDay());
	var hour = d.getHours();
		hour = doubleTime(hour);    // 调用函数 var hour = doubleTime(d.getHours());
	var min = d.getMinutes();
		min = doubleTime(min);      // 调用函数 var min = doubleTime(d.getMinutes());
	var sec = d.getSeconds();
		sec = doubleTime(sec);      // 调用函数 var sec = doubleTime(d.getSeconds());
	var str = year + '年' + month + '月' + day + '日 星期' + week + ' ' + hour + '：' + min + '：' + sec;
	return str;    //2020年10月24日 星期6 14：45：7
}


//星期几的数字转中文
function numOfChinese(num) {
	var arr = ['日', '一', '二', '三', '四', '五', '六'];
	return arr[num];
}


//时间个位数时前边加0
function doubleTime(time) {
	if (time < 10) {
		return '0' + time;
	} else {
		return time;
	}
}


//跨浏览器兼容      两个值：获取谁的样式，获取哪种样式
function getStyle(node,cssStyle){
	// 三目运算
	return node.currentStyle?node.currentStyle[cssStyle]:getComputedStyle(node)[cssStyle];
}


//为了兼容性，IE8以下浏览器不支持elementsByClassName()
//两个参数：传入的节点、查找的类名
function elementsByClassName( node , classN ){   
	var nodes=node.getElementsByTagName( '*' );  
	var arr =[];    // 用于存放符合条件的节点
	for(var i=0;i<nodes.length;i++){
		if( nodes[i].className==classN ){
			arr.push( nodes[i] );
		}
	}
	return arr;
}


//封装一个$方法，可以拥有上述几种获取元素节点的功能
function $(str){
	switch(str.charAt(0)){
		case '#': return document.getElementById(str.slice(1));
			break;
		case '.': return elementsByClassName(document,str.slice(1));
			break;
		case '[': return document.getElementsByName(str.slice(6,str.length-1));
			break;
		default: return document.getElementsByTagName(str);
	}
}

// 封装跨浏览器兼容的阻止事件冒泡的函数
function stopBubble(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble=true;
	}
}


// 封装阻止超链接默认行为的函数
function preDef(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		window.event.returnValue=false;
	}
}


// 拖拽的封装函数
function DragAndDrop(dom){
	for(var i=0;i<dom.length;i++){
		var _this;
		dom[i].onmousedown=function(e) {
			var e = event || window.event;
			_this = this;
			var mLeft = e.clientX - this.offsetLeft;
			var mTop = e.clientY - this.offsetTop;
			document.onmousemove=function(e) {
				var e = event || window.event;
				_this.style.left= e.clientX - mLeft + 'px';
				_this.style.top =e.clientY - mTop + 'px';
			}
			_this.onmouseup=function() {
				document.onmousemove = null;
			}
		}
	}
}


// 限制拖拽出界的封装函数
function limitDrag(node) {
	// 为了限制出界，获取当前窗口的宽高
	node.onmousedown = function(e) {
		var e = e || window.event;
		var offsetX = e.clientX - node.offsetLeft;
		var offsetY = e.clientY - node.offsetTop;
		
		document.onmousemove = function(e) {
			var e = e || window.event;
			var lft = e.clientX - offsetX;
			var tp = e.clientY - offsetY;
			var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
			if(lft<=0){
				lft=0;
			}
			if(lft>=windowWidth-node.offsetWidth){
				lft=windowWidth-node.offsetWidth;
			}
			var windowheight = document.documentElement.clientHeight || document.body.clientHeight;
			if(tp<=0){
				tp=0;
			}
			if(tp>=windowheight-node.offsetHeight){
				tp=windowheight-node.offsetHeight;
			}
			node.style.left = lft + 'px';
			node.style.top = tp + 'px';
		}
	}
	document.onmouseup = function() {
		document.onmousemove = null;
	}
}







