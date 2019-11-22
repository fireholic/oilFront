<template>
<div id="historyTable">
    <div style="padding-bottom:15px;border-bottom: 2px solid #e6e6e6;">
    <label style='color:#404040;margin:10px;font-size:30px;font-weight:bold'>全年异常事件列表</label> 
      <el-input  style="width:200px;float:right;padding-right:80px" placeholder="指定事件搜索" clearable>
     </el-input>
     </div>
  <el-table
    :data="tableData"
     v-loading="loading"
    stripe
    height="600px"
    borer
    style="width: 100%;"
    :row-class-name="tableRowClassName">
    <el-table-column
      type="index"
      label="序号"
      width="50"
      fixed>
    </el-table-column>
    <el-table-column
      fixed
      prop="level"
      label="异常事件级别">
    </el-table-column>
    <el-table-column
      fixed
      prop="type"
      label="异常事件类型">
    </el-table-column>
    <el-table-column
      prop="time"
      label="事件发生时间"
      sortable>>
    </el-table-column>
    <el-table-column
      prop="operator"
      label="事件记录员"
      sortable>
    </el-table-column>
    <el-table-column
      prop="operate"
      label="操作"
      sortable>
    </el-table-column>
  </el-table>
  <div style="padding-top:10px;">
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="this.pageSize"
      :page-size="this.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.total">
    </el-pagination>
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
        for(let i=0;i<15;i++){
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
       tableRowClassName({row}){
        if(row.percent>100){
           return 'success-row';
        }
        if(row.percent<0){
           return 'warning-row';
        }
       },
      handleSizeChange(val) {
        this.size=val;
        this.queryData();
      },
      handleCurrentChange(val) {
        this.pageIndex=val;
        this.queryData();
      },
      refresh(){
        this.loading=true;
        this.queryData();
      }

    },
    watch: {
    }
  }
</script>