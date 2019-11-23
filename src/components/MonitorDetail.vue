<template>
<div  id="monitorDetail">
  <el-col :span="24">
      <div>
         <el-row>
             <el-col :span="11">
                 <div class="tipPoint" style="margin:20px 0px 0px 20px">监控详情</div>
             </el-col>
             <el-col :span="11" offset="1">
                 <div class="search-box">
                   <span style="display: inline-block;">
                   <input placeholder="风险搜索" type="text" class="search-box-input" />
                   <i class="el-icon-search search_css"></i>
                   </span>
                 </div>
             </el-col>    
        </el-row>
      </div>
      <div class="tital" >
            <el-col :span="12" >
            <div :class="{btn2:dialogVisible==true}" class="button2" @click="dialogVisible=true">实时监控</div>
            <div :class="{btnbck:dialogVisible==true}" class="btnbck1"> </div>
            </el-col>
            <el-col :span="12" >
            <div :class="{btn2:dialogVisible==false}" class="button2" @click="dialogVisible=false">预警监控</div>
            <div :class="{btnbck:dialogVisible==false}" class="btnbck1"> </div>
            </el-col>
      </div>
      <div class="inner_css">
        <div class="detailList">
          <div class="list" v-for="(l,i) in lists" :key="i">
            <div class="title"><i class="el-icon-view" style="font-size:15px"></i> {{l.title}}</div>
            <ul class="item" style="padding-left:10px">
                <li v-for="(item,index) in l.items" :key="index">{{item}}</li>
            </ul>
        </div>
        </div>
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
         actionName:"1",
         dialogVisible:false,
          lists: [
                    { title:'董允坝', items:["监控点1", "监控点2", "监控点3"] },
                    { title:'张湾', items:["监控点2", "监控点3", "监控点4"] },
                    { title:'黄包山', items:["监控点3", "监控点4", "监控点5"] }
                ]
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
#monitorDetail{
  color:#FFFFFF;
}
#monitorDetail .el-input{
  width: 125px;
  height: 32px;
  border:none;
  background-color: #445078;
  font-size:15px;
  border-radius:20px;
  margin:12px;
   
}
#monitorDetail .el-collapse el-collapse-item{
   background-color: #2c3e50 !important;
}
.tital{
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 10px;
}
.btnbck1{
  margin-top:5px;
  margin-left:38%; 
  height: 2px;
  width:23%;
}
.btnbck{
  background-color: #24b3a9;
}
.tital .button2:hover{
  color:#24b3a9;
}
.btn2{
  color:#24b3a9;
}
.button2{
  font-size: 12px;
  margin-top: 25px
}
.detailList{
  font-size:13px;
}
.iconsty{
   font-size:5px;
}
ul{
    list-style: none;
}
li{
    padding-left: 10px;
    line-height: 2;
}
li:hover{
    background-color: #2e3550;
}
.list{
    padding: 0px 15px;
}
.list .title{
    padding: 10px 0px;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    font-size: 13px;
    font-weight: bold;
}
.list:not(:nth-of-type(1)) .item{
    display: none;
}
.search-box {
    position: relative;
    box-sizing: border-box;
    width:130px;
    height: 30px;
    margin: 17px 0px 0px 8px; 
    padding-right: 5px;
    background-color: #2e3550;
    border-radius: 21px;
}
.search-box-input {
    float:left;
    margin-top:5px; 
    width: 80%;
    height: 20px;
    line-height: 20px;
    text-indent: 17px;
    border-radius: 20px 0 0 20px;
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 16px;
    font-family: Microsoft Yahei;
}
.search_css{
  margin-top:7px; 
  font-size:17px !important;
  position: absolute;
  float:left;
}
</style>
