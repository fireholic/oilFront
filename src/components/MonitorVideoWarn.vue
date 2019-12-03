<template>
<div id="monitorVideoWarn">
   <div class="video_css">
      <div class="warn_box">
      <div class="play_box_warn"> 
       <div class="buttonVideo folat_btn" @click="visible=true">异常信息抓取</div>
      <video-player   class="vjs-custom-skin"  :options="playerOptions"></video-player>
      </div>
     </div>
       <el-dialog
        title="提示"
        :visible.sync="visible"
        :modal-append-to-body="false"
        width="30%">
        <span>功能开发中,敬请期待.....</span>
        </el-dialog>
   </div>
</div>
</template>
        
<script>
  export default {
    components:{

    },
    data() {
      return {
          visible:false,
          actionName:"1",
           playerOptions: {
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: true, //如果true,浏览器准备好时开始回放。
            controls: true, //控制条
            preload: 'auto', //视频预加载
            muted: false, //默认情况下将会消除任何音频。
            loop: false, //导致视频一结束就重新开始。
            language: 'zh-CN',
            aspectRatio: '26:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
                  type: 'application/x-mpegURL',
                  src: 'http://hls01open.ys7.com/openlive/adf5a892161b408a89c2e85b70fb6c1b.m3u8'
            }],
            poster: "", //你的封面地址
            width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试' //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          }
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
.video_css{
    height:auto;
    width:auto;
}
.play_box_warn{
  width:100%;
}
#monitorVideoWarn .video-js .vjs-tech{
    width:100%;
    height:100%;
}
.buttonVideo{
  text-align: center;
  font-size: 13px;
  padding: 3px;
  height:auto;
  width: 100px;
  border:none;
  background:#24b3a9;
  color:#FFFFFF;
  border-radius:20px
}
#monitorVideoWarn .buttonVideo:hover{
    color:#2c3e50;
    cursor: pointer;
}
.folat_btn{
  float: right;
  position: relative;
  margin:2% 2% 0 83%;
  z-index: 100;
}
.warn_box{
  height:auto;
  width: 100%;
}
</style>