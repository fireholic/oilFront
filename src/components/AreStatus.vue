<template>
<div id="areStatus" style="width: 1710px;height:540px;flex: 1">
  <baidu-map class="bm-view"  
  ak="HykSaifjf6GhhW1GVP9y3DC5jcz2zpIQ" 
  :center="center" :zoom="zoom" 
  :scroll-wheel-zoom="true"
  :mapStyle="midnight"
  @zoomend="syncCenterAndZoom">
    <bm-view >
      <!--<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>-->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="false" :icon="{url: this.img, size: {width: 300, height: 157}}"></bm-marker>
      <bm-ground :bounds="{ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}" imageURL="require('../assets/椭圆.png')">
     </bm-ground>
      <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-city-list>-->
      <!--<bm-boundary 
        v-for="province in provinces" 
        :key="province.province" 
        :name="province.province" 
        :strokeWeight="2" 
        :strokeColor="blue" 
        :fillColor="getColor(province.profit)">
      </bm-boundary 81.183095,30.300163   79.809323, lat: 31.485343>
      <bml-heatmap :data="heatData" :max="30000" :radius="30"></bml-heatmap>-->
    </bm-view>
  </baidu-map>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
//import BmGeolocation from "vue-baidu-map/components/controls/Geolocation.vue";
//import BmlHeatmap from "vue-baidu-map/components/extra/Heatmap.vue";
import BmMarker from "vue-baidu-map/components/overlays/Marker.vue";
//import BmInfoWindow from "vue-baidu-map/components/overlays/InfoWindow.vue";
//import BmBoundary from "vue-baidu-map/components/others/Boundary.vue";
import BmNavigation from "vue-baidu-map/components/controls/Navigation.vue";
//import BmCityList from "vue-baidu-map/components/controls/CityList.vue";
//import BmLabel from "vue-baidu-map/components/overlays/Label.vue";

export default {
  components: {
    BaiduMap,
    //BmlHeatmap,
    //BmInfoWindow,
    BmMarker,
   // BmBoundary,
    BmNavigation,
   // BmGeolocation
    //BmCityList,
   // BmLabel
  },		    
  data() {
    return {
      heatData:[],
      show:false,
      center: "北京",
      zoom: 15,
      district:[],
      sumCost:1,
      sumRepay:1,
      midnight:{style:'midnight'},
      img1:require('../assets/点.png')
    };
  },
  created(){
    //this.axios.get('/v1/ditricts/PureProfit').then(res => {
     // let geo = new window.BMap.Geocoder();
     // let data= new Array();
     // this.district= res.data
      //this.district.forEach((x, idx) => {
          
        //  geo.getPoint(x.name, function(point){   
        //   if (point) {
        //     let heatPoint={lng:point.lng,lat:point.lat,count:x.profit,froName:x.city,name:x.name};
        //      axios.get('/v1/ditricts/insertGPS',{params:heatPoint}).then(res => {
        //         if(res=='1'){
        //           console.log("111");
        //         }
        //      })
        //     console.info(x.city+"  "+x.name +": 成功");
        //  }else{
        //     console.info(x.city+"  "+x.name+": ");
        //  }
        // }, x.city);
     // });
    //})
  },
  methods: {
    //getColor(qty) {
      //let red = 255 * (qty/this.sumCost);
      //let green = 0;
      //let blue = 255 - (255*(qty/this.sumCost));
      //return `rgb(${red},${green},${blue})`;
    //},
     infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    },
    syncCenterAndZoom(e){
         this.zoom = e.target.getZoom()
     }
    }
};
</script>

<style>
.bm-view {
  width: 100%;
  height: 95%;
}
.anchorBL{
  display:none;
}
</style>