import Vue from "vue";
import App from './App.vue'
import './index.css'

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log('updated: count is now 1')
  })
}

new Vue({
  render: h => h(App)
}).$mount("#app");

//createApp(App).mount('#app')
