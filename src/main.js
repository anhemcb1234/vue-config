import Vue from 'vue'
import App from './App.vue'
import './index.css'
import {router} from "@/routes";
import VCalendar from 'v-calendar'

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false
Vue.use(VCalendar);
Vue.use(require('vue-moment'));

// Vue.filter('formatMiliseconds', (value) => {
//   if (value) {
//       return moment(value).format('x')
//   }
// });
const options = {
    // You can set your default options here
};

Vue.use(Toast, options);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
