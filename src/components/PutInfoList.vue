<template>
<div id="putInfoList">
   <div style="padding-bottom:15px;border-bottom: 2px solid #e6e6e6;">
    <label style='color:#FFFF;margin:10px;font-size:15px;'>异常内容列表</label>
     </div>
  <el-table
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
  </el-table>
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
      background:#4876FF;
      margin-bottom: 50px
  }
</style>
