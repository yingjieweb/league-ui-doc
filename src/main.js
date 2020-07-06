import Vue from 'vue'
import App from './App.vue'
import router from './router'

import DocPost from "./components/frame/DocPost"

Vue.config.productionTip = false

import {
  LolIcon,
  LolButton, LolButtonGroup,
  LolInput,
  LolRow, LolCol,
  LolContainer, LolHeader, LolSider, LolContent, LolFooter,
  LolToast,
  LolTabs, LolTabsHead, LolTabsItem, LolTabsBody, LolTabsPane,
  LolPopover,
  LolCollapse, LolCollapseItem
} from 'league-ui'
// import 'league-ui/dist/index.css'

Vue.component('doc-post', DocPost)

new Vue({
  components: {
    LolIcon,
    LolButton, LolButtonGroup,
    LolInput,
    LolRow, LolCol,
    LolContainer, LolHeader, LolSider, LolContent, LolFooter,
    LolToast,
    LolTabs, LolTabsHead, LolTabsItem, LolTabsBody, LolTabsPane,
    LolPopover,
    LolCollapse, LolCollapseItem
  },
  router,
  render: h => h(App)
}).$mount('#app')
