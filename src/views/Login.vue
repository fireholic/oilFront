<template>	
<!-- main -->
 <div id="Login">
    <header>	
			<img src="../assets/log_tittle_bg.png" class="img-fluid" height="auto" max-width="100%">
		</header>
    <div class="container">
        <div class="row row-centered"> 
             <div class="col-md-6 col-centered bg_log">
                <div class="border1">
                    <div class="text-center text_tittle"></div>
                        <form>
                            <div class="form-group">
                            <input type="text" class="form-control input_1" v-model="username"   placeholder="请输入账户">
                             </div>
                            <div class="form-group">
                            <input type="password" class="form-control input_2" v-model="password"  placeholder="请输入密码">
                            </div> 
                            <div class="btn btn-block btn_1" @click="submitForm()">登录</div>
                        </form>
                </div>
            </div>
         </div>
    </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  name: "Login",
  components: {
     
  },
  data() {
    return {
       username:"",
       password:""

    };
  },
  mounted() {
     this.getCookie();
  },
  methods:{
    ...mapMutations(['changeLogin']),
    submitForm() {
        let _this = this;
         if (_this.username != null||_this.password!=" ") {
             console.log(this.username+":"+this.password)
            //let params = {"data":{"userName":this.username,"password":this.password},"key":"dfasdgasdfwer","sid":"12513241235131"};
            // this.axios.post(`/user/login`,params).then(res => {
            //  if(null!=res){
            // this.setCookie(this.username,this.password,30);
            console.log("登陆成功");
            _this.userToken = 'dfasdgasdfwer';
             // 将用户token保存到vuex中
             _this.changeLogin({ Authorization: _this.userToken });
             _this.$router.push('/NowControl');
            //   }    
            // });    
          }else {
               this.$message({ type: 'error', message: '账号密码为空!' });
                console.log("清空Cookie");
                  //清空Cookie
                this.clearCookie();
              }
                   //与后端请求代码，本功能不需要与后台交互所以省略
            },
   setCookie(c_name, c_pwd, exdays) {
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    //获取cookies
    getCookie: function() {
        if (document.cookie.length > 0) {
           var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
          for (var i = 0; i < arr.length; i++) {
               var arr2 = arr[i].split('='); //再次切割
                //判断查找相对应的值
               if (arr2[0] == 'userName') {
                this.username = arr2[1]; //保存到保存数据的地方
               } else if (arr2[0] == 'userPwd') {
                  this.password = arr2[1];
               }
           }
         }
      },
    //清除cookie
     clearCookie: function() {
        this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
     }
  },
  watch: {

  }
};
</script>
<style >
#Login input.form-control:focus{
  outline:none;
  box-shadow:none;
  color:#FFFFFF;
  border-color:#434343;
  background-color:#151b2bD9;
}
</style>