<template>
<div id="monitorStatus">
  <el-col :span="24">
      <div class="tipPoint">监控风险点</div>
      <div class="inner_css">
        <el-row style="height:100px">
             <el-col :span="7" offset="1">
               <div class="basic-data-item1">
               <div>董允坝</div>
               <div class="basic-data-num1">107</div>
              </div>
             </el-col>
             <el-col :span="8">
               <div class="basic-data-item1">
               <div>张湾</div>
               <div class="basic-data-num1">70</div>
              </div>
              </el-col>
             <el-col :span="7">
               <div class="basic-data-item1">
               <div>黄包山</div>
               <div class="basic-data-num1">3</div>
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
.inner_css{
    margin: 15px;
    border-radius:10px;
    background: #24496e;
}
.basic-data-num1 {
  margin-top: 10px;
  font-size: 25px;
  height: 35px;
}
.basic-data-item1 {
  padding-top:10px;
  font-size: 15px;
  color: #FFFFFF;
  text-align: center;
}
.smallh{
  height:50px;
}
.tipPoint{
    margin: 13px 0px 0px 17px;
    font-size: 15px;
    color: #FFFFFF;
    text-align: left;
}
</style>
