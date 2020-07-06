<template>
  <div class="doc-collapse">
    <doc-post>
      <h1>Collapse</h1>

    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/collapse"
  import {LolCollapse} from 'league-ui'
  import 'league-ui/dist/index.css'

  export default {
    name: "DocCollapse",
    components: {
      'lol-collapse': LolCollapse
    },
    data() {
      return {
        sample
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>