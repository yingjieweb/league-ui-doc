<template>
  <div class="doc-icon">
    <doc-post>
      <h1>Icon</h1>

    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/icon"
  import {LolIcon} from 'league-ui'
  import 'league-ui/dist/index.css'


  export default {
    name: "DocIcon",
    components: {
      'lol-icon': LolIcon
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