<template>
  <div id="NowControl">
     <el-row>
       <el-col :span="4">
           <div style="text-align:center;margin-bottom:10px">
             <el-button-group  style="width:300px">
            <button @click="dialogVisible=true">全局</button>
            <button>监控</button>
            </el-button-group>
           </div>
           <div class="step" style="height:150px">
             <MonitorStatus/>
           </div>
           <div class="step" style="height:350px">
             <MonitorDetail/>
           </div>
       </el-col>
       <el-col style="height:560px;" :span="19" offset="1">
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
     <div>
     <el-dialog
          title="全局监控"
          :visible.sync="dialogVisible"
          width="80%">
         <AreStatus/>
       </el-dialog>
     </div>
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
.el-col{
  color:#3B3B3B;
  font-size:15px;
  /*
  text-align: center;
  margin-bottom: 20px;
  height:200px;
  background:#66CD00;*/
}
.step{
  margin-bottom: 20px;
  background:#4876FF;
}
button{
  border-radius:20px;
  margin: 0px 20px 0px 10px;
  height:40px;
  width:110px;
  background-color: #2c3e50;
  color:#ffff;
}
.container {
  margin: 10px 0px;
}
</style>

