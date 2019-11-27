<template>
<div id="historyTable">
  <div style="height:810px">
    <div class="his_top">
    <div style="float:left">
    <label style="margin:30px 0px 0px 40px;font-size:20px;display: inline-block;">全年异常事件列表</label> 
    </div>
    <div style="float:right">
      <div class="his_search-box" >
             <span>
             <input placeholder="指定事件搜索" type="text" class="his_search-box-input" />
            <i class="el-icon-search his_search_css"></i>
           </span>
      </div>
    </div>
  </div>
  <div class="hist_table_box">
    <div class="out_box_top" >
    <el-table
    :data="tableData"
     v-loading="loading"
    :page-size="12"
    highlight-current-row="false"
    height="622px"
    :row-style="tableRowStyle"
    :header-cell-style="tableHeaderColor">
    <el-table-column
      prop="abnormalLevel"
      width="240"
      label="异常事件级别">
    </el-table-column>
    <el-table-column
      prop="abnormalPlace"
      width="240"
      label="事件发生地点">
    </el-table-column>
    <el-table-column
      prop="date"
      label="事件发生日期">
    </el-table-column>
    <el-table-column
      prop="time"
      label="事件发生时间" sortable>
    </el-table-column>
    <el-table-column
      prop="abnormalDesc"
      label="事件详细内容">
    </el-table-column>
  </el-table>
  <el-pagination
     background="true"
     layout="prev, pager, next"
     @current-change="handleCurrentChange"
     prev-text="上一页"
     next-text="下一页"
    :total="this.total">
   </el-pagination>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
import "echarts/lib/component/title";
import "echarts/lib/component/legendScroll";
import "echarts/lib/component/tooltip";

  export default {
    components:{

    },
    data() {
      return {
        key:localStorage.getItem('Authorization'),
        pageIndex:1,
        total:12,
        customers:[],
        selectedCustomers:[],
        tableData:[],
        lawyerId :"",
        area:"",
        loading:false    
      } 
    },
   mounted(){
    // if(this.timer){
    //   clearInterval(this.timer);
    //   }else{
    //     this.timer=setInterval(()=>{
           this.queryData();
    //     },3000);
    //   }    
   },
    methods:{
         queryData() {
           if(this.key==null || this.key==""){
               this.$message({ type: 'error', message: '登录过期,请重新登录!' });
           }
           let params = {"data":{"source":1,"currentPage":this.pageIndex,"pageSize":12},"key":this.key,"sid":"12513241235131"};
           this.axios.post(`/data/getAbnormalByPage`,params).then(res => {
           if(res.data.data.value.data) {
            this.total = res.data.data.value.pageInfo.totalCount;
            this.tableData = res.data.data.value.data;
           }
          });    
       },
      handleCurrentChange(val) {
        this.pageIndex=val;
        this.queryData();
      },
      refresh(){
        this.queryData();
      },
       tableRowStyle({ row, rowIndex }) {
         let num=parseInt(rowIndex)%2;
         if(num==1){
           return 'background-color: #2e3550;color:#fff;font-size: 15px'
         }else{
           return 'background: #151b2bFF;color:#fff;font-size: 15px'
         }
     },
     // 修改table header的背景色
     tableHeaderColor({ row, column, rowIndex, columnIndex }) {
       if (rowIndex === 0) {
        return 'background-color: #2e3550; color:#fff;font-size: 18px;text-align:left;'
       }
      }
     },
    watch: {
    }
  }
</script>

<style>
#historyTable{
 border-radius:20px;
 background:#151b2bB3;
 color:#FFFFFF;
}
.his_top{
  height: 80px;
  background:#2e3550;
  padding-bottom:15px;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
}
.his_search-box {
    position: relative;
    box-sizing: border-box;
    width:300x;
    height: 45px;
    margin: 18px 80px 0px 8px; 
    padding-right: 5px;
    background-color:#2e3550;
    border-radius: 21px;
    border-color:#6495ED !important;
    border:2px solid;
}
.his_search-box-input {
    float:left;
    margin-top:1px ; 
    width: 80%;
    height: 37px;
    line-height: 20px;
    text-indent: 17px;
    border-radius: 20px 0 0 20px;
    background-color: transparent;
    color:#FFFFFF;
    border: 0;
    outline: 0;
    font-size: 16px;
    font-family: Microsoft Yahei;
}
.his_search_css{
  margin-top:7px ; 
  font-size:25px !important;
  position: absolute;
  float:left;
}
.out_box_top{
  height:10px;
  border-radius: 5px;
  background-color: #2e3550;
}
.out_box_botton{
  height:10px;
  border-bottom-left-radius:15px;
  border-bottom-right-radius:15px;
  background-color: #2e3550;
}
input::-webkit-input-placeholder {
    color: #FFFFFF;
}
.el-table-column{
  background:#151b2bD9 !important;
}
.hist_table_box{
  margin: 30px 50px;
  width: 1650px;
  height: 600px;
  background-color:#2e3550;
}
#historyTable .el-table td, .el-table th.is-leaf {
    text-align: center !important;
    border-bottom: 0px solid !important;
}
#historyTable .el-table tbody tr:hover td { 
    border-bottom: 0px solid !important;
    background-color:#475070!important
}
#historyTable .el-table__body tr.current-row>td{
   background-color:#475070!important
}
#historyTable .el-table::before{
   height:0px !important;
}
#historyTable  .el-pagination{
  padding-top:20px;
  padding-left:65%;
  height:60px;
  background-color: #151b2bFF;
}
#historyTable .el-pagination.is-background .btn-prev{
  background-color: #151b2bFF;
  color:#FFFFFF;
  
}
#historyTable .el-pagination span{
  font-size:20px;
}

#historyTable .el-pagination.is-background .btn-next{
 background-color: #151b2bFF;
  color:#FFFFFF;
  font-size:20px ;
}
#historyTable .el-pagination.is-background .el-pager li{
  background-color: #151b2bFF;
  color:#FFFFFF;
  font-size:20px;
}
#historyTable .el-pagination.is-background .el-pager li:not(.disabled).active{
  color:#24b3a9;
}
#historyTable  .el-table__body-wrapper{
  background-color: #151b2bFF;
}
</style>