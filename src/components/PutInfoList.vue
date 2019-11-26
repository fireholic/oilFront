<template>
<div id="putInfoList">
   <div style=" padding-bottom:15px;">
    <label class="tips">异常内容列表</label>
    <!--<button @click="queryData()">测试</button>-->
  </div>
  <div class="table_box">
   <table style="height:20px;margin:10px 20px 0px 0px; width: -webkit-fill-available;">
     <tr>
      <th width="10%" height="45px" >日期</th>
      <th>时间</th>
      <th>预警级别</th>
      <th>预警位置</th>
      <th>预警描述</th>
      <th>操作</th>
     </tr>
  </table>
<div style="overflow-y: auto; height: 300px;">
  <table style="margin-top:0px">  
      <tr v-for="(item,i) in tableData" :key="i">
      <td width="10%" height="45px">{{item.date}}</td>
      <td>{{item.time}}</td>
      <td>{{item.abnormalLevel}}</td>
      <td>{{item.abnormalPlace}}</td>
      <td>{{item.abnormalDesc}}</td>
      <td> <el-button type="primary" round @click="pushMessage(item.abnormalID)">推送</el-button></td>
     </tr>
  </table>
</div>
</div>
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
      if(this.timer){
        clearInterval(this.timer);
       }else{
       this.timer=setInterval(()=>{
           this.queryData();
       },10000);
      }    
   },
    methods:{
        queryData(){
          let params = {"data":{"source":1},"key":"dfasdgasdfwer","sid":"12513241235131"};
           this.axios.post(`/data/getNowAbnormal`,params).then(res => {
           if(res.data.data.value) {
            console.log(res.data.data.value);
            this.tableData = res.data.data.value;
           }
          });    
        },
        pushMessage(id){
          this.$confirm('消息将推送至手机, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
          }).then(() => {
             console.log(id);
             let params = {"data":{"abnormalID":id},"key":"dfasdgasdfwer","sid":"12513241235131"};
             this.axios.post(`/data/pushInformation`,params).then(res => {
              if(res.data.data.err_code==0){
                 this.$message({ type: 'success', message: '推送成功!' });
              }else{
                 this.$message({ type: 'error', message: '推送失败!' });
              }
            });    
          }).catch(() => {
             this.$message({type: 'info', message: '已取消推送' });          
          });
         }
    },
    watch: {
    }
  }
</script>
<style>
  #putInfoList{
      border-radius:20px;
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
   #putInfoList table{
     table-layout: fixed;
     color:#FFFFFF;
     text-align: center;
     font-size:15px;
     width: 100%;
     height: 300px;
     margin: 20px 0px 20px 0px;
   }
   div::-webkit-scrollbar{
    width:12px;
    height:10px;
   }
   div::-webkit-scrollbar-track{
    border-radius:2px;
  }
  div::-webkit-scrollbar-thumb{
    background: #24b3a9;
    width:15px;
    border-radius:10px;
  }
  .table_box{
    border-top: 2px solid #e6e6e6;
    width:98%;
    margin-left:1%;
  }
</style>
