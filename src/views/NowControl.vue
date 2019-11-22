<template>
  <div id="NowControl">
     <el-row>
        <el-col :span="4" style="text-align:center;margin-bottom:20px">
            <div  class="colWitdth"  >
            <el-col :span="12" >
            <div :class="{btn1:dialogVisible==true}" class="button1" style="border-top-left-radius:20px;" @click="dialogVisible=true">全局</div>
             </el-col>
            <el-col :span="12" >
            <div :class="{btn1:dialogVisible==false}" class="button1" style="border-top-right-radius:20px;" @click="dialogVisible=false">监控</div>
             </el-col>
            </div>
        </el-col>
     </el-row>
     <el-row v-show="dialogVisible==true">
        <AreStatus/>
     </el-row>
     <el-row v-show="dialogVisible==false">
       <el-col :span="5">
           <div class="step" style="height:200px">
             <MonitorStatus/>
           </div>
           <div class="step" style="height:350px">
             <MonitorDetail/>
           </div>
       </el-col>
       <el-col class="video_coss" style="height:560px;" :span="19">
         <div>
            <MonitorVideo/>
           </div>
         </el-col>
     </el-row>

     <el-row>
        <el-col :span="24">
          <div style="padding-bottom: 20px; height:200px;margin-right:3%"> 
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
     dialogVisible:false
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
  font-size:10px;
  /*color:#3B3B3B;
  text-align: center;
  margin-bottom: 20px;
  height:200px;
  background:#66CD00;*/
}
.step{
  margin-bottom: 20px;
  width:305px;
  border-radius:10px;
  background:  #151b2bD9;
}
.button1{
  font-size: 17px;
  padding-top: 3px;
  height:32px;
  width:150px;
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
.video_coss{
   background: url(../assets/border3.png) no-repeat;
}
</style>

