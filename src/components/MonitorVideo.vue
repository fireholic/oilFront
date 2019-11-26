<template>
<div id="monitorVideo">
   <div class="video_css">
      <video-player  style="height:500;width:1350px;" class="vjs-custom-skin"  :options="playerOptions"></video-player>
         <!-- <iframe height=500 width=1350 frameborder=0>
     <object type='application/x-vlc-plugin' pluginspage="http://www.videolan.org/" id='vlc' events='false' width="720" height="410">
           <param name='mrl' value='rtsp://admin:12345@192.168.10.235:554/h264/ch1/main/av_stream' />
           <param name='volume' value='50' />
           <param name='autoplay' value='true' />
           <param name='loop' value='false' />
           <param name='fullscreen' value='false' />
           <param name='controls' value='false' />
         </object>
       </iframe>-->
   <!--<iframe
     src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/203751922/1.live&autoplay=1&accessToken=ra.23xamzw35p27yshy6ea2hvud3riulmqo-173c7qgql3-0lxt9kc-jkzzoodlk"
     width="1350"
     height="500"
     id="ysOpenDevice"
     allowfullscreen>
     <iframe
     src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/203751922/1.live&autoplay=1&accessToken=at.9pgh2swe0wjbzf9c01gijti60kww01a5-4qpco5bzot-0bqaln8-v3shyoxzm"
     width="1350"
     height="500"
     AppKey="0360e78bf4c240fc9d367cd311d4a435"
     Secret="99b4541910e3165181b007655427065f"
     allowfullscreen>
</iframe>-->
   </div>
</div>
</template>
        
<script>
  export default {
    components:{

    },
    data() {
      return {
          actionName:"1",
           playerOptions: {
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: false, //如果true,浏览器准备好时开始回放。
            controls: true, //控制条
            preload: 'auto', //视频预加载
            muted: false, //默认情况下将会消除任何音频。
            loop: false, //导致视频一结束就重新开始。
            language: 'zh-CN',
            aspectRatio: '1350:500', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
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
    margin:25px 0px 0px 25px;
    height:500;
    width:1350px;
}
#monitorVideo .video-js .vjs-tech{
    width:1350px;
    height:500px;
}
</style>