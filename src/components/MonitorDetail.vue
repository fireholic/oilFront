<template>
<div  id="monitorDetail">
  <el-col :span="24">
      <div>
         <el-row>
             <el-col :span="12" style="margin:5px 0px 5px 5px;text-align: left;">
                 <div class="tips">监控详情</div>
             </el-col>
             <el-col :span="10" style="margin:5px 3px 5px 5px;">
              <el-input placeholder="风险搜索" suffix-icon="el-icon-search"  v-model="input1"></el-input>
             </el-col>         
        </el-row>
      </div>
      <div class="inner">
        <el-collapse v-model="actionName" accordion>
        <el-collapse-item title="董允坝" name="1">
          <a>监控点1</a><br>
          <a>监控点2</a><br>
          <a>监控点3</a>
        </el-collapse-item>
         <el-collapse-item title="张湾" name="2">
          <a>监控点1</a><br>
          <a>监控点2</a><br>
          <a>监控点3</a>
         </el-collapse-item>
       <el-collapse-item title="黄包山" name="3">
          <a>监控点1</a><br>
          <a>监控点2</a><br>
          <a>监控点3</a>
        </el-collapse-item>
        </el-collapse>
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
         actionName:"1"
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
#monitorDetail .el-collapse el-collapse-item{
   background-color: #2c3e50 !important;
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
