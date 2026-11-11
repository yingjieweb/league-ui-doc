<template>
  <div class="doc-intro">
    <section class="intro-hero" aria-labelledby="intro-title">
      <div class="intro-hero__art" aria-hidden="true"></div>
      <div class="intro-hero__inner">
        <div class="intro-hero__copy">
          <h1 id="intro-title">League UI</h1>
          <p>An open source Vue component library inspired by League of Legends.</p>
          <div class="intro-hero__actions">
            <router-link class="intro-action intro-action--primary" to="/start">Get Started <span aria-hidden="true">→</span></router-link>
            <router-link class="intro-action" to="/components/design">Browse Components</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="intro-components" aria-labelledby="intro-components-title">
      <header>
        <h2 id="intro-components-title">Explore the components</h2>
        <router-link to="/components/design">View all <span aria-hidden="true">→</span></router-link>
      </header>
      <div class="intro-grid">
        <router-link v-for="feature in features" :key="feature.path" :to="feature.path" class="intro-card">
          <div
            class="intro-card__art"
            :style="{ backgroundImage: 'url(' + feature.image + ')', backgroundPosition: feature.imagePosition }"
            aria-hidden="true"
          ></div>
          <div class="intro-card__copy">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
          <span class="intro-card__arrow" aria-hidden="true">↗</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import irelia from "../assets/images/irelia.jpg";
import thresh from "../assets/images/thresh.jpg";
import jarvan from "../assets/images/jarvanvi.jpg";

export default {
  name: "DocIntro",
  data() {
    return {
      features: [
        {
          title: "Hero",
          description: "Show champion portraits and selection states.",
          path: "/components/hero",
          image: irelia,
          imagePosition: "center 12%",
        },
        { title: "Button", description: "Explore variants, icons, and loading states.", path: "/components/button", image: jarvan },
        { title: "Popover", description: "Reveal contextual content beside a trigger.", path: "/components/popover", image: thresh },
      ],
    };
  },
};
</script>

<style scoped>
.intro-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: #0b121d;
  border-bottom: 1px solid #55442e;
}

.intro-hero__art {
  position: absolute;
  z-index: -1;
  inset: 0 0 0 21%;
  background:
    linear-gradient(90deg, #0b121d, rgba(11, 18, 29, 0.75) 18%, transparent 57%),
    linear-gradient(0deg, rgba(11, 18, 29, 0.76), transparent 40%),
    url("../assets/images/nidalee.jpg") right 34% / cover no-repeat;
}

.intro-hero__inner {
  display: flex;
  align-items: center;
  min-height: clamp(440px, 43vw, 660px);
  max-width: 1600px;
  margin: auto;
  padding: 60px var(--site-gutter);
}

.intro-hero__copy { max-width: 590px; }

.intro-hero h1 {
  font: 700 clamp(54px, 7.5vw, 116px)/0.98 var(--site-display);
  letter-spacing: -0.045em;
  text-shadow: 0 4px 30px #080d16;
}

.intro-hero p {
  max-width: 360px;
  margin-top: 23px;
  color: #d2d7df;
  font-size: clamp(16px, 1.5vw, 19px);
  line-height: 1.65;
}

.intro-hero__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }

.intro-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 11px 17px;
  border: 1px solid #a28659;
  background: #101a25;
  color: var(--site-text);
  font-size: 13px;
  font-weight: 700;
}

.intro-action:hover { border-color: #f3d597; background: #202f3b; }
.intro-action--primary { background: #d5b77e; border-color: #d5b77e; color: #17130e; }
.intro-action--primary:hover { background: #f3d597; }

.intro-components {
  max-width: 1600px;
  margin: auto;
  padding: clamp(32px, 4.5vw, 65px) var(--site-gutter);
}

.intro-components header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 21px;
}

.intro-components h2 { font: 700 clamp(23px, 3vw, 36px)/1.2 var(--site-display); }
.intro-components header a { color: var(--site-gold); font-size: 14px; }

.intro-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }

.intro-card {
  position: relative;
  overflow: hidden;
  min-width: 0;
  border: 1px solid var(--site-border);
  background: var(--site-panel);
  color: var(--site-text);
}

.intro-card:hover, .intro-card:focus-visible { border-color: var(--site-gold); }
.intro-card__art { height: clamp(112px, 13vw, 190px); background-size: cover; background-position: center 32%; }
.intro-card__copy { padding: 15px 32px 17px 16px; }
.intro-card h3 { font: 700 21px/1.2 var(--site-display); }
.intro-card p { margin-top: 6px; color: var(--site-muted); font-size: 13px; }
.intro-card__arrow { position: absolute; right: 15px; bottom: 17px; color: var(--site-gold); }

@media (max-width: 680px) {
  .intro-hero__inner { align-items: end; min-height: 530px; padding-top: 245px; padding-bottom: 33px; }
  .intro-hero__art {
    inset: 0;
    background:
      linear-gradient(0deg, #0b121d 8%, rgba(11, 18, 29, 0.88) 32%, transparent 75%),
      url("../assets/images/nidalee.jpg") 78% top / auto 380px no-repeat;
  }
  .intro-hero p { margin-top: 14px; }
  .intro-hero__actions { margin-top: 21px; }
  .intro-grid { grid-template-columns: 1fr; }
  .intro-card__art { height: 145px; }
}
</style>
