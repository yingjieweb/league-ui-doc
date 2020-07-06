<template>
  <div class="doc-input">
    <doc-post>
      <h1>Input</h1>

      <!--Basic-->
      <h2>Basic</h2>
      <div class="sample">
        Bind String: <lol-input value="Hello League UI !"></lol-input>
        Bind Variable: <lol-input :value="true"></lol-input>
      </div>
      <pre>
        <code class="html">{{sample.basic}}</code>
      </pre>

      <!--Placeholder-->
      <h2>Placeholder</h2>
      <div class="sample">
        Placeholder: <lol-input placeholder="placeholder"></lol-input>
      </div>
      <pre>
        <code class="html">{{sample.placeholder}}</code>
      </pre>

      <!--Disabled and Readonly-->
      <h2>Disabled and Readonly</h2>
      <div class="sample">
        Disabled: <lol-input value="Hello League UI !" disabled></lol-input>
        Readonly: <lol-input :value="true" readonly></lol-input>
      </div>
      <pre>
        <code class="html">{{sample.disabledAndReadonly}}</code>
      </pre>

      <!--Hint-->
      <h2>Hint</h2>
      <div class="sample">
        <lol-input icon-name="right" hint="Success" hint-type="success"></lol-input>
        <lol-input icon-name="info" hint="Info" hint-type="info"></lol-input>
        <lol-input icon-name="warning" hint="Warning" hint-type="warning"></lol-input>
        <lol-input icon-name="error" hint="Danger" hint-type="danger"></lol-input>
      </div>
      <pre>
        <code class="html">{{sample.hint}}</code>
      </pre>

      <!--Two-way Binding-->
      <h2>Two-way Binding</h2>
      <div class="sample">
        <lol-input v-model="text"></lol-input>

        <p>Result: {{text}}</p>
      </div>
      <pre>
        <code class="html">{{sample.twoWayBindingHtml}}</code>
      </pre>
      <pre>
        <code class="js">{{sample.twoWayBindingJs}}</code>
      </pre>

      <!--Properties-->
      <h2>Properties</h2>
      <table>
        <thead>
        <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
        </thead>
        <tbody>
        <tr>
          <td>value</td><td>Set value of LolInput</td><td>String</td><td>""</td>
        </tr>
        <tr>
          <td>placeholder</td><td>Set placeholder of LolInput</td><td>String</td><td>-</td>
        </tr>
        <tr>
          <td>disabled</td><td>Set whether is disabled to LolInput</td><td>Boolean</td><td>false</td>
        </tr>
        <tr>
          <td>readonly</td><td>Set whether is readonly to LolInput</td><td>Boolean</td><td>false</td>
        </tr>
        <tr>
          <td>iconName</td><td>Set name of an icon that along with LolInput</td><td>String</td><td>-</td>
        </tr>
        <tr>
          <td>hint</td><td>Set a hin below LolInput</td><td>String</td><td>-</td>
        </tr>
        <tr>
          <td>hintType</td><td>Set type of hint, can be success, info, warning, danger</td><td>String</td><td>-</td>
        </tr>
        <tr>
          <td>width</td><td>Width of input</td><td>Number</td><td>200</td>
        </tr>
        <tr>
          <td>rect</td><td>If it's a rectangle</td><td>Boolean</td><td>false</td>
        </tr>
        </tbody>
      </table>
    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/input"
  import {LolInput} from 'league-ui'
  import 'league-ui/dist/index.css'

  export default {
    name: "DocInput",
    components: {
      'lol-input': LolInput
    },
    data() {
      return {
        sample,
        text: 'Hello League UI !'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .doc-input {
    .sample {
      margin-bottom: 10px;
      .input {
        display: inline-block;
        margin-right: 8px;
      }
    }
  }
</style>