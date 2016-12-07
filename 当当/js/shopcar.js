onload = function() {
	var oList = document.getElementById("goods");
	var GOODNAMES = "GOODSNAMES"; //cookie记录商品名字数组的key
	var GOODPRICES = "PRICES"; //cookie记录商品价数组的key
	var GOODNUM = "NUM";
	//====cookie 读取cookie里的数据
	var goodsNameStr = getCookie(GOODNAMES);
	var goodsPriceStr = getCookie(GOODPRICES);
	var goodsNumStr = getCookie(GOODNUM);

	//===把字符串转化为数组
	var goodsNameArray = [];
	var goodsPriceArray = [];
	var goodsNumArray = [];
	if(goodsNameStr) {
		goodsNameArray = goodsNameStr.split("&");
		goodsPriceArray = goodsPriceStr.split("&");
		goodsNumArray = goodsNumStr.split("&");
	}

	//=====end cookie

	for(var i = 0; i < goodsNameArray.length; i++) {
		var name = goodsNameArray[i];
		var price = goodsPriceArray[i];
		var num  = goodsNumArray[i];
		var oTd1 = document.createElement("td");
		var oTd2 = document.createElement("td");
		var oTd3 = document.createElement("td");
		var oTd4 = document.createElement("td");
		var oTd5 = document.createElement("td");
		oTd1.innerHTML = name;
		oTd2.innerHTML = price;
		oTd3.innerHTML = 1;
		oTd4.innerHTML = price;
		oTd5.innerHTML = "删除";
		var oTr = document.createElement("tr");
		oTr.appendChild(oTd1);
		oTr.appendChild(oTd2);
		oTr.appendChild(oTd3);
		oTr.appendChild(oTd4);
		oTr.appendChild(oTd5);
		oList.appendChild(oTr);
	}
}