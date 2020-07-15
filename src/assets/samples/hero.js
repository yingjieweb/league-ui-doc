export default {
  basic: `
<lol-hero hero="Annie"></lol-hero>
<lol-hero hero="Nidalee"></lol-hero>
<lol-hero hero="AurelionSol"></lol-hero>`,
  url: `
<lol-hero url="https://game.gtimg.cn/images/lol/act/img/champion/Vi.png"></lol-hero>
<lol-hero url="https://game.gtimg.cn/images/lol/act/img/champion/Poppy.png"></lol-hero>
<lol-hero url="https://game.gtimg.cn/images/lol/act/img/champion/Nidalee.png"></lol-hero>`,
  size: `
<lol-hero hero="Lucian" size="small"></lol-hero>
<lol-hero hero="Lucian" size="middle"></lol-hero>
<lol-hero hero="Lucian" size="large"></lol-hero>`,
  active: `
<lol-hero hero="JarvanIV" :is-active="false"></lol-hero>
<lol-hero hero="JarvanIV" :is-active="true"></lol-hero>`
}