import Vue from 'vue'
import VueRouter from 'vue-router'

// main menu
import DocIntro from "../views/DocIntro"
import DocStart from "../views/DocStart"
import DocTraining from "../views/DocTraining"
import DocSocial from "../views/DocSocial"
import DocPromotion from "../views/DocPromotion"

// sub menu
import DocContainer from "../components/detail/DocContainer"
import DocLayout from "../components/detail/DocLayout"
import DocDesign from "../components/detail/DocDesign"
import DocIcon from "../components/detail/DocIcon"
import DocButton from "../components/detail/DocButton"
import DocInput from "../components/detail/DocInput"
import DocPopover from "../components/detail/DocPopover"
import DocTabs from "../components/detail/DocTabs"
import DocCollapse from "../components/detail/DocCollapse"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/intro'
  },
  {
    path: '/intro',
    name: 'intro',
    component: DocIntro
  },
  {
    path: '/start',
    name: 'start',
    component: DocStart
  },
  {
    path: '/training',
    name: 'training',
    component: DocTraining
  },
  {
    path: '/components',
    redirect: '/components/container'
  },
  {
    path: '/components/container',
    name: 'container',
    component: DocContainer
  },
  {
    path: '/components/layout',
    name: 'layout',
    component: DocLayout
  },
  {
    path: '/components/design',
    name: 'design',
    component: DocDesign
  },
  {
    path: '/components/icon',
    name: 'icon',
    component: DocIcon
  },
  {
    path: '/components/button',
    name: 'button',
    component: DocButton
  },
  {
    path: '/components/input',
    name: 'input',
    component: DocInput
  },
  {
    path: '/components/popover',
    name: 'popover',
    component: DocPopover
  },
  {
    path: '/components/tabs',
    name: 'tabs',
    component: DocTabs
  },
  {
    path: '/components/collapse',
    name: 'collapse',
    component: DocCollapse
  },
  {
    path: '/social',
    name: 'social',
    component: DocSocial
  },
  {
    path: '/promotion',
    name: 'promotion',
    component: DocPromotion
  }
]

const router = new VueRouter({
  routes
})

export default router
