<template>
<div id="putInfoList">
   <div style="padding-bottom:15px;border-bottom: 2px solid #e6e6e6;">
    <label class="tips">异常内容列表</label>
    </div>
  <table>
     <tr>
      <th style="margin-left:10%">日期</th>
      <th>时间</th>
      <th>预警级别</th>
      <th>预警位置</th>
      <th>预警描述</th>
      <th>操作</th>
     </tr>
      <tr v-for="(item,i) in tableData" :key="i">
      <td width="10%" height="40">{{item.date}}</td>
      <td>{{item.time}}</td>
      <td>{{item.level}}</td>
      <td>{{item.point}}</td>
      <td>{{item.remark}}</td>
      <td>{{item.operate}}</td>
     </tr>
  </table>
  <!--<el-table
    :data="tableData"
     v-loading="loading"
    stripe
    height="200px"
    borer
    style="width: 100%;"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="日期"
      fixed>
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间">
    </el-table-column>
    <el-table-column
      prop="level"
      label="预警级别">
    </el-table-column>
    <el-table-column
      prop="point"
      label="预警位置"
      sortable>>
    </el-table-column>
    <el-table-column
      prop="remark"
      label="预警描述"
      sortable>
    </el-table-column>
    <el-table-column
      prop="operate"
      label="操作"
      sortable>
    </el-table-column>
  </el-table>-->
</div>
</template>

<script>

  export default {
    components:{

    },
    data() {
      return {
          tableData:[]
      } 
    },
   mounted(){
        this.queryData();
   },
    methods:{
        queryData(){
             for(let i=0;i<5;i++){
           let one={"date":"2019-07-25","time":"15:47:41","level":"蓝色预警",
           "point":"张湾","remark":"规划建设广场","operate":"操作"} 
           this.tableData.push(one);
        }
        }
    },
    watch: {
    }
  }
</script>
<style>
  #putInfoList{
      border-radius:10px;
      background:#151b2bD9;
      margin:0px 0px 10px 3px;
  }
  #putInfoList .tips{
    color:#FFFFFF;
    font-size:15px;
    margin: 10px 0px 0px 15px;
    border-bottom: 1px;
    border-bottom-color: #FFFFFF
  }
   #putInfoList .el-table{
     background:#151b2bD9;
   }
   #putInfoList table{
     color:#FFFFFF;
     text-align: center;
     font-size:15px;
     width: 90%;
     margin: 20px 0px 20px 0px;
   }
</style>
