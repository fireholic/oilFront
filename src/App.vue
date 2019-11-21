<template>
  <div id="app" class="hostApp">
      <div>
        <img style="float:left;height:35px;padding-left:50px;"  src="./assets/logo.png?v=20171015"  alt=".">
        <h3 style="color:#87CEEB">&nbsp;&nbsp;&nbsp;泸州石油天然气管道外部风险智能监控系统</h3>
      </div>
      <el-container >
      <el-aside style="width:70px;text-align: center;">
          <div class="icon_css" @mouseenter="enter(id)">
          <router-link to="/NowControl">
          <i class="el-icon-search">
            <div class="on-font" slot="title">实时监控</div>
          </i>
         </router-link>
          </div>
          <div  id="index1" class="icon_css">
          <router-link to="/History">
          <i class="el-icon-time">
            <div class="on-font" slot="title">历史分析</div>
          </i>
         </router-link>
          </div>
        <!--<el-menu default-active="1" 
        :collapse="false"
        :router="true"
        background-color="#2c3e50"
        text-color="#FFFFFF"
        :collapse-transition="false">
          <el-menu-item index="1" route="/NowControl">
            <i class="el-icon-search"></i>
            <span class="on-font" slot="title">实时监控</span>
          </el-menu-item>
          <el-menu-item index="2" route="/History">
            <i class="el-icon-time"></i>
            <span slot="title">历史分析</span>
          </el-menu-item>
        </el-menu>-->
      </el-aside>
       <el-main>
            <router-view/>
       </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
  
    };
  },
  methods:{
    enter(id){
       console.log(id);
    }
  },
  watch: {

  }
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
  color:#BFEFFF;
}
.el-aside{
     opacity:0.5;
     background-color:#2c3e50;
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
i{
  color: #ffff;
  font-size: 30px;
}
.icon_css{
  margin: 9px 0px 9px 0px;
  width:70px;
  color: #ffff;
  font-size: 40px;
}
.on-font{
  margin-top: 10px;
  font-size: 14px;
}
</style>
