<template>
  <div id="NowControl">
     <el-row>
        <el-col :span="4">
           <div style="text-align:center;margin-bottom:20px">
            <el-button-group class="colWitdth" >
            <button class="btn button1" @click="dialogVisible=true">全局</button>
            <button class="btn button1" @click="dialogVisible=false">监控</button>
            </el-button-group>
           </div>
        </el-col>
     </el-row>
     <el-row v-show="dialogVisible==true">
        <AreStatus/>
     </el-row>
     <el-row v-show="dialogVisible==false">
       <el-col :span="5">
           <div class="step" style="height:150px">
             <MonitorStatus/>
           </div>
           <div class="step" style="height:350px">
             <MonitorDetail/>
           </div>
       </el-col>
       <el-col style="height:500px;" :span="18" offset="1">
         <div>
            <MonitorVideo/>
           </div>
         </el-col>
     </el-row>

     <el-row>
        <el-col :span="24">
          <div style="padding-bottom: 20px; height:200px"> 
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
  width:305px;
}
.el-col{
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
  background:  #17314bCC;
}
.button1{
  /*border-radius:20px;
  margin: 0px 0px 0px 10px;*/
  height:32px;
  width:152px;
  background: url(../assets/btn.png) no-repeat;
  color:#FFFFFF;
}
.container {
  margin: 10px 0px;
}
</style>

