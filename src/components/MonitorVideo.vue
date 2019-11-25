<template>
<div id="monitorVideo">
   <div class="video_css">
       <!--<iframe height=500 width=1350 src='http://player.youku.com/embed/XNDM5NDY5NTU0OA==' frameborder=0></iframe>-->
   <iframe
     src="https://open.ys7.com/ezopen/h5/iframe?url=ezopen://open.ys7.com/203751922/1.live&autoplay=1&accessToken=ra.23xamzw35p27yshy6ea2hvud3riulmqo-173c7qgql3-0lxt9kc-jkzzoodlk"
     width="1350"
     height="500"
     id="ysOpenDevice"
     allowfullscreen>
</iframe>
   </div>
</div>
</template>
        
<script>

  export default {
    components:{

    },
    data() {
      return {
         actionName:"1"
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
    height:100%;
    width:100%;
}
</style>