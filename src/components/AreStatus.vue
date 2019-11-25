<template>
<div id="areStatus" style="margin:25px 0px 0px 25px; width: 1750px;height:565px;flex: 1">
  <baidu-map class="bm-view"  
  ak="HykSaifjf6GhhW1GVP9y3DC5jcz2zpIQ" 
  :center="center" :zoom="zoom"
  :scroll-wheel-zoom="true"
  :mapStyle="midnight"
  @zoomend="syncCenterAndZoom">
    <bm-view >
      <!--<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>-->
      <bm-polygon :path="polygonPath3" fill-color="#90EE90" :stroke-opacity="0.9" :stroke-weight="2" storke-style="solid"/>
      <bm-polygon :path="polygonPath1" fill-color="#90EE90" :stroke-opacity="0.9" :stroke-weight="2" storke-style="solid"/>
      <bm-polygon :path="polygonPath2" fill-color="#90EE90" :stroke-opacity="0.9" :stroke-weight="2" storke-style="solid"/>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <bm-marker :position="{lng:  106.069887456, lat : 28.744336109399999}"  :icon="{url: this.img1, size: {width: 45, height: 70}}"></bm-marker>
      <bm-marker :position="{lng:  105.76724341400001, lat : 28.955659368300001}" :icon="{url: this.img1, size: {width: 45, height: 70}}"></bm-marker>
      <bm-marker :position="{lng:  105.49700656, lat : 28.880132436}" :icon="{url: this.img1, size: {width: 45, height: 70}}"></bm-marker>
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
import BmPolygon from "vue-baidu-map/components/overlays/Polygon.vue";
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
    BmPolygon
   // BmGeolocation
    //BmCityList,
   // BmLabel
  },		    
  data() {
    return {
      res:{},
      heatData:[],
      show:false,
      center: "泸州",
      zoom: 12,
      district:[],
      sumCost:1,
      sumRepay:1,
      midnight:{style:'midnight'},
      img1:require('../assets/点.png'),
      img2:require('../assets/椭圆.png'),
      polygonPath1:[],
      polygonPath2:[],
      polygonPath3:[]
      
    };
  },
  created(){
    let data = require("../static/data.json")
     this.polygonPath1=data.polygonPath1;
     this.polygonPath2=data.polygonPath2;
     this.polygonPath3=data.polygonPath3;
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