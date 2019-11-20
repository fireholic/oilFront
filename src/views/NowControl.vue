<template>
  <div class="NowControl">
    <div>
    <div style="width:400px;display:inline;float:left">
    <div style="width:400px;height:200px;margin-bottom:20px;background-color:#4B0082">
      <span>监控风险点</span>
    </div>
     <div style="width:400px;height:450px; background-color:#4B0082">
      <span>监控详情</span>
    </div>
    </div>
    <div style="display:inline;float:right">
    <div style="width:1650px;height:650px;margin-right:20px;background-color:#4B0082;">
      <span>监控详情</span>
    </div>
    </div>
    </div>
    <div style="display:inline;float:right">
    <div style="width:2100px;height:200px;margin:50px 10px 0px 0px;background-color:#4B0082;"> 
      <span>异常内容列表</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NowControl",
  components: {

  },
  data() {
    return {

    };
  },
  methods:{

  },
  watch: {

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
</style>

