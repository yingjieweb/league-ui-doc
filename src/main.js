import Vue from 'vue'
import App from './App.vue'
import router from './router'

import DocPost from "./components/frame/DocPost"

Vue.config.productionTip = false

import LeagueUI from 'league-ui'
import 'league-ui/dist/league-ui.css'

Vue.use(LeagueUI.plugins.$lolToast)

Vue.component('doc-post', DocPost)

new Vue({
  components: {
    ...LeagueUI.Components
  },
  router,
  render: h => h(App)
}).$mount('#app')
