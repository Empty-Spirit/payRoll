import Vue from 'vue'
import App from './App'
import axios from './until/index'
import baseUrl from './until/baseUrl'

require('./static/index.less')

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$axios =axios;
Vue.prototype.$baseUrl =baseUrl;

const app = new Vue({
    ...App
})
app.$mount()
