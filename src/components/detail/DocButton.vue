<template>
  <div class="doc-button">
    <doc-post>
      <h1>Button</h1>

      <section v-if="showLockDemo" class="lock-demo" aria-labelledby="lock-demo-title">
        <img class="lock-demo__portrait" src="../../assets/images/irelia.jpg" alt="">
        <div class="lock-demo__details">
          <h2 id="lock-demo-title">Irelia</h2>
          <p role="status">{{ lockStatus }}</p>
          <div class="lock-demo__actions">
            <lol-button
              :disabled="locking || locked"
              :is-loading="locking"
              :icon-name="locking ? 'loading' : undefined"
              @click="lockChampion"
            >{{ locking ? 'Locking in…' : locked ? 'Locked in' : 'Lock in' }}</lol-button>
            <lol-button type="info" @click="resetLock">{{ locked ? 'Reset' : 'Cancel' }}</lol-button>
          </div>
        </div>
      </section>

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

      <template v-if="showLockDemo">
        <h2>Link Button</h2>
        <p>Set <code>href</code> to render a link with Button styling. Standard link attributes such as <code>target</code> and <code>rel</code> are supported.</p>
        <lol-button href="https://github.com/yingjieweb/league-ui" target="_blank" rel="noopener noreferrer">View on GitHub ↗</lol-button>
      </template>

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
        <tr v-if="showLockDemo">
          <td>href</td><td>Render as a link to this URL</td><td>String</td><td>-</td>
        </tr>
        <tr v-if="showLockDemo">
          <td>disabled</td><td>Prevent mouse and keyboard activation</td><td>Boolean</td><td>false</td>
        </tr>
        </tbody>
      </table>
    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/button"

  export default {
    name: "DocButton",
    data() {
      return {
        sample,
        isLoading: true,
        showLockDemo: __LEAGUE_UI_LOCAL__,
        locking: false,
        locked: false,
        lockTimer: null,
        lockStatus: 'Ready to lock in'
      }
    },
    beforeDestroy() {
      clearTimeout(this.lockTimer)
    },
    methods: {
      lockChampion() {
        if (this.locking || this.locked) return
        this.locking = true
        this.lockStatus = 'Locking in Irelia'
        this.lockTimer = setTimeout(() => {
          this.lockTimer = null
          this.locking = false
          this.locked = true
          this.lockStatus = 'Irelia is locked in'
        }, 850)
      },
      resetLock() {
        clearTimeout(this.lockTimer)
        this.lockTimer = null
        this.locking = false
        this.locked = false
        this.lockStatus = 'Ready to lock in'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lock-demo {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    padding: clamp(1rem, 4vw, 2rem);
    color: #f0e6d2;
    border: 1px solid #74613d;
    background: radial-gradient(ellipse at top left, #20303c, #0a1119 65%);

    &__portrait {
      width: 6rem;
      height: 6rem;
      object-fit: cover;
      border: 1px solid #c8aa6e;
    }

    &__details > h2 {
      margin: 0 0 0.25rem;
      padding: 0;
      border: 0;
      font-family: Georgia, serif;
    }

    &__details > p { margin-bottom: 0.75rem; }

    &__actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;

      > .lol-button { margin: 0; }
    }
  }

  .doc-button {
    .samples {
      margin-bottom: 8px;
      .item {
        margin-right: 8px;
      }
    }
  }
</style>