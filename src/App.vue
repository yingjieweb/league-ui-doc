<template>
  <div id="app" @keydown.esc="closeMenu(true)">
    <a class="skip-link" href="#main-content" @click.prevent="$refs.main.focus()">Skip to content</a>
    <header class="site-header">
      <div class="site-header__inner">
        <router-link class="site-brand" to="/intro">
          <span class="site-brand__mark" aria-hidden="true"><span>L</span></span>
          <span>League UI</span>
        </router-link>
        <nav class="site-links" aria-label="Main navigation">
          <router-link to="/start" exact>Get Started</router-link>
          <router-link to="/components/design" :class="{ 'is-current': isComponentPage }">Components</router-link>
          <router-link to="/training" exact>Training</router-link>
        </nav>
        <a class="github-link" href="https://github.com/yingjieweb/league-ui">GitHub <span aria-hidden="true">↗</span></a>
        <button
          ref="menu"
          class="menu-toggle"
          type="button"
          aria-controls="mobile-menu"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          @click="menuOpen = !menuOpen"
        >{{ menuOpen ? 'Close' : 'Menu' }}</button>
      </div>
      <div v-if="menuOpen" id="mobile-menu" class="mobile-menu">
        <nav class="mobile-links" aria-label="Main navigation">
          <router-link to="/start" @click.native="closeMenu()">Get Started</router-link>
          <router-link to="/components/design" @click.native="closeMenu()">Components</router-link>
          <router-link to="/training" @click.native="closeMenu()">Training</router-link>
          <a href="https://github.com/yingjieweb/league-ui">GitHub ↗</a>
        </nav>
        <DocNav v-if="!isHome" @navigate="closeMenu()" />
      </div>
    </header>

    <div :class="{ 'docs-layout': !isHome }">
      <aside v-if="!isHome" class="docs-sidebar">
        <DocNav />
      </aside>
      <main id="main-content" ref="main" tabindex="-1" :class="{ 'docs-main': !isHome }">
        <router-view />
      </main>
    </div>

    <footer class="site-footer">
      <div>
        <router-link to="/intro">League UI</router-link>
        <p>An independent fan project featuring artwork by Riot Games. Riot Games does not endorse or sponsor it.</p>
      </div>
      <nav aria-label="More about League UI">
        <router-link to="/social">Social</router-link>
        <router-link to="/promotion">Promotion</router-link>
        <a href="https://github.com/yingjieweb/league-ui-doc">Docs source ↗</a>
      </nav>
    </footer>
  </div>
</template>

<script>
import DocNav from "./components/frame/DocNav";

export default {
  name: "App",
  components: { DocNav },
  data() {
    return { menuOpen: false };
  },
  computed: {
    isHome() {
      return this.$route.name === "intro";
    },
    isComponentPage() {
      return this.$route.path.startsWith("/components/");
    },
  },
  watch: {
    $route() {
      this.closeMenu();
    },
  },
  methods: {
    closeMenu(restoreFocus = false) {
      if (!this.menuOpen) return;
      this.menuOpen = false;
      this.$nextTick(() => {
        const target = restoreFocus ? this.$refs.menu : this.$refs.main;
        if (target) target.focus();
      });
    },
  },
};
</script>

<style lang="scss">
:root {
  --site-bg: #0a1018;
  --site-panel: #101a25;
  --site-text: #eee7d8;
  --site-muted: #aab6c4;
  --site-gold: #d5b77e;
  --site-border: #2d3b49;
  --site-display: "Cinzel", Georgia, serif;
  --site-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --site-header-height: 68px;
  --site-gutter: clamp(20px, 5vw, 72px);
}

body {
  background: var(--site-bg);
  color: var(--site-text);
  font-family: var(--site-sans);
  line-height: 1.6;
}

#app { min-height: 100vh; }
#app :focus-visible { outline: 2px solid #8de2e7; outline-offset: 4px; }
#main-content:focus { outline: none; }
#app [id] { scroll-margin-top: calc(var(--site-header-height) + 16px); }

.skip-link {
  position: fixed;
  top: 8px;
  left: 12px;
  z-index: 30;
  transform: translateY(-150%);
  padding: 8px 14px;
  background: var(--site-gold);
  color: var(--site-bg);

  &:focus { transform: none; }
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #0a1018;
  border-bottom: 1px solid #41382b;
}

.site-header__inner {
  min-height: var(--site-header-height);
  max-width: 1600px;
  margin: auto;
  padding: 0 var(--site-gutter);
  display: flex;
  align-items: center;
  gap: clamp(24px, 5vw, 76px);
}

.site-brand {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  color: var(--site-text);
  white-space: nowrap;
  font: 700 19px var(--site-display);
  letter-spacing: 0.06em;
}

.site-brand__mark {
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  border: 1px solid var(--site-gold);
  color: var(--site-gold);
  transform: rotate(45deg);

  > span { transform: rotate(-45deg); font-size: 15px; }
}

.site-links {
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    display: flex;
    align-items: center;
    min-height: var(--site-header-height);
    border-bottom: 2px solid transparent;
    color: var(--site-muted);
    font-size: 13px;
    font-weight: 600;

    &:hover, &.router-link-exact-active, &.is-current {
      color: var(--site-gold);
      border-bottom-color: var(--site-gold);
    }
  }
}

.github-link {
  margin-left: auto;
  white-space: nowrap;
  color: var(--site-text);
  font-size: 13px;
  &:hover { color: var(--site-gold); }
}

.menu-toggle, .mobile-menu { display: none; }

.docs-layout {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  max-width: 1450px;
  margin: auto;
  min-height: 72vh;
  padding: 0 var(--site-gutter);
}

.docs-sidebar {
  position: sticky;
  align-self: start;
  top: var(--site-header-height);
  max-height: calc(100vh - var(--site-header-height));
  overflow: auto;
  padding: 28px 18px 32px 0;
}

.docs-main {
  min-width: 0;
  padding: 48px clamp(22px, 5vw, 84px) 64px;
  border-left: 1px solid var(--site-border);
}

.site-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px 36px;
  padding: 28px var(--site-gutter);
  border-top: 1px solid var(--site-border);
  color: var(--site-muted);
  font-size: 13px;

  a { color: var(--site-text); }
  a:hover { color: var(--site-gold); }
  p { margin-top: 5px; }
  nav { display: flex; flex-wrap: wrap; gap: 20px; }
}

@media (max-width: 820px) {
  :root { --site-header-height: 60px; }
  .site-links, .github-link, .docs-sidebar { display: none; }
  .menu-toggle {
    display: block;
    margin-left: auto;
    padding: 8px 14px;
    border: 1px solid var(--site-border);
    background: var(--site-panel);
    color: var(--site-text);
    font: inherit;
    cursor: pointer;
  }
  .mobile-menu {
    display: block;
    max-height: calc(100vh - var(--site-header-height));
    overflow: auto;
    padding: 18px var(--site-gutter) 24px;
    border-top: 1px solid var(--site-border);
  }
  .mobile-links {
    display: grid;
    gap: 4px;

    a { padding: 6px 10px; color: var(--site-text); }
    a:hover, a.router-link-exact-active { color: var(--site-gold); }
  }
  .mobile-menu .component-nav { margin-top: 18px; }
  .docs-layout { display: block; }
  .docs-main { padding: 32px 0 48px; border: 0; }
}
</style>
