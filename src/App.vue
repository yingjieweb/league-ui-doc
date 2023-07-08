<template>
  <div id="app">
    <LolContainer>
      <!--Left hand side nav-->
      <LolSider class="app-sider">
        <DocNav class="doc-nav"></DocNav>
      </LolSider>

      <!--Right hand side documents-->
      <LolContainer class="app-content-wrapper">
        <LolContent>
          <router-view></router-view>
        </LolContent>
        <LolFooter></LolFooter>
      </LolContainer>
    </LolContainer>
  </div>
</template>

<script>
import DocNav from "./components/frame/DocNav";

export default {
  name: "App",
  components: {
    DocNav,
  },
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  background: url("assets/images/bg.jpg") no-repeat center;
  background-size: cover;
  .app-sider {
    display: none;
    @include pc {
      display: block;
    }
    @include tablet {
      display: block;
    }
  }
  .app-content-wrapper {
    width: 100%;
  }
}
</style>
