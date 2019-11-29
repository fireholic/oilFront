<template>
  <div id="NowControl">
  <div class="back_box" style="margin:30px 0px 10px 25px;display:flex">
     <div :class="{btn1:dialogVisible==true}" class="button1" style="border-top-left-radius:20px;" @click="dialogVisible=true">全局</div>
     <div :class="{btn1:dialogVisible==false}" class="button1" style="border-top-right-radius:20px;" @click="dialogVisible=false">监控</div>
  </div>
  <div class="back_box" style="margin-top:5px;height=:500px">
    <div style="width:100%';display:flex" v-show="dialogVisible==false">
    <div style="display:block">
     <div class="step" style="width:304px;height:160px">
             <MonitorStatus/>
        </div>
         <div class="step" style="width:304px;height:345px">
        <MonitorDetail/>
      </div>
    </div>
    <div class="big_box">
    <div class="video_border">
       <div class="video_box">
         <MonitorVideo/>
      </div>  
    </div>
    </div>
    </div>
  </div>
  <div class="are_box" v-show="dialogVisible==true">
  <div class="map_border" >
     <div class="map_box">
      <AreStatus/>
   </div>
  </div>
  </div>
    <!-- <el-row  class="map_border" v-show="dialogVisible==true">
        <AreStatus/>
     </el-row>-->
     <!--<el-row v-show="dialogVisible==false">
       <el-col :span="4">
           <div class="step" style="height:200px">
             <MonitorStatus/>
           </div>
           <div class="step" style="height:350px">
             <MonitorDetail/>
           </div>
       </el-col>
       <el-col class="video_border" style="height:560px;" :span="19">
         <div>
            <MonitorVideo/>
           </div>
         </el-col>
     </el-row>-->

     <el-row>
        <el-col :span="24" style="height:160px;">
          <div style="margin:10px 35px 0px 15px" > 
             <PutInfoList/>
            </div>
          </el-col>
     </el-row>
  </div>
</template>

<script>
import MonitorStatus from "../components/MonitorStatus.vue";
import MonitorDetail from "../components/MonitorDetail.vue";
import PutInfoList from "../components/PutInfoList.vue";
import MonitorVideo from "../components/MonitorVideo.vue"
import AreStatus from "../components/AreStatus.vue"

export default {
  name: "NowControl",
  components: {
     MonitorStatus,
     MonitorDetail,
     PutInfoList,
     MonitorVideo,
     AreStatus
  },
  data() {
    return {
     dialogVisible:true
    };
  },
  methods:{

  },
  watch: {

  }
};
</script>

<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  height: 400px;
}
.colWitdth{
  display:inline;
  border:none;
  color:#FFFFFF;
}
#NowControl .el-col{
  margin:0px 0px 0px 10px;
  font-size:10px;
  /*color:#3B3B3B;
  text-align: center;
  margin-bottom: 20px;
  height:200px;
  background:#66CD00;*/
}
#NowControl .back_box{
  margin:17px 0px 0px 25px;
  width:304;
}
.step{
  margin-bottom: 10px;
  border-radius:10px;
  background:  #151b2bD9;
}
.button1{
  text-align: center;
  font-size: 17px;
  padding-top: 3px;
  height:32px;
  width: 152px;
  border:none;
  background:#151b2b;
  color:#FFFFFF;
}
.colWitdth .button1:hover{
  background-color:#24b3a9; 
}
.btn1{
  background-color:#24b3a9;
}
.container {
  margin: 10px 0px;
}
.big_box{
   width:1700px;
   height:525px; 
}
.video_border{
   margin-left:50px;
   position: relative;
   width:auto;
   height:100%; 
   background-image: url(../assets/1400_525.png);
   background-size: 95% auto;
   background-repeat: no-repeat;
}
.video_box{
   margin:0p;
   width:100%;
   height:100%;
}
.map_border{
   position: relative;
   margin-left:45px;
   width:1800px;
   height:525px;
   background: url(../assets/1750_525.png) no-repeat;
}
</style>

