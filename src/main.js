// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'normalize-css'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

import './style/index.scss'
// import VueReportBase from 'VueReportBase'
import Report from 'bd-report'

console.info('报表插件', Report)
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(VueReportBase)
Vue.component('report', Report)
Vue.use(Report)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
