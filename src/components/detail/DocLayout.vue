<template>
  <div class="doc-layout">
    <doc-post>
      <h1>Layout</h1>
      <p>This UI library provides a Grid System. It mainly adapt to <code>widePC</code>,
        <code>PC</code>, <code>narrowPC</code>, <code>iPad</code> and cell <code>phone</code> screen.</p>

      <!--Basic-->
      <h2>Basic</h2>
      <p>You can assign a value to span to set the element's width. Each unit represents 1/24 of the current container width.</p>
      <div class="sample">
        <lol-row class="row">
          <lol-col :span="6">
            <div class="col-item col-item-primary"></div>
          </lol-col>
          <lol-col :span="6">
            <div class="col-item col-item-warning"></div>
          </lol-col>
          <lol-col :span="6">
            <div class="col-item col-item-primary"></div>
          </lol-col>
          <lol-col :span="6">
            <div class="col-item col-item-warning"></div>
          </lol-col>
        </lol-row>
      </div>
      <pre>
        <code class="html">{{sample.basic}}</code>
      </pre>

      <!--Gutter-->
      <h2>Gutter</h2>
      <p>You can assign a value to gutter to give more space between each element.</p>
      <div class="sample">
        <lol-row :gutter="10" class="row">
          <lol-col :span="6">
            <div class="col-item col-item-primary"></div>
          </lol-col>
          <lol-col :span="6">
            <div class="col-item col-item-warning"></div>
          </lol-col>
          <lol-col :span="6">
            <div class="col-item col-item-primary"></div>
          </lol-col>
          <lol-col :span="6">
            <div class="col-item col-item-warning"></div>
          </lol-col>
        </lol-row>
      </div>
      <pre>
        <code class="html">{{sample.gutter}}</code>
      </pre>

      <!--Span and Offset-->
      <h2>Span and Offset</h2>
      <p>You can define width for each LolCol or add an offset.</p>
      <div class="sample">
        <lol-row class="row">
          <lol-col :span="1" :offset="2">
            <div class="col-item col-item-primary"></div>
          </lol-col>
          <lol-col :span="3" :offset="4">
            <div class="col-item col-item-warning"></div>
          </lol-col>
          <lol-col :span="5" :offset="6">
            <div class="col-item col-item-primary"></div>
          </lol-col>
        </lol-row>
      </div>
      <pre>
        <code class="html">{{sample.spanAndOffset}}</code>
      </pre>

      <!--Responsive-->
      <h2>Responsive</h2>
      <p>This library will first look for <code>phone</code>, and then <code>iPad</code>, <code>narrowPc</code>, <code>pc</code>, <code>widePc</code>.
        To make it more adaptable, you should always set <code>phone</code> first.</p>
      <div class="sample">
        <lol-row class="row">
          <lol-col :span="24" :i-pad="{span: 20}" :narrowPc="{span: 16}" :pc="{span: 12}" :widePc="{span: 8}">
            <div class="col-item col-item-primary"></div>
          </lol-col>
        </lol-row>
      </div>
      <pre>
        <code class="html">{{sample.responsive}}</code>
      </pre>

      <!--Properties-->
      <h2>Properties</h2>
      <table>
        <thead>
        <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
        </thead>
        <tbody>
        <tr>
          <td>span</td><td>Set span of LolCol, mainly suitable for mobile phones（0~556px）</td><td>Number | String</td><td>-</td>
        </tr>
        <tr>
          <td>offset</td><td>Set offset of LolCol, mainly suitable for mobile phones（0~556px）</td><td>Number | String</td><td>-</td>
        </tr>
        <tr>
          <td>i-pad</td><td>Set span and offset for iPad device（557~768px）</td><td>Object</td><td>-</td>
        </tr>
        <tr>
          <td>narrowPc</td><td>Set span and offset for narrowPc device（769~992px）</td><td>Object</td><td>-</td>
        </tr>
        <tr>
          <td>pc</td><td>Set span and offset for pc device（993~1199px）</td><td>Object</td><td>-</td>
        </tr>
        <tr>
          <td>widePc</td><td>Set span and offset for widePc device（1200px~...）</td><td>Object</td><td>-</td>
        </tr>
        </tbody>
      </table>
    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/layout"
  import {LolRow, LolCol} from 'league-ui'
  import 'league-ui/dist/index.css'

  export default {
    name: "DocLayout",
    components: {
      'lol-row': LolRow,
      'lol-col': LolCol
    },
    data() {
      return {
        sample
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sample {
    .row {
      margin-bottom: 10px;
      .col-item {
        height: 30px;
        &-primary {
          background: $--color-primary;
        }
        &-warning {
          background: $--color-warning;
        }
      }
    }
  }
</style>