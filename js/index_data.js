var select_placeholder = ['王一博空款手机', '小米10', 'Redmi K30 Pro', '', ''];
var select_list = ['王一博空款手机', '小米10', 'Redmi K30 Pro', '卡丁车', '耳机', '全部商品', '空调', '净水器'];

var children_phone=[
	{
		pic:'img/xmsj1.webp',
		title:'小米10至尊纪念版',
		price:'5299元起'
	},
	{
		pic:'img/xmsj2.webp',
		title:'小米10',
		price:'3499元起'
	},
	{
		pic:'img/xmsj3.webp',
		title:'小米10 青春版 5G',
		price:'1899元起'
	},
	{
		pic:'img/xmsj4.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	}
];

var children_red=[
	{
		pic:'img/red1.webp',
		title:'小米10至尊纪念版',
		price:'5299元起'
	},
	{
		pic:'img/red2.webp',
		title:'小米10',
		price:'3499元起'
	},
	{
		pic:'img/red3.webp',
		title:'小米10 青春版 5G',
		price:'1899元起'
	},
	{
		pic:'img/red4.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	},
	{
		pic:'img/red5.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	},
	{
		pic:'img/red6.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	}
];
var children_tel=[
	{
		pic:'img/tel1.webp',
		title:'小米10至尊纪念版',
		price:'5299元起'
	},
	{
		pic:'img/tel2.webp',
		title:'小米10',
		price:'3499元起'
	},
	{
		pic:'img/tel3.webp',
		title:'小米10 青春版 5G',
		price:'1899元起'
	},
	{
		pic:'img/tel4.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	},
	{
		pic:'img/tel5.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	},
	{
		pic:'img/tel6.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	}
];
var children_note=[
	{
		pic:'img/note1.webp',
		title:'小米10至尊纪念版',
		price:'5299元起'
	},
	{
		pic:'img/note2.webp',
		title:'小米10',
		price:'3499元起'
	},
	{
		pic:'img/note3.webp',
		title:'小米10 青春版 5G',
		price:'1899元起'
	},
	{
		pic:'img/note4.png',
		title:'小米MIX Alpha',
		price:'19999元起'
	},
	{
		pic:'img/note5.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	},
	{
		pic:'img/note6.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	}
];
var children_elec=[
	{
		pic:'img/elec1.webp',
		title:'小米10至尊纪念版',
		price:'5299元起'
	},
	{
		pic:'img/elec2.png',
		title:'小米10',
		price:'3499元起'
	},
	{
		pic:'img/elec3.jpg',
		title:'小米10 青春版 5G',
		price:'1899元起'
	},
	{
		pic:'img/elec4.png',
		title:'小米MIX Alpha',
		price:'19999元起'
	},
	{
		pic:'img/elec5.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	},
	{
		pic:'img/elec6.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	}
];
var children_web=[
	{
		pic:'img/web1.webp',
		title:'小米10至尊纪念版',
		price:'5299元起'
	},
	{
		pic:'img/web2.webp',
		title:'小米10',
		price:'3499元起'
	},
	{
		pic:'img/web3.webp',
		title:'小米10 青春版 5G',
		price:'1899元起'
	},
	{
		pic:'img/web4.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	},
	{
		pic:'img/web5.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	},
	{
		pic:'img/web6.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	}
];
var children_smart=[
	{
		pic:'img/smart1.jpg',
		title:'小米10至尊纪念版',
		price:'5299元起'
	},
	{
		pic:'img/smart2.jpg',
		title:'小米10',
		price:'3499元起'
	},
	{
		pic:'img/smart3.webp',
		title:'小米10 青春版 5G',
		price:'1899元起'
	},
	{
		pic:'img/smart4.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	},
	{
		pic:'img/smart5.jpg',
		title:'小米MIX Alpha',
		price:'19999元起'
	},
	{
		pic:'img/smart6.webp',
		title:'小米MIX Alpha',
		price:'19999元起'
	}
];

var slide_list = [
	{id:1,name:'手机 电话卡',icon:'&#xe853',subId:0},
	{id:2,name:'电视 盒子',icon:'&#xe853',subId:0},
	{id:3,name:'笔记本 显示器',icon:'&#xe853',subId:0},
	{id:4,name:'家电 拆线版',icon:'&#xe853',subId:0},
	{id:5,name:'出行 穿戴',icon:'&#xe853',subId:0},
	{id:6,name:'智能 路由器',icon:'&#xe853',subId:0},
	{id:7,name:'电源 配件',icon:'&#xe853',subId:0},
	{id:8,name:'健康 儿童',icon:'&#xe853',subId:0},
	{id:9,name:'耳机 音箱',icon:'&#xe853',subId:0},
	{id:10,name:'生活 箱包',icon:'&#xe853',subId:0},
	
	// Id 1 的
	{id:11,name:'小米10 至尊纪念版',pic:'img/slide-list/list1-1.webp',subId:1},
	{id:12,name:'小米10 青春版',pic:'img/slide-list/list1-2.webp',subId:1},
	{id:13,name:'腾讯黑鲨游戏手机',pic:'img/slide-list/list1-3.webp',subId:1},
	{id:14,name:'小米云服务',pic:'img/slide-list/list1-4.webp',subId:1},
	{id:15,name:'Redmi K30S 至尊纪念版',pic:'img/slide-list/list1-5.webp',subId:1},
	{id:16,name:'Redmi K30 至尊纪念版',pic:'img/slide-list/list1-6.webp',subId:1},
	{id:17,name:'Redmi K30 Pro',pic:'img/slide-list/list1-7.webp',subId:1},
	{id:18,name:'Redmi K30 5G',pic:'img/slide-list/list1-8.webp',subId:1},
	{id:19,name:'Redmi K30 4G',pic:'img/slide-list/list1-9.webp',subId:1},
	{id:20,name:'Redmi 10X Pro',pic:'img/slide-list/list1-10.webp',subId:1},
	{id:21,name:'Redmi 10X 5G',pic:'img/slide-list/list1-11.webp',subId:1},
	{id:22,name:'Redmi 10X 4G',pic:'img/slide-list/list1-12.webp',subId:1},
	{id:23,name:'Redmi Note 8 Pro',pic:'img/slide-list/list1-13.webp',subId:1},
	{id:24,name:'Redmi Note 8',pic:'img/slide-list/list1-14.webp',subId:1},
	{id:25,name:'Redmi 9A',pic:'img/slide-list/list1-15.webp',subId:1},
	{id:26,name:'Redmi 9',pic:'img/slide-list/list1-16.webp',subId:1},
	{id:27,name:'手机上门维修',pic:'img/slide-list/list1-17.png',subId:1},
	{id:28,name:'Redmi 8',pic:'img/slide-list/list1-18.webp',subId:1},
	{id:29,name:'Redmi 8A',pic:'img/slide-list/list1-19.webp',subId:1},
	{id:30,name:'Redmi 7A',pic:'img/slide-list/list1-20.webp',subId:1},
	{id:31,name:'Redmi 10X 4G',pic:'img/slide-list/list1-21.webp',subId:1},
	{id:32,name:'Redmi 10X 5G',pic:'img/slide-list/list1-22.jpg',subId:1},
	{id:33,name:'中国电信',pic:'img/slide-list/list1-23.webp',subId:1},
	
	// Id 2
	{id:34,name:'小米电视',pic:'img/slide-list/list2-1.webp',subId:2},
	{id:35,name:'小米电视',pic:'img/slide-list/list2-2.webp',subId:2},
	{id:36,name:'小米电视',pic:'img/slide-list/list2-3.webp',subId:2},
	{id:37,name:'小米电视',pic:'img/slide-list/list2-4.webp',subId:2},
	{id:38,name:'小米电视',pic:'img/slide-list/list2-5.webp',subId:2},
	{id:39,name:'小米电视',pic:'img/slide-list/list2-6.webp',subId:2},
	{id:40,name:'小米电视',pic:'img/slide-list/list2-7.webp',subId:2},
	{id:41,name:'小米电视',pic:'img/slide-list/list2-8.webp',subId:2},
	{id:42,name:'小米电视',pic:'img/slide-list/list2-9.webp',subId:2},
	{id:43,name:'小米电视',pic:'img/slide-list/list2-10.webp',subId:2},
	{id:44,name:'小米电视',pic:'img/slide-list/list2-11.webp',subId:2},
	{id:45,name:'小米电视',pic:'img/slide-list/list2-12.jpg',subId:2},
	{id:46,name:'小米电视',pic:'img/slide-list/list2-13.webp',subId:2},
	{id:47,name:'小米电视',pic:'img/slide-list/list2-14.webp',subId:2},
	{id:48,name:'小米电视',pic:'img/slide-list/list2-15.jpg',subId:2},
	{id:49,name:'小米电视',pic:'img/slide-list/list2-16.webp',subId:2},
	{id:50,name:'小米电视',pic:'img/slide-list/list2-17.webp',subId:2},
	{id:51,name:'小米电视',pic:'img/slide-list/list2-18.webp',subId:2},
	{id:52,name:'小米电视',pic:'img/slide-list/list2-19.webp',subId:2},
	{id:53,name:'小米电视',pic:'img/slide-list/list2-20.jpg',subId:2},
	{id:54,name:'小米电视',pic:'img/slide-list/list2-21.webp',subId:2},
	{id:55,name:'小米电视',pic:'img/slide-list/list2-15.jpg',subId:2},
	{id:56,name:'小米电视',pic:'img/slide-list/list2-3.webp',subId:2},
	{id:57,name:'小米电视',pic:'img/slide-list/list2-8.webp',subId:2},
	
	// Id 3的
	{id:58,name:'笔记本',pic:'img/slide-list/list3-1.webp',subId:3},
	{id:59,name:'笔记本',pic:'img/slide-list/list3-2.webp',subId:3},
	{id:60,name:'笔记本',pic:'img/slide-list/list3-3.webp',subId:3},
	{id:61,name:'笔记本',pic:'img/slide-list/list3-4.webp',subId:3},
	{id:62,name:'笔记本',pic:'img/slide-list/list3-5.webp',subId:3},
	{id:63,name:'笔记本',pic:'img/slide-list/list3-6.webp',subId:3},
	{id:64,name:'笔记本',pic:'img/slide-list/list3-7.png',subId:3},
	{id:65,name:'笔记本',pic:'img/slide-list/list3-8.jpg',subId:3},
	{id:66,name:'笔记本',pic:'img/slide-list/list3-9.jpg',subId:3},
	{id:67,name:'笔记本',pic:'img/slide-list/list3-10.webp',subId:3},
	{id:68,name:'笔记本',pic:'img/slide-list/list3-11.webp',subId:3},
	{id:69,name:'笔记本',pic:'img/slide-list/list3-12.webp',subId:3},
	{id:70,name:'笔记本',pic:'img/slide-list/list3-13.webp',subId:3},
	{id:71,name:'笔记本',pic:'img/slide-list/list3-14.png',subId:3},
	{id:72,name:'笔记本',pic:'img/slide-list/list1-15.webp',subId:3},
	
	// Id 4的
	{id:73,name:'家电',pic:'img/slide-list/list1-1.webp',subId:4},
	{id:74,name:'家电',pic:'img/slide-list/list1-2.webp',subId:4},
	{id:75,name:'家电',pic:'img/slide-list/list1-3.webp',subId:4},
	{id:76,name:'家电',pic:'img/slide-list/list1-4.webp',subId:4},
	{id:77,name:'家电',pic:'img/slide-list/list1-5.webp',subId:4},
	{id:78,name:'家电',pic:'img/slide-list/list1-6.webp',subId:4},
	{id:79,name:'家电',pic:'img/slide-list/list1-7.webp',subId:4},
	{id:80,name:'家电',pic:'img/slide-list/list1-8.webp',subId:4},
	{id:81,name:'家电',pic:'img/slide-list/list1-9.webp',subId:4},
	{id:82,name:'家电',pic:'img/slide-list/list1-10.webp',subId:4},
	{id:83,name:'家电',pic:'img/slide-list/list1-11.webp',subId:4},
	{id:84,name:'家电',pic:'img/slide-list/list1-12.webp',subId:4},
	{id:85,name:'家电',pic:'img/slide-list/list1-13.webp',subId:4},
	{id:86,name:'家电',pic:'img/slide-list/list1-14.webp',subId:4},
	{id:87,name:'家电',pic:'img/slide-list/list1-15.webp',subId:4},
	{id:88,name:'家电',pic:'img/slide-list/list1-16.webp',subId:4},
	{id:89,name:'家电',pic:'img/slide-list/list1-17.png',subId:4},
	{id:90,name:'家电',pic:'img/slide-list/list1-18.webp',subId:4},
	{id:91,name:'家电',pic:'img/slide-list/list1-19.webp',subId:4},
	{id:92,name:'家电',pic:'img/slide-list/list1-20.webp',subId:4},
	{id:93,name:'家电',pic:'img/slide-list/list1-21.webp',subId:4},
	{id:94,name:'家电',pic:'img/slide-list/list1-22.jpg',subId:4},
	{id:95,name:'家电',pic:'img/slide-list/list1-23.webp',subId:4},
	{id:96,name:'家电',pic:'img/slide-list/list1-23.webp',subId:4},
	
	// Id 5的
	{id:97,name:'出行',pic:'img/slide-list/list1-1.webp',subId:5},
	{id:98,name:'出行',pic:'img/slide-list/list1-2.webp',subId:5},
	{id:99,name:'出行',pic:'img/slide-list/list1-3.webp',subId:5},
	{id:100,name:'出行',pic:'img/slide-list/list1-4.webp',subId:5},
	{id:101,name:'出行',pic:'img/slide-list/list1-5.webp',subId:5},
	{id:102,name:'出行',pic:'img/slide-list/list1-6.webp',subId:5},
	{id:103,name:'出行',pic:'img/slide-list/list1-7.webp',subId:5},
	{id:104,name:'出行',pic:'img/slide-list/list1-8.webp',subId:5},
	{id:105,name:'出行',pic:'img/slide-list/list1-9.webp',subId:5},
	{id:106,name:'出行',pic:'img/slide-list/list1-10.webp',subId:5},
	{id:107,name:'出行',pic:'img/slide-list/list1-11.webp',subId:5},
	{id:108,name:'出行',pic:'img/slide-list/list1-12.webp',subId:5},
	{id:109,name:'出行',pic:'img/slide-list/list1-13.webp',subId:5},
	{id:110,name:'出行',pic:'img/slide-list/list1-14.webp',subId:5},
	{id:111,name:'出行',pic:'img/slide-list/list1-14.webp',subId:5},
	
	// Id 6的
	{id:112,name:'路由器',pic:'img/slide-list/list1-1.webp',subId:6},
	{id:113,name:'路由器',pic:'img/slide-list/list1-2.webp',subId:6},
	{id:114,name:'路由器',pic:'img/slide-list/list1-3.webp',subId:6},
	{id:115,name:'路由器',pic:'img/slide-list/list1-4.webp',subId:6},
	{id:116,name:'路由器',pic:'img/slide-list/list1-5.webp',subId:6},
	{id:117,name:'路由器',pic:'img/slide-list/list1-6.webp',subId:6},
	{id:118,name:'路由器',pic:'img/slide-list/list1-7.webp',subId:6},
	{id:119,name:'路由器',pic:'img/slide-list/list1-8.webp',subId:6},
	{id:120,name:'路由器',pic:'img/slide-list/list1-9.webp',subId:6},
	{id:121,name:'路由器',pic:'img/slide-list/list1-10.webp',subId:6},
	{id:122,name:'路由器',pic:'img/slide-list/list1-11.webp',subId:6},
	{id:123,name:'路由器',pic:'img/slide-list/list1-12.webp',subId:6},
	{id:124,name:'路由器',pic:'img/slide-list/list1-13.webp',subId:6},
	{id:125,name:'路由器',pic:'img/slide-list/list1-14.webp',subId:6},
	{id:126,name:'路由器',pic:'img/slide-list/list1-14.webp',subId:6},
	
	// Id 7的
	{id:127,name:'电源',pic:'img/slide-list/list1-1.webp',subId:7},
	{id:128,name:'电源',pic:'img/slide-list/list1-2.webp',subId:7},
	{id:129,name:'电源',pic:'img/slide-list/list1-3.webp',subId:7},
	{id:130,name:'电源',pic:'img/slide-list/list1-4.webp',subId:7},
	{id:131,name:'电源',pic:'img/slide-list/list1-5.webp',subId:7},
	{id:132,name:'电源',pic:'img/slide-list/list1-6.webp',subId:7},
	{id:133,name:'电源',pic:'img/slide-list/list1-7.webp',subId:7},
	{id:134,name:'电源',pic:'img/slide-list/list1-8.webp',subId:7},
	{id:135,name:'电源',pic:'img/slide-list/list1-9.webp',subId:7},
	{id:136,name:'电源',pic:'img/slide-list/list1-10.webp',subId:7},
	{id:137,name:'电源',pic:'img/slide-list/list1-11.webp',subId:7},
	{id:138,name:'电源',pic:'img/slide-list/list1-12.webp',subId:7},
	
	// Id 8的
	{id:139,name:'健康',pic:'img/slide-list/list1-1.webp',subId:8},
	{id:140,name:'健康',pic:'img/slide-list/list1-2.webp',subId:8},
	{id:141,name:'健康',pic:'img/slide-list/list1-3.webp',subId:8},
	{id:142,name:'健康',pic:'img/slide-list/list1-4.webp',subId:8},
	{id:143,name:'健康',pic:'img/slide-list/list1-5.webp',subId:8},
	{id:144,name:'健康',pic:'img/slide-list/list1-6.webp',subId:8},
	{id:145,name:'健康',pic:'img/slide-list/list1-7.webp',subId:8},
	{id:146,name:'健康',pic:'img/slide-list/list1-8.webp',subId:8},
	{id:147,name:'健康',pic:'img/slide-list/list1-9.webp',subId:8},
	{id:148,name:'健康',pic:'img/slide-list/list1-10.webp',subId:8},
	{id:150,name:'健康',pic:'img/slide-list/list1-11.webp',subId:8},
	{id:151,name:'健康',pic:'img/slide-list/list1-12.webp',subId:8},
	{id:152,name:'健康',pic:'img/slide-list/list1-7.webp',subId:8},
	{id:153,name:'健康',pic:'img/slide-list/list1-8.webp',subId:8},
	{id:154,name:'健康',pic:'img/slide-list/list1-9.webp',subId:8},
	{id:155,name:'健康',pic:'img/slide-list/list1-10.webp',subId:8},
	{id:156,name:'健康',pic:'img/slide-list/list1-11.webp',subId:8},
	{id:157,name:'健康',pic:'img/slide-list/list1-12.webp',subId:8},
	
	// Id 9的
	{id:158,name:'耳机',pic:'img/slide-list/list1-1.webp',subId:9},
	{id:159,name:'耳机',pic:'img/slide-list/list1-2.webp',subId:9},
	{id:160,name:'耳机',pic:'img/slide-list/list1-3.webp',subId:9},
	{id:161,name:'耳机',pic:'img/slide-list/list1-4.webp',subId:9},
	{id:162,name:'耳机',pic:'img/slide-list/list1-5.webp',subId:9},
	{id:163,name:'耳机',pic:'img/slide-list/list1-6.webp',subId:9},
	{id:164,name:'耳机',pic:'img/slide-list/list1-7.webp',subId:9},
	{id:165,name:'耳机',pic:'img/slide-list/list1-8.webp',subId:9},
	{id:166,name:'耳机',pic:'img/slide-list/list1-9.webp',subId:9},
	{id:167,name:'耳机',pic:'img/slide-list/list1-10.webp',subId:9},
	{id:168,name:'耳机',pic:'img/slide-list/list1-11.webp',subId:9},
	{id:169,name:'耳机',pic:'img/slide-list/list1-12.webp',subId:9},
	{id:170,name:'耳机',pic:'img/slide-list/list1-13.webp',subId:9},
	{id:171,name:'耳机',pic:'img/slide-list/list1-14.webp',subId:9},
	{id:172,name:'耳机',pic:'img/slide-list/list1-14.webp',subId:9},
	{id:173,name:'耳机',pic:'img/slide-list/list1-14.webp',subId:9},
	
	// Id 10的
	{id:174,name:'箱包',pic:'img/slide-list/list1-1.webp',subId:10},
	{id:175,name:'箱包',pic:'img/slide-list/list1-2.webp',subId:10},
	{id:176,name:'箱包',pic:'img/slide-list/list1-3.webp',subId:10},
	{id:177,name:'箱包',pic:'img/slide-list/list1-4.webp',subId:10},
	{id:178,name:'箱包',pic:'img/slide-list/list1-5.webp',subId:10},
	{id:179,name:'箱包',pic:'img/slide-list/list1-6.webp',subId:10},
	{id:180,name:'箱包',pic:'img/slide-list/list1-7.webp',subId:10},
	{id:181,name:'箱包',pic:'img/slide-list/list1-8.webp',subId:10},
	{id:182,name:'箱包',pic:'img/slide-list/list1-9.webp',subId:10},
	{id:183,name:'箱包',pic:'img/slide-list/list1-10.webp',subId:10},
	{id:184,name:'箱包',pic:'img/slide-list/list1-11.webp',subId:10},
	{id:185,name:'箱包',pic:'img/slide-list/list1-12.webp',subId:10},
	{id:186,name:'箱包',pic:'img/slide-list/list1-13.webp',subId:10},
	{id:187,name:'箱包',pic:'img/slide-list/list1-14.webp',subId:10},
	{id:188,name:'箱包',pic:'img/slide-list/list1-14.webp',subId:10},
];
// 一级 ul  li  a  span/icon
// 二级 与一级a同级 div   ul  li  a/span


//空调list的数据

var pro_list = [
	{
		img:'img/list/pro1.jpg',
		tit:'巨省电 | 小米新1级空调A 1.5匹',
		desc:'变频节能巨省电，自清洁',
		strong:'2199',
		tip:'元',
		del:'2399元'
	},
	{
		img:'img/list/pro1.jpg',
		tit:'巨省电 | 小米新1级空调A 1.5匹',
		desc:'变频节能巨省电，自清洁',
		strong:'2199',
		tip:'元',
		del:'2399元'
	}
]









