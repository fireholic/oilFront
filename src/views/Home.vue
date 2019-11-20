<template>
  <div class="home">
    <div class="container" style="padding: 0px 0px 10px 15px;">
     <div style="font-size: 13px;padding: 0px 0px 10px 20px;" class="container">数据已更新至</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {

  },
  data() {
    return {
      time:"",
      customerId: [],
      customers: [],
      basics: {},
      repay: {},
    };
  },
  methods:{
     toHome(value){
        this.customerId=value;
     }
  },
  watch: {
    customerId: function() {

    }
  }
};
</script>

<style>
/**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
.echarts {
  width: 100%;
  height: 400px;
}
.container {
  margin: 10px 0px;
}
.el-row {
  margin-top: 20px;
}
.el-input__inner {
  border: 0;
}
.section-header-container {
  line-height: 50px;
  display: flex;
}
.section-header-container div:nth-child(1) {
  width: 30%;
  text-align: left;
}
.section-header-container div:nth-child(2) {
  width: 70%;
  text-align: right;
}
.section-header-container span {
  font-size: 16px;
}
.underline{
  border-bottom: 2px solid #e6e6e6;
}
.bet{
  display: flex;
  justify-content: space-between;
}
</style>

