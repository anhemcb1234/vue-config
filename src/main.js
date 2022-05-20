import Vue from 'vue'
import App from './App.vue'
import './index.css'
import {router} from "@/routes";
import VCalendar from 'v-calendar'
Vue.config.productionTip = false
Vue.use(VCalendar);
<<<<<<< HEAD

=======
>>>>>>> 6570d3c23de229e04ed5cc4531e304504040698c
new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
