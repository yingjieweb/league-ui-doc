<template>
  <div class="doc-toast">
    <doc-post>
      <h1>Toast</h1>
      
      <!--Basic-->
      <h2>Basic</h2>
      <p>Before you use this component, you need to import the plugin function.</p>
      <pre>
        <code class="js">{{sample.importing}}</code>
      </pre>
      <p>Then you can invoke the function anywhere.</p>
      <div class="sample">
        <lol-button type="primary" @click="showToast('info')">Toast it</lol-button>
      </div>
      <pre>
        <code class="html">{{sample.useHtml}}</code>
      </pre>
      <pre>
        <code class="js">{{sample.useJs}}</code>
      </pre>

      <!--Types-->
      <h2>Types</h2>
      <p>You can specific any alert types as you like.</p>
      <div class="sample">
        <lol-button class="button" type="primary" @click="showToast('info')">Notification</lol-button>
        <lol-button class="button" type="success" @click="showToast('success')">Success</lol-button>
        <lol-button class="button" type="warning" @click="showToast('warning')">Warning</lol-button>
        <lol-button class="button" type="danger" @click="showToast('danger')">Danger</lol-button>
        <lol-button class="button" type="primary" @click="showToast('loading')">Loading</lol-button>
      </div>
      <pre>
        <code class="html">{{sample.typeHtml}}</code>
      </pre>
      <pre>
        <code class="js">{{sample.typeJs}}</code>
      </pre>

      <!--Properties-->
      <h2>Properties</h2>
      <table>
        <thead>
        <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
        </thead>
        <tbody>
        <tr>
          <td>type</td><td>Type of LolToast, can be success, info, warning, danger, loading</td><td>String</td><td>-</td>
        </tr>
        <tr>
          <td>message</td><td>message of LolToast</td><td>String</td><td>-</td>
        </tr>
        <tr>
          <td>autoClose</td><td>Set the automatic closing time of LolToast</td><td>Number</td><td>5s</td>
        </tr>
        <tr>
          <td>enableHtml</td><td>Set the LolToast's message option to support HTML</td><td>Boolean</td><td>false</td>
        </tr>
        <tr>
          <td>closeButton</td><td>Custom close button, containing 2 keys: <code>text</code> and <code>callback</code></td><td>Object</td><td>-</td>
        </tr>
        </tbody>
      </table>
    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/toast"

  export default {
    name: "DocToast",
    data() {
      return {
        sample
      }
    },
    methods: {
      showToast(type) {
        this.$lolToast({
          type: type,
          message: 'This is a toast message!',
          closeButton: {
            text: 'OK',
            callback(vm) {
              console.log('Yes')
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sample {
    margin-bottom: 10px;
    .button {
      margin-right: 8px;
    }
  }
</style>