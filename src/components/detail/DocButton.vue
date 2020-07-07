<template>
  <div class="doc-button">
    <doc-post>
      <h1>Button</h1>

      <!--Button Types-->
      <h2>Button Types</h2>
      <p>There are 5 button types: <code>primary</code>, <code>success</code>, <code>warning</code>, <code>info</code>, <code>danger</code>.</p>
      <div class="samples">
        <lol-button class="item" type="primary">Primary</lol-button>
        <lol-button class="item" type="success">Success</lol-button>
        <lol-button class="item" type="warning">Warning</lol-button>
        <lol-button class="item" type="info">Info</lol-button>
        <lol-button class="item" type="danger">Danger</lol-button>
      </div>
      <pre>
          <code class="html">{{sample.type}}</code>
      </pre>


      <!--Button with Icons-->
      <h2>Button with Icons</h2>
      <p>You can add an icon inside the button.</p>
      <div class="samples">
        <lol-button class="item" type="primary" icon-name="setting">Setting</lol-button>
        <lol-button class="item" type="danger" icon-name="delete">Delete</lol-button>
      </div>
      <pre>
        <code class="html">{{sample.icon}}</code>
      </pre>
      <p>Also, you can set its position <code>left</code> or <code>right</code> as you like.</p>
      <div class="samples">
        <lol-button class="item" icon-name="up" icon-position="left">Up</lol-button>
        <lol-button class="item" icon-name="down" icon-position="right">Down</lol-button>
      </div>
      <pre>
        <code class="html">{{sample.iconPosition}}</code>
      </pre>
      <p>Loading state is also available.</p>
      <div class="samples">
        <lol-button icon-name="loading" :is-loading="true">Loading...</lol-button>
      </div>
      <pre>
        <code class="html">{{sample.loading}}</code>
      </pre>

      <!--Button with event-->
      <h2>Event</h2>
      <p>You can add a click event handler to this component.</p>
      <div class="samples">
        <lol-button
                class="item"
                @click="isLoading = !isLoading"
                icon-name="loading"
                :is-loading="isLoading">
          Loading...
        </lol-button>
      </div>
      <pre>
        <code class="html">{{sample.event}}</code>
      </pre>

      <!--Button with group-->
      <h2>Button Group</h2>
      <p>Sometimes, you may want to group several buttons like: buttons for next page and prev page.</p>
      <div class="samples">
        <lol-button-group>
          <lol-button icon-name="add" type="primary" icon-position="left">
            More
          </lol-button>
          <lol-button icon-name="subtract" type="primary" icon-position="right">
            Less
          </lol-button>
        </lol-button-group>
      </div>
      <pre>
        <code class="html">{{sample.group}}</code>
      </pre>

      <!--Properties-->
      <h2>Properties</h2>
      <table>
        <thead>
        <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
        </thead>
        <tbody>
        <tr>
          <td>icon-name</td><td>Set name of icon in LolButton</td><td>String</td><td>-</td>
        </tr>
        <tr>
          <td>icon-position</td><td>Set position of icon in LolButton</td><td>String</td><td>"left"</td>
        </tr>
        <tr>
          <td>is-loading</td><td>Set the loading status of LolButton</td><td>Boolean</td><td>false</td>
        </tr>
        <tr>
          <td>type</td><td>Set type of LolButton</td><td>String</td><td>"primary"</td>
        </tr>
        </tbody>
      </table>
    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/button"
  import {LolButton, LolButtonGroup} from 'league-ui'
  import 'league-ui/dist/index.css'

  export default {
    name: "DocButton",
    components: {
      'lol-button': LolButton,
      'lol-button-group': LolButtonGroup
    },
    data() {
      return {
        sample,
        isLoading: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .doc-button {
    .samples {
      margin-bottom: 8px;
      .item {
        margin-right: 8px;
      }
    }
  }
</style>