<template>
  <div class="doc-design">
    <doc-post>
      <h1>Design</h1>

      <!--Recommend Main Color-->
      <h2>Recommend Main Color</h2>
      <p>
        Since the background colors of League of Legends are monotonous, if you are developing your own projects using the League UI framework,
        you can also use the following colors to provide a consistent look and feel for the products you build.
      </p>
      <lol-row :gutter="20" class="color">
        <lol-col :span="6">
          <div class="col-item" style="background:#409EFF;">#409EFF</div>
        </lol-col>
        <lol-col :span="6">
          <div class="col-item" style="background:#53A8FF;">#53A8FF</div>
        </lol-col>
        <lol-col :span="6">
          <div class="col-item" style="background:#66B1FF;">#66B1FF</div>
        </lol-col>
        <lol-col :span="6">
          <div class="col-item" style="background:#79BBFF;">#79BBFF</div>
        </lol-col>
      </lol-row>
      <lol-row :gutter="20" class="color">
        <lol-col :span="6">
          <div class="col-item" style="background:#8CC5FF;">#8CC5FF</div>
        </lol-col>
        <lol-col :span="6">
          <div class="col-item" style="background:#A0CFFF;">#A0CFFF</div>
        </lol-col>
        <lol-col :span="6">
          <div class="col-item" style="background:#B3D8FF;">#B3D8FF</div>
        </lol-col>
        <lol-col :span="6">
          <div class="col-item" style="background:#C6E2FF;">#C6E2FF</div>
        </lol-col>
      </lol-row>

      <!--Recommend Auxiliary Color-->
      <h2>Recommend Auxiliary Color</h2>
      <p>Field views other than the main color need to be used in different scenarios (for example, dangerous colors for dangerous operations)</p>
      <lol-row :gutter="20" class="color">
        <lol-col :span="6">
          <div class="col-item" style="background: #33A03D;">#33A03D</div>
        </lol-col>
        <lol-col :span="6">
          <div class="col-item" style="background: #FFC429;">#FFC429</div>
        </lol-col>
        <lol-col :span="6">
          <div class="col-item" style="background: #DE4561;">#DE4561</div>
        </lol-col>
        <lol-col :span="6">
          <div class="col-item" style="background: #909399;">#909399</div>
        </lol-col>
      </lol-row>
      <lol-row :gutter="20" class="color">
        <lol-col :span="6">
          <div class="col-item" style="background: #F0F9EB;">#F0F9EB</div>
        </lol-col>
        <lol-col :span="6">
          <div class="col-item" style="background: #FAECD8;">#FAECD8</div>
        </lol-col>
        <lol-col :span="6">
          <div class="col-item" style="background: #FDE2E2;">#FDE2E2</div>
        </lol-col>
        <lol-col :span="6">
          <div class="col-item" style="background: #E9E9EB;">#E9E9EB</div>
        </lol-col>
      </lol-row>

      <h2>Background</h2>
      <p>If you want to develop your project with League UI components, you may need to add a background. Here's some examples.</p>
      <lol-row class="bg" :gutter="20">
        <lol-col :span="6" v-for="bg in background" :key="bg">
          <img :src="bg" alt="background img">
        </lol-col>
      </lol-row>
    </doc-post>
  </div>
</template>

<script>
  import {LolButton, LolRow, LolCol} from 'league-ui'
  import 'league-ui/dist/index.css'

  export default {
    name: "DocDesign",
    components: {
      'lol-button': LolButton,
      'lol-row': LolRow,
      'lol-col': LolCol,
    },
    data() {
      return {
        background: [
          require('../../assets/images/fizz.jpg'),
          require('../../assets/images/caitlyn.png'),
          require('../../assets/images/tristana.jpg'),
          require('../../assets/images/thresh.jpg'),
          require('../../assets/images/jarvanvi.jpg'),
          require('../../assets/images/nidalee.jpg'),
          require('../../assets/images/yuumi.jpg'),
          require('../../assets/images/lucian.jpg')
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .doc-design {
    .suit {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: $--color-white;
    }
    .color {
      margin-bottom: 10px;
      .col-item {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        height: 50px;
        color: white;
      }
    }
    .bg {
      img {
        width: 100%;
        border-radius: 4px;
      }
    }
  }
</style>