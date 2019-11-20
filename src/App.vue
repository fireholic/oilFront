<template>
  <div id="app" class="login_bg">
      <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-aside>
        <el-menu default-active="1" 
        :collapse="false"
        :background-color="red"
        :unique-opened="true"
        :collapse-transition="false">
          <el-menu-item index="1" route="/">
            <i class="el-icon-location"></i>
            <span slot="title">资产包统计</span>
          </el-menu-item>
          <el-menu-item index="2" route="/map">
            <i class="el-icon-menu"></i>
            <span slot="title">处置地图</span>
          </el-menu-item>
          <el-menu-item index="3" route="lawyer">
            <i class="el-icon-document"></i>
            <span slot="title">律师统计</span>
          </el-menu-item>
           <el-menu-item  index="4" route="areadata">
            <i class="el-icon-picture-outline"></i>
            <span slot="title">地区统计</span>
          </el-menu-item>
          <el-menu-item  index="5" route="lawyerMaster">
            <i class="el-icon-s-marketing"></i>
            <span slot="title">律管统计</span>
          </el-menu-item>
           <el-submenu index="6" >
           <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">登录操作</span>
           </template>
             <el-menu-item style="font-size:12px;color:#4876FF" @click="dialogVisible=true">修改密码</el-menu-item>
             <el-menu-item style="font-size:12px;color:#4876FF" @click="logOut">退出登录</el-menu-item>
         </el-submenu>
        </el-menu>
      </el-aside>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-main{
  //background: #f4f4f4;t
  //background: #0099CC;
  color:#BFEFFF
}
.login_bg {
    width: 100%;
    height: 100%;
    background: url("/assets/8.jpg") no-repeat 0 0 /cover;
  }
  .hostApp{
    background-color: #0f3a88;
  }
 .spanS{
   margin-right:15px;
   font-size:14px
}
.demo
  .el-switch__label{
   font-size:12px;
   color:#99CCCC;
}
</style>
