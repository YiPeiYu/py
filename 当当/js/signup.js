window.onload = function(){
	var Button = document.getElementsByTagName("button")[0];
	
	Button.onclick = function(){
		alert("注册成功，请跳转到登录页面");
		open("signin.html","_parent");
	}
}
