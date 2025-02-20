(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{193:function(v,e,a){"use strict";a.r(e);var r=a(0),n=Object(r.a)({},(function(){var v=this.$createElement;this._self._c;return this._m(0)}),[function(){var v=this,e=v.$createElement,a=v._self._c||e;return a("div",{staticClass:"content"},[a("h4",{attrs:{id:"一、数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、数组"}},[v._v("#")]),v._v(" 一、数组")]),v._v(" "),a("p",[a("em",[v._v("特征")]),v._v("：方括号［］，如：")]),v._v(" "),a("pre",[a("code",[v._v('var arr = ["a","b","c"];\n')])]),v._v(" "),a("h4",{attrs:{id:"二、对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、对象"}},[v._v("#")]),v._v(" 二、对象")]),v._v(" "),a("p",[a("em",[v._v("定义")]),v._v("： 对象是带有"),a("strong",[v._v("属性")]),v._v("和"),a("strong",[v._v("方法")]),v._v("的特殊数据类型，JavaScript 中所有事物(字符串、数组、函数...)都是对象。\n"),a("em",[v._v("分类")]),v._v("：(1) 自定义对象；(2) 内建对象: Array/Math/Date；(3)浏览器宿主对象: window/document;")]),v._v(" "),a("pre",[a("code",[v._v('var Person = {name:"cc",age:"18"};  //自定义对象\n\nvar arr = new Array();   //内建Array对象\narr.length; arr.sort();  //对象属性&方法\n\ndocument.getElementById("id"); //宿主对象\n')])]),v._v(" "),a("h4",{attrs:{id:"三、json对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、json对象"}},[v._v("#")]),v._v(" 三、JSON对象")]),v._v(" "),a("p",[v._v('所谓JSON只是一种数据格式，用花括号{ }包裹，数据以 "key":"value" 键值对的形式出现，值 可以是： 字符串/数组/对象...')]),v._v(" "),a("pre",[a("code",[v._v('var Person = {"name":"cc","age":"18"};  //键要加引号！！！\n')])]),v._v(" "),a("p",[v._v("如下所示，JSON对象与自定义对象相似，区别在于"),a("strong",[v._v("JSON对象的键一定要加引号！")]),v._v("。（如果不清楚自己写的是不是JSON，可以百度在线JSON格式校验！）")]),v._v(" "),a("h4",{attrs:{id:"四、json对象数组-json数组对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、json对象数组-json数组对象"}},[v._v("#")]),v._v(" 四、JSON对象数组 & JSON数组对象")]),v._v(" "),a("p",[v._v("看到这两个名字你一定觉得有点晕了，数组对象vs对象数组，听起来充满玄机，其实按照字面意思很好理解哒：")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("JSON对象数组\n首先，可以确定这是一个数组，因此数据格式一定是这样 "),a("code",[v._v("var arr = [ ];")]),v._v("，用方括号包裹起来的。\n其次，数组中的内容是什么呢？没错，是JSON对象，所以应该是这样"),a("code",[v._v('var arr = [{"key1":"value1"},{"key2":"value2"},...];')]),v._v("，这样是不是很好理解了呢！")])]),v._v(" "),a("li",[a("p",[v._v("JSON数组对象\n同理，首先它是一个对象，应该是这样"),a("code",[v._v('var obj = {"key":"value"};')]),v._v("，用花括号包裹起来，数据用键值对表示。\n其次，前面说过，JSON对象中值的内容可以是字符串/数组/对象...，这里我们把value的形式确定为数组，即"),a("code",[v._v('var obj = {"key":[1,2,3]};')]),v._v("\n当然这里我们可以写的更复杂些，把普通数组替换成JSON数组，就是这样："),a("code",[v._v('var obj = {"key":[{"key1":"value1"},{"key2":"value2"},...]};')])]),v._v(" "),a("p",[v._v('var arr = [{"key1":"value1"},{"key2":"value2"},...]; //JSON对象数组\nvar obj = {"key":[{"key1":"value1"},{"key2":"value2"},...]}; //JSON数组对象')])])]),v._v(" "),a("p",[v._v('五、JSON字符串\n这个很好理解啦，就是字符串，用引号""包裹，内容是JSON对象')]),v._v(" "),a("pre",[a("code",[v._v('var str = \'{"name":"cc","age":"18"}\';  //JSON字符串\n')])]),v._v(" "),a("p",[v._v("六、JSON对象与JSON字符串互转")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("JSON.parse() —— 字符串转对象")]),v._v(" "),a("p",[v._v('var str = \'{"name":"cc","age":"18"}\';\nvar obj = str.JSON();\nconsole.log(obj); //Object {name: "huangxiaojian", age: "23"}')])]),v._v(" "),a("li",[a("p",[v._v("JSON.stringify() —— 对象转字符串")]),v._v(" "),a("p",[v._v('var obj = {"name":"cc","age":"18"};\nvar str = JSON.stringify(obj);\nconsole.log(typeof str+str); //string {"name":"cc","age":"18"}')])])]),v._v(" "),a("p",[v._v("以上就是个人总结的一些关于JSON的知识点，希望能帮到各位童鞋～\n（完）")])])}],!1,null,null,null);e.default=n.exports}}]);