<template>
  <div id="app" class="hostApp">
      <div>
        <img style="float:left;height:35px;padding-left:50px;"  src="./assets/logo.png?v=20171015"  alt=".">
        <h3 style="color:#87CEEB">&nbsp;&nbsp;&nbsp;泸州石油天然气管道外部风险智能监控系统</h3>
      </div>
      <el-container >
      <el-aside style="width:150px;height:1000px;" >
        <el-menu default-active="1" 
        :collapse="false"
        :router="true"
        :unique-opened="true"
        background-color="#2c3e50"
        text-color="#FFFFFF"
        :collapse-transition="false">
          <el-menu-item index="1" route="/NowControl">
            <i class="el-icon-search"></i>
            <span slot="title">实时监控</span>
          </el-menu-item>
          <el-menu-item index="2" route="/History">
            <i class="el-icon-time"></i>
            <span slot="title">历史分析</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="">
            <router-view/>
         </el-main>
    </el-container>
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
    color: #283b4e;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.icons-container{
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
}
.el-main{
  //background: #f4f4f4;
  background: #27408B;
  color:#BFEFFF
}
.el-menu{
  border:0px;
}
.login_bg {
    width: 100%;
    height: 100%;
    background: url("/assets/8.jpg") no-repeat 0 0 /cover;
  }
  .hostApp{
   position: fixed;
   width:100%;
   height:100%;
   background-color: rgb(48, 65, 86);

  }
</style>
