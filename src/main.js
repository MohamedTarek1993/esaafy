import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps" // Import package

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "GOOGLE MAP API KEY GOES HERE",
    libraries: "places"
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
