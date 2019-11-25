<template>
<div id="historyTable">
  <div style="height:830px">
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
    highlight-current-row="false"
    height="622px"
    :row-style="tableRowStyle"
    :header-cell-style="tableHeaderColor">
    <el-table-column
      prop="level"
      width="240"
      label="异常事件级别">
    </el-table-column>
    <el-table-column
      prop="type"
      label="异常事件类型">
    </el-table-column>
    <el-table-column
      prop="time"
      label="事件发生时间" sortable>
    </el-table-column>
    <el-table-column
      prop="operator"
      label="事件记录员">
    </el-table-column>
    <el-table-column
      prop="operate"
      label="事件详细内容">
    </el-table-column>
  </el-table>
  <el-pagination
     background="true"
     layout="prev, pager, next"
     @current-change="handleCurrentChange"
     prev-text="上一页"
     next-text="下一页"
    :total="12">
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
        pageIndex:1,
        pageSize:[100,500,1000],
        size:100,
        total:400,
        customers:[],
        selectedCustomers:[],
        tableData:[],
        lawyerId :"",
        area:"",
        loading:false    
      } 
    },
   mounted(){
    this.queryData();
    this.customerList();
   },
    methods:{
         toHome(value){
             this.selectedCustomers=value;
         },
         queryData() {
        //   let params = {size:this.size, page:this.pageIndex};
    
        //  this.axios.get(`/v1/citys/cityProfit`,{ params: params}).then(res => {
        // if(res.data) {
        //   this.total = res.data.total;
        //   this.tableData = res.data.data;
        // }
        this.tableData=[];
        for(let i=0;i<12;i++){
           let one={"level":"蓝色预警","type":"固定异常事件","time":"2019-01-02","operator":"张三","operate":"查看详情"} 
           this.tableData.push(one);
        }
        // this.loading=false;   
        //});    
       },
       customerList(){
           //this.axios.get(`/v1/customers`).then(res => {
           //this.customers = res.data;
        //});
       },
      handleCurrentChange(val) {
        this.pageIndex=val;
        console.log(this.pageIndex)
        this.queryData();
      },
      refresh(){
        this.loading=true;
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
  height: 630px;
  background-color:#2e3550;
}
#historyTable .el-table td, .el-table th.is-leaf {
    text-align: center !important;
    border-bottom: 0px solid !important;
}
#historyTable .el-table tbody tr:hover>td { 
    border-bottom: 0px solid !important;
    background-color:#475070!important
}
#historyTable .el-table::before{
   height:0px !important;
}
#historyTable  .el-pagination{
  padding-top:30px;
  padding-left:70%;
  height:80px;
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
</style>