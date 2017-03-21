import Vue from 'vue'
import store from '@/store';
import router from '@/router'
import App from '@/components/App';
import "normalize.css"
import "animate.css/animate.min.css"
import "github-markdown-css/github-markdown.css"
import "@/assets/css/iconfont.css"

new Vue({
    el: "#root",
    store,
    router,
    render: (h) => h(App)
});