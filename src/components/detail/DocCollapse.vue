<template>
  <div class="doc-collapse">
    <doc-post>
      <h1>Collapse</h1>

      <!--Basic-->
      <h2>Basic</h2>
      <p>To use this component, you need to group your them with LolCollapse</p>
      <div class="sample">
        <lol-collapse :selected.sync="selectedCollapse1">
          <lol-collapse-item title="Title1" name="1">Content 1</lol-collapse-item>
          <lol-collapse-item title="Title2" name="2">Content 2</lol-collapse-item>
          <lol-collapse-item title="Title3" name="3">Content 3</lol-collapse-item>
        </lol-collapse>
        <span>You are selecting: {{selectedCollapse1}}</span>
      </div>
      <pre>
        <code class="html">{{sample.basicHtml}}</code>
      </pre>
      <pre>
        <code class="js">{{sample.basicJs1}}</code>
      </pre>

      <!--Single Select-->
      <h2>Single Select</h2>
      <p>You can enable only one OwCollapse to expand. You can't define the selected array that has more than 1 element.</p>
      <div class="sample">
        <lol-collapse :selected.sync="selectedCollapse2" :multiSelect="false">
          <lol-collapse-item title="Title1" name="1">Content 1</lol-collapse-item>
          <lol-collapse-item title="Title2" name="2">Content 2</lol-collapse-item>
          <lol-collapse-item title="Title3" name="3">Content 3</lol-collapse-item>
        </lol-collapse>
        <span>You are selecting: {{selectedCollapse2}}</span>
      </div>
      <pre>
        <code class="html">{{sample.single}}</code>
      </pre>
      <pre>
        <code class="js">{{sample.basicJs2}}</code>
      </pre>

      <!--Properties-->
      <h2>Properties</h2>
      <table>
        <thead>
        <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
        </thead>
        <tbody>
        <tr>
          <td>selected</td><td>Array of selected items</td><td>Array</td><td>-</td>
        </tr>
        <tr>
          <td>multiSelect</td><td>If multiple LolCollapseItem can expand</td><td>Boolean</td><td>true</td>
        </tr>
        </tbody>
      </table>
    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/collapse"
  import {LolCollapse, LolCollapseItem} from 'league-ui'
  import 'league-ui/dist/index.css'

  export default {
    name: "DocCollapse",
    components: {
      'lol-collapse': LolCollapse,
      'lol-collapse-item': LolCollapseItem
    },
    data() {
      return {
        sample,
        selectedCollapse1: ['1', '2'],
        selectedCollapse2: ['1']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sample {
    margin-bottom: 10px;
    .content {
      margin-top: 4px;
      padding: 10px;
    }
  }
</style>