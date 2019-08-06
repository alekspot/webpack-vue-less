import Vue from 'vue';
import App from './components/App.vue'

import './less/test.less'

window.addEventListener('load',()=>{
    new Vue({
        el:'#app',
        render: h=>h(App)  
    })
})
