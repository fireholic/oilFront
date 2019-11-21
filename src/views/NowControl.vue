<template>
  <div class="NowControl">
     <el-row>
       <el-col :span="4" style="">
           <div class="step">监控风险点</div>
           <div class="step">监控详情</div>
       </el-col>
       <el-col style="height:560px" :span="19" offset="1"><div class="grid-content">监控视频</div></el-col>
     </el-row>
     <el-row>
        <el-col :span="24"><div class="grid-content">异常内容列表</div></el-col>
     </el-row>
  </div>
</template>

<script>
export default {
  name: "NowControl",
  components: {

  },
  data() {
    return {

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
  margin-bottom: 20px;
  font-size:30px;
  height:200px;
  background:#66CD00;
}
.step{
  margin-bottom: 20px;
  height:270px;
  background:#4876FF;
}
.container {
  margin: 10px 0px;
}
</style>

