<template>
  <nav class="component-nav" aria-label="Component documentation">
    <div v-for="group in visibleGroups" :key="group.title" class="component-nav__group">
      <p>{{ group.title }}</p>
      <ul>
        <li v-for="link in group.links" :key="link.path">
          <router-link :to="link.path" exact @click.native="$emit('navigate')">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "DocNav",
  props: {
    showOverview: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    visibleGroups() {
      return this.showOverview ? this.groups : this.groups.slice(1);
    },
  },
  data() {
    return {
      groups: [
        { title: "Overview", links: [
          { title: "Get Started", path: "/start" },
          { title: "Design", path: "/components/design" },
        ] },
        { title: "Basics", links: [
          { title: "Button", path: "/components/button" },
          { title: "Icon", path: "/components/icon" },
          { title: "Badge", path: "/components/badge" },
        ] },
        { title: "Layout", links: [
          { title: "Grid", path: "/components/layout" },
          { title: "Container", path: "/components/container" },
        ] },
        { title: "Forms", links: [
          { title: "Input", path: "/components/input" },
          { title: "Cascader", path: "/components/cascader" },
        ] },
        { title: "Feedback", links: [
          { title: "Toast", path: "/components/toast" },
          { title: "Popover", path: "/components/popover" },
        ] },
        { title: "Navigation", links: [
          { title: "Tabs", path: "/components/tabs" },
          { title: "Collapse", path: "/components/collapse" },
        ] },
        { title: "League", links: [
          { title: "Hero", path: "/components/hero" },
        ] },
      ],
    };
  },
};
</script>

<style scoped>
.component-nav__group + .component-nav__group { margin-top: 18px; }

.component-nav__group p {
  margin: 0 0 5px 12px;
  color: var(--site-text);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.component-nav__group a {
  display: block;
  padding: 5px 10px;
  border-left: 2px solid transparent;
  color: var(--site-muted);
  font-size: 14px;
}

.component-nav__group a:hover,
.component-nav__group a.router-link-exact-active {
  color: var(--site-gold);
  background: var(--site-panel);
}

.component-nav__group a.router-link-exact-active { border-left-color: var(--site-gold); }
</style>
