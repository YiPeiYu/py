window.onload = function() {
	var oList = document.getElementById('list');
	var aLi = oList.getElementsByTagName("li");

	for(var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onmouseover = function() {
			//切换显示和隐藏
			var index = this.index; //得到对应li的下标

			for(var j = 0; j < aLi.length; j++) {

				//获取到box1,2后面的数字
				var idStr = "box" + (j + 1);
				var box = document.getElementById(idStr); //box1,box2

				//判断当前点击的是谁
				if(this == aLi[j]) {
					this.className = "active";
					box.style.display = "block"; //显示
				} else {
					aLi[j].className = "";
					box.style.display = "none"; //隐藏
				}
			}

		}
	}
	var oList = document.getElementsByTagName("ul")[0];
	var aImg = oList.getElementsByTagName("img");
	var oBigImg = document.getElementById("bigImg"); //大图

	for(var i = 0; i < aImg.length; i++) {
		//鼠标移入
		aImg[i].onmouseover = function(evt) {
			var oEvent = evt || event;

			//更换图片1
			oBigImg.src = this.src.replace(".jpg", "_big.jpg");
			//把当前选中的小图的边框变成红色
			this.parentNode.style.border = "1px solid red";
		}

		//鼠标移出
		aImg[i].onmouseout = function(evt) {
			//当移出的小图片边框改回灰色
			this.parentNode.style.border = "1px solid gray";
		}
		var A1 = document.getElementById("a1");
		var A2 = document.getElementById("a2");
		var Input = document.getElementById("input");
		var num = Input.value;
		
		A1.onclick = function(){
			Input.value = num--;
		}
		A2.onclick = function(){
			Input.value = num++;
		}
	}


}