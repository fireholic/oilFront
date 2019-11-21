<template>
<div id="monitorStatus">
  <el-col :span="24">
      <div class="tips">监控风险点</div>
      <div class="inner">
        <el-row style="height:100px">
             <el-col :span="7" offset="1">
               <div class="basic-data-item">
               <div>董允坝</div>
               <div class="basic-data-num">107</div>
              </div>
             </el-col>
             <el-col :span="8">
               <div class="basic-data-item">
               <div>张湾</div>
               <div class="basic-data-num">70</div>
              </div>
              </el-col>
             <el-col :span="7">
               <div class="basic-data-item">
               <div>黄包山</div>
               <div class="basic-data-num">3</div>
              </div>
              </el-col>
        </el-row>
      </div>
  </el-col>
</div>
</template>

<script>

  export default {
    components:{

    },
    data() {
      return {

      } 
    },
   mounted(){

   },
    methods:{
    },
    watch: {
    }
  }
</script>
<style>
.inner{
    margin: 15px;
    background-color: #2c3e50;
}
.basic-data-num {
  margin-top: 10px;
  font-size: 35px;
  height: 35px;
}
.basic-data-item {
  padding-top:10px;
  font-size: 20px;
  color: #e0d8d8;
  text-align: center;
}
.smallh{
  height:50px;
}
.tips{
    margin:3px 0px 0px 15px;
    font-size: 17px;
    color: #e0d8d8;
    text-align: left;
}
</style>
