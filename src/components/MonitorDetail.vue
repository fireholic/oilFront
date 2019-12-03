<template>
<div  id="monitorDetail">
   <div class="back_box1">
     <div style="display:flex">
     <div class="tipPoint" style="margin:10px 0px 0px 10px">监控详情</div>
     <div class="search-box">
           <span style="display: inline-block;">
             <input placeholder="风险搜索" type="text" class="search-box-input" />
              <i class="el-icon-search search_css"></i>
            </span>
       </div>
     </div>
     <div class="tital" style="display:flex" >
            <div class="btn_box">
            <div :class="{btn2:dialogVisible==true}" class="button2" @click="showMon(true)">实时监控</div>
            <div :class="{btnbck:dialogVisible==true}" class="btnbck1"> </div>
            </div>
            <div class="btn_box">
            <div :class="{btn2:dialogVisible==false}" class="button2" @click="showMon(false)">预警监控</div>
            <div :class="{btnbck:dialogVisible==false}" class="btnbck1"> </div>
            </div>
      </div>
      <div>
         <div class="inner_css text_left" v-show="dialogVisible==true">
        <div class="detailList">
          <div class="list" v-for="(l,i) in lists" :key="i">
            <div class="title" :class="{btn2:l.show==true}" @click="changeTitle('1',i)">
              <i class="el-icon-view" :class="{btn2:l.show==true}" style="font-size:15px;margin-right:10px;">
                </i>{{l.title}}
                <i v-show="!l.show" class="el-icon-arrow-right" style="font-size:15px;float:right"></i>
                <i v-show="l.show" class="el-icon-arrow-down" style="font-size:15px;float:right"></i>
            </div>
            <table v-show="l.show" style="height:100px">
               <tr v-for="(item,index) in l.items" :key="index">
                 <td style="padding-left:20px">{{item}}</td>
               </tr>
            </table>
        </div>
        </div>
      </div>
      <div class="inner_css" v-show="dialogVisible==false">
        <div class="detailList">
          <div class="list" v-for="(l,i) in lists1" :key="i">
            <div class="title" :class="{btn2:l.show==true}" @click="changeTitle('2',i)">
              <i class="el-icon-view" :class="{btn2:l.show==true}" style="font-size:15px;margin-right:10px;">
                </i>{{l.title}}
                <i v-show="!l.show" class="el-icon-arrow-right" style="font-size:15px;float:right"></i>
                <i v-show="l.show" class="el-icon-arrow-down" style="font-size:15px;float:right"></i>
            </div>
            <table v-show="l.show" style="height:100px">
               <tr v-for="(item,index) in l.items" :key="index" @click="changeDetial('2',index)">
                  <td  :class="{active:item.show}" style="padding-left:20px">{{item.name}}</td>
                  <td  :class="{active:item.show}" style="padding-left:50px">{{item.time}}</td>
               </tr>
            </table>
        </div>
        </div>
      </div>
      </div>
    </div>
  <!--<el-col :span="24">
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
      <div class="inner_css" v-show="dialogVisible==true">
        <div class="detailList">
          <div class="list" v-for="(l,i) in lists" :key="i">
            <div class="title" :class="{btn2:l.show==true}" @click="changeTitle('1',i)">
              <i class="el-icon-view" :class="{btn2:l.show==true}" style="font-size:15px;margin-right:10px;">
                </i>{{l.title}}
                <i v-show="!l.show" class="el-icon-arrow-right" style="font-size:15px;float:right"></i>
                <i v-show="l.show" class="el-icon-arrow-down" style="font-size:15px;float:right"></i>
            </div>
            <table v-show="l.show" style="height:100px">
               <tr v-for="(item,index) in l.items" :key="index">
                 <td style="padding-left:20px">{{item}}</td>
               </tr>
            </table>
        </div>
        </div>
      </div>
      <div class="inner_css" v-show="dialogVisible==false">
        <div class="detailList">
          <div class="list" v-for="(l,i) in lists1" :key="i">
            <div class="title" :class="{btn2:l.show==true}" @click="changeTitle('2',i)">
              <i class="el-icon-view" :class="{btn2:l.show==true}" style="font-size:15px;margin-right:10px;">
                </i>{{l.title}}
                <i v-show="!l.show" class="el-icon-arrow-right" style="font-size:15px;float:right"></i>
                <i v-show="l.show" class="el-icon-arrow-down" style="font-size:15px;float:right"></i>
            </div>
            <table v-show="l.show" style="height:100px">
               <tr v-for="(item,index) in l.items" :key="index">
                 <td style="padding-left:20px">{{item.name}}</td>
                  <td style="padding-left:50px">{{item.time}}</td>
               </tr>
            </table>
        </div>
        </div>
      </div>
  </el-col>-->
</div>
</template>

<script>

  export default {
    components:{

    },
    data() {
      return {
         titalIndex:0,
         actionName:"1",
         dialogVisible:true,
          lists: [
                    { title:'董允坝', items:["监控点1", "监控点2", "监控点3"],show:true },
                    { title:'张湾', items:["监控点2", "监控点3", "监控点4"],show:false},
                    { title:'黄包山', items:["监控点3", "监控点4", "监控点5"],show:false}
                ],
          lists1: [
                    { title:'董允坝', items:[{name:"预警点1",time:"2019-11-24",show:true}, {name:"预警点1",time:"2019-11-24",show:false},{name:"预警点1",time:"2019-11-24",show:false}],show:true },
                    { title:'张湾', items:[{name:"预警点1",time:"2019-11-24",show:false},{name:"预警点1",time:"2019-11-24",show:false}, {name:"预警点1",time:"2019-11-24",show:false}],show:false},
                    { title:'黄包山', items:[{name:"预警点1",time:"2019-11-24",show:false},{name:"预警点1",time:"2019-11-24",show:false},{name:"预警点1",time:"2019-11-24",show:false}],show:false}
                ]
      } 
    },
   mounted(){

   },
    methods:{
      changeTitle(type,id){
        if(type=='1'){
          this.lists.forEach((list, i) => list.show = i == id);
        }else{
          this.lists1.forEach((list, i) => list.show = i == id); 
        }   
      },
      changeDetial(type,id){
        if(type=='1'){
          this.lists.forEach((list1) => list1.items.forEach((list,i) => list.show = i == id));
        }else{
          this.lists1.forEach((list1) => list1.items.forEach((list,i) => list.show = i == id));
        }   
      },
      isShow(name){
         if(name==this.listShow){
            return true;
         }else{
           return false;
         }
      },
      showMon(flag){
      this.dialogVisible=flag;
      this.$emit('changeMon',flag);
     }
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
#monitorDetail table tr:hover{
  color:#24b3a9;
}
#monitorDetail .active{
  color:#24b3a9;
  background: #1b2438;
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
.btn_box{
  width: 152px;
  height:30px;
}
.btn2{
  color:#24b3a9 !important;
}
.button2{
  font-size: 12px;
  margin-top: 20px
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
    margin-left:70px; 
    padding-right: 5px;
    background-color: #2e3550;
    border-radius: 21px;
}
.search-box-input {
    float:left;
    margin-top:5px; 
    width: 100px;
    height: 20px;
    line-height: 20px;
    text-indent: 17px;
    border-radius: 20px 0 0 20px;
    color:#FFFFFF;
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 16px;
    font-family: Microsoft Yahei;
}
.search_css{
  margin:7px 5px 0px 0px; 
  font-size:17px !important;
  position: absolute;
  float:right;
}
</style>
