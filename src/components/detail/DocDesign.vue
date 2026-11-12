<template>
  <div class="doc-design">
    <doc-post>
      <h1>Design</h1>

      <p>League UI pairs dark blue surfaces with warm text and gold accents. Use brighter colors for focus and status so those states stand out.</p>

      <section v-for="group in palettes" :key="group.title" class="palette">
        <h2>{{ group.title }}</h2>
        <p>{{ group.description }}</p>
        <ul class="palette-grid">
          <li v-for="color in group.colors" :key="color.name" class="palette-card">
            <div class="palette-swatch" :style="{ backgroundColor: color.value }" aria-hidden="true"></div>
            <div class="palette-label">
              <span>{{ color.name }}</span>
              <code>{{ color.value }}</code>
            </div>
          </li>
        </ul>
      </section>

      <h2>Background</h2>
      <p>Champion artwork works well on landing pages and in previews. Keep text and controls on a solid surface or use a dark overlay for readability.</p>
      <lol-row class="bg" :gutter="20">
        <lol-col :span="6" v-for="bg in background" :key="bg">
          <img :src="bg" alt="background img">
        </lol-col>
      </lol-row>
    </doc-post>
  </div>
</template>

<script>
  export default {
    name: "DocDesign",
    data() {
      return {
        palettes: [
          {
            title: "Site Palette",
            description: "Use navy for page and panel surfaces, ivory for text, and gold for selected navigation and primary links.",
            colors: [
              { name: "Page", value: "#0A1018" },
              { name: "Panel", value: "#101A25" },
              { name: "Border", value: "#2D3B49" },
              { name: "Text", value: "#EEE7D8" },
              { name: "Muted Text", value: "#AAB6C4" },
              { name: "Gold", value: "#D5B77E" },
            ],
          },
          {
            title: "Interaction Colors",
            description: "Use gold to emphasize primary actions and cyan to indicate keyboard focus. Pair status colors with a label or icon so their meaning is clear.",
            colors: [
              { name: "Primary Action", value: "#C8AA6E" },
              { name: "Success", value: "#6FA991" },
              { name: "Warning", value: "#D89450" },
              { name: "Danger", value: "#C8777E" },
              { name: "Info", value: "#7494AB" },
              { name: "Focus", value: "#87E4EB" },
            ],
          },
        ],
        background: [
          require('../../assets/images/fizz.jpg'),
          require('../../assets/images/caitlyn.png'),
          require('../../assets/images/tristana.jpg'),
          require('../../assets/images/thresh.jpg'),
          require('../../assets/images/jarvanvi.jpg'),
          require('../../assets/images/nidalee.jpg'),
          require('../../assets/images/yuumi.jpg'),
          require('../../assets/images/irelia.jpg')
        ]
      }
    }
  }
</script>

<style scoped>
.palette {
  margin: 32px 0;
}

.palette h2 {
  font: 700 clamp(23px, 3vw, 30px)/1.25 var(--site-display);
  border-bottom-color: var(--site-border);
}

.palette p { color: var(--site-muted); }

.palette ul.palette-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 0;
  list-style: none;
}

.palette-grid .palette-card {
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--site-border);
  border-radius: 4px;
  background: var(--site-panel);
}

.palette-swatch { height: 52px; border-bottom: 1px solid var(--site-border); }

.palette-label {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 2px 10px;
  padding: 9px 12px;
  font-size: 13px;
}

.bg img { width: 100%; border-radius: 4px; }

@media (max-width: 1000px) {
  .palette ul.palette-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
</style>
