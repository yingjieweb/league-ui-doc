<template>
  <doc-post>
    <header class="author-profile">
      <div class="author-profile__crest">
        <img src="../assets/images/rock-song.jpg" alt="" width="104" height="104">
      </div>
      <div class="author-profile__intro">
        <h1>Rock Song</h1>
        <p class="author-profile__role">Creator of League UI</p>
        <p class="author-profile__story">I started League UI while learning frontend development. I loved playing League of Legends and wanted to bring a little of the game into the components I was learning to build.</p>
      </div>
    </header>
    <h2>Links</h2>
    <ul class="social-links">
      <li v-for="link in links" :key="link.title">
        <component
          :is="linkComponent"
          class="social-link"
          :href="link.url"
          :target="link.external ? '_blank' : null"
          :rel="link.external ? 'noopener noreferrer' : null"
        >
          <span class="social-link__label">
            <span>{{ link.title }}</span>
            <span aria-hidden="true">{{ link.external ? '↗' : '→' }}</span>
          </span>
        </component>
      </li>
    </ul>
    <p class="project-feedback">Found a bug or have an idea for League UI? <a href="https://github.com/yingjieweb/league-ui/issues">Open a GitHub issue</a>.</p>
  </doc-post>
</template>

<script>
export default {
  name: "DocSocial",
  data() {
    return {
      linkComponent: __LEAGUE_UI_LOCAL__ ? "lol-button" : "a",
      links: [
        { title: "Website", url: "https://yingjieweb.vercel.app/", external: true },
        { title: "GitHub", url: "https://github.com/yingjieweb", external: true },
        { title: "LinkedIn", url: "https://www.linkedin.com/in/yingjie-song-6155a4252/", external: true },
        { title: "Juejin", url: "https://juejin.cn/user/2576910988098888", external: true },
        { title: "CSDN", url: "https://yingjieweb.blog.csdn.net", external: true },
        { title: "Email", url: "mailto:yingjieweb@qq.com" },
      ],
    };
  },
};
</script>

<style scoped>
.author-profile {
  display: grid;
  grid-template-columns: 132px minmax(0, 1fr);
  align-items: center;
  gap: clamp(20px, 4vw, 40px);
  min-height: 252px;
  padding: clamp(24px, 4vw, 42px);
  border: 1px solid #675437;
  border-top-color: var(--site-gold);
  background:
    linear-gradient(90deg, #101a25 0%, rgba(16, 26, 37, 0.97) 48%, rgba(16, 26, 37, 0.65) 100%),
    url("../assets/images/bg.jpg") right 43% / cover no-repeat;
}

.author-profile__crest {
  position: relative;
  display: grid;
  place-items: center;
  width: 122px;
  height: 122px;
  border: 1px solid #7c6847;
  border-radius: 50%;
  background: #0a1018;
  box-shadow: 0 0 0 4px rgba(200, 170, 110, 0.11);
}

.author-profile__crest img {
  display: block;
  width: 104px;
  height: 104px;
  object-fit: cover;
  border: 1px solid var(--site-gold);
  border-radius: 50%;
}

.author-profile__crest::after {
  position: absolute;
  bottom: -4px;
  left: calc(50% - 4px);
  width: 8px;
  height: 8px;
  content: "";
  transform: rotate(45deg);
  background: var(--site-gold);
}

.author-profile .author-profile__intro h1 {
  margin: 0;
  padding: 0;
  border: 0;
  color: var(--site-text);
  font: 700 clamp(36px, 5vw, 62px)/1.05 var(--site-display);
  letter-spacing: -0.025em;
}

.author-profile .author-profile__role {
  margin: 7px 0 0;
  color: var(--site-gold);
  font-size: 14px;
  font-weight: 600;
}

.author-profile .author-profile__story {
  max-width: 46ch;
  margin: 14px 0 0;
  color: var(--site-muted);
}

.project-feedback { margin-top: 26px; }

@media (max-width: 600px) {
  .author-profile {
    grid-template-columns: minmax(0, 1fr);
    justify-items: start;
    background:
      linear-gradient(0deg, #101a25 5%, rgba(16, 26, 37, 0.76) 100%),
      url("../assets/images/bg.jpg") 68% center / cover no-repeat;
  }
}


.social-links {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 0;
  list-style: none;
}

.social-links li { margin: 0; }

@media (max-width: 1050px) {
  .social-links { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

.social-links li .social-link {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  min-height: 44px;
  height: 100%;
  color: var(--site-text);
  text-decoration: none;
}

.social-link:not(.lol-button) {
  align-items: center;
  padding: 0 15px;
  border: 1px solid var(--site-border);
  background: var(--site-panel);
}

.social-link ::v-deep .lol-button-content,
.social-link__label {
  flex: 1;
  min-width: 0;
}

.social-link__label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.social-link__label [aria-hidden] { color: var(--site-gold); }
</style>
