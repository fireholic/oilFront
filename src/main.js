import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import qs from 'qs';
import 'element-ui/lib/theme-chalk/index.css';
import VueGoogleCharts from 'vue-google-charts'
import ECharts from 'vue-echarts'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueGoogleCharts);
Vue.prototype.$qs = qs;
Vue.component('v-chart', ECharts)


Vue.filter('formatAmount', function (value) {
  if(value==0 || null==value){
    return 0;
  }
  return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

 