<template>
  <div class="doc-container">
    <doc-post>
      <h1>Container</h1>

      <!--Basic-->
      <h2>Basic</h2>
      <p>Here is the basic example.</p>
      <div class="sample">
        <lol-container class="container">
          <lol-header class="header">Header</lol-header>
          <lol-content class="content">Content</lol-content>
          <lol-footer class="footer">Footer</lol-footer>
        </lol-container>
      </div>
      <pre>
        <code class="html">{{sample.basic}}</code>
      </pre>

      <!--outer Sider-->
      <h2>Using Sider</h2>
      <p>You can add a sider aside main content.</p>
      <div class="sample">
        <lol-container>
          <lol-sider class="sider">Sider</lol-sider>
          <lol-container class="container">
            <lol-header class="header">Header</lol-header>
            <lol-content class="content">Content</lol-content>
            <lol-footer class="footer">Footer</lol-footer>
          </lol-container>
        </lol-container>
      </div>
      <pre>
        <code class="html">{{sample.outerSider}}</code>
      </pre>
      
      <!--inner Sider-->
      <p>Adding sider in another way.</p>
      <div class="sample">
        <lol-container class="container">
          <lol-header class="header">Header</lol-header>
          <lol-container>
            <lol-sider class="sider">Sider</lol-sider>
            <lol-content class="content">Content</lol-content>
          </lol-container>
          <lol-footer class="footer">Footer</lol-footer>
        </lol-container>
      </div>
      <pre>
        <code class="html">{{sample.innerSider}}</code>
      </pre>

      <!--Sider props.visible-->
      <p>You can also toggle sider with props visible.</p>
      <div class="sample">
        <lol-container class="container">
          <lol-header class="header">Header</lol-header>
          <lol-container>
            <lol-sider :visible="isVisible" class="sider">Sider</lol-sider>
            <lol-content class="content">
              Content
              <lol-button @click="isVisible = !isVisible">Toggle Sider</lol-button>
            </lol-content>
          </lol-container>
          <lol-footer class="footer">Footer</lol-footer>
        </lol-container>
      </div>
      <pre>
        <code class="html">{{sample.toggle}}</code>
      </pre>

      <!--Properties-->
      <h2>Properties</h2>
      <table>
        <thead>
        <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
        </thead>
        <tbody>
        <tr>
          <td>visible</td><td>Set if LolSider is visible</td><td>Boolean</td><td>true</td>
        </tr>
        </tbody>
      </table>
    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/container"
  // import {LolContainer, LolHeader, LolSider, LolContent, LolFooter, LolButton} from 'league-ui'
  // import 'league-ui/dist/index.css'

  export default {
    name: "DocContainer",
    components: {
      // 'lol-container': LolContainer,
      // 'lol-header': LolHeader,
      // 'lol-sider': LolSider,
      // 'lol-content': LolContent,
      // 'lol-footer': LolFooter,
      // 'lol-button': LolButton
    },
    data() {
      return {
        sample,
        isVisible: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sample {
    margin-bottom: 10px;
    color: $--color-white;
    .container {
      width: 100%;
      .header, .footer {
        @include hvFlexCenterMx(flex);
        width: 100%;
        height: 30px;
        background: $--color-primary;
      }
      .content {
        @include hvFlexCenterMx(flex);
        height: 120px;
        background: $--color-bg;
      }
    }
    .sider {
      @include hvFlexCenterMx(flex);
      width: 10%;
      background: $--color-bg-dark;
    }
  }
</style>