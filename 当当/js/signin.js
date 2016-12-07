window.onload = function() {
                var aInput = document.getElementsByTagName("input");

                //判断是否保存了账号和密码
                var oldAccount = getCookie("account");
                var oldPassword = getCookie("password");
				console.log(document.cookie);
                if (oldAccount) {
                    aInput[0].value = oldAccount;
                    aInput[1].value = oldPassword;
                }

                //点击提交
                aInput[3].onclick = function() {

                    if (aInput[2].checked) {
                        var account = aInput[0].value; //账号
                        var pwd = aInput[1].value; //密码

                        var d = new Date();
                        d.setDate(d.getDate()+7); //7天后的日期
                        setCookie("account", account, d);
                        setCookie("password", pwd, d);
                        console.log("提交之后："+document.cookie);
                    }
                    form.submit();
                }

            }
            
            //====调试测试用
            function removeCookieClick(){
            		removeCookie("account");
            		removeCookie("password");
            }