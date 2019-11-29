<template>
  <div id="app" class="hostApp">
     <div v-if="checkKey" class="top_nav">
       <el-row>
       <el-col :span="19" style="margin-right:8%;">
       <div class="nav_top"><span style="margin-left:33%;" @click="showTime();">{{nowTime}}</span></div>
       </el-col>
        <el-col :span="3">
       <div class="nav_top" style="display:flex;">
         <i class="el-icon-user"></i>
         <span style="margin:0px 10px; width:100px">操作员:张三</span>
         <i class="el-icon-switch-button" @click="logOut()"></i>
         </div>
         </el-col>
       </el-row>
     </div>
      <el-container style="height:100%" >
      <el-aside v-if="checkKey" id="left" style="width:70px;text-align: center;">
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
    this.checkOne=this.$router.history.current.name;
  },
   mounted(){
     this.check();
     this.checkToken();
     this.timeFormate(new Date());
      if(this.timer){
        clearInterval(this.timer);
       }else{
       this.timer=setInterval(()=>{
           this.timeFormate(new Date());
       },1000);
      }    
   },
  data() {
    return {
     key:localStorage.getItem('Authorization'),
     checkKey:false,
     checkOne:"",
     nowTime:""
    };
  },
  methods:{
    check(){
      this.checkOne=this.$router.history.current.name;
    },
    checkToken(){
      if((this.key!=null || this.key!="")&&(this.$route.name!="Login")){
         this.checkKey=true;
      }
     
    },
    logOut(){
      this.$router.push({ path: '/'});
      this.checkKey=false;
    },
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      let week = new Date(timeStamp).getDay();
      let weeks = ["日","一","二","三","四","五","六"];
      let getWeek = "星期" + weeks[week];
      this.nowTime = year + "-" + month + "-" + date+" "+hh+":"+mm+':'+ss+" "+getWeek.toString();
    },
  },
  watch: {
     $route(to,from){
     if(to.path=="/Login"||to.path=="/"){
        this.checkKey=false;
     }else{
        this.checkKey=true;
     }
      this.checkOne=this.$router.history.current.name;
  }
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
.top_nav{
   width:100%;
   height:50px;
   background: url(./assets/daohang.png) no-repeat;
}
.el-main{
  //background: #f4f4f4;
  //background: #27408B;
  margin: 0px;
  padding:0 !important;
  color:#BFEFFF;
}
.el-aside{
    // opacity:1;
    background-color:#151b2b;
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
   height:100%;
   //background-color: rgb(48, 65, 86);
   background: url(./assets/bg1.png);
   background: cover;
  }
#app i{
  color: #ffff;
  font-size: 30px;
}
.icon_css{
  padding: 5px 0px 5px 0px;
}
.el-aside :hover{
  background-color: #2e3550;
}
.active{
 background-color: #2e3550;
}
.on-font{
  margin-top: 10px;
  font-size: 13px;
}
.nav_top{
  height:35px;color:#FFFFFF;
  text-align:center;
  font-size:18px;
  margin-top:15px;
}
</style>
