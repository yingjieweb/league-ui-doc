<template>
  <div class="doc-start">
    <doc-post>
      <h1>Get Started</h1>

      <h2>Install</h2>
      <p>
        You can use <code>yarn</code> or <code>npm</code> to install this UI library.
      </p>
      <pre>
        <code class="bash">{{sample.install}}</code>
      </pre>

      <h2>Import</h2>
      <p>
        Then you need to import the components and plugins of it.
      </p>
      <pre>
        <code class="js">{{sample.importing}}</code>
      </pre>

      <h2>Usage</h2>
      <p>Now, let's place some components in your Web APP!</p>
      <pre>
        <code class="html">{{sample.basicHtml}}</code>
      </pre>

      <p>Then you'll see this.</p>
      <div class="demo">
        <lol-button class="demo-button" type="primary">Primary</lol-button>
        <lol-button class="demo-button" type="success">Success</lol-button>
        <lol-button class="demo-button" type="info">Info</lol-button>
        <lol-button class="demo-button" type="warning">Warning</lol-button>
        <lol-button class="demo-button" type="danger">Danger</lol-button>

        <lol-popover position="right">
          <template slot="content">
            <div>Hello, League UI!</div>
          </template>
          <lol-button>Pop It!</lol-button>
        </lol-popover>
      </div>
    </doc-post>
  </div>
</template>

<script>
  import sample from "../assets/samples/start"

  export default {
    name: "DocStart",
    data() {
      return {
        sample
      }
    }
  }
</script>

<style lang="scss" scoped>
  .demo {
    &-button {
      margin-right: 10px;
    }
  }
</style>