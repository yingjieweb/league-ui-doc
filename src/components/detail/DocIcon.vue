<template>
  <div class="doc-icon">
    <doc-post>
      <h1>Icon</h1>
      <p>League-ui provides a common set of icons.</p>

      <h2>Basic</h2>
      <div class="sample display">
        <span @click="onClickIcon(icon)" v-for="icon in icons" :class="['icon', {active: icon === selectedIcon}]">
            <lol-icon size="2em" :name="icon"></lol-icon>
            <span class="text">{{icon}}</span>
        </span>
      </div>
      <p>Here's the code for selected icon.</p>
      <pre style="padding: 16px 16px;"><code ref="selectedCode" class="html">{{selectedHtml}}</code></pre>

      <!--Color-->
      <h2>Color</h2>
      <p>In some cases, you may want to highlight the Icon.</p>
      <div class="sample display">
        <span class="icon-small">
            <lol-icon name="setting" color="#DE4561"></lol-icon>
        </span>
        <span class="icon-small">
          <lol-icon name="delete" color="#3B9CE1"></lol-icon>
        </span>
        <span class="icon-small">
          <lol-icon name="people" color="#FFC429"></lol-icon>
        </span>
      </div>
      <pre>
        <code class="html">{{sample.color}}</code>
      </pre>

      <!--Loading-->
      <h2>Loading</h2>
      <p>You can set it to loading state with enable <code>is-loading</code></p>
      <div class="sample display">
        <div class="icon-small">
          <lol-icon name="loading" :is-loading="true"></lol-icon>
        </div>
      </div>
      <pre>
        <code class="html">{{sample.loading}}</code>
      </pre>

      <!--Properties-->
      <h2>Properties</h2>
      <table>
        <thead>
        <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
        </thead>
        <tbody>
        <tr>
          <td>name</td><td>Set name of LolIcon</td><td>String</td><td>"setting"</td>
        </tr>
        <tr>
          <td>color</td><td>Set stroke color of LolIcon</td><td>String</td><td>"#000000"</td>
        </tr>
        <tr>
          <td>size</td><td>Size of LolIcon</td><td>String</td><td>"1em"</td>
        </tr>
        <tr>
          <td>is-loading</td><td>Set loading state of LolIcon	</td><td>Boolean</td><td>false</td>
        </tr>
        </tbody>
      </table>
    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/icon"
  import {LolIcon} from 'league-ui'
  import 'league-ui/dist/index.css'
  import hljs from 'highlight.js'


  export default {
    name: "DocIcon",
    components: {
      'lol-icon': LolIcon
    },
    data() {
      return {
        sample,
        icons: [
          'left', 'right', 'fast-left', 'fast-right', 'down', 'up', 'add', 'subtract', 'setting', 'loading',
          'favor-fill', 'favor', 'check-fill', 'check', 'close-fill', 'close', 'warn-fill', 'warn', 'question-fill', 'question',
          'pull-up', 'pull-down', 'pull-left', 'pull-right', 'delete-fill', 'delete', 'lock', 'unlock','forward-fill', 'forward',
          'recharge-fill', 'recharge', 'notice-fill', 'notice', 'people-fill', 'people', 'tag-fill', 'tag', 'add-friend-fill', 'add-friend'
        ],
        selectedHtml: `<lol-icon name="left" size="2em"></lol-icon>`,
        selectedIcon: 'left'
      }
    },
    methods: {
      onClickIcon(icon) {
        this.$refs.selectedCode.innerText = `<lol-icon name="${icon}" size="2em"></lol-icon>`
        this.selectedIcon = icon
        hljs.highlightBlock(this.$refs.selectedCode)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .doc-icon {
    .display {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      background: #2B3753;
      color: rgb(201, 212, 227);
      border-radius: 4px;
      margin-bottom: 12px;
    }
    .icon {
      display: inline-flex;
      vertical-align: top;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 120px;
      height: 120px;
      transition: all .3s;
      border: 2px solid #2B3753;
      border-radius: 4px;
      &.active {
        border: 2px solid $--color-primary;
      }
      &:hover {
        border: 2px solid $--color-primary;
      }
      &-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
      }
    }
    .text {
      margin-top: 4px;
    }
  }
</style>