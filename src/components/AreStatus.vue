<template>
<div id="areStatus" style="margin:0px 0px 0px 15px; width: 1700px;height:100%;flex: 1">
  <el-row>
    <el-col :span="24">
       <baidu-map class="bm-view"  
  ak="HykSaifjf6GhhW1GVP9y3DC5jcz2zpIQ" 
  :center="center" :zoom="zoom"
  :scroll-wheel-zoom="true"
  :mapStyle="midnight"
  @zoomend="syncCenterAndZoom">
    <bm-view>
      <!--<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>-->
      <bm-polygon :path="polygonPath3" fill-color="#90EE90" :stroke-opacity="0.9" :stroke-weight="2" storke-style="solid"/>
      <bm-polygon :path="polygonPath1" fill-color="#90EE90" :stroke-opacity="0.9" :stroke-weight="2" storke-style="solid"/>
      <bm-polygon :path="polygonPath2" fill-color="#90EE90" :stroke-opacity="0.9" :stroke-weight="2" storke-style="solid"/>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
      <bm-marker :position="{lng:  106.069887456, lat : 28.744336109399999}"  :icon="{url: this.img1, size: {width: 20, height: 32}}"></bm-marker>
      <bm-marker :position="{lng:  105.76724341400001, lat : 28.955659368300001}" :icon="{url: this.img1, size: {width:20, height: 32}}"></bm-marker>
      <bm-marker :position="{lng:  105.49700656, lat : 28.880132436}" :icon="{url: this.img1, size: {width: 20, height: 32}}"></bm-marker>
      
      <bm-polyline :path="polylinePath" stroke-color="#3c93fd" :stroke-opacity="0.5" :stroke-weight="6" :editing="false"></bm-polyline>

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
    </el-col>
  </el-row>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmPolygon from "vue-baidu-map/components/overlays/Polygon.vue";
import BmPolyline from "vue-baidu-map/components/overlays/Polyline.vue";
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
    BmPolygon,
    BmPolyline
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
      zoom: 13,
      district:[],
      sumCost:1,
      sumRepay:1,
      midnight:{style:'midnight'},
      img1:require('../assets/点.png'),
      img2:require('../assets/椭圆.png'),
      polygonPath1:[],
      polygonPath2:[],
      polygonPath3:[],
      polylinePath:[]
      
    };
  },
  created(){
    let data = require("../static/data.json")
     this.polygonPath1=data.polygonPath1;
     this.polygonPath2=data.polygonPath2;
     this.polygonPath3=data.polygonPath3;
     this.polylinePath=[{lng:  105.48456141344735, lat : 28.870368167268992},
                        {lng:  105.51100756782968, lat : 28.887497816430908},
                        {lng:  105.75219540210793, lat : 28.960541940362752},
                        {lng:  105.78188548531251, lat : 28.949671193772261},
                        {lng:  106.05890975700666, lat : 28.755738271708484},
                        {lng:  106.07596188619306, lat : 28.729716596529101}];
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
  padding: 25px 0px 0px 0px;
  width: 100%;
  height: 500px;
}
.anchorBL{
  display:none;
}
</style>