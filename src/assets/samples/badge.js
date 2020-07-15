export default {
  basic: `
<lol-badge title="99+">
    <span>NUMBER</span>
</lol-badge>
<lol-badge title="NEW">
    <span>PROMOTION</span>
</lol-badge>`,
  dot: `
<lol-badge :is-dot="true">
    <span>DOT</span>
</lol-badge>
<lol-badge :is-dot="true">
    <span>PROMOTION</span>
</lol-badge>`,
  block: `
<div>
    <span>MESSAGE</span>
    <lol-badge title="NEW"></lol-badge>
</div>`
}