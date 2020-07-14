<template>
  <div class="doc-tabs">
    <doc-post>
      <h1>Tabs</h1>
      <!--Basic-->
      <h2>Basic</h2>
      <p>You can define a tab navigator with LolTabs.</p>
      <div class="sample">
        <lol-tabs :selected="selectedTab1">
          <lol-tabs-head>
            <lol-tabs-item name="data">Data</lol-tabs-item>
            <lol-tabs-item name="career">Career</lol-tabs-item>
            <lol-tabs-item name="position">Position</lol-tabs-item>
          </lol-tabs-head>

          <lol-tabs-body>
            <lol-tabs-pane class="pane" name="data">Data</lol-tabs-pane>
            <lol-tabs-pane class="pane" name="career">Career</lol-tabs-pane>
            <lol-tabs-pane class="pane" name="position">Position</lol-tabs-pane>
          </lol-tabs-body>
        </lol-tabs>
      </div>
      <pre>
        <code class="html">{{sample.basicHtml}}</code>
      </pre>
      <pre>
        <code class="js">{{sample.disabledJs}}</code>
      </pre>

      <!--Disabled-->
      <h2>Disabled</h2>
      <p>If you want to disable a tab, set the disabled property on the LolTabItem.</p>
      <div class="sample">
        <lol-tabs :selected="selectedTab1">
          <lol-tabs-head>
            <lol-tabs-item name="data">Data</lol-tabs-item>
            <lol-tabs-item name="career" disabled>Career</lol-tabs-item>
            <lol-tabs-item name="position">Position</lol-tabs-item>
          </lol-tabs-head>

          <lol-tabs-body>
            <lol-tabs-pane class="pane" name="data">Data</lol-tabs-pane>
            <lol-tabs-pane class="pane" name="career">Career</lol-tabs-pane>
            <lol-tabs-pane class="pane" name="position">Position</lol-tabs-pane>
          </lol-tabs-body>
        </lol-tabs>
      </div>
      <pre>
        <code class="html">{{sample.disabledHtml}}</code>
      </pre>
      <pre>
        <code class="js">{{sample.basicJs}}</code>
      </pre>

      <!--Action-->
      <h2>Action</h2>
      <p>You can place any elements in the right hand side with <code>template</code>.</p>
      <div class="sample">
        <lol-tabs :selected="selectedTab2">
          <lol-tabs-head>
            <lol-tabs-item name="data">Data</lol-tabs-item>
            <lol-tabs-item name="career">Career</lol-tabs-item>
            <lol-tabs-item name="position">Position</lol-tabs-item>
            <template slot="actions">
              <lol-button>Setting</lol-button>
            </template>
          </lol-tabs-head>

          <lol-tabs-body>
            <lol-tabs-pane class="pane" name="data">Data</lol-tabs-pane>
            <lol-tabs-pane class="pane" name="career">Career</lol-tabs-pane>
            <lol-tabs-pane class="pane" name="position">Position</lol-tabs-pane>
          </lol-tabs-body>
        </lol-tabs>
      </div>
      <pre>
        <code class="html">{{sample.actionHtml}}</code>
      </pre>
      <pre>
        <code class="js">{{sample.basicJs}}</code>
      </pre>

      <!--Properties-->
      <h2>Properties</h2>
      <table>
        <thead>
        <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
        </thead>
        <tbody>
        <tr>
          <td>name</td><td>Name of LolTabsItem and LolTabsBody</td><td>String</td><td>-</td>
        </tr>
        <tr>
          <td>disabled</td><td>Disabled property on the LolTabItem.</td><td>Boolean</td><td>false</td>
        </tr>
        <tr>
          <td>selected</td><td>Set active item and pane with given selected name</td><td>String</td><td>-</td>
        </tr>
        </tbody>
      </table>
    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/tabs"
  // import {LolTabs, LolTabsHead, LolTabsItem, LolTabsBody, LolTabsPane, LolButton} from 'league-ui'
  // import 'league-ui/dist/index.css'


  export default {
    name: "DocTabs",
    components: {
      // 'lol-tabs': LolTabs,
      // 'lol-tabs-head': LolTabsHead,
      // 'lol-tabs-item': LolTabsItem,
      // 'lol-tabs-body': LolTabsBody,
      // 'lol-tabs-pane': LolTabsPane,
      // 'lol-button': LolButton
    },
    data() {
      return {
        sample,
        selectedTab1: 'data',
        selectedTab2: 'data'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sample {
    margin-bottom: 10px;
    .pane {
      padding: 10px;
      color: $--color-warning-dark;
      background: $--color-white;
    }
  }
</style>