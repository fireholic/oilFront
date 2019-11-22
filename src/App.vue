<template>
  <div id="app" class="hostApp">
      <div style="background-color:#17314b;padding:12px 0px 5px 0px">
        <img style="float:left;height:35px;padding-left:50px;"  src="./assets/logo.png?v=20171015"  alt=".">
        <h3 style="color:#87CEEB">&nbsp;&nbsp;&nbsp;泸州石油天然气管道外部风险智能监控系统</h3>
      </div>
      <el-container >
      <el-aside id="left" style="width:70px;text-align: center;">
          <div :class="{active:checkOne=='NowControl'}" class="icon_css" @click="check()">
          <router-link to="/NowControl">
          <i class="el-icon-pie-chart">
            <div class="on-font" slot="title">实时监控</div>
          </i>
         </router-link>
          </div>
          <div :class="{active:checkOne=='history'}" class="icon_css" @click="check()">
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
   created(){
     this.checkOne=this.$router.history.current.name
      console.log(this.checkOne);
  },
  data() {
    return {
     checkOne:""
    };
  },
  methods:{
    check(){
      this.checkOne=this.$router.history.current.name;
      console.log(this.checkOne);
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
#left.div{
  width:70px;
  color: #ffff;
  font-size: 38px;
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
  //background: #27408B;
  margin: 17px 0px 0px 12px;
  padding:0 !important;
  color:#BFEFFF;
}
.el-aside{
    // opacity:1;
    background-color:#17314b;
}
.el-menu{
  border:0px;
}
.login_bg {
    width: 100%;
    height: 100%;
  }
  .hostApp{
   position: fixed;
   width:100%;
   //height:100%;
   //background-color: rgb(48, 65, 86);
   background: url(./assets/bg1.jpg) no-repeat;
	// background: cover;
  }
i{
  color: #ffff;
  font-size: 30px;
}
.icon_css{
  padding: 5px 0px 5px 0px;
}
.active{
 background-color: #7A67EE;
}
.on-font{
  margin-top: 10px;
  font-size: 13px;
}
</style>
