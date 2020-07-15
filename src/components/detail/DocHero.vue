<template>
  <div class="doc-hero">
    <doc-post>
      <h1>Hero</h1>
      <p>You can use this component to make your hero list!</p>
      <h2>Basic</h2>
      <div class="sample">
        <p>You are selecting <strong>{{selected}}</strong></p>
        <div style="display: flex; flex-shrink: 0; flex-wrap: wrap;">
          <lol-hero class="hero-item" @click="onClick(hero)" :is-active="hero === selected" v-for="hero in heroes" :key="hero" :hero="hero"></lol-hero>
        </div>
      </div>
      <p>Hero names could be: </p>
      <p><strong>{{heroes.join(', ')}}</strong></p>
      <pre>
        <code class="html">{{sample.basic}}</code>
      </pre>

      <h2>Url</h2>
      <p>You can also use your own image by setting <code>url</code>.</p>
      <div class="sample">
        <lol-hero url="https://game.gtimg.cn/images/lol/act/img/champion/Vi.png"></lol-hero>
        <lol-hero url="https://game.gtimg.cn/images/lol/act/img/champion/Poppy.png"></lol-hero>
        <lol-hero url="https://game.gtimg.cn/images/lol/act/img/champion/Nidalee.png"></lol-hero>
      </div>
      <pre>
        <code class="html">{{sample.url}}</code>
      </pre>

      <h2>Size</h2>
      <p>This component providers <strong>small</strong>, <strong>middle(default)</strong> and <strong>large</strong> sizes.</p>
      <div class="sample">
        <lol-hero hero="Lucian" size="small"></lol-hero>
        <lol-hero hero="Lucian" size="middle"></lol-hero>
        <lol-hero hero="Lucian" size="large"></lol-hero>
      </div>
      <pre>
        <code class="html">{{sample.size}}</code>
      </pre>

      <h2>Active</h2>
      <p>Using <code>isActive</code> to set if it's active.</p>
      <div class="sample">
        <lol-hero hero="JarvanIV" :is-active="false"></lol-hero>
        <lol-hero style="margin-left: 14px;" hero="JarvanIV" :is-active="true"></lol-hero>
      </div>
      <pre>
        <code class="html">{{sample.active}}</code>
      </pre>

      <!--Properties-->
      <h2>Properties</h2>
      <table>
        <thead>
        <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
        </thead>
        <tbody>
        <tr>
          <td>hero</td><td>Hero name</td><td>String</td><td>-</td>
        </tr>
        <tr>
          <td>url</td><td>Url of custom image</td><td>String</td><td>-</td>
        </tr>
        <tr>
          <td>size</td><td>Set size</td><td>String</td><td>"middle"</td>
        </tr>
        <tr>
          <td>is-active</td><td>Define if it's active</td><td>Boolean</td><td>false</td>
        </tr>
        </tbody>
      </table>
    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/hero"
  export default {
    name: "DocHero",
    data() {
      return {
        sample,
        selected: 'Annie',
        heroes: ['Annie', 'Olaf', 'Galio', 'TwistedFate', 'XinZhao', 'Urgot', 'Leblanc', 'Vladimir', 'FiddleSticks', 'Kayle', 'MasterYi', 'Alistar', 'Ryze',
          'Sion', 'Sivir', 'Soraka', 'Teemo', 'Tristana', 'Warwick', 'Nunu', 'MissFortune', 'Ashe', 'Tryndamere', 'Jax', 'Morgana', 'Zilean',
          'Singed', 'Evelynn', 'Twitch', 'Karthus', 'Chogath', 'Amumu', 'Rammus', 'Anivia', 'Shaco', 'DrMundo', 'Sona', 'Kassadin', 'Irelia',
          'Janna', 'Gangplank', 'Corki', 'Karma', 'Taric', 'Veigar', 'Trundle', 'Swain', 'Caitlyn', 'Blitzcrank', 'Malphite', 'Katarina', 'Nocturne',
          'Maokai', 'Renekton', 'JarvanIV', 'Elise', 'Orianna', 'MonkeyKing', 'Brand', 'LeeSin', 'Vayne', 'Rumble', 'Cassiopeia', 'Skarner', 'Heimerdinger',
          'Nasus', 'Nidalee', 'Udyr', 'Poppy', 'Gragas', 'Pantheon', 'Ezreal', 'Mordekaiser', 'Yorick', 'Akali', 'Kennen', 'Garen', 'Leona',
          'Malzahar', 'Talon', 'Riven', 'KogMaw', 'Shen', 'Lux', 'Xerath', 'Shyvana', 'Ahri', 'Graves', 'Fizz', 'Volibear', 'Rengar',
          'Varus', 'Nautilus', 'Viktor', 'Sejuani', 'Fiora', 'Ziggs', 'Lulu', 'Draven', 'Hecarim', 'Khazix', 'Darius', 'Jayce', 'Lissandra',
          'Diana', 'Quinn', 'Syndra', 'AurelionSol', 'Kayn', 'Zoe', 'Zyra', 'Kaisa', 'Gnar', 'Zac', 'Yasuo', 'Velkoz', 'Taliyah',
          'Camille', 'Braum', 'Jhin', 'Kindred', 'Jinx', 'TahmKench', 'Senna', 'Lucian', 'Zed', 'Kled', 'Ekko', 'Qiyana', 'Vi',
          'Aatrox', 'Nami', 'Azir', 'Yuumi', 'Thresh', 'Illaoi', 'RekSai', 'Ivern', 'Kalista', 'Bard', 'Rakan', 'Xayah', 'Ornn',
          'Sylas', 'Neeko', 'Aphelios', 'Pyke', 'Sett']
      }
    },
    methods: {
      onClick(hero) {
        this.selected = hero
      }
    }
  }
</script>

<style lang="scss" scoped>
  .doc-hero {
    .hero-item {
      margin: 8px 4px;
    }
  }
</style>