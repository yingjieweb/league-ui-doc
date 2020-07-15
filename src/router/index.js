import Vue from 'vue'
import VueRouter from 'vue-router'

// main menu
import DocIntro from "../views/DocIntro"
import DocStart from "../views/DocStart"
import DocTraining from "../views/DocTraining"
import DocSocial from "../views/DocSocial"
import DocPromotion from "../views/DocPromotion"

// sub menu
import DocDesign from "../components/detail/DocDesign"
import DocLayout from "../components/detail/DocLayout"
import DocContainer from "../components/detail/DocContainer"
import DocHero from "../components/detail/DocHero"
import DocBadge from "../components/detail/DocBadge"
import DocIcon from "../components/detail/DocIcon"
import DocButton from "../components/detail/DocButton"
import DocInput from "../components/detail/DocInput"
import DocCascader from "../components/detail/DocCascader"
import DocToast from "../components/detail/DocToast"
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
    redirect: '/components/design'
  },
  {
    path: '/components/design',
    name: 'design',
    component: DocDesign
  },
  {
    path: '/components/layout',
    name: 'layout',
    component: DocLayout
  },
  {
    path: '/components/container',
    name: 'container',
    component: DocContainer
  },
  {
    path: '/components/hero',
    name: 'hero',
    component: DocHero
  },
  {
    path: '/components/badge',
    name: 'badge',
    component: DocBadge
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
    path: '/components/cascader',
    name: 'cascader',
    component: DocCascader
  },
  {
    path: '/components/toast',
    name: 'toast',
    component: DocToast
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
