onload = function() {
	var aLi = document.getElementsByTagName("li");

	var GOODNAMES = "GOODSNAMES"; //cookie记录商品名字数组的key
	var GOODPRICES = "PRICES"; //cookie记录商品价数组的key
	var GOODNUM = "NUM";
	
	//====cookie
	//先从读取下cookie，看看之前是否有存过数据，存过则读取出来
	//在之前的基础之上追加
	var goodnamesStr = getCookie(GOODNAMES); //注意读取出来的数据类型为字符串
	var goodpricesStr = getCookie(GOODPRICES);
	var goodnumStr = getCookie(GOODNUM);

	var goodnamesArray = []; //存储从cookie读取的，转化为数组的商品名字
	var goodpricesArray = []; //存储从cookie读取的，转化为数组的商品价格
	var goodnumArray = [];
	if(goodnamesStr) {
		//因为对去出来的数据为字符串，不便于我们操作，所以讲字符串转化为数组
		//这里注意我们一定要统一分割字符串的字符,这里用 &
		goodnamesArray = goodnamesStr.split("&");

		goodpricesArray = goodpricesStr.split("&");
		
		goodnumArray = goodnumStr.split("&");

	}
	console.log("goodnamesArray:" + goodnamesArray);

	//没有则直接添加到cookie中

	//====end cookie

	var goodsNameArray = []; //存储商品名字的数组
	var goodsPriceArray = []; //存储商品价格的数组
	var goodsNumArray = [];
	
	for(var i = 0; i < aLi.length; i++) {
		var oA = aLi[i].getElementsByTagName("a")[0]; //a节点
		oA.onclick = function() {
			var aSpan = this.parentNode.getElementsByTagName("span");
			var Input1 =document.getElementsByClassName("input")[0];
			var name = aSpan[0].innerHTML;
			var price = aSpan[1].innerHTML;
			var num = Input1.value;

			var d = new Date();
			d.setDate(d.getDate() + 7); //7天后的日期
			//                      var cookieText = setCookie(name, price, d);
			//===把数据都存到cookie中
			saveGoods(name, price,num);

		}

	}

	function saveGoods(name, price,num) {
		goodnamesArray.push(name);
		goodpricesArray.push(price);
		goodnumArray.push(num);

		console.log("goodnumArray:" + goodnumArray);

		//因为cookie中只能存字符串类型的数据，所以我们要操作的时候必须
		//把数据类型转化为str
		var tmpNameStr = goodnamesArray.join("&"); //字符串和数组之间的相互转化的字符串要一致
		var tmpPriceStr = goodpricesArray.join("&"); //
		var tmpNumStr = goodnumArray.join("&");

		console.log("tmpNameStr:" + tmpNameStr);

		//cookie的数据准备好了，接下来就是更新cookie里的数据
		removeCookie(GOODNAMES);
		removeCookie(GOODPRICES);
		removeCookie(GOODNUM);
		var d = new Date();
		d.setDate(d.getDate() + 7);

		setCookie(GOODNAMES, tmpNameStr, d);
		setCookie(GOODPRICES, tmpPriceStr, d);
		setCookie(GOODNUM, tmpNameStr, d);
	}
		var aSpan1 = document.getElementsByTagName("span")[2];
		var A1 = aSpan1.getElementsByTagName("button")[0];
		var A2 = aSpan1.getElementsByTagName("button")[1];
		var Input = aSpan1.getElementsByTagName("input")[0];
		var Num = Input.value;
		
		A1.onclick = function(){
			Input.value = Num--;
		}
		A2.onclick = function(){
			Input.value = Num++;
		}
}