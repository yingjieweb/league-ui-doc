<template>
  <div class="doc-intro">
    <doc-post>
      <h1>League UI</h1>

      <!--badges-->
      <img class="badge" src="https://www.travis-ci.org/yingjieweb/league-ui.svg?branch=master" alt="Build Status">
      <img class="badge" src="https://img.shields.io/npm/v/league-ui?color=%230E80C0" alt="Version">
      <img class="badge" src="https://img.shields.io/github/license/yingjieweb/league-ui" alt="License">
      <img class="badge" src="https://img.shields.io/github/stars/yingjieweb/league-ui?style=social" alt="GitHub Stars">

      <img class="logo" src="../assets/images/logo-pic.png" alt="League UI">

      <p>League UI library for Web APP, built with Vue.js. Feel free to download from
        <a href="https://www.npmjs.com/package/league-ui">npm</a>.
      </p>

      <h2>Get Started</h2>
      <p>Get excited? Go
        <router-link to="/start">here</router-link>
        to get started.
      </p>

      <h2>Note</h2>
      <p>This UI library will reset some styles as followed. I strongly recommend you to add these styles to all of your
        projects for saving time to find CSS bugs :)</p>

      <pre>
<code class="css">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}</code>
      </pre>

      <h2>Copyright Statement</h2>
      <p>
        I love playing League of Legends, so I built this just for fun but not for commercial purpose.
        <strong>
          Note: Some images, logos are from League of Legends made by Riot Games.
          If you want to use this lib for commercial purpose, you have to obey those licences and place a proper licence
          for your project.
        </strong>
      </p>

    </doc-post>
  </div>
</template>

<script>
  export default {
    name: "DocIntro"
  }
</script>

<style lang="scss" scoped>
  .doc-intro {
    .badge {
      margin-right: 5px;
    }

    .logo {
      display: block;
      margin: 0 auto;
    }
  }
</style>