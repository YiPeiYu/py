
onload = function() {
	var oList = document.getElementById("list");
	var aLi = oList.getElementsByTagName("li");

	var oList2 = document.getElementById("list2");
	var aLi2 = oList2.getElementsByTagName("li");
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var Scrolltop = document.getElementById("scroll_top");
	
	Scrolltop.onclick = function(){	
		document.documentElement.scrollTop = document.body.scrollTop = 0;	
	}

	//让图片个数增加一倍
	oList.innerHTML += oList.innerHTML;

	//每张图片的宽度
	var iWidth = aLi[0].offsetWidth;

	//根据图片个数来设置ul的宽度
	oList.style.width = iWidth * aLi.length + "px";

	//声明一个变量i，来计算图片的下标
	var i = 0;

	//启动定时器
	var timer = setInterval(move, 3000);

	//切换图片的方法
	function move() {
		i++; //切换下一张图片
		var iLeft = -iWidth * i; //目标值
		//开始执行动画
		startMove(oList, "left", iLeft, next);

		//修改按钮的状态
		for(var j = 0; j < aLi2.length; j++) {
			if(j == i) { //
				aLi2[j].className = "active";
			} else {
				aLi2[j].className = "";
			}
		}

		if(i == aLi.length / 2) {
			aLi2[0].className = "active";
		}

	}

	//图片执行完毕回调函数
	function next() {
		if(i >= aLi.length / 2) {
			//瞬间移动到第一张图片
			oList.style.left = 0;
			i = 0;
		}
	}

	//=========给按钮添加点击事件
	for(var j = 0; j < aLi2.length; j++) {
		aLi2[j].index = j;
		aLi2[j].onclick = function() {
			i = this.index - 1;
			btnMove();
		}
	}

	//点击按钮之后触发的函数
	function btnMove() {
		move();
		clearInterval(timer);
		timer = setInterval(move, 3000);
	}

	//====实现翻页，添加上一页，下一页功能
	var preBtn = document.getElementById("a1");
	var nextBtn = document.getElementById("a2");

	preBtn.onclick = function() {
		if(i == 0) { //如果是第一张图片，瞬间移动到第4张图片的位置
			oList.style.left = -iWidth * aLi.length / 2 + "px";

			i = aLi.length / 2 - 2;
		} else {
			i = i - 2;
		}

		btnMove();
	}

	nextBtn.onclick = function() {
		next(); //如果到了第四张图片，立马让它变成第一张图片
		btnMove();
	}

	//鼠标移入，鼠标移出事件

	oList.onmouseover = function() {
		clearInterval(timer);
	}

	oList.onmouseout = function() {
		timer = setInterval(move, 3000);
	}
}

