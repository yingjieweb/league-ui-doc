<template>
  <div class="doc-nav-wrapper">
    <router-link to="/">
      <img class="nav-logo" src="../../assets/images/logo-text.png" alt="Logo">
    </router-link>

    <transition name="slide-quick-left">
      <doc-menu class="doc-menu" v-if="!isShowSubMenu"></doc-menu>
    </transition>
    <transition name="slide-quick-right">
      <doc-sub-menu class="doc-sub-menu" v-if="isShowSubMenu"></doc-sub-menu>
    </transition>

    <!--<doc-board class="doc-board"></doc-board>-->

    <!--Back button-->
    <lol-button
            v-if="this.isShowSubMenu"
            class="back-button"
            type="danger"
            @click="$router.push({ path: '/' })">
      BACK
    </lol-button>
  </div>
</template>

<script>
  import DocMenu from './DocMenu'
  import DocSubMenu from './DocSubMenu'
  // import DocBoard from './DocBoard'

  export default {
    name: "DocNav",
    components: {
      DocMenu,
      DocSubMenu,
      // DocBoard
    },
    data() {
      return {
        isShowSubMenu: false
      }
    },
    mounted() {
      if (/components*/.test(this.$route.path)) {
        this.isShowSubMenu = true
      }
    },
    watch: {
      $route(route) {
        this.isShowSubMenu = /components*/.test(route.path)
      }
    }
  }
</script>

<style scoped lang="scss">
  .doc-nav-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 28vw;
    height: 100vh;
    background: transparent;
    padding-left: 3vw;
    padding-top: 3vh;
    position: relative;

    .nav-logo {
      margin-top: 2vh;
      width: 25vw;
    }

    .doc-menu, .doc-sub-menu {
      position: absolute;
      left: 3vw;
      top: 12vh;
      width: 25vw;
    }

    .doc-board {
      position: absolute;
      width: 25vw;
      bottom: 4vh;
    }

    .back-button {
      position: absolute;
      right: 0;
      bottom: 6vh;
    }
  }
</style>