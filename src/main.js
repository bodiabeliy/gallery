import Vue from 'vue'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-
import BootstrapVue from 'bootstrap-vue';

import vuetify from './plugins/vuetify'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
