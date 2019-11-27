<template>
  <div id="NowControl">
  <div class="back_box" style="display:flex">
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
    <div class="video_border" style="height:500px;">
       <MonitorVideo/>
    </div>
    </div>
  </div>
  <div class="map_border" v-show="dialogVisible==true">
        <AreStatus/>
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
          <div style="margin:0% 2% 4% 0%" > 
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
  margin:17px 0px 0px 15px;
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
.video_border{
   margin-left:3%; 
   width:1400px;
   height:500px;
   background-size:1400px 500px;
   background: url(../assets/1400_550.png) no-repeat;
}
.map_border{
  height:530px;
  width: 1800px;
   background: url(../assets/1800_590.png) no-repeat;
}
</style>

